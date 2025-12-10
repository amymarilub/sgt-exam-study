// ========================================
// GLOBAL STATE
// ========================================
let currentMode = 'dashboard';
let currentQuestionIndex = 0;
let quizAnswers = [];
let selectedVoice = null;
let studyData = {
    questionsStudied: 0,
    correctAnswers: 0,
    totalAttempts: 0,
    highlights: [],
    studyStreak: 0,
    examDate: '2026-04-23',
    documentsRead: [], // Array of document indices that have been opened
    quizzesCompleted: {}, // Object: {docIndex: {completed: true, score: 85}}
    studyPlan: [], // Array of study plan items with completion status
    notes: {}, // Object: {documentIndex: [{text: "note", timestamp: "..."}]}
    flashcardProgress: {} // Object: {cardId: {correct: 0, incorrect: 0, lastSeen: "..."}}
};

// ========================================
// DATA PERSISTENCE
// ========================================
function loadData() {
    const saved = localStorage.getItem('sgtStudyData');
    if (saved) {
        studyData = JSON.parse(saved);
        updateDashboard();
    }
}

function saveData() {
    localStorage.setItem('sgtStudyData', JSON.stringify(studyData));
    updateDashboard();
}

// ========================================
// DASHBOARD
// ========================================
function updateDashboard() {
    document.getElementById('totalStudied').textContent = studyData.questionsStudied;
    const accuracy = studyData.totalAttempts > 0 
        ? Math.round((studyData.correctAnswers / studyData.totalAttempts) * 100) 
        : 0;
    document.getElementById('accuracy').textContent = accuracy + '%';
    document.getElementById('totalHighlights').textContent = studyData.highlights.length;
    document.getElementById('studyStreak').textContent = studyData.studyStreak;
    
    // Update exam countdown
    updateExamCountdown();
    
    // Update study plan
    updateStudyPlan();
    
    // Update recommended next steps
    updateRecommendedSteps();
}

// Calculate days until exam
function updateExamCountdown() {
    const examDate = new Date('2026-04-23T00:00:00'); // Explicit format
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate day counting
    
    const diffTime = examDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const daysElement = document.getElementById('daysUntilExam');
    const countdownElement = document.getElementById('examCountdown');
    
    if (!daysElement || !countdownElement) return; // Safety check
    
    daysElement.textContent = diffDays > 0 ? diffDays : 0;
    
    // Add urgent styling if less than 30 days
    if (diffDays <= 30 && diffDays > 0) {
        countdownElement.classList.add('urgent');
    } else {
        countdownElement.classList.remove('urgent');
    }
}

// Update study plan progress
function updateStudyPlan() {
    const container = document.getElementById('studyPlanProgress');
    
    if (typeof STUDY_DOCUMENTS === 'undefined' || STUDY_DOCUMENTS.length === 0) {
        container.innerHTML = '<p style="color: #999;">Loading study materials...</p>';
        return;
    }
    
    let html = '';
    
    STUDY_DOCUMENTS.forEach((doc, index) => {
        // Skip "coming soon" documents
        if (doc.title.includes('Coming Soon')) return;
        
        // Calculate progress for this document
        const isRead = studyData.documentsRead.includes(index);
        const quizData = studyData.quizzesCompleted[index];
        const hasQuiz = quizData && quizData.completed;
        const quizScore = hasQuiz ? quizData.score : 0;
        
        // Calculate percentage (50% for reading, 50% for quiz)
        let percentage = 0;
        if (isRead) percentage += 50;
        if (hasQuiz) percentage += 50;
        
        const isComplete = percentage === 100;
        
        html += `
            <div class="document-progress">
                <div class="document-progress-header">
                    <span class="document-title">${doc.title}</span>
                    <span class="progress-percentage">${percentage}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill ${isComplete ? 'complete' : ''}" style="width: ${percentage}%"></div>
                </div>
                <div class="section-items">
                    <div class="section-item ${isRead ? 'completed' : ''}">
                        <span class="status-icon">${isRead ? '✅' : '⏳'}</span>
                        <span class="item-text">Read Document</span>
                    </div>
                    <div class="section-item ${hasQuiz ? 'completed' : ''}">
                        <span class="status-icon">${hasQuiz ? '✅' : '🔒'}</span>
                        <span class="item-text">Complete Quiz</span>
                        ${hasQuiz ? `<span class="score">${quizScore}%</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    });
    
    if (html === '') {
        html = '<p style="color: #999;">Study materials will be added in January 2026</p>';
    }
    
    container.innerHTML = html;
}

