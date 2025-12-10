// ========================================
// NOTES FUNCTIONALITY
// ========================================
let currentDocumentIndex = null;

// This will be called when document loads
function updateCurrentDocument(index) {
    currentDocumentIndex = index;
    displayNotes();
}

function toggleAddNote() {
    const box = document.getElementById('addNoteBox');
    const input = document.getElementById('noteInput');
    
    if (box.style.display === 'none') {
        box.style.display = 'block';
        input.focus();
    } else {
        box.style.display = 'none';
        input.value = '';
    }
}

function saveNote() {
    const input = document.getElementById('noteInput');
    const text = input.value.trim();
    
    if (!text) {
        alert('Please enter a note');
        return;
    }
    
    if (currentDocumentIndex === null) {
        alert('Please select a document first');
        return;
    }
    
    // Initialize notes array for this document if needed
    if (!studyData.notes[currentDocumentIndex]) {
        studyData.notes[currentDocumentIndex] = [];
    }
    
    // Add note
    studyData.notes[currentDocumentIndex].push({
        text: text,
        timestamp: new Date().toISOString()
    });
    
    saveData();
    input.value = '';
    toggleAddNote();
    displayNotes();
}

function displayNotes() {
    const container = document.getElementById('notesList');
    
    if (currentDocumentIndex === null || !studyData.notes[currentDocumentIndex] || studyData.notes[currentDocumentIndex].length === 0) {
        container.innerHTML = '<p style="color: #999; text-align: center;">No notes yet. Add your first note above!</p>';
        return;
    }
    
    const notes = studyData.notes[currentDocumentIndex];
    
    container.innerHTML = notes.map((note, index) => `
        <div class="note-item">
            <div class="note-text">${note.text}</div>
            <div class="note-meta">
                <span>${new Date(note.timestamp).toLocaleDateString()} ${new Date(note.timestamp).toLocaleTimeString()}</span>
                <button class="delete-note-btn" onclick="deleteNote(${index})">Delete</button>
            </div>
        </div>
    `).join('');
}

function deleteNote(index) {
    if (confirm('Delete this note?')) {
        studyData.notes[currentDocumentIndex].splice(index, 1);
        saveData();
        displayNotes();
    }
}

// ========================================
// FLASHCARD FUNCTIONALITY
// ========================================
let flashcards = [];
let currentFlashcardIndex = 0;
let isFlipped = false;

function generateFlashcards() {
    flashcards = [];
    
    if (typeof STUDY_DOCUMENTS === 'undefined') return;
    
    STUDY_DOCUMENTS.forEach((doc, docIndex) => {
        if (doc.summary && doc.summary.keyTimeframes) {
            // Create flashcards from key timeframes
            doc.summary.keyTimeframes.forEach(item => {
                if (item !== 'Content will be added when materials are available') {
                    const parts = item.split(':');
                    if (parts.length === 2) {
                        flashcards.push({
                            id: `timeframe-${docIndex}-${flashcards.length}`,
                            question: parts[0].trim() + '?',
                            answer: parts[1].trim(),
                            category: 'Timeframes',
                            docIndex: docIndex
                        });
                    }
                }
            });
            
            // Create flashcards from testable definitions
            if (doc.summary.testableDefinitions) {
                doc.summary.testableDefinitions.forEach(item => {
                    const parts = item.split(':');
                    if (parts.length === 2) {
                        flashcards.push({
                            id: `definition-${docIndex}-${flashcards.length}`,
                            question: `What is ${parts[0].trim()}?`,
                            answer: parts[1].trim(),
                            category: 'Definitions',
                            docIndex: docIndex
                        });
                    }
                });
            }
        }
    });
    
    // Shuffle flashcards
    flashcards.sort(() => Math.random() - 0.5);
}

function startFlashcards() {
    generateFlashcards();
    
    if (flashcards.length === 0) {
        alert('No flashcards available yet. Add study materials in January!');
        return;
    }
    
    currentFlashcardIndex = 0;
    isFlipped = false;
    
    const controls = document.querySelector('.flashcard-controls');
    controls.style.display = 'none';
    
    const container = document.getElementById('flashcardContainer');
    container.innerHTML = '';
    container.style.display = 'block';
    
    displayFlashcard();
}

function displayFlashcard() {
    if (currentFlashcardIndex >= flashcards.length) {
        showFlashcardComplete();
        return;
    }
    
    const card = flashcards[currentFlashcardIndex];
    const container = document.getElementById('flashcardContainer');
    
    container.innerHTML = `
        <div class="flashcard-progress">
            Card ${currentFlashcardIndex + 1} of ${flashcards.length}
        </div>
        <div class="flashcard" onclick="flipFlashcard()" id="currentFlashcard">
            <div class="flashcard-front">
                <div class="flashcard-question">${card.question}</div>
            </div>
            <div class="flip-indicator">Click to flip</div>
        </div>
        <div class="flashcard-actions" id="flashcardActions" style="display: none;">
            <button class="flashcard-btn know-it-btn" onclick="markFlashcard(true)">✅ Know It</button>
            <button class="flashcard-btn review-btn" onclick="markFlashcard(false)">🔴 Need Review</button>
        </div>
    `;
    
    isFlipped = false;
}

