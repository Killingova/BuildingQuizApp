import { useState } from "react";
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';

// Definiere die Quiz-Komponente als Standardexport
export default function Quiz() {
    // Definiere einen Zustand für die Antworten des Benutzers. Initial ist dieser ein leeres Array.
    const [userAnswers, setUserAnswers] = useState([]);

    // Berechne den Index der aktuellen Frage basierend auf der Anzahl der gegebenen Antworten.
    const activeQuestionIndex = userAnswers.length;

    // Überprüfe, ob das Quiz abgeschlossen ist.
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    // Funktion zum Verarbeiten der Auswahl einer Antwort.
    function handleSelectAnswer(selectedAnswer) {
        // Aktualisiere die userAnswers, um die ausgewählte Antwort hinzuzufügen.
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }

    // Wenn das Quiz abgeschlossen ist, zeige die Abschlussnachricht und das Bild an.
    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon" />
                <h2>Quiz Completed!</h2>
            </div>
        );
    }

    // Kopiere die Antworten der aktuellen Frage in ein neues Array.
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    // Mische die Antworten zufällig.
    shuffledAnswers.sort(() => Math.random() - 0.5);

    // Rückgabe der JSX-Struktur für das Quiz-UI.
    return (
        <div id="quiz">
            <div id="question">
                {/* Anzeige des Textes der aktuellen Frage */}
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {/* Iteriere durch die gemischten Antworten und rendere jede als Listenelement */}
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            {/* Button, der die handleSelectAnswer-Funktion aufruft, wenn eine Antwort ausgewählt wird */}
                            <button onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
