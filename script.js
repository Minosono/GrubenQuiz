// script.js
import { questions, calculateMaxScore } from './questions.js';

// DOM Elements
const startContainer = document.getElementById('start-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const startButton = document.getElementById('start-button');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const answerOptionsEl = document.getElementById('answer-options');
const nextButton = document.getElementById('next-button'); // Brauchen wir für Slider
const resultTitleEl = document.getElementById('result-title');
const resultScoreEl = document.getElementById('result-score');
const resultDescriptionEl = document.getElementById('result-description');
const restartButton = document.getElementById('restart-button');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const emojiBackground = document.querySelector('.emoji-background');
const wokeChartCanvas = document.getElementById('woke-chart');
let wokeChart = null; // Für das Chart-Objekt

// Quiz State
let currentQuestionIndex = 0;
let userScore = 0;
const totalQuestions = questions.length;
const maxPossibleScore = calculateMaxScore();
let currentAnswerSelected = false; // Verhindert doppelklicken / prüft Auswahl

// --- Event Listeners ---
startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', resetQuiz);
nextButton.addEventListener('click', handleNextButtonClick); // Für Slider

// --- Core Functions ---

function startQuiz() {
    console.log("Quiz started. Total questions:", totalQuestions, "Max score:", maxPossibleScore);
    startContainer.classList.remove('active');
    resultContainer.classList.remove('active'); // Sicherstellen, dass Ergebnis weg ist
    quizContainer.classList.add('active');
    currentQuestionIndex = 0;
    userScore = 0;
    updateProgressBar();
    showQuestion();
    startEmojiBackground(); // Startet die Emojis
}

function showQuestion() {
    resetQuestionState();
    const currentQuestion = questions[currentQuestionIndex];

    questionNumberEl.textContent = `Frage ${currentQuestionIndex + 1}`;
    questionTextEl.textContent = currentQuestion.question;
    updateProgressBar();

    if (currentQuestion.type === 'mc') {
        displayMultipleChoice(currentQuestion);
        nextButton.style.display = 'none'; // Bei MC geht's direkt weiter
    } else if (currentQuestion.type === 'slider') {
        displaySlider(currentQuestion);
        nextButton.style.display = 'inline-block'; // Bei Slider braucht man "Weiter"
    }
    // Hier könnten weitere Fragetypen hinzugefügt werden
}

function resetQuestionState() {
    answerOptionsEl.innerHTML = ''; // Alte Antworten löschen
    nextButton.style.display = 'none'; // Weiter-Button erstmal verstecken
    currentAnswerSelected = false; // Zurücksetzen für die neue Frage
    // Evtl. vorherige "selected" Klassen entfernen, falls nötig (wird durch innerHTML erledigt)
}

function updateProgressBar() {
    const progressPercentage = ((currentQuestionIndex) / totalQuestions) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `Frage ${currentQuestionIndex + 1} / ${totalQuestions}`;
}


function displayMultipleChoice(question) {
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('btn', 'answer-btn');
        button.dataset.score = question.scores[index]; // Punktzahl im Dataset speichern
        button.addEventListener('click', handleMultipleChoiceAnswer);
        answerOptionsEl.appendChild(button);
    });
}

function handleMultipleChoiceAnswer(event) {
    if (currentAnswerSelected) return; // Verhindert schnelles Doppelklicken
    currentAnswerSelected = true;

    const selectedButton = event.target;
    const score = parseInt(selectedButton.dataset.score, 10);

    userScore += score;
    console.log(`Question ${currentQuestionIndex + 1} (MC): Score added = ${score}, Total Score = ${userScore}`);

    // Visuelles Feedback
    selectedButton.classList.add('selected');
    // Alle Buttons deaktivieren nach Auswahl
    Array.from(answerOptionsEl.children).forEach(btn => btn.disabled = true);


    // Kurze Pause vor der nächsten Frage für den Effekt
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuestions) {
            showQuestion();
        } else {
            endQuiz();
        }
    }, 700); // 700ms Verzögerung
}


function displaySlider(question) {
    const sliderId = `slider-${currentQuestionIndex}`;
    const valueDisplayId = `slider-value-${currentQuestionIndex}`;
    const [minScore, maxScore] = question.scores;
    const [minLabel, maxLabel] = question.options;

    const sliderHTML = `
        <div class="slider-container">
             <div class="slider-labels">
                <span>${minLabel}</span>
                <span>${maxLabel}</span>
            </div>
            <input type="range" id="${sliderId}" min="0" max="100" value="50" class="woke-slider">
            <span id="${valueDisplayId}" class="slider-value-display">50%</span> <!-- Zeigt den aktuellen Wert -->
        </div>
    `;
    answerOptionsEl.innerHTML = sliderHTML; // Nur den Slider anzeigen

    const slider = document.getElementById(sliderId);
    const valueDisplay = document.getElementById(valueDisplayId);

    // Event Listener, um den Wert anzuzeigen, während man schiebt
    slider.addEventListener('input', () => {
        valueDisplay.textContent = `${slider.value}%`;
        currentAnswerSelected = true; // Sobald geschoben wurde, gilt es als "beantwortet"
    });

    // Speichern des aktuellen Slider-Werts für den "Weiter"-Button
    nextButton.dataset.sliderId = sliderId;
    nextButton.dataset.minScore = minScore;
    nextButton.dataset.maxScore = maxScore;

}

