import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router";
import { DarkModeProvider } from "./context/DarkModeProvider";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <AppRouter />
      </Router>
    </DarkModeProvider>
  );
}

export default App;
