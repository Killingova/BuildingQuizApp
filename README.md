# BuildingQuizApp

### Dokumentation zur `Quiz`-Komponente

#### Beschreibung
Die `Quiz`-Komponente ist eine React-Funktionskomponente, die eine Quiz-Benutzeroberfläche rendert, in der Benutzer Antworten auf Fragen auswählen können. Die Komponente verwaltet den Zustand der Benutzerantworten und aktualisiert die Anzeige basierend auf den gegebenen Antworten. Zudem zeigt die Komponente eine Abschlussnachricht an, wenn das Quiz beendet ist.

#### Zustandsverwaltung
- **`userAnswers`**: Ein Array, das die Antworten des Benutzers speichert. Der Anfangszustand ist ein leeres Array.
- **`setUserAnswers`**: Eine Funktion, die zum Aktualisieren des `userAnswers`-Zustands verwendet wird. Sie ermöglicht das Hinzufügen neuer Antworten zum Array.

#### Berechnung des aktuellen Fragenindexes
- **`activeQuestionIndex`**: Eine Konstante, die den Index der aktuellen Frage berechnet. Sie basiert auf der Länge des `userAnswers`-Arrays. Die Anzahl der gegebenen Antworten entspricht dem Index der nächsten Frage, die gestellt werden soll.

#### Überprüfung des Quiz-Abschlusses
- **`quizIsComplete`**: Eine Konstante, die überprüft, ob das Quiz abgeschlossen ist. Dies wird durch den Vergleich des aktuellen Fragenindexes mit der Länge des `QUESTIONS`-Arrays erreicht. Wenn alle Fragen beantwortet wurden, wird `true` zurückgegeben.

#### Kopieren und Mischen der Antworten
- **`shuffledAnswers`**: Eine Konstante, die die Antworten der aktuellen Frage in ein neues Array kopiert und die Antworten zufällig mischt. Dies wird durch das Kopieren des Arrays und anschließendes Zufallssortieren erreicht. Das Mischen der Antworten hilft, die Reihenfolge der Antworten bei jedem Rendern zu variieren, um ein besseres Benutzererlebnis zu bieten.

#### Funktionen
- **`handleSelectAnswer`**: Eine Funktion, die aufgerufen wird, wenn ein Benutzer eine Antwort auswählt. Sie aktualisiert den Zustand `userAnswers`, indem sie die ausgewählte Antwort zum Array der Benutzerantworten hinzufügt. Dadurch wird der Index der aktiven Frage erhöht, sodass beim nächsten Rendern die nächste Frage angezeigt wird.

#### JSX-Struktur
- **`<div id="quiz">`**: Das übergeordnete Container-Element der Quiz-Komponente.
- **`<div id="question">`**: Ein Container für die aktuelle Frage und die dazugehörigen Antworten.
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

### Dokumentation zur `QuestionTimer`-Komponente

#### Beschreibung
Die `QuestionTimer`-Komponente ist eine React-Funktionskomponente, die einen Countdown-Timer darstellt. Nach Ablauf einer vorgegebenen Zeitspanne wird eine Callback-Funktion ausgeführt. Diese Komponente eignet sich besonders für Anwendungen, bei denen Benutzer innerhalb einer bestimmten Zeit eine Aufgabe erledigen müssen, beispielsweise in einem Quiz.

#### Eigenschaften (Props)
- **`timeout`**: (Number) Die gesamte Zeitspanne in Millisekunden, die der Timer läuft, bevor die `onTimeout`-Funktion aufgerufen wird.
- **`onTimeout`**: (Function) Eine Callback-Funktion, die ausgeführt wird, wenn der Timer abläuft.

#### Zustand
- **`remainingTime`**: (Number) Ein Zustand, der die verbleibende Zeit in Millisekunden speichert. Dieser Zustand wird mit dem Wert von `timeout` initialisiert.

#### Verwendung von Hooks
- **`useEffect`**: Es werden zwei `useEffect`-Hooks verwendet:
  1. **Timeout-Effekt**: Ein `setTimeout` wird gesetzt, der die `onTimeout`-Funktion nach Ablauf der `timeout`-Dauer aufruft. Dieser Timeout wird bei der Demontage der Komponente oder bei Änderungen der Abhängigkeiten (`timeout`, `onTimeout`) bereinigt.
  2. **Intervall-Effekt**: Ein `setInterval` wird gesetzt, der den `remainingTime`-Zustand alle 100 Millisekunden um 100 Millisekunden reduziert. Dieses Intervall wird bei der Demontage der Komponente bereinigt, um Speicherlecks zu vermeiden.

#### Funktionsweise
1. **Initialisierung**: Beim ersten Rendern der Komponente wird der `remainingTime`-Zustand mit dem Wert von `timeout` initialisiert.
2. **Timeout**: Ein `setTimeout` wird gesetzt, der nach Ablauf der `timeout`-Dauer die `onTimeout`-Funktion aufruft. Dieser Timeout wird bereinigt, wenn die Komponente demontiert wird oder sich die Abhängigkeiten ändern.
3. **Intervall**: Ein `setInterval` wird gesetzt, der alle 100 Millisekunden den `remainingTime`-Zustand um 100 Millisekunden reduziert. Dieses Intervall wird ebenfalls bereinigt, wenn die Komponente demontiert wird.

#### JSX-Struktur
- **`<progress>`-Element**: Ein HTML-Progress-Element, das die verbleibende Zeit als Fortschrittsbalken anzeigt. Das `max`-Attribut wird auf den Wert von `timeout` gesetzt, und das `value`-Attribut wird auf den Wert von `remainingTime` gesetzt.

#### Zusammenfassung
Die `QuestionTimer`-Komponente bietet eine einfache und effektive Möglichkeit, zeitgesteuerte Aktionen in einer React-Anwendung zu implementieren. Sie verwendet die Hooks `useState` und `useEffect`, um den Zustand und die Seiteneffekte zu verwalten, und sorgt durch Bereinigungsfunktionen dafür, dass keine Speicherlecks entstehen. Diese Komponente ist besonders nützlich in Szenarien, in denen eine Aktion nach einer festgelegten Zeit automatisch ausgeführt werden muss, wie zum Beispiel in einem Quiz, bei dem die Benutzer eine begrenzte Zeit haben, um eine Frage zu beantworten.