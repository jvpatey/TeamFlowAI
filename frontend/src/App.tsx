import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRouter from "./Router";
import { DarkModeProvider } from "./context/DarkModeProvider";
import { Navbar } from "./components/layout/Navbar";

// AppContent component to handle the navbar visibility
function AppContent() {
  const location = useLocation();
  // Hide the navbar on the welcome page
  const hideNavbar = location.pathname === "/";
  return (
    <>
      {!hideNavbar && <Navbar />}
      <AppRouter />
    </>
  );
}

// App component to handle the dark mode provider and router
function App() {
  return (
    <DarkModeProvider>
      <Router>
        <AppContent />
      </Router>
    </DarkModeProvider>
  );
}

export default App;
