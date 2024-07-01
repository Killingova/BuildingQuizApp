// Importiere das Bild für die Abschlussanzeige
import quizCompleteImg from '../assets/quiz-complete.png';

// Importiere die Fragenliste
import QUESTIONS from '../questions.js';

// Definiere die Summary-Komponente als Standardexport
export default function Summary({ userAnswers }) {
    // Finde alle übersprungenen Antworten (null)
    const skippedAnswers = userAnswers.filter(answer => answer === null);

    // Finde alle richtigen Antworten
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

    // Berechne den Anteil der übersprungenen Antworten in Prozent
    const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100);

    // Berechne den Anteil der richtigen Antworten in Prozent
    const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100);

    // Berechne den Anteil der falschen Antworten in Prozent
    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

    return (
        <div id="summary">
            {/* Anzeige des Abschlussbildes */}
            <img src={quizCompleteImg} alt="Trophy icon" />
            <h2>Quiz Completed!</h2>
            {/* Anzeige der Quiz-Statistiken */}
            <div id='summary-stats'>
                <p>
                    <span className="number">{skippedAnswersShare}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersShare}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{wrongAnswersShare}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            {/* Liste der Antworten des Benutzers */}
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer ';

                    // Bestimme die CSS-Klasse basierend auf der Antwort
                    if (answer === null) {
                        cssClass += 'skipped'; // Wenn die Antwort übersprungen wurde
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += 'correct'; // Wenn die Antwort richtig ist
                    } else {
                        cssClass += 'wrong'; // Wenn die Antwort falsch ist
                    }

                    return (
                        <li key={index}>
                            {/* Index der Frage */}
                            <h3>{index + 1}</h3>
                            {/* Text der Frage */}
                            <p className="question">{QUESTIONS[index].text}</p>
                            {/* Platzhalter für die Antwort des Benutzers */}
                            <p className={cssClass}>{answer !== null ? answer : 'Skipped'}</p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
