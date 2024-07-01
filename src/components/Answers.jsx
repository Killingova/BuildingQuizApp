// Importiere den useRef-Hook aus dem React-Paket
import { useRef } from "react";

// Definiere die Answers-Komponente als Standardexport
export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
    // Verwende useRef, um die gemischten Antworten nur einmal zu initialisieren
    const shuffledAnswers = useRef();

    // Initialisiere die gemischten Antworten nur einmal
    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers]; // Erstelle eine Kopie des answers-Arrays
        shuffledAnswers.current.sort(() => Math.random() - 0.5); // Mische die Antworten zufällig
    }

    return (
        <ul id="answers">
            {/* Iteriere durch die gemischten Antworten und rendere jede als Listenelement */}
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer; // Überprüfe, ob die aktuelle Antwort die ausgewählte ist
                let cssClass = '';

                // Setze die CSS-Klasse für die ausgewählte Antwort
                if (answerState === 'answered' && isSelected) {
                    cssClass = 'selected';
                }

                // Setze die CSS-Klasse basierend auf dem Antwortstatus ('correct' oder 'wrong')
                if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClass = answerState;
                }

                return (
                    <li key={answer} className="answer">
                        {/* Button, der die onSelect-Funktion aufruft, wenn eine Antwort ausgewählt wird */}
                        <button 
                            onClick={() => onSelect(answer)} 
                            className={cssClass}
                            disabled={answerState !== ''} // Deaktiviere den Button, wenn eine Antwort bereits ausgewählt wurde
                            >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
