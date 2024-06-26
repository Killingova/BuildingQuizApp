# BuildingQuizApp

### Dokumentation zur Quiz-Komponente

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