// questions.js

// WICHTIG: Passe die Fragen, Antworten und Punktzahlen nach Belieben an!
// 'type': 'mc' = Multiple Choice, 'slider' = Schieberegler
// 'scores': Bei 'mc' muss die Länge mit 'answers' übereinstimmen.
//           Bei 'slider' ist es [min_score, max_score] für den Reglerbereich.

export const questions = [
    // --- Kategorie: Essen & Trinken ---
    {
        type: 'mc',
        question: "Dein Lieblingsgetränk zum Sonntagsbrunch?",
        answers: ["Prosecco auf Eis", "Frisch gepresster Orangensaft", "Hafer-Latte mit Zimt", "Club Mate"],
        scores: [20, 40, 90, 75] // Club Mate ist kultig, aber Hafermilch toppt es
    },
    {
        type: 'slider',
        question: "Wie wichtig ist dir die Bio-Zertifizierung deiner Avocado?",
        options: ["Schmeckt auch so", "Absolutes Muss"],
        scores: [0, 100] // 0 = egal, 100 = sehr wichtig
    },
    {
        type: 'mc',
        question: "Du bestellst Pizza. Was kommt drauf?",
        answers: ["Salami & Käse", "Hawaii (Ananas ist Liebe!)", "Rucola, veganer Käse, Pinienkerne", "Nur Tomatensauce (puristisch)"],
        scores: [10, 30, 95, 50] // Vegan top, Puristisch okay, Ananas kontrovers, Salami... naja
    },
    {
        type: 'mc',
        question: "Es gibt Kuchen im Büro. Deine Reaktion?",
        answers: ["Geil, Kuchen!", "Erstmal fragen, ob er vegan ist", "Nur ein kleines Stück, wegen Zucker", "Ich hab meinen eigenen glutenfreien Muffin dabei"],
        scores: [15, 80, 50, 90] // Eigener Muffin > Fragen > Zuckerbewusst > Einfach essen
    },
    {
        type: 'slider',
        question: "Dein täglicher Konsum von Apfelsaftschorle (0.5L Flaschen)?",
        options: ["Keine", "Mehrere Liter"], // Oder Apfelsaft, Schorle ist typischer
        scores: [30, 80] // Ironisch: Apfelsaftschorle als Standardgetränk werten? Wenig=weniger 'basic', viel='Standard'? Wir machen 'viel' leicht 'woker'.
    },
     {
        type: 'mc',
        question: "Ein Tag in der Kantine ist 'Meat-Free Monday'. Du denkst:",
        answers: ["Endlich!", "Gute Idee, aber eine Bratwurst wär' schon geil.", "Wo ist mein Schnitzel?!", "Ich ess eh meistens vegetarisch/vegan."],
        scores: [85, 40, 5, 95] // Eh schon veggie > Endlich > Kompromiss > Schnitzel!!!
    },

    // --- Kategorie: Sprache & Kommunikation ---
     {
        type: 'mc',
        question: "Wie genderst du am liebsten (wenn überhaupt)?",
        answers: ["Gar nicht, ist doch Quatsch", "Mit Binnen-I (LehrerInnen)", "Mit Gender-Sternchen (Lehrer*innen)", "Ich wechsle kreativ (Lehrende, Lehrpersonen...)"],
        scores: [5, 30, 80, 95] // Kreativ > Sternchen > Binnen-I > Gar nicht
    },
    {
        type: 'slider',
        question: "Wie sehr triggert dich die Formulierung 'man sagt doch...'?",
        options: ["Gar nicht", "Extrem"],
        scores: [10, 100] // Wenig triggern = weniger woke (laut Stereotyp)
    },
    {
        type: 'mc',
        question: "Du sprichst eine Gruppe an. Deine Wortwahl:",
        answers: ["Hey Leute!", "Sehr geehrte Damen und Herren", "Hallo zusammen!", "Liebe Alle / Liebe Menschen,"],
        scores: [40, 10, 60, 90] // Inklusiv > Neutral > Lässig > Förmlich (weniger inklusiv)
    },
     {
        type: 'mc',
        question: "Jemand erklärt dir ungefragt etwas (Mansplaining). Du...",
        answers: ["Nickst freundlich und ignorierst es", "Sagst: 'Danke, weiß ich schon'", "Unterbrichst und korrigierst den Erklärbär", "Startest eine Meta-Diskussion über Mansplaining"],
        scores: [30, 60, 80, 95] // Meta > Korrigieren > Abwimmeln > Ignorieren
    },


    // --- Kategorie: Konsum & Lifestyle ---
    {
        type: 'mc',
        question: "Dein bevorzugtes Fortbewegungsmittel in der Stadt?",
        answers: ["Mein getunter SUV", "Die gute alte U-Bahn/S-Bahn", "Fahrrad (Rennrad oder Holland)", "Lastenrad mit Kind/Matekiste"],
        scores: [0, 50, 75, 95] // Lastenrad > Fahrrad > Öffis > SUV
    },
    {
        type: 'mc',
        question: "Wo kaufst du deine Kleidung?",
        answers: ["Primark/Shein - Hauptsache billig", "Zalando & Co.", "Second Hand & Flohmarkt", "Nur selbst genäht oder von lokalen Fair-Fashion Labels"],
        scores: [5, 30, 80, 100] // Selbst/Fair > Second Hand > Online > Fast Fashion
    },
    {
        type: 'slider',
        question: "Flugscham-Level bei deinem letzten Urlaub?",
        options: ["Null Scham, Malle!", "Hab CO2 kompensiert"],
        scores: [0, 100] // 0 = Keine Scham, 100 = Maximale Kompensation/Scham
    },
    {
        type: 'mc',
        question: "Deine Wohnung ist voll mit...?",
        answers: ["Leeren Bierflaschen", "IKEA-Möbeln", "Selbstgebauten Regalen und Makramee", "Minimalistisch leer"],
        scores: [10, 30, 85, 70] // DIY/Makramee > Minimalistisch > IKEA > Bierflaschen
    },
     {
        type: 'mc',
        question: "Dein erster Gedanke, wenn ein Porsche Cayenne neben dir an der Ampel hält?",
        answers: ["Cooles Auto!", "Was verbraucht der wohl?", "Kompensiert da jemand was?", "Muss ich fotografieren für 'Notes of Berlin'."],
        scores: [10, 60, 85, 75] // Kompensation > Notes of Berlin > Verbrauch > Cool
    },
     {
        type: 'mc',
        question: "Was machst du mit Essensresten?",
        answers: ["Wegwerfen, was soll's.", "Einfrieren für schlechte Zeiten.", "Kreativ neu verkochen (Zero Waste!)", "Auf Foodsharing Plattformen anbieten."],
        scores: [0, 50, 85, 95] // Foodsharing > Zero Waste > Einfrieren > Wegwerfen
    },


    // --- Kategorie: Soziales & Aktivismus ---
     {
        type: 'mc',
        question: "Ein Freund postet ein Foto von sich im 'Papagena'-Kostüm an Karneval. Du:",
        answers: ["Likest das Bild", "Schreibst 'Tolles Kostüm!'", "Ignorierst es diskret", "Schickst ihm privat einen Artikel über kulturelle Aneignung"],
        scores: [5, 15, 35, 95] // Artikel > Ignorieren > Kompliment > Like
    },
    {
        type: 'slider',
        question: "Wie oft korrigierst du Leute (mental oder laut) wegen Mikroaggressionen?",
        options: ["Nie", "Ständig"],
        scores: [10, 100] // Viel korrigieren = woker (Stereotyp)
    },
    {
        type: 'mc',
        question: "Pronomen im E-Mail-Footer oder auf Namensschildern?",
        answers: ["Total unnötig", "Kann man machen, muss man nicht", "Gute Sache, fördert Inklusion", "Sollte Standard sein!"],
        scores: [10, 40, 80, 95] // Standard > Gut > Optional > Unnötig
    },
    {
        type: 'mc',
        question: "Du hörst im Radio den Song 'Papageno'. Deine Reaktion?",
        answers: ["Mitsingen! Klassiker!", "Radio leiser drehen", "Den Sender wechseln und online beschweren", "Einen kritischen Thread auf Twitter starten"],
        scores: [5, 30, 75, 90] // Thread > Beschweren > Leiser > Mitsingen
    },
     {
        type: 'mc',
        question: "Dein liebster Stadtteil?",
        answers: ["Gegend mit Einfamilienhäusern", "Schickes Villenviertel", "Hipsterviertel (z.B. Prenzlauer Berg, Schanze)", " Alternatives/Gentrifiziertes Viertel (z.B. Neukölln, Connewitz)"],
        scores: [10, 20, 70, 90] // Alternativ/Gentrifiziert > Hipster > Villa > Einfamilienhaus
    },
     {
        type: 'mc',
        question: "Die beste Art, den Klimawandel zu bekämpfen?",
        answers: ["Auf Politik hoffen", "Persönlicher Konsumverzicht", "An Demos und Aktionen teilnehmen", "Technologische Innovationen abwarten"],
        scores: [30, 70, 90, 20] // Aktivismus > Konsumverzicht > Politik > Technologie
    },


    // --- Kategorie: Absurdes & Meta ---
    {
        type: 'mc',
        question: "Was machst du, wenn du eine Spinne in deinem Zimmer findest?",
        answers: ["Kreischen und flüchten", "Mit dem Staubsauger jagen", "Vorsichtig mit Glas und Papier nach draußen tragen", "Ihr einen Namen geben und beobachten"],
        scores: [10, 5, 80, 65] // Raus tragen > Beobachten (fast schon zu viel?) > Jagen > Flüchten
    },
    {
        type: 'mc',
        question: "Ananas auf Pizza ist...",
        answers: ["Ein Verbrechen gegen die Menschlichkeit", "Okay, wenn man drauf steht", "Exotisch und lecker", "Ein Symbol für kulinarische Offenheit"],
        scores: [10, 40, 60, 75] // Ironisch: Offenheit > Lecker > Okay > Verbrechen
    },
     {
        type: 'mc',
        question: "Du siehst eine Doku über Minimalismus. Dein Gedanke:",
        answers: ["Genau mein Ding!", "Interessant, aber nichts für mich.", "Wie können die ohne meine 30 Paar Sneaker leben?", "Konsumkritik ist wichtig, aber das geht zu weit."],
        scores: [80, 50, 15, 65] // Genau mein Ding > Kritische Zustimmung > Nichts für mich > Sneaker
    },
    {
        type: 'mc',
        question: "Braucht dieser Test eine Triggerwarnung?",
        answers: ["Nein, ist doch nur Spaß", "Vielleicht für Leute ohne Humor", "Schaden kann's nicht", "Unbedingt! Das Thema 'Wokeness' ist sensibel!"],
        scores: [20, 40, 70, 90] // Unbedingt > Schaden kann's nicht > Kein Humor > Nur Spaß
    },
    {
        type: 'slider',
        question: "Auf einer Skala von 'Ironie versteh ich nicht' bis 'Mein ganzes Leben ist Satire':",
        options: ["Ernsthaft", "Meister der Satire"],
        scores: [10, 90] // Hohe Satirefähigkeit = tendenziell eher im 'woken' Diskurs unterwegs (oder dagegen) -> wir werten es als woke
    },
    {
        type: 'mc',
        question: "Das Wort 'Problem'...",
        answers: ["...nutze ich täglich.", "...versuche ich zu vermeiden.", "...ersetze ich durch 'Herausforderung'.", "...finde ich problematisch."],
        scores: [70, 50, 30, 95] // Problematisch > Täglich nutzen > Herausforderung > Vermeiden
    },
     {
        type: 'mc',
        question: "Die Debatte um Option1 war...",
        answers: ["Völlig überzogen.", "Wichtig und notwendig.", "Kompliziert, mit validen Punkten auf beiden Seiten.", "Ein weiterer Grund, Karl May neu zu bewerten."],
        scores: [10, 85, 65, 90] // Neu bewerten > Wichtig > Kompliziert > Überzogen
    },
     {
        type: 'mc',
        question: "Letzte Frage: Wie 'woke' fühlst du dich nach diesem Quiz?",
        answers: ["Verunsichert.", "Genau wie vorher.", "Ein bisschen ertappt.", "Bestätigt in meiner extremen Wokeness/Nicht-Wokeness."],
        scores: [50, 30, 70, 80] // Woke/Nicht-Woke Bestätigung > Ertappt > Verunsichert > Wie vorher
    },
];

// Funktion zum Berechnen der maximal möglichen Punktzahl (bleibt gleich)
export function calculateMaxScore() {
    return questions.reduce((max, q) => {
        if (q.type === 'mc') {
            // Finde die höchste Punktzahl für diese MC-Frage
            return max + Math.max(...q.scores);
        } else if (q.type === 'slider') {
            // Nimm die maximale Punktzahl des Sliders (scores[1])
            return max + q.scores[1];
        }
        return max; // Für unbekannte Typen
    }, 0);
}