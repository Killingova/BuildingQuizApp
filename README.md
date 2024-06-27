### Dokumentation zur `Quiz`-Komponente

#### Beschreibung
Die `Quiz`-Komponente ist eine React-Funktionskomponente, die eine Benutzeroberfläche für ein Quiz darstellt. Die Komponente verwaltet den Zustand der Benutzerantworten und aktualisiert die Anzeige basierend auf den gegebenen Antworten. Eine Abschlussnachricht wird angezeigt, wenn das Quiz beendet ist.

#### Importe
- `useState`: Ein React-Hook, der es ermöglicht, Zustände in Funktionskomponenten zu verwenden.
- `QUESTIONS`: Ein Array von Fragen, importiert aus einer externen Datei.
- `QuestionTimer`: Eine Komponente, die einen Countdown-Timer darstellt.
- `quizCompleteImg`: Ein Bild, das angezeigt wird, wenn das Quiz abgeschlossen ist.

#### Verwendung von `useState`
- **`userAnswers`**: Ein Array, das die Antworten des Benutzers speichert. Der Anfangszustand ist ein leeres Array.
- **`setUserAnswers`**: Eine Funktion, die zum Aktualisieren des `userAnswers`-Zustands verwendet wird. Sie ermöglicht das Hinzufügen neuer Antworten zum Array.

#### Berechnung des aktuellen Fragenindexes
- **`activeQuestionIndex`**: Eine Konstante, die den Index der aktuellen Frage berechnet. Sie basiert auf der Länge des `userAnswers`-Arrays. Die Anzahl der gegebenen Antworten entspricht dem Index der nächsten Frage, die gestellt werden soll.

#### Überprüfung des Quiz-Abschlusses
- **`quizIsComplete`**: Eine Konstante, die überprüft, ob das Quiz abgeschlossen ist. Dies wird durch den Vergleich des aktuellen Fragenindexes mit der Länge des `QUESTIONS`-Arrays erreicht. Wenn alle Fragen beantwortet wurden, wird `true` zurückgegeben.

#### Funktion zum Verarbeiten der Auswahl einer Antwort
- **`handleSelectAnswer`**: Eine Funktion, die aufgerufen wird, wenn ein Benutzer eine Antwort auswählt. Sie aktualisiert den Zustand `userAnswers`, indem sie die ausgewählte Antwort zum Array der Benutzerantworten hinzufügt. Dadurch wird der Index der aktiven Frage erhöht, sodass beim nächsten Rendern die nächste Frage angezeigt wird.

#### Mischen der Antworten
- **`shuffledAnswers`**: Eine Konstante, die die Antworten der aktuellen Frage in ein neues Array kopiert und die Antworten zufällig mischt. Dies wird durch das Kopieren des Arrays und anschließendes Zufallssortieren erreicht. Das Mischen der Antworten hilft, die Reihenfolge der Antworten bei jedem Rendern zu variieren, um ein besseres Benutzererlebnis zu bieten.

#### JSX-Struktur
- **`<div id="quiz">`**: Das übergeordnete Container-Element der Quiz-Komponente.
- **`<div id="question">`**: Ein Container für die aktuelle Frage und die dazugehörigen Antworten.
  - **`<QuestionTimer>`**: Integriert den QuestionTimer, der das Quiz nach einer bestimmten Zeitspanne automatisch fortsetzt.
  - **`<h2>`**: Zeigt den Text der aktuellen Frage an.
  - **`<ul id="answers">`**: Eine ungeordnete Liste, die die möglichen Antworten als Listenelemente enthält.
    - **`<li>`**: Jedes Listenelement enthält eine Antwort als Button.
      - **`<button>`**: Ein Button, der die `handleSelectAnswer`-Funktion aufruft, wenn er geklickt wird. Der Button zeigt den Text der Antwort an.

