// Importiere React Hooks (useState und useCallback) aus dem React-Paket
import { useState, useCallback } from "react";

// Importiere die Fragen aus einer externen Datei
import QUESTIONS from '../questions.js';

// Importiere die Question-Komponente
import Question from "./Question.jsx";

// Importiere die Summary-Komponente
import Summary from "./Summary.jsx";

// Definiere die Quiz-Komponente und exportiere sie als Standardexport
export default function Quiz() {
    // useState-Hook für die Speicherung der Antworten des Benutzers
    const [userAnswers, setUserAnswers] = useState([]);

    // Berechne den Index der aktuellen Frage
    const activeQuestionIndex = userAnswers.length;

    // Überprüfe, ob das Quiz abgeschlossen ist
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    // Callback-Funktion für die Auswahl einer Antwort
    const handleSelectAnswer = useCallback((selectedAnswer) => {
        // Aktualisiere den Zustand der Benutzerantworten
        setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
    }, []);

    // Callback-Funktion zum Überspringen einer Antwort
    const handleSkipAnswer = useCallback(() => {
        // Überspringe die Frage durch Hinzufügen einer null-Antwort
        handleSelectAnswer(null);
    }, [handleSelectAnswer]);

    // Überprüfe, ob das Quiz abgeschlossen ist
    if (quizIsComplete) {
        // Wenn das Quiz abgeschlossen ist, zeige die Summary-Komponente an
        return <Summary userAnswers={userAnswers} />;
    }

    // Wenn das Quiz noch nicht abgeschlossen ist, zeige die aktuelle Frage an
    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex} // Schlüssel zur eindeutigen Identifizierung der Frage
                index={activeQuestionIndex} // Index der aktuellen Frage
                onSelectAnswer={handleSelectAnswer} // Funktion zum Auswählen einer Antwort
                onSkipAnswer={handleSkipAnswer} // Funktion zum Überspringen einer Antwort
            />
        </div>
    );
}
