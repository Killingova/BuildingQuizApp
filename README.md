## Detaillierte Dokumentation der React Quiz-App

### Überblick

Diese Dokumentation beschreibt die Funktionsweise der wichtigsten Komponenten Ihrer React Quiz-App, insbesondere `Quiz.jsx`, `Question.jsx`, `Answers.jsx` und `QuestionTimer.jsx`. Wir erklären die Verwendung von `useState`, `useEffect`, `useRef` und `useCallback` im Kontext dieser Komponenten und wie sie zusammenarbeiten, um ein interaktives Quiz-Erlebnis zu bieten.

## Übersicht der App

Die React Quiz-App besteht aus mehreren Komponenten, die zusammenarbeiten, um ein interaktives Quiz zu ermöglichen. Die Hauptkomponenten sind:

1. **App.jsx**: Die Hauptkomponente, die das Grundgerüst der Anwendung bildet und die `Header`- und `Quiz`-Komponenten rendert.
2. **Quiz.jsx**: Die Hauptkomponente, die das Quiz-Interface darstellt und die Logik für die Fragen und Antworten enthält.
3. **Question.jsx**: Eine Komponente, die eine einzelne Frage und deren Antworten darstellt.
4. **Answers.jsx**: Eine Komponente, die die Antwortoptionen für eine Frage darstellt.
5. **QuestionTimer.jsx**: Eine Komponente, die einen Timer für jede Frage darstellt.
6. **Summary.jsx**: Eine Komponente, die die Zusammenfassung der Antworten darstellt.

### App.jsx

#### Beschreibung

Die `App`-Komponente ist die Hauptkomponente der Anwendung. Sie dient als Container für andere Komponenten und ist verantwortlich für das Rendern der `Header`- und `Quiz`-Komponenten.

#### Aufbau und Zusammenhänge

- **Header**: Zeigt den Titel oder das Branding der Quiz-App an.
- **Quiz**: Verwaltet den Quiz-Ablauf, einschließlich der Anzeige von Fragen und der Sammlung von Benutzerantworten.

### Quiz.jsx

#### Beschreibung

Die `Quiz`-Komponente ist die zentrale Komponente der App, die den Zustand des Quiz verwaltet, einschließlich der Benutzerantworten und des Antwortstatus. Sie rendert die `Question`-Komponente und zeigt eine Abschlussnachricht an, wenn das Quiz beendet ist.

#### Aufbau und Zusammenhänge

1. **Importe**: Importiert notwendige Hooks und Komponenten (`useState`, `useCallback`, `QUESTIONS`, `Question`, `Summary`).
2. **Zustandsverwaltung**: Verwendet `useState` zur Verwaltung der Benutzerantworten.
   - **`userAnswers`**: Ein Array, das die Antworten des Benutzers speichert.
3. **Ablaufkontrolle**:
   - Berechnet den Index der aktuellen Frage (`activeQuestionIndex`) basierend auf der Länge des `userAnswers`-Arrays.
   - Überprüft, ob das Quiz abgeschlossen ist (`quizIsComplete`), indem es den Index der aktuellen Frage mit der Länge der Fragenliste vergleicht.
4. **Antwortverwaltung**:
   - **handleSelectAnswer**: Funktion, die die Antwort des Benutzers verarbeitet und den Zustand aktualisiert.
   - **handleSkipAnswer**: Funktion, die es ermöglicht, eine Frage zu überspringen, indem sie `handleSelectAnswer` mit `null` aufruft.
5. **Rendering**:
   - Wenn das Quiz abgeschlossen ist, wird die `Summary`-Komponente gerendert.
   - Andernfalls wird die `Question`-Komponente gerendert, um die aktuelle Frage anzuzeigen.

### Question.jsx

#### Beschreibung

Die `Question`-Komponente zeigt die aktuelle Frage und die Antwortoptionen an. Zusätzlich wird ein Timer integriert, der die verfügbare Zeit zum Beantworten der Frage anzeigt.