#### Anzeige des Quiz-Abschlusses
- **`<div id="summary">`**: Ein Container, der angezeigt wird, wenn das Quiz abgeschlossen ist.
  - **`<img>`**: Zeigt ein Bild (Trophäe) an, um den Abschluss des Quiz zu visualisieren.
  - **`<h2>`**: Zeigt die Nachricht "Quiz Completed!" an.

#### Zusammenfassung
Die `Quiz`-Komponente rendert dynamisch Fragen und Antworten basierend auf den Benutzerinteraktionen. Die Komponente aktualisiert den Zustand der Benutzerantworten und zeigt die nächste Frage an, sobald eine Antwort ausgewählt wurde. Durch die Verwendung von React Hooks und zustandsbasierter Logik bleibt die Komponente reaktiv und interaktiv. Das Zufallsmischen der Antworten sorgt für Variation und verbessert das Benutzererlebnis. Wenn das Quiz abgeschlossen ist, wird eine Abschlussnachricht mit einem Bild angezeigt, was dem Benutzer ein visuelles Feedback zum Abschluss gibt.

### Verwendung von `useEffect`

In der aktuellen `Quiz`-Komponente wird `useEffect` nicht verwendet, daher ist es hilfreich, eine separate Erklärung zur `useEffect`-Hook zu geben.

#### Beschreibung von `useEffect`

`useEffect` ist ein Hook in React, der es Ihnen ermöglicht, Seiteneffekte in Funktionskomponenten zu verwenden. Seiteneffekte sind Operationen, die außerhalb der reinen Berechnung von JSX passieren, wie z.B. das Abrufen von Daten, das Einrichten eines Timers oder das direkte Manipulieren des DOM.

#### Verwendung von `useEffect`

Die Grundstruktur von `useEffect` sieht so aus:

```jsx
import { useEffect } from 'react';

useEffect(() => {
    // Dies ist der Effekt
    console.log('Component has mounted or updated');

    // Cleanup-Funktion (optional)
    return () => {
        console.log('Cleanup on component unmount or before the next effect runs');
    };
}, [dependencies]); // Abhängigkeits-Array
```

#### Erklärung

1. **Effekt-Funktion**: Die Funktion, die Sie an `useEffect` übergeben, wird beim Rendern der Komponente ausgeführt. Hier platzieren Sie den Code für Ihre Seiteneffekte.
2. **Cleanup-Funktion**: Optional können Sie eine Funktion zurückgeben, die vor dem nächsten Effektaufruf oder beim Demontieren der Komponente aufgerufen wird. Dies ist nützlich zum Aufräumen, z.B. das Entfernen von Event-Listenern oder das Abbrechen von API-Anfragen.
3. **Abhängigkeits-Array**: Dieses Array steuert, wann der Effekt erneut ausgeführt wird. Wenn eine der Abhängigkeiten sich ändert, wird der Effekt erneut ausgeführt. Wenn Sie ein leeres Array (`[]`) angeben, wird der Effekt nur einmal nach dem ersten Rendern ausgeführt.

#### Beispiel für `useEffect`

Ein einfaches Beispiel für die Verwendung von `useEffect`:

```jsx
import React, { useState, useEffect } from 'react';

function TimerComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Setzt ein Intervall, das den Zähler jede Sekunde erhöht
        const interval = setInterval(() => {
            setCount(c => c + 1);
        }, 1000);

        // Cleanup-Funktion zum Entfernen des Intervalls beim Demontieren der Komponente
        return () => clearInterval(interval);
    }, []); // Leeres Abhängigkeits-Array bedeutet, dass dieser Effekt nur einmal ausgeführt wird

    return <div>Count: {count}</div>;
}
```

In diesem Beispiel:

- Der Effekt setzt ein Intervall, das jede Sekunde den Zähler erhöht.
- Die Cleanup-Funktion entfernt das Intervall, wenn die Komponente demontiert wird.

### Zusammenfassung

`useEffect` ist ein mächtiges Werkzeug, um Seiteneffekte in Funktionskomponenten zu verwalten. Es ermöglicht das Einrichten von Effekten, die auf Änderungen von Zuständen oder Props reagieren, und stellt sicher, dass Ressourcen korrekt bereinigt werden, wenn die Komponente nicht mehr benötigt wird.
### Dokumentation zur `QuestionTimer`-Komponente

