import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router";
import { DarkModeProvider } from "./components/layout/DarkModeProvider";

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
