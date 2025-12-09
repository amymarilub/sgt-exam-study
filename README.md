# 🎯 SGT Exam Study Pro

A comprehensive study application designed for police sergeant promotional exams. Built specifically for studying San Antonio Police Department procedures and policies.

## ✨ Features

### 📖 Read & Study Mode
- Load and read full procedure documents
- Text-to-speech with adjustable speed (0.75x - 2x)
- Listen while driving, working out, or multitasking
- Study on any device - desktop, tablet, or phone

### ❓ Quiz Mode
- Multiple choice practice questions
- Scenario-based questions
- Immediate feedback with detailed explanations
- Reference citations for each answer
- Track your accuracy over time

### 📊 Progress Dashboard
- Overall quiz accuracy tracking
- Total questions studied counter
- Study streak tracking
- Performance analytics

### 📱 Mobile Optimized
Works perfectly on:
- iPhone/iPad (Safari)
- Android phones/tablets (Chrome)
- Desktop browsers (Chrome, Firefox, Safari, Edge)

**Add to home screen for an app-like experience with offline support!**

## 🚀 How to Use

1. **Visit the app**: https://yourusername.github.io/sgt-exam-study/
2. **Add to phone home screen** for easy access
3. **Start studying**:
   - Select a document in Read & Study mode
   - Use text-to-speech to listen on the go
   - Take quizzes to test your knowledge
   - Track your progress on the dashboard

## 📚 Current Study Materials

- ✅ Procedure 303 - Complaints Against Department Members (Full content)
- ⏳ Procedure 501 - Use of Force (Coming soon)
- ⏳ Procedure 204 - Patrol Procedures (Coming soon)
- ⏳ Criminal Investigations Manual (Coming soon)

More content will be added as study materials become available.

## 🎓 Perfect For

- San Antonio Police Department Sergeant exams
- Police promotional testing preparation
- Policy and procedure memorization
- Scenario-based training review

## 💾 Data Privacy

- ✅ All progress stored locally on your device
- ✅ No data sent to any server
- ✅ No account or login required
- ✅ No tracking or analytics
- ✅ 100% private and secure

## 🆓 Free Forever

- No subscriptions
- No ads  
- No tracking
- No premium features locked behind paywalls

## 🔧 Technology

- Pure HTML/CSS/JavaScript
- No installation or app store required
- No backend or server needed
- Works completely offline once loaded
- Web Speech API for text-to-speech
- LocalStorage for progress tracking

## 📱 Installation

### On iPhone/iPad:
1. Open the app link in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add" in the top right

### On Android:
1. Open the app link in Chrome
2. Tap the menu button (three dots)
3. Tap "Add to Home screen"
4. Tap "Add"

### On Desktop:
Just bookmark the URL for quick access!

## 🛠️ For Developers

Want to customize this for your department or exam?

### File Structure:
```
sgt-exam-study/
├── index.html          # Main application
├── documents.js        # Study content and quiz questions
└── README.md          # This file
```

### Adding Questions:
Edit `documents.js` and add questions in this format:

```javascript
{
    type: 'multiple-choice',
    category: 'complaints',
    question: 'Your question here?',
    options: [
        'Option A',
        'Option B', 
        'Option C',
        'Option D'
    ],
    correct: 1, // Index: 0=A, 1=B, 2=C, 3=D
    explanation: 'Detailed explanation...',
    reference: 'Procedure 303, Section .04'
}
```

### Adding Documents:
Edit `documents.js` and add documents in this format:

```javascript
{
    title: "Your Document Title",
    content: `
        <h2>Main Heading</h2>
        <p>Your content here...</p>
    `
}
```

## 📞 Support

Built with ❤️ for law enforcement professionals preparing for promotional exams.

For issues or questions, open an issue in this repository.

---

**Good luck on your exam! 🚔**