#### Beschreibung
Die `QuestionTimer`-Komponente ist eine React-Funktionskomponente, die einen Countdown-Timer darstellt. Nach Ablauf einer vorgegebenen Zeitspanne wird eine Callback-Funktion ausgeführt. Diese Komponente eignet sich besonders für Anwendungen, bei denen Benutzer innerhalb einer bestimmten Zeit eine Aufgabe erledigen müssen, beispielsweise in einem Quiz.

#### Importe
- **`useEffect`**: Ein Hook aus React, der es ermöglicht, Seiteneffekte in Funktionskomponenten zu verwenden.
- **`useState`**: Ein Hook aus React, der es ermöglicht, Zustände in Funktionskomponenten zu verwenden.

#### Eigenschaften (Props)
- **`timeout`**: (Number) Die gesamte Zeitspanne in Millisekunden, die der Timer läuft, bevor die `onTimeout`-Funktion aufgerufen wird.
- **`onTimeout`**: (Function) Eine Callback-Funktion, die ausgeführt wird, wenn der Timer abläuft.

#### Verwendung von `useState`
- **`remainingTime`**: Ein Zustand, der die verbleibende Zeit in Millisekunden speichert. Dieser Zustand wird mit dem Wert von `timeout` initialisiert.

#### Verwendung von `useEffect`
- **Timeout-Effekt**: Setzt einen einmaligen `setTimeout`, der die `onTimeout`-Funktion nach Ablauf der `timeout`-Dauer aufruft.
- **Intervall-Effekt**: Setzt ein `setInterval`, das den `remainingTime`-Zustand alle 100 Millisekunden um 100 Millisekunden reduziert.

#### Funktionsweise von `useEffect`
1. **Timeout-Effekt**:
   - Der `useEffect`-Hook setzt einen `setTimeout`, der die `onTimeout`-Funktion nach der angegebenen `timeout`-Dauer aufruft.
   - **Abhängigkeiten**: `[timeout, onTimeout]` bedeutet, dass der Effekt jedes Mal ausgeführt wird, wenn sich `timeout` oder `onTimeout` ändern.
   - Konsolenprotokoll: "SETTING TIMEOUT" wird ausgegeben, wenn der Effekt gesetzt wird.

2. **Intervall-Effekt**:
   - Der `useEffect`-Hook setzt ein `setInterval`, das den `remainingTime`-Zustand alle 100 Millisekunden um 100 Millisekunden reduziert.
   - **Abhängigkeiten**: Ein leeres Array `[]` bedeutet, dass der Effekt nur einmal beim ersten Rendern ausgeführt wird.
   - Konsolenprotokoll: "SETTING INTERVAL" wird ausgegeben, wenn der Effekt gesetzt wird.

#### JSX-Struktur
- **`<progress>`-Element**: Ein HTML-Progress-Element, das die verbleibende Zeit als Fortschrittsbalken anzeigt.
  - `max`-Attribut: Setzt die maximale Zeitdauer (`timeout`).
  - `value`-Attribut: Setzt den aktuellen Wert der verbleibenden Zeit (`remainingTime`).

#### Beispielcode

```jsx
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
```

### Erklärung der Kommentare

1. **Importe**:
   - Importiere notwendige Hooks (`useEffect` und `useState`) aus React.

2. **Zustandsverwaltung**:
   - `remainingTime`: Ein Zustand, der die verbleibende Zeit in Millisekunden speichert, initialisiert mit dem `timeout`-Wert.
   - `setRemainingTime`: Eine Funktion, um den Zustand `remainingTime` zu aktualisieren.

3. **Timeout-Effekt**:
   - `useEffect`-Hook: Setzt einen `setTimeout`, der die `onTimeout`-Funktion nach Ablauf der `timeout`-Dauer aufruft.
   - Konsolenprotokoll: Loggt "SETTING TIMEOUT", wenn der Effekt gesetzt wird.
   - Abhängigkeiten: Der Effekt wird erneut ausgeführt, wenn sich `timeout` oder `onTimeout` ändern.

