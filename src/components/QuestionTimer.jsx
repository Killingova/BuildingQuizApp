// Importiere die useEffect- und useState-Hooks aus dem React-Paket
import { useEffect, useState } from "react";

// Definiere die QuestionTimer-Komponente als Standardexport
export default function QuestionTimer({ timeout, onTimeout, mode }) {
    // Definiere einen Zustand für die verbleibende Zeit, initialisiert mit dem timeout-Wert
    const [remainingTime, setRemainingTime] = useState(timeout);

    // useEffect-Hook, um einen einmaligen Timeout zu setzen, der die onTimeout-Funktion nach Ablauf der timeout-Dauer aufruft
    useEffect(() => {
        console.log('SETTING TIMEOUT');
        const timer = setTimeout(onTimeout, timeout);

        // Bereinigt den Timeout, wenn die Komponente unmontiert wird oder wenn timeout oder onTimeout sich ändern
        return () => {
            clearTimeout(timer);                
        };
    }, [timeout, onTimeout]);

    // useEffect-Hook, um ein Intervall zu setzen, das die remainingTime alle 100 ms um 100 ms reduziert
    useEffect(() => {
        console.log('SETTING INTERVAL');
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);

        // Bereinigt das Intervall, wenn die Komponente unmontiert wird
        return () => {
            clearInterval(interval);
        };
    }, []); // Leeres Abhängigkeitsarray, damit der Effekt nur einmal beim ersten Rendern ausgeführt wird

    // Rückgabe der JSX-Struktur für die Fortschrittsanzeige
    return (
        <progress 
            id="question-time" 
            max={timeout} 
            value={remainingTime} 
            className={mode} // Setze die CSS-Klasse basierend auf dem mode-Prop
        />
    );
}
