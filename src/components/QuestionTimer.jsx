import { useEffect, useState } from "react";

// Definiere die QuestionTimer-Komponente als Standardexport
export default function QuestionTimer({ timeout, onTimeout }) {
    // Definiere einen Zustand für die verbleibende Zeit, initialisiert mit dem timeout-Wert
    const [remainingTime, setRemainingTime] = useState(timeout);

    // useEffect-Hook, um einen einmaligen Timeout zu setzen, der die onTimeout-Funktion nach Ablauf der timeout-Dauer aufruft
    useEffect(() => {
        console.log('SETTING TIMEOUT');
        setTimeout(onTimeout, timeout);
    }, [timeout, onTimeout]);

    // useEffect-Hook, um ein Intervall zu setzen, das die remainingTime alle 100 ms um 100 ms reduziert
    useEffect(() => {
        console.log('SETTING INTERVAL');
        setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);
    }, []);

    // Rückgabe der JSX-Struktur für die Fortschrittsanzeige
    return (
        <progress id="question-time" max={timeout} value={remainingTime} />
    );
}