// Update recommended next steps
function updateRecommendedSteps() {
    const container = document.getElementById('nextStepsList');
    const steps = [];
    
    if (typeof STUDY_DOCUMENTS === 'undefined' || STUDY_DOCUMENTS.length === 0) {
        container.innerHTML = '<p style="color: #999;">Recommendations will appear when materials are loaded</p>';
        return;
    }
    
    // Find first unread document
    let firstUnread = null;
    STUDY_DOCUMENTS.forEach((doc, index) => {
        if (!doc.title.includes('Coming Soon') && !studyData.documentsRead.includes(index)) {
            if (firstUnread === null) firstUnread = index;
        }
    });
    
    // Find documents that are read but quiz not completed
    let firstUnquizzed = null;
    STUDY_DOCUMENTS.forEach((doc, index) => {
        if (!doc.title.includes('Coming Soon') && 
            studyData.documentsRead.includes(index) && 
            (!studyData.quizzesCompleted[index] || !studyData.quizzesCompleted[index].completed)) {
            if (firstUnquizzed === null) firstUnquizzed = index;
        }
    });
    
    // Check for red highlights to review
    const redHighlights = studyData.highlights.filter(h => h.color === 'red');
    
    // Build recommendations
    if (firstUnread !== null) {
        steps.push({
            icon: '📖',
            text: `Start reading: ${STUDY_DOCUMENTS[firstUnread].title}`,
            action: () => loadDocument(firstUnread)
        });
    }
    
    if (firstUnquizzed !== null) {
        steps.push({
            icon: '❓',
            text: `Take quiz: ${STUDY_DOCUMENTS[firstUnquizzed].title}`,
            action: () => {
                document.querySelector('[data-mode="quiz"]').click();
            }
        });
    }
    
    if (redHighlights.length > 0) {
        steps.push({
            icon: '🔴',
            text: `Review ${redHighlights.length} struggling topic${redHighlights.length > 1 ? 's' : ''} (red highlights)`,
            action: () => {
                document.querySelector('[data-mode="review"]').click();
            }
        });
    }
    
    // If low quiz accuracy, suggest retaking
    if (studyData.totalAttempts > 0) {
        const accuracy = Math.round((studyData.correctAnswers / studyData.totalAttempts) * 100);
        if (accuracy < 80) {
            steps.push({
                icon: '🎯',
                text: `Improve quiz accuracy (currently ${accuracy}%) - retake quizzes`,
                action: () => {
                    document.querySelector('[data-mode="quiz"]').click();
                }
            });
        }
    }
    
    // If everything is done
    if (steps.length === 0) {
        steps.push({
            icon: '🎉',
            text: 'Great job! Review your red highlights or retake quizzes to maintain knowledge',
            action: () => {
                document.querySelector('[data-mode="review"]').click();
            }
        });
    }
    
    // Render steps
    container.innerHTML = steps.map((step, i) => `
        <div class="next-step" onclick="executeNextStep(${i})">
            <span class="next-step-icon">${step.icon}</span>
            <span class="next-step-text">${step.text}</span>
        </div>
    `).join('');
    
    // Store steps for onclick handlers
    window.nextSteps = steps;
}

// Execute next step action
function executeNextStep(index) {
    if (window.nextSteps && window.nextSteps[index]) {
        window.nextSteps[index].action();
    }
}

// Load specific document
function loadDocument(index) {
    document.querySelector('[data-mode="study"]').click();
    document.getElementById('documentSelect').value = index;
    document.getElementById('documentSelect').dispatchEvent(new Event('change'));
}

// ========================================
// MODE SWITCHING
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.mode-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.mode-content').forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            const mode = tab.dataset.mode;
            document.getElementById(mode).classList.add('active');
            currentMode = mode;

            if (mode === 'quiz') {
                loadQuiz();
            } else if (mode === 'review') {
                loadReview();
            }
        });
    });

    // Initialize
    loadData();
    populateDocuments();
    populateVoices();
    setupFloatingToolbar();
    setupSearch();
});