4. **Intervall-Effekt**:
   - `useEffect`-Hook: Setzt ein `setInterval`, das den `remainingTime`-Zustand alle 100 Millisekunden um 100 Millisekunden reduziert.
   - Konsolenprotokoll: Loggt "SETTING INTERVAL", wenn der Effekt gesetzt wird.
   - Abhängigkeiten: Der Effekt wird nur einmal beim ersten Rendern ausgeführt (leeres Abhängigkeitsarray).

5. **JSX-Rückgabe**:
   - Rendere ein `<progress>`-Element, das die Fortschrittsanzeige basierend auf der verbleibenden Zeit (`remainingTime`) darstellt.
   - `max`-Attribut: Setzt die maximale Zeitdauer (`timeout`).
   - `value`-Attribut: Setzt den aktuellen Wert der verbleibenden Zeit (`remainingTime`).

Diese Dokumentation sollte Ihnen helfen, die Funktionsweise der `QuestionTimer`-Komponente und die Verwendung von `useEffect` in diesem Kontext besser zu verstehen.

### Dokumentation zu den Anpassungen: Verwendung von `useCallback` und Effektabhängigkeiten

#### Beschreibung der Anpassungen
In der aktualisierten `Quiz`-Komponente wurde der `useCallback`-Hook verwendet, um die Funktionen `handleSelectAnswer` und `handleSkipAnswer` zu memoizieren. Dies verhindert, dass diese Funktionen bei jedem Rendern neu erstellt werden, was insbesondere nützlich ist, wenn diese Funktionen an andere Komponenten weitergegeben werden, die möglicherweise unnötig neu gerendert werden, wenn sich die Funktionen ändern.

#### Verwendung von `useCallback`

- **`useCallback`**: Ein Hook, der eine memoizierte Version der Rückruffunktion zurückgibt, die nur neu erstellt wird, wenn eine der Abhängigkeiten sich ändert.

#### Funktionen

1. **`handleSelectAnswer`**:
   - Definiert mit `useCallback`, um sicherzustellen, dass die Funktion nur neu erstellt wird, wenn sich die Abhängigkeiten ändern.
   - **Abhängigkeiten**: Ein leeres Array (`[]`), was bedeutet, dass die Funktion nur einmal erstellt wird und sich nicht ändert.

   ```jsx
   const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
       setUserAnswers((prevUserAnswers) => {
         return [...prevUserAnswers, selectedAnswer];
       });
   }, []);
   ```

2. **`handleSkipAnswer`**:
   - Definiert mit `useCallback`, um sicherzustellen, dass die Funktion nur neu erstellt wird, wenn `handleSelectAnswer` sich ändert.
   - Ruft `handleSelectAnswer(null)` auf, um die aktuelle Frage zu überspringen.

   ```jsx
   const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);
   ```

#### Integration mit `QuestionTimer`

- Die `onTimeout`-Eigenschaft von `QuestionTimer` wurde auf die memoizierte Funktion `handleSelectAnswer` gesetzt, um sicherzustellen, dass `handleSelectAnswer` nicht bei jedem Rendern neu erstellt wird und die Komponente `QuestionTimer` unnötig neu rendert.

```jsx
<QuestionTimer 
    timeout={10000} 
    onTimeout={handleSelectAnswer} 
/>
```

### Zusammenfassung der Anpassungen
Die Verwendung von `useCallback` in der `Quiz`-Komponente stellt sicher, dass die Funktionen `handleSelectAnswer` und `handleSkipAnswer` nur bei Bedarf neu erstellt werden. Dies verbessert die Leistung, indem unnötige Neuberechnungen und Renderings vermieden werden, insbesondere wenn diese Funktionen an andere Komponenten weitergegeben werden, wie z.B. an den `QuestionTimer`.
