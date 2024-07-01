// Importiere React Hooks (useState) aus dem React-Paket
import { useState } from "react";

// Importiere die QuestionTimer-Komponente
import QuestionTimer from "./QuestionTimer.jsx";

// Importiere die Answers-Komponente
import Answers from "./Answers.jsx";

// Importiere die Fragen aus einer externen Datei
import QUESTIONS from '../questions.js';

// Definiere die Question-Komponente als Standardexport
export default function Question({
    index, // Der Index der aktuellen Frage
    onSelectAnswer, // Funktion, die aufgerufen wird, wenn eine Antwort ausgewählt wird
    onSkipAnswer // Funktion, die aufgerufen wird, wenn die Zeit abläuft und die Frage übersprungen wird
}) {
    // Zustand für die ausgewählte Antwort und deren Korrektheit
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    // Setze die Timer-Dauer basierend auf dem Antwortstatus
    let timer = 10000; // Standard-Timer auf 10 Sekunden
    if (answer.selectedAnswer) {
        timer = 1000; // Wenn eine Antwort ausgewählt wurde, reduziere den Timer auf 1 Sekunde
    }
    if (answer.isCorrect !== null) {
        timer = 2000; // Wenn die Antwort als richtig oder falsch markiert wurde, setze den Timer auf 2 Sekunden
    }

    // Funktion zum Verarbeiten der Auswahl einer Antwort
    function handleSelectAnswer(selectedAnswer) {
        // Aktualisiere den Zustand mit der ausgewählten Antwort und setze isCorrect auf null
        setAnswer({
            selectedAnswer: selectedAnswer,
            isCorrect: null
        });

        // Erster Timeout: Warte 1 Sekunde, bevor die Korrektheit überprüft wird
        setTimeout(() => {
            setAnswer({
                selectedAnswer: selectedAnswer,
                isCorrect: QUESTIONS[index].answers[0] === selectedAnswer // Überprüfe, ob die Antwort korrekt ist
            });

            // Zweiter Timeout: Warte 2 Sekunden, bevor die onSelectAnswer-Funktion aufgerufen wird
            setTimeout(() => {
                onSelectAnswer(selectedAnswer); // Rufe die onSelectAnswer-Funktion auf, um die Antwort weiterzugeben
            }, 2000);

        }, 1000);
    }

    // Bestimme den Zustand der Antwort basierend auf der Auswahl und Korrektheit
    let answerState = '';
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong'; // Setze den Zustand auf 'correct' oder 'wrong'
    } else if (answer.selectedAnswer) {
        answerState = 'answered'; // Setze den Zustand auf 'answered', wenn eine Antwort ausgewählt wurde
    }

    return (
        <div id="question">
            {/* Integriere den QuestionTimer, der das Quiz nach einer bestimmten Zeitspanne automatisch fortsetzt */}
            <QuestionTimer 
                key={timer} // Schlüssel zur eindeutigen Identifizierung des Timers
                timeout={timer} // Setze das Timeout basierend auf dem aktuellen Timer-Wert
                onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} // Wenn das Timeout abläuft, rufe die onSkipAnswer-Funktion auf
                mode={answerState} // Übergebe den aktuellen Antwortzustand an den Timer
            />
            {/* Anzeige des Textes der aktuellen Frage */}
            <h2>{QUESTIONS[index].text}</h2>
            {/* Anzeige der Antwortoptionen */}
            <Answers 
                answers={QUESTIONS[index].answers} // Die Antworten für die aktuelle Frage
                selectedAnswer={answer.selectedAnswer} // Die vom Benutzer ausgewählte Antwort
                answerState={answerState} // Der Zustand der Antwort ('', 'answered', 'correct', 'wrong')
                onSelect={handleSelectAnswer} // Funktion zum Verarbeiten der Auswahl einer Antwort
            />
        </div>
    );
}