// ========================================
// DOCUMENT LOADING
// ========================================
function populateDocuments() {
    const select = document.getElementById('documentSelect');
    if (typeof STUDY_DOCUMENTS !== 'undefined') {
        STUDY_DOCUMENTS.forEach((doc, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = doc.title;
            select.appendChild(option);
        });
    }
}

document.getElementById('documentSelect').addEventListener('change', (e) => {
    const docIndex = e.target.value;
    if (docIndex === '') return;

    const doc = STUDY_DOCUMENTS[docIndex];
    const content = document.getElementById('documentContent');
    
    // Mark document as read
    const index = parseInt(docIndex);
    if (!studyData.documentsRead.includes(index)) {
        studyData.documentsRead.push(index);
        saveData();
    }
    
    // Build summary HTML if summary exists
    let summaryHTML = '';
    if (doc.summary && doc.summary.keyTimeframes && doc.summary.keyTimeframes[0] !== 'Content will be added when materials are available') {
        summaryHTML = `
            <div class="document-summary">
                <div class="summary-header" onclick="toggleSummary()">
                    <h3>📌 QUICK SUMMARY - Study This First!</h3>
                    <button class="summary-toggle" id="summaryToggle">Hide Summary</button>
                </div>
                <div class="summary-content" id="summaryContent">
                    ${doc.summary.keyTimeframes.length > 0 ? `
                    <div class="summary-section must-know">
                        <h4>⏱️ KEY TIMEFRAMES (MEMORIZE THESE!)</h4>
                        <ul>
                            ${doc.summary.keyTimeframes.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                    
                    ${doc.summary.whoInvestigates.length > 0 ? `
                    <div class="summary-section">
                        <h4>👮 WHO INVESTIGATES</h4>
                        <ul>
                            ${doc.summary.whoInvestigates.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                    
                    ${doc.summary.complaintTypes.length > 0 ? `
                    <div class="summary-section">
                        <h4>📋 TYPES OF COMPLAINTS</h4>
                        <ul>
                            ${doc.summary.complaintTypes.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                    
                    ${doc.summary.testableDefinitions.length > 0 ? `
                    <div class="summary-section">
                        <h4>📖 TESTABLE DEFINITIONS</h4>
                        <ul>
                            ${doc.summary.testableDefinitions.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                    
                    ${doc.summary.mostTestedTopics.length > 0 ? `
                    <div class="summary-section must-know">
                        <h4>🎯 MOST TESTED ON EXAMS</h4>
                        <ul>
                            ${doc.summary.mostTestedTopics.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                    
                    ${doc.summary.commonExamTraps.length > 0 ? `
                    <div class="summary-section exam-traps">
                        <h4>⚠️ COMMON EXAM TRAPS - DON'T GET CAUGHT!</h4>
                        <ul>
                            ${doc.summary.commonExamTraps.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                </div>
                <div class="summary-divider"></div>
            </div>
        `;
    }
    
    content.innerHTML = `<h2>${doc.title}</h2>${summaryHTML}${doc.content}`;
    
    // Clear search results when loading new document
    const searchResults = document.getElementById('searchResults');
    searchResults.classList.remove('active');
    searchResults.innerHTML = '';
});

// Toggle summary visibility
function toggleSummary() {
    const content = document.getElementById('summaryContent');
    const button = document.getElementById('summaryToggle');
    
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        button.textContent = 'Hide Summary';
    } else {
        content.classList.add('collapsed');
        button.textContent = 'Show Summary';
    }
}

// ========================================
// KEYWORD SEARCH
// ========================================
function setupSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function performSearch() {
    const keyword = document.getElementById('searchInput').value.trim();
    const content = document.getElementById('documentContent');
    const resultsContainer = document.getElementById('searchResults');
    
    if (!keyword) {
        alert('Please enter a search term');
        return;
    }
    
    if (!content.textContent || content.textContent === 'Select a document to begin studying...') {
        alert('Please select a document first');
        return;
    }
    
    // Get all text nodes and search for keyword
    const results = [];
    const walker = document.createTreeWalker(
        content,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    let node;
    while (node = walker.nextNode()) {
        const text = node.textContent;
        const lowerText = text.toLowerCase();
        const lowerKeyword = keyword.toLowerCase();
        let index = lowerText.indexOf(lowerKeyword);
        
        while (index !== -1) {
            // Get context around the keyword (50 chars before and after)
            const start = Math.max(0, index - 50);
            const end = Math.min(text.length, index + keyword.length + 50);
            const snippet = text.substring(start, end);
            
            results.push({
                snippet: snippet,
                fullText: text,
                node: node,
                index: index
            });
            
            index = lowerText.indexOf(lowerKeyword, index + 1);
        }
    }
    
    // Display results
    displaySearchResults(results, keyword);
}

function displaySearchResults(results, keyword) {
    const resultsContainer = document.getElementById('searchResults');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p style="color: #999;">No results found for "' + keyword + '"</p>';
        resultsContainer.classList.add('active');
        return;
    }
    
    resultsContainer.innerHTML = `
        <p style="color: #ff8c42; font-weight: 600; margin-bottom: 10px;">
            Found ${results.length} result${results.length > 1 ? 's' : ''} for "${keyword}"
        </p>
        ${results.map((result, i) => {
            const highlightedSnippet = result.snippet.replace(
                new RegExp(keyword, 'gi'),
                match => `<span class="search-highlight">${match}</span>`
            );
            return `
                <div class="search-result-item" onclick="scrollToResult(${i})">
                    <div class="search-result-text">...${highlightedSnippet}...</div>
                </div>
            `;
        }).join('')}
    `;
    resultsContainer.classList.add('active');
    
    // Store results for scrolling
    window.searchResults = results;
}

function scrollToResult(index) {
    const result = window.searchResults[index];
    const content = document.getElementById('documentContent');
    
    // Find the parent element to scroll to
    let element = result.node.parentElement;
    while (element && element !== content) {
        if (element.offsetTop) {
            content.scrollTop = element.offsetTop - 100;
            
            // Temporarily highlight the found text
            element.style.backgroundColor = 'rgba(255, 140, 66, 0.3)';
            setTimeout(() => {
                element.style.backgroundColor = '';
            }, 2000);
            break;
        }
        element = element.parentElement;
    }
}

// ========================================
// FLOATING HIGHLIGHT TOOLBAR
// ========================================
function setupFloatingToolbar() {
    const toolbar = document.getElementById('floatingToolbar');
    const content = document.getElementById('documentContent');
    
    // Show toolbar when text is selected
    document.addEventListener('mouseup', (e) => {
        const selection = window.getSelection();
        
        // Only show toolbar if in study mode and text is selected within document content
        if (currentMode !== 'study' || 
            !selection.rangeCount || 
            selection.isCollapsed || 
            !content.contains(selection.anchorNode)) {
            toolbar.classList.remove('active');
            return;
        }
        
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        // Position toolbar above selection
        toolbar.style.left = rect.left + window.scrollX + (rect.width / 2) - (toolbar.offsetWidth / 2) + 'px';
        toolbar.style.top = rect.top + window.scrollY - toolbar.offsetHeight - 10 + 'px';
        
        toolbar.classList.add('active');
    });
    
    // Hide toolbar when clicking outside
    document.addEventListener('mousedown', (e) => {
        if (!toolbar.contains(e.target) && e.target !== toolbar) {
            // Small delay to allow button clicks to register
            setTimeout(() => {
                const selection = window.getSelection();
                if (selection.isCollapsed) {
                    toolbar.classList.remove('active');
                }
            }, 100);
        }
    });
}

function highlightSelection(color) {
    const selection = window.getSelection();
    if (!selection.rangeCount || selection.isCollapsed) {
        return;
    }

    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.className = `highlight-${color}`;
    
    try {
        range.surroundContents(span);
        
        // Save highlight
        studyData.highlights.push({
            text: selection.toString(),
            color: color,
            timestamp: new Date().toISOString()
        });
        saveData();
        
        // Hide toolbar and clear selection
        document.getElementById('floatingToolbar').classList.remove('active');
        selection.removeAllRanges();
    } catch (e) {
        alert('Cannot highlight across different sections. Please select text within a single paragraph.');
    }
}

function clearHighlight() {
    const selection = window.getSelection();
    if (!selection.rangeCount || selection.isCollapsed) {
        alert('Please select highlighted text to clear!');
        return;
    }
    
    const range = selection.getRangeAt(0);
    const container = range.commonAncestorContainer.parentElement;
    
    if (container.classList && 
        (container.classList.contains('highlight-yellow') ||
         container.classList.contains('highlight-red') ||
         container.classList.contains('highlight-green') ||
         container.classList.contains('highlight-blue'))) {
        
        const text = container.textContent;
        container.replaceWith(text);
        
        // Remove from saved highlights
        studyData.highlights = studyData.highlights.filter(h => h.text !== text);
        saveData();
        
        // Hide toolbar
        document.getElementById('floatingToolbar').classList.remove('active');
    }
    
    selection.removeAllRanges();
}

// ========================================
// TEXT-TO-SPEECH
// ========================================
function populateVoices() {
    const voices = speechSynthesis.getVoices();
    const select = document.getElementById('voiceSelect');
    
    select.innerHTML = '<option value="">Default Voice</option>';
    
    // Filter for quality English voices only
    const goodVoices = voices.filter(voice => 
        voice.lang.startsWith('en-') && 
        !voice.name.includes('Google') // Often robotic
    ).slice(0, 5); // Limit to 5 best
    
    goodVoices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.value = voices.indexOf(voice); // Store original index
        option.textContent = `${voice.name}`;
        select.appendChild(option);
    });
}

// Load voices when available
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
}

let utterance = null;
let isPaused = false;

document.getElementById('playBtn').addEventListener('click', () => {
    const content = document.getElementById('documentContent').textContent;
    if (!content) return;

    if (isPaused && utterance) {
        speechSynthesis.resume();
        isPaused = false;
    } else {
        utterance = new SpeechSynthesisUtterance(content);
        utterance.rate = parseFloat(document.getElementById('speedSelect').value);
        
        const voiceIndex = document.getElementById('voiceSelect').value;
        if (voiceIndex) {
            const voices = speechSynthesis.getVoices();
            utterance.voice = voices[voiceIndex];
        }
        
        speechSynthesis.speak(utterance);
    }
});

document.getElementById('pauseBtn').addEventListener('click', () => {
    if (speechSynthesis.speaking && !isPaused) {
        speechSynthesis.pause();
        isPaused = true;
    }
});

document.getElementById('stopBtn').addEventListener('click', () => {
    speechSynthesis.cancel();
    isPaused = false;
});

document.getElementById('speedSelect').addEventListener('change', (e) => {
    if (utterance) {
        utterance.rate = parseFloat(e.target.value);
    }
});

// ========================================
// QUIZ MODE
// ========================================
function loadQuiz() {
    if (typeof QUIZ_QUESTIONS === 'undefined' || QUIZ_QUESTIONS.length === 0) {
        document.getElementById('quizContainer').innerHTML = `
            <div class="quiz-card">
                <p style="text-align: center; color: #999;">
                    Quiz questions will be added when study materials are available.
                </p>
            </div>
        `;
        return;
    }

    currentQuestionIndex = 0;
    quizAnswers = [];
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex >= QUIZ_QUESTIONS.length) {
        showQuizResults();
        return;
    }

    const question = QUIZ_QUESTIONS[currentQuestionIndex];
    const container = document.getElementById('quizContainer');

    container.innerHTML = `
        <div class="quiz-card">
            <div class="question-number">Question ${currentQuestionIndex + 1} of ${QUIZ_QUESTIONS.length}</div>
            <div class="question-text">${question.question}</div>
            <div class="options-container" id="optionsContainer">
                ${question.options.map((opt, i) => `
                    <div class="option" data-index="${i}">${opt}</div>
                `).join('')}
            </div>
            <button class="submit-btn" id="submitAnswer" disabled>Submit Answer</button>
            <div id="explanationContainer"></div>
        </div>
    `;

    // Handle option selection
    let selectedIndex = null;
    document.querySelectorAll('.option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            selectedIndex = parseInt(opt.dataset.index);
            document.getElementById('submitAnswer').disabled = false;
        });
    });

    // Handle answer submission
    document.getElementById('submitAnswer').addEventListener('click', () => {
        if (selectedIndex === null) return;

        const correct = selectedIndex === question.correct;
        quizAnswers.push({ questionIndex: currentQuestionIndex, correct });

        // Update study data
        studyData.totalAttempts++;
        if (correct) studyData.correctAnswers++;
        studyData.questionsStudied = Math.max(studyData.questionsStudied, currentQuestionIndex + 1);
        saveData();

        // Show feedback
        document.querySelectorAll('.option').forEach((opt, i) => {
            opt.style.pointerEvents = 'none';
            if (i === question.correct) {
                opt.classList.add('correct');
            } else if (i === selectedIndex) {
                opt.classList.add('incorrect');
            }
        });

        // Show explanation
        document.getElementById('explanationContainer').innerHTML = `
            <div class="explanation-box">
                <h4>${correct ? '✅ Correct!' : '❌ Incorrect'}</h4>
                <p>${question.explanation}</p>
                <p class="reference">Reference: ${question.reference}</p>
            </div>
        `;

        // Change button to next question
        const btn = document.getElementById('submitAnswer');
        btn.textContent = currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'See Results';
        btn.disabled = false;
        btn.onclick = () => {
            currentQuestionIndex++;
            displayQuestion();
        };
    });
}

