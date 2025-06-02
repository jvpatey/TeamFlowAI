import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRouter from "./Router";
import { DarkModeProvider } from "./context/DarkModeProvider";
import { AuthModalProvider, useAuthModal } from "./context/AuthModalProvider";
import { Navbar } from "./components/layout/Navbar";
import { SignInModal } from "./components/auth/SignInModal";
import { SignUpModal } from "./components/auth/SignUpModal";

// AuthModals component to render the modals
function AuthModals() {
  const { isSignInOpen, isSignUpOpen, closeSignIn, closeSignUp } =
    useAuthModal();

  return (
    <>
      <SignInModal isOpen={isSignInOpen} onClose={closeSignIn} />
      <SignUpModal isOpen={isSignUpOpen} onClose={closeSignUp} />
    </>
  );
}

// AppContent component to handle the navbar visibility
function AppContent() {
  const location = useLocation();
  // Hide the navbar on the welcome page
  const hideNavbar = location.pathname === "/";
  return (
    <>
      {!hideNavbar && <Navbar />}
      <AppRouter />
      <AuthModals />
    </>
  );
}

// App component to handle the dark mode provider and router
function App() {
  return (
    <DarkModeProvider>
      <AuthModalProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthModalProvider>
    </DarkModeProvider>
  );
}

export default App;