#### Aufbau und Zusammenhänge

1. **Importe**: Importiert notwendige Hooks und Komponenten (`useState`, `QuestionTimer`, `Answers`, `QUESTIONS`).
2. **Zustandsverwaltung**: Verwendet `useState`, um die ausgewählte Antwort und deren Korrektheit zu speichern.
   - **`answer`**: Ein Objekt, das die ausgewählte Antwort (`selectedAnswer`) und deren Korrektheit (`isCorrect`) enthält.
3. **Timer-Verwaltung**: Dynamisch angepasst basierend auf dem Status der Antwort:
   - **Standard-Timer**: Auf 10 Sekunden gesetzt, wenn keine Antwort ausgewählt wurde.
   - **Reduzierter Timer**: Auf 1 Sekunde gesetzt, wenn eine Antwort ausgewählt wurde.
   - **Erweiterter Timer**: Auf 2 Sekunden gesetzt, wenn die Antwort als richtig oder falsch markiert wurde.
4. **Antwortauswahl**:
   - **handleSelectAnswer**: Funktion, die die Auswahl einer Antwort durch den Benutzer verarbeitet. Sie aktualisiert den Zustand der Antwort und setzt einen Timeout, um die Korrektheit der Antwort nach 1 Sekunde zu überprüfen. Nach weiteren 2 Sekunden wird `onSelectAnswer` aufgerufen, um die Antwort weiterzugeben.
5. **Rendering**:
   - **QuestionTimer**: Zeigt den Timer an.
   - **Fragetext**: Zeigt den Text der aktuellen Frage an.
   - **Answers**: Zeigt die Antwortoptionen an.

### Answers.jsx

#### Beschreibung

Die `Answers`-Komponente stellt die Antwortoptionen für eine Frage dar. Sie mischt die Antworten und rendert sie als Listenelemente.

#### Aufbau und Zusammenhänge

1. **Importe**: Importiert notwendige Hooks (`useRef`).
2. **Antwortmischung**: Verwendet `useRef`, um die Antworten nur einmal zu mischen und sicherzustellen, dass die Reihenfolge der Antworten während des Renderns konstant bleibt.
   - **`shuffledAnswers`**: Ein Ref-Objekt, das die gemischten Antworten speichert.
3. **Klick-Handler**:
   - **onSelect**: Funktion, die aufgerufen wird, wenn eine Antwort ausgewählt wird. Sie verarbeitet die Auswahl der Antwort und deaktiviert die Antwortoptionen nach der Auswahl.
4. **CSS-Klassenverwaltung**: Basierend auf dem Zustand der Antwort (`answerState`) wird die CSS-Klasse der Antwort-Buttons gesetzt:
   - **'selected'**: Wenn die Antwort ausgewählt wurde.
   - **'correct'**: Wenn die Antwort korrekt ist.
   - **'wrong'**: Wenn die Antwort falsch ist.
5. **Rendering**:
   - Eine Liste (`<ul>`) wird erstellt, die die gemischten Antworten als Listenelemente (`<li>`) enthält.

### QuestionTimer.jsx

#### Beschreibung

Die `QuestionTimer`-Komponente stellt einen Timer für jede Frage dar und ruft eine Callback-Funktion auf, wenn die Zeit abgelaufen ist.

#### Aufbau und Zusammenhänge

1. **Importe**: Importiert notwendige Hooks (`useEffect`, `useState`).
2. **Zeitverwaltung**:
   - **`remainingTime`**: Ein Zustand, der die verbleibende Zeit in Millisekunden speichert.
3. **Effekte**:
   - **Timeout-Effekt**: Verwendet `useEffect`, um einen einmaligen `setTimeout` zu setzen, der die `onTimeout`-Funktion nach Ablauf der `timeout`-Dauer aufruft.
   - **Intervall-Effekt**: Verwendet `useEffect`, um ein `setInterval` zu setzen, das die `remainingTime` alle 100 Millisekunden um 100 Millisekunden reduziert.