function showQuizResults() {
    const correct = quizAnswers.filter(a => a.correct).length;
    const total = quizAnswers.length;
    const percentage = Math.round((correct / total) * 100);

    // Find which document this quiz is for (based on current questions)
    // For now, we'll track overall quiz completion
    // In future, you could add quiz tracking per document
    studyData.quizzesCompleted['overall'] = {
        completed: true,
        score: percentage,
        date: new Date().toISOString()
    };
    saveData();

    document.getElementById('quizContainer').innerHTML = `
        <div class="quiz-card" style="text-align: center;">
            <h2 style="color: #ff8c42; margin-bottom: 20px;">Quiz Complete!</h2>
            <div class="stat-number" style="font-size: 72px; margin: 30px 0;">${percentage}%</div>
            <p style="font-size: 24px; margin-bottom: 30px;">
                You got ${correct} out of ${total} questions correct
            </p>
            <button class="submit-btn" onclick="loadQuiz()">Take Quiz Again</button>
        </div>
    `;
}

// ========================================
// REVIEW HIGHLIGHTS
// ========================================
function loadReview() {
    const container = document.getElementById('highlightsList');
    if (studyData.highlights.length === 0) {
        container.innerHTML = '<p style="color: #999;">No highlights yet. Start reading and highlighting in Study mode!</p>';
        return;
    }

    // Group by color
    const grouped = {
        yellow: [],
        red: [],
        green: [],
        blue: []
    };
    
    studyData.highlights.forEach(h => {
        if (grouped[h.color]) {
            grouped[h.color].push(h);
        }
    });

    let html = '';
    
    if (grouped.red.length > 0) {
        html += '<h4 style="color: #ef4444; margin-top: 20px;">🔴 Struggling Topics</h4>';
        html += grouped.red.map(h => `
            <div class="highlight-item">
                <div class="highlight-text">${h.text}</div>
                <div class="highlight-note">${new Date(h.timestamp).toLocaleDateString()}</div>
            </div>
        `).join('');
    }
    
    if (grouped.yellow.length > 0) {
        html += '<h4 style="color: #ff8c42; margin-top: 20px;">🟠 Important Concepts</h4>';
        html += grouped.yellow.map(h => `
            <div class="highlight-item">
                <div class="highlight-text">${h.text}</div>
                <div class="highlight-note">${new Date(h.timestamp).toLocaleDateString()}</div>
            </div>
        `).join('');
    }
    
    if (grouped.blue.length > 0) {
        html += '<h4 style="color: #3b82f6; margin-top: 20px;">🔵 Questions/Clarifications</h4>';
        html += grouped.blue.map(h => `
            <div class="highlight-item">
                <div class="highlight-text">${h.text}</div>
                <div class="highlight-note">${new Date(h.timestamp).toLocaleDateString()}</div>
            </div>
        `).join('');
    }
    
    if (grouped.green.length > 0) {
        html += '<h4 style="color: #22c55e; margin-top: 20px;">🟢 Mastered Material</h4>';
        html += grouped.green.map(h => `
            <div class="highlight-item">
                <div class="highlight-text">${h.text}</div>
                <div class="highlight-note">${new Date(h.timestamp).toLocaleDateString()}</div>
            </div>
        `).join('');
    }

    container.innerHTML = html;
}

// ========================================
// SETTINGS
// ========================================
document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('Are you sure? This will delete ALL your progress and cannot be undone.')) {
        localStorage.clear();
        studyData = {
            questionsStudied: 0,
            correctAnswers: 0,
            totalAttempts: 0,
            highlights: [],
            studyStreak: 0
        };
        updateDashboard();
        alert('All data has been reset.');
    }
});
