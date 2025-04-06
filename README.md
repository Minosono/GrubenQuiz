# Woke-O-Meter: Wie woke bist du? 🤔🏳️‍🌈

Ein (nicht ganz ernstes) Quiz für dich und deine Freunde, um spielerisch herauszufinden, wie tief ihr im "Woke"-Dschungel steckt. Beantworte 30 lustige und manchmal absurde Fragen auf Deutsch!

**✨ [Spiel das Quiz hier!](https://DEINE_GITHUB_USERNAME.github.io/DEIN_REPO_NAME/) ✨**
*(Ersetze den Link oben, sobald du es auf GitHub Pages gehostet hast!)*

![Screenshot Placeholder](placeholder.png)
*(Tipp: Füge hier einen Screenshot oder ein GIF deines Quiz hinzu!)*

## Features

*   **30 Unterhaltsame Fragen:** Eine bunte Mischung aus Multiple Choice und Schiebereglern.
*   **Lustige Szenarien:** Testet eure Reaktionen auf Alltags-Situationen und typische "Woke"-Dilemmas (mit Augenzwinkern).
*   **Interaktives Design:**
    *   Moderner Look mit Farbverläufen und Emojis ✨
    *   Fortschrittsanzeige (Progress Bar)
    *   Dynamische Slider für nuancierte Antworten
    *   Visuelles Feedback bei der Antwortauswahl
    *   Animierter Ergebnis-Chart (Doughnut) 🍩
*   **Responsive:** Spielbar auf Desktop und Mobilgeräten.
*   **Anpassbar:** Füge einfach neue Fragen hinzu oder ändere die bestehenden in `questions.js`.
*   **GitHub Pages Ready:** Strukturierte Codebasis (HTML, CSS, JS getrennt), bereit zum Hosten.

## Wie funktioniert's?

Das Quiz stellt dir 30 Fragen.
*   Bei **Multiple Choice** wählst du eine von vier Antworten aus.
*   Bei **Slider-Fragen** schiebst du den Regler auf die Position, die am besten passt, und klickst dann auf "Weiter".

Jede Antwort gibt eine bestimmte Punktzahl (in `questions.js` festgelegt). Am Ende wird dein Gesamtscore in einen Prozentsatz umgerechnet und dir wird (mit einem Augenzwinkern) dein "Woke-Level" präsentiert. Der maximal erreichbare Score wird dynamisch aus den Fragen berechnet.

## Lokal ausführen

1.  Klone das Repository:
    ```bash
    git clone https://github.com/DEINE_GITHUB_USERNAME/DEIN_REPO_NAME.git
    ```
2.  Navigiere in das Verzeichnis:
    ```bash
    cd DEIN_REPO_NAME
    ```
3.  Öffne die `index.html` Datei in deinem Webbrowser.

## Anpassung

Alle Fragen, Antworten und deren Punktwerte befinden sich in der Datei `questions.js`. Du kannst sie leicht bearbeiten oder neue Fragen hinzufügen:

*   **Neue Frage:** Kopiere ein bestehendes Frage-Objekt und passe `type`, `question`, `answers`/`options` und `scores` an.
*   **Scores anpassen:** Ändere die Zahlen im `scores`-Array. Bei Multiple Choice muss die Anzahl der Scores mit der Anzahl der Antworten übereinstimmen. Bei Slidern ist `scores` ein Array mit `[minimaler_score, maximaler_score]`.
*   **Maximaler Score:** Die Funktion `calculateMaxScore` in `questions.js` berechnet automatisch den maximal möglichen Score für die Auswertung.

## Verwendete Technologien

*   HTML5
*   CSS3 (mit CSS Variables & Gradients)
*   Vanilla JavaScript (ES6 Modules)
*   [Chart.js](https://www.chartjs.org/) für das Ergebnis-Diagramm

## ⚠️ Disclaimer ⚠️

Dieses Quiz ist **Satire** und dient ausschließlich der **Unterhaltung**. Es soll Klischees und Stereotypen rund um das Thema "Wokeness" auf humorvolle Weise aufgreifen. Die Ergebnisse sind **nicht ernst zu nehmen** und stellen keine wissenschaftliche oder tatsächliche Bewertung dar. Ziel ist es, gemeinsam zu lachen und vielleicht die eine oder andere absurde Diskussion anzustoßen – nicht, jemanden zu beleidigen oder komplexe soziale Themen zu banalisieren. Bitte mit Humor genießen!

## Lizenz

Dieses Projekt steht unter der [MIT License](LICENSE). (Optional: Füge eine LICENSE-Datei hinzu)