4. **Bereinigung**: Die Timer- und Intervall-Funktionen werden bereinigt, wenn die Komponente unmontiert wird, um Speicherlecks zu vermeiden.
5. **Rendering**:
   - Ein HTML-Progress-Element (`<progress>`) zeigt die verbleibende Zeit als Fortschrittsbalken an.

### Summary.jsx

#### Beschreibung

Die `Summary`-Komponente zeigt eine Zusammenfassung der Quiz-Ergebnisse an. Sie berechnet die Anteile der übersprungenen, richtigen und falschen Antworten und zeigt diese in einer übersichtlichen Form an.

#### Aufbau und Zusammenhänge

1. **Importe**: Importiert das Abschlussbild (`quizCompleteImg`) und die Fragenliste (`QUESTIONS`).
2. **Ergebnisberechnung**:
   - **skippedAnswers**: Filtert die Benutzerantworten, um die übersprungenen Antworten zu finden.
   - **correctAnswers**: Filtert die Benutzerantworten, um die korrekten Antworten zu finden.
   - **skippedAnswersShare**: Berechnet den prozentualen Anteil der übersprungenen Antworten.
   - **correctAnswersShare**: Berechnet den prozentualen Anteil der korrekten Antworten.
   - **wrongAnswersShare**: Berechnet den prozentualen Anteil der falschen Antworten.
3. **Antwortübersicht**: Zeigt eine Liste aller Fragen und der gegebenen Antworten an, markiert die korrekten und falschen Antworten und zeigt an, welche Fragen übersprungen wurden.
4. **Rendering**:
   - Ein Bild (`<img>`) zeigt das Abschlussbild an.
   - Statistiken (`<div id='summary-stats'>`) zeigen die Prozentsätze der übersprungenen, richtigen und falschen Antworten.
   - Eine geordnete Liste (`<ol>`) zeigt alle Fragen und die gegebenen Antworten an.

### Verwendung von React Hooks

- **useState**: Wird verwendet, um den Zustand in funktionalen Komponenten zu verwalten. In dieser App wird `useState` verwendet, um Benutzerantworten, die verbleibende Zeit und den Zustand der Antworten zu speichern und zu aktualisieren.
- **useRef**: Wird verwendet, um mutable Objekte zu erstellen, die ihre Werte zwischen Render-Vorgängen beibehalten. In dieser App wird

 `useRef` verwendet, um die Antworten nur einmal zu mischen und sicherzustellen, dass diese Mischung zwischen den Render-Vorgängen beibehalten wird.
- **useCallback**: Wird verwendet, um eine Memoisierung von Funktionen zu ermöglichen und zu verhindern, dass diese Funktionen bei jedem Rendern neu erstellt werden. In dieser App wird `useCallback` verwendet, um die Antwortauswahl- und Überspringfunktionen zu optimieren und sicherzustellen, dass sie nur neu erstellt werden, wenn es notwendig ist.
- **useEffect**: Wird verwendet, um Nebenwirkungen in funktionalen Komponenten auszuführen. In dieser App wird `useEffect` verwendet, um Timer und Intervalle zu setzen und zu verwalten, die die Zeitverwaltung und das automatische Fortschreiten des Quiz steuern.

## Zusammenfassung

Diese Quiz-App ist modular aufgebaut und nutzt die Stärken von React, um eine interaktive und benutzerfreundliche Quiz-Erfahrung zu bieten. Die Verwendung von Hooks wie `useState`, `useRef`, `useCallback` und `useEffect` ermöglicht eine effiziente und klare Verwaltung des Zustands und der Nebenwirkungen in den Komponenten. Jede Komponente hat eine klar definierte Rolle und trägt dazu bei, das Gesamtbild der Anwendung zu formen.