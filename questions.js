// questions.js

// WICHTIG: Passe die Fragen, Antworten und Punktzahlen an!
// 'type': 'mc' = Multiple Choice, 'slider' = Schieberegler
// 'scores': Bei 'mc' muss die Länge mit 'answers' übereinstimmen.
//           Bei 'slider' ist es [min_score, max_score] für den Reglerbereich.

export const questions = [
    {
        type: 'mc',
        question: "Dein Lieblingsgetränk zum Brunch?",
        answers: ["Prosecco", "Club Mate", "Hafer-Cappuccino", "Bier"],
        scores: [30, 70, 90, 10] // Höhere Punktzahl = "woker"
    },
    {
        type: 'slider',
        question: "Wie wichtig ist es dir, dass dein Avocado-Toast *fair trade* ist?",
        options: ["Unwichtig", "Sehr Wichtig"], // Beschriftung für Min/Max
        scores: [0, 100] // Score wird basierend auf Slider-Position berechnet (0-100)
    },
    {
        type: 'mc',
        question: "Was machst du, wenn jemand im Bus laut telefoniert?",
        answers: ["Kopfhörer lauter drehen", "Passiv-aggressiv seufzen", "Freundlich bitten, leiser zu sein", "Eine Diskussion über Rücksichtnahme anfangen"],
        scores: [20, 40, 60, 80]
    },
    {
        type: 'slider',
        question: "Auf einer Skala von 'Fleisch ist mein Gemüse' bis 'Ich umarme Bäume': Wo siehst du dich?",
        options: ["Grillmeister", "Baumumarmer"],
        scores: [0, 100]
    },
    {
        type: 'mc',
        question: "Du siehst jemanden gendern mit Binnen-I statt Sternchen. Deine Reaktion?",
        answers: ["Ist mir egal", "Innerlich kurz die Augen verdrehen", "Lob für den Versuch", "Sanft auf das Sternchen hinweisen"],
        scores: [10, 30, 60, 90]
    },
    {
        type: 'mc',
        question: "Ein Freund postet ein Urlaubsfoto aus einem problematischen Land. Du...",
        answers: ["Likest das Bild", "Ignorierst es", "Schreibst 'Schönen Urlaub!'", "Schickst ihm privat einen Link zu Menschenrechtsverletzungen"],
        scores: [10, 20, 30, 95]
    },
    {
        type: 'slider',
        question: "Wie sehr triggert dich das Wort 'normal'?",
        options: ["Gar nicht", "Maximal"],
        scores: [0, 100]
    },
    // --- FÜGE HIER DEINE WEITEREN 23 FRAGEN EIN ---
    // Beispiel für weitere Fragen (Platzhalter):
    {
        type: 'mc',
        question: "Frage 8?",
        answers: ["Option A", "Option B", "Option C", "Option D"],
        scores: [10, 30, 60, 90]
    },
    // ... (bis Frage 30) ...
    {
        type: 'mc',
        question: "Letzte Frage: Wie fandest du dieses Quiz?",
        answers: ["Totaler Quatsch", "Ganz witzig", "Sehr aufschlussreich", "Ich fühle mich ertappt"],
        scores: [10, 40, 70, 90]
    }
];

// Funktion zum Berechnen der maximal möglichen Punktzahl
export function calculateMaxScore() {
    return questions.reduce((max, q) => {
        if (q.type === 'mc') {
            // Finde die höchste Punktzahl für diese MC-Frage
            return max + Math.max(...q.scores);
        } else if (q.type === 'slider') {
            // Nimm die maximale Punktzahl des Sliders
            return max + q.scores[1];
        }
        return max; // Für unbekannte Typen
    }, 0);
}