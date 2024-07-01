// Importiere die Header-Komponente aus der Datei "Header.jsx" im Ordner "components"
import Header from "./components/Header.jsx";

// Importiere die Quiz-Komponente aus der Datei "Quiz.jsx" im Ordner "components"
import Quiz from "./components/Quiz.jsx";

// Definiere die Hauptkomponente der App
function App() {
    return (
        // Fragmente (leere Tags) werden verwendet, um mehrere Elemente ohne zusätzliche Knoten zu gruppieren
        <>  
            {/* Einbindung der Header-Komponente */}
            <Header/>

            {/* Das main-Tag enthält den Hauptinhalt der Seite */}
            <main>
                {/* Einbindung der Quiz-Komponente */}
                <Quiz/>
            </main>
        </>
    );
}

// Exportiere die App-Komponente als Standardexport
export default App;