function handleNextButtonClick() {
    if (!currentAnswerSelected && questions[currentQuestionIndex].type === 'slider') {
        // Optional: Hinweis geben, dass der Slider bewegt werden muss
        alert("Bitte bewege den Regler, um deine Antwort zu geben.");
        return;
     }


    if (questions[currentQuestionIndex].type === 'slider') {
        const sliderId = nextButton.dataset.sliderId;
        const slider = document.getElementById(sliderId);
        const sliderValue = parseInt(slider.value, 10); // Wert von 0-100
        const minScore = parseInt(nextButton.dataset.minScore, 10);
        const maxScore = parseInt(nextButton.dataset.maxScore, 10);

        // Score basierend auf Slider-Position berechnen (lineare Skalierung)
        const score = minScore + ((maxScore - minScore) * (sliderValue / 100));
        userScore += Math.round(score); // Runden für ganze Zahlen
        console.log(`Question ${currentQuestionIndex + 1} (Slider): Value=${sliderValue}, Score added = ${Math.round(score)}, Total Score = ${userScore}`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        showQuestion();
    } else {
        endQuiz();
    }
}


function endQuiz() {
    quizContainer.classList.remove('active');
    resultContainer.classList.add('active');
    progressBar.style.width = `100%`; // Finalen Fortschritt anzeigen
    progressText.textContent = `Quiz beendet!`;


    const percentageScore = Math.round((userScore / maxPossibleScore) * 100);
    console.log("Quiz ended. Final Score:", userScore, "Max Possible:", maxPossibleScore, "Percentage:", percentageScore);

    let title = "";
    let description = "";
    let resultColor = "#333"; // Standardfarbe

    // Ergebnis-Kategorien (Anpassen!)
    if (percentageScore <= 15) {
        title = "Basis-Bürger:in";
        description = "Woke? Du isst wahrscheinlich noch Schnitzel ohne schlechtes Gewissen. Ist auch okay.";
        resultColor = "#95a5a6"; // Grau
    } else if (percentageScore <= 35) {
        title = "Woke-Azubi";
        description = "Du hast schon mal von Gender-Sternchen gehört, aber benutzt sie eher selten. Potenzial ist da!";
         resultColor = "#3498db"; // Blau
    } else if (percentageScore <= 60) {
        title = "Fortgeschrittene:r Diskurs-Teilnehmer:in";
        description = "Dein Hafer-Cappuccino ist fair gehandelt und du korrigierst Leute sanft beim Gendern. Gut dabei!";
         resultColor = "#e67e22"; // Orange
    } else if (percentageScore <= 85) {
        title = "Woke-Meisterklasse";
        description = "Du entschlüsselst Mikroaggressionen im Schlaf und dein CO2-Fußabdruck ist beneidenswert klein. Respekt!";
         resultColor = "#8e44ad"; // Lila
    } else {
        title = "🏳️‍🌈 Endboss der Wokeness 🏳️‍🌈";
        description = "Glückwunsch, du bist woker als ein Soja-Latte auf einem Einhorn-Floß! Gibt es überhaupt noch Steigerungen?";
        resultColor = "linear-gradient(90deg, #f06, #ffde00, #0f0, #0ff, #00f, #f0f)"; // Rainbow
    }

    resultTitleEl.textContent = title;
    // Spezialbehandlung für den Regenbogen-Titel
     if (percentageScore > 85) {
         resultScoreEl.innerHTML = `<span class="rainbow-text">${percentageScore}% Woke</span>`;
     } else {
        resultScoreEl.textContent = `${percentageScore}% Woke`;
        resultScoreEl.style.color = resultColor; // Farbe für andere Titel setzen
     }
    resultDescriptionEl.textContent = description;

    // Optional: Ergebnis-Chart anzeigen
    displayResultChart(percentageScore, resultColor);

    // Emojis vielleicht ändern/intensivieren basierend auf Ergebnis? (Optional)
    intensifyEmojiBackground(percentageScore);
}

function resetQuiz() {
    resultContainer.classList.remove('active');
    startContainer.classList.add('active');
    // Evtl. Chart zerstören, falls vorhanden
     if (wokeChart) {
        wokeChart.destroy();
        wokeChart = null;
    }
    // Emojis stoppen oder zurücksetzen
    stopEmojiBackground();
}

// --- Helper Functions ---

function startEmojiBackground() {
    stopEmojiBackground(); // Sicherstellen, dass keine alten Emojis laufen
    const emojis = ["🌈", "💖", "✨", "🌱", "✊", "🌍", "젠", "♀️", "♂️", "⚧️", "❤️‍🔥"]; // Füge passende Emojis hinzu
    const numEmojis = 30; // Anzahl der Emojis

    for (let i = 0; i < numEmojis; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.top = Math.random() * 100 + 'vh';
        emoji.style.left = Math.random() * 100 + 'vw';
        // Zufällige Animationsdauer und Verzögerung für Variation
        const duration = Math.random() * 10 + 10; // 10-20 Sekunden
        const delay = Math.random() * 5; // 0-5 Sekunden Startverzögerung
        emoji.style.animationDuration = `${duration}s, 1s`;
        emoji.style.animationDelay = `${delay}s, ${delay}s`;
        emoji.style.fontSize = `${Math.random() * 16 + 14}px`; // Größe variieren (14-30px)

        emojiBackground.appendChild(emoji);
    }
}

function stopEmojiBackground() {
    emojiBackground.innerHTML = ''; // Entfernt alle Emoji-Elemente
}

function intensifyEmojiBackground(score) {
    // Optional: Ändere Emojis/Geschwindigkeit basierend auf dem Score
    // z.B. mehr Regenbogen-Emojis bei hohem Score
    // Diese Funktion ist nur ein Platzhalter
    console.log("Intensity based on score:", score);
    // Man könnte hier die Animationen schneller machen oder spezifische Emojis hinzufügen
}


// --- Chart.js Integration (Optional) ---
function displayResultChart(score, color) {
     if (wokeChart) {
        wokeChart.destroy(); // Zerstöre altes Chart
    }

    const ctx = wokeChartCanvas.getContext('2d');
    const gradientBg = ctx.createLinearGradient(0, 0, 0, 200);
    // Versuche, die Farbe zu verwenden, aber fallback für Gradienten
    let chartColor = color;
    if (typeof color === 'string' && color.startsWith('linear-gradient')) {
        // Chart.js kann keine CSS-Gradienten direkt, nimm eine Primärfarbe
         gradientBg.addColorStop(0, '#8e44ad'); // Lila
         gradientBg.addColorStop(1, '#a8edea'); // Helleres Türkis
        chartColor = gradientBg;
    } else {
         gradientBg.addColorStop(0, color);
         gradientBg.addColorStop(1, lightenColor(color, 30)); // Hellt die Farbe auf
         chartColor = gradientBg;
    }


    wokeChart = new Chart(ctx, {
        type: 'doughnut', // Oder 'pie' oder 'bar'
        data: {
            // labels: ['Woke', 'Rest'], // Optional: Beschriftungen
            datasets: [{
                label: 'Wokeness Level',
                data: [score, 100 - score],
                backgroundColor: [
                    chartColor, // Farbe für den Score-Teil
                    '#e0e0e0' // Farbe für den Rest (Grau)
                ],
                borderColor: [
                    'rgba(255, 255, 255, 0.5)',
                     'rgba(255, 255, 255, 0.5)'
                ],
                borderWidth: 2,
                circumference: 180, // Halber Kreis
                rotation: 270, // Startet unten
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%', // Macht es zu einem Doughnut-Chart
            plugins: {
                legend: {
                    display: false // Keine Legende anzeigen
                },
                tooltip: {
                    enabled: false // Keine Tooltips anzeigen
                }
            },
            animation: {
                 animateScale: true,
                 animateRotate: true
            }
        }
    });
}

// Hilfsfunktion zum Aufhellen von Hex-Farben für den Gradienten
function lightenColor(hex, percent) {
    hex = hex.replace(/^\s*#|\s*$/g, '');
    if (hex.length == 3) {
        hex = hex.replace(/(.)/g, '$1$1');
    }
    let r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);

    percent = Math.max(-100, Math.min(100, percent)); // Bereich -100 bis 100

    r = Math.round(Math.min(255, Math.max(0, r + (255 * percent / 100))));
    g = Math.round(Math.min(255, Math.max(0, g + (255 * percent / 100))));
    b = Math.round(Math.min(255, Math.max(0, b + (255 * percent / 100))));

    return '#' + [r, g, b].map(x => {
        const h = x.toString(16);
        return h.length == 1 ? '0' + h : h;
    }).join('');
}