function flipFlashcard() {
    const card = flashcards[currentFlashcardIndex];
    const cardElement = document.getElementById('currentFlashcard');
    const actions = document.getElementById('flashcardActions');
    
    if (!isFlipped) {
        cardElement.classList.add('flipped');
        cardElement.innerHTML = `
            <div class="flashcard-back">
                <div class="flashcard-answer">${card.answer}</div>
            </div>
            <div class="flip-indicator">Click for next card</div>
        `;
        actions.style.display = 'flex';
        isFlipped = true;
    } else {
        currentFlashcardIndex++;
        displayFlashcard();
    }
}

function markFlashcard(knowIt) {
    const card = flashcards[currentFlashcardIndex];
    
    // Track progress
    if (!studyData.flashcardProgress[card.id]) {
        studyData.flashcardProgress[card.id] = {correct: 0, incorrect: 0};
    }
    
    if (knowIt) {
        studyData.flashcardProgress[card.id].correct++;
    } else {
        studyData.flashcardProgress[card.id].incorrect++;
        // Add to highlights as something to review
        if (!studyData.highlights.find(h => h.text === card.question)) {
            studyData.highlights.push({
                text: `${card.question} → ${card.answer}`,
                color: 'red',
                timestamp: new Date().toISOString()
            });
        }
    }
    
    studyData.flashcardProgress[card.id].lastSeen = new Date().toISOString();
    saveData();
    
    currentFlashcardIndex++;
    displayFlashcard();
}

function showFlashcardComplete() {
    const container = document.getElementById('flashcardContainer');
    const knownCount = flashcards.filter(c => 
        studyData.flashcardProgress[c.id] && 
        studyData.flashcardProgress[c.id].correct > studyData.flashcardProgress[c.id].incorrect
    ).length;
    
    container.innerHTML = `
        <div class="quiz-card" style="text-align: center;">
            <h2 style="color: #ff8c42; margin-bottom: 20px;">Flashcards Complete!</h2>
            <div class="stat-number" style="font-size: 72px; margin: 30px 0;">${Math.round((knownCount / flashcards.length) * 100)}%</div>
            <p style="font-size: 24px; margin-bottom: 30px;">
                You marked ${knownCount} out of ${flashcards.length} as "Know It"
            </p>
            <button class="submit-btn" onclick="startFlashcards()">Study Again</button>
        </div>
    `;
}

// ========================================
// QUIZ MODES (Sequential, Random, Weakness)
// ========================================
let quizMode = 'sequential';
let quizQuestions = [];

function loadQuiz(mode = 'sequential') {
    quizMode = mode;
    
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

    // Prepare questions based on mode
    if (mode === 'sequential') {
        quizQuestions = [...QUIZ_QUESTIONS];
    } else if (mode === 'random') {
        quizQuestions = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
    } else if (mode === 'weakness') {
        // Get questions that were answered incorrectly
        quizQuestions = QUIZ_QUESTIONS.filter((q, i) => {
            return quizAnswers.some(a => a.questionIndex === i && !a.correct);
        });
        
        if (quizQuestions.length === 0) {
            document.getElementById('quizContainer').innerHTML = `
                <div class="quiz-card">
                    <p style="text-align: center; color: #999;">
                        No wrong answers yet! Take a quiz first to identify weak areas.
                    </p>
                    <button class="submit-btn" onclick="loadQuiz('random')" style="margin-top: 20px;">Take Random Quiz</button>
                </div>
            `;
            return;
        }
    }

    currentQuestionIndex = 0;
    quizAnswers = [];
    displayQuestion();
}

// ========================================
// PRACTICE TEST (Timed)
// ========================================
let practiceTestTimer = null;
let practiceTestTimeRemaining = 0;
let practiceTestQuestions = [];
let practiceTestAnswers = [];
let practiceTestStartTime = null;

function startPracticeTest() {
    const questionCount = parseInt(document.getElementById('testQuestionCount').value);
    
    if (typeof QUIZ_QUESTIONS === 'undefined' || QUIZ_QUESTIONS.length === 0) {
        alert('Quiz questions not available yet. Add study materials first!');
        return;
    }
    
    if (QUIZ_QUESTIONS.length < questionCount) {
        alert(`Only ${QUIZ_QUESTIONS.length} questions available. Adjust question count.`);
        return;
    }
    
    // Prepare random questions
    practiceTestQuestions = [...QUIZ_QUESTIONS]
        .sort(() => Math.random() - 0.5)
        .slice(0, questionCount);
    
    practiceTestAnswers = [];
    practiceTestTimeRemaining = questionCount * 60; // 1 minute per question
    practiceTestStartTime = Date.now();
    currentQuestionIndex = 0;
    
    // Hide setup
    document.querySelector('.practice-test-setup').style.display = 'none';
    
    // Show test
    const container = document.getElementById('practiceTestContainer');
    container.style.display = 'block';
    
    // Start timer
    startPracticeTestTimer();
    displayPracticeTestQuestion();
}

function startPracticeTestTimer() {
    practiceTestTimer = setInterval(() => {
        practiceTestTimeRemaining--;
        
        if (practiceTestTimeRemaining <= 0) {
            clearInterval(practiceTestTimer);
            finishPracticeTest();
            return;
        }
        
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(practiceTestTimeRemaining / 60);
    const seconds = practiceTestTimeRemaining % 60;
    const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    const timerElement = document.querySelector('.timer-display');
    if (timerElement) {
        timerElement.textContent = display;
        
        // Add urgency styling if < 5 minutes
        if (practiceTestTimeRemaining < 300) {
            timerElement.style.color = '#ef4444';
        }
    }
}

function displayPracticeTestQuestion() {
    if (currentQuestionIndex >= practiceTestQuestions.length) {
        finishPracticeTest();
        return;
    }

    const question = practiceTestQuestions[currentQuestionIndex];
    const container = document.getElementById('practiceTestContainer');

    container.innerHTML = `
        <div class="test-timer">
            <div class="timer-display">${Math.floor(practiceTestTimeRemaining / 60)}:${(practiceTestTimeRemaining % 60).toString().padStart(2, '0')}</div>
            <div class="timer-label">Time Remaining</div>
        </div>
        <div class="test-progress">
            Question ${currentQuestionIndex + 1} of ${practiceTestQuestions.length}
        </div>
        <div class="quiz-card">
            <div class="question-text">${question.question}</div>
            <div class="options-container" id="optionsContainer">
                ${question.options.map((opt, i) => `
                    <div class="option" data-index="${i}">${opt}</div>
                `).join('')}
            </div>
            <button class="submit-btn" id="submitTestAnswer" disabled>Next Question</button>
        </div>
    `;

    // Handle option selection
    let selectedIndex = null;
    document.querySelectorAll('.option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            selectedIndex = parseInt(opt.dataset.index);
            document.getElementById('submitTestAnswer').disabled = false;
        });
    });

    // Handle answer submission
    document.getElementById('submitTestAnswer').addEventListener('click', () => {
        if (selectedIndex === null) return;

        const correct = selectedIndex === question.correct;
        practiceTestAnswers.push({
            questionIndex: currentQuestionIndex,
            selectedIndex: selectedIndex,
            correct: correct,
            timeSpent: Date.now() - practiceTestStartTime
        });

        currentQuestionIndex++;
        displayPracticeTestQuestion();
    });
}

function finishPracticeTest() {
    clearInterval(practiceTestTimer);
    
    const correct = practiceTestAnswers.filter(a => a.correct).length;
    const total = practiceTestQuestions.length;
    const percentage = Math.round((correct / total) * 100);
    const timeSpent = Math.floor((Date.now() - practiceTestStartTime) / 1000);
    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;
    
    // Update study data
    studyData.totalAttempts += total;
    studyData.correctAnswers += correct;
    studyData.questionsStudied = Math.max(studyData.questionsStudied, total);
    saveData();
    
    const container = document.getElementById('practiceTestContainer');
    container.innerHTML = `
        <div class="quiz-card" style="text-align: center;">
            <h2 style="color: #ff8c42; margin-bottom: 20px;">Practice Test Complete!</h2>
            <div class="stat-number" style="font-size: 72px; margin: 30px 0;">${percentage}%</div>
            <p style="font-size: 24px; margin-bottom: 15px;">
                ${correct} out of ${total} correct
            </p>
            <p style="font-size: 18px; color: #999; margin-bottom: 30px;">
                Time: ${minutes}:${seconds.toString().padStart(2, '0')}
            </p>
            ${percentage >= 80 
                ? '<p style="color: #22c55e; font-size: 20px; margin-bottom: 30px;">✅ Great job! You\'re ready!</p>'
                : '<p style="color: #ef4444; font-size: 20px; margin-bottom: 30px;">⚠️ Keep studying - aim for 80%+</p>'
            }
            <button class="submit-btn" onclick="resetPracticeTest()">Take Another Test</button>
        </div>
    `;
}

function resetPracticeTest() {
    document.querySelector('.practice-test-setup').style.display = 'block';
    document.getElementById('practiceTestContainer').style.display = 'none';
    document.getElementById('practiceTestContainer').innerHTML = '';
}
