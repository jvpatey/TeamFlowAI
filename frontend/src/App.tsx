import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRouter from "./Router";
import { DarkModeProvider } from "./context/DarkModeProvider";
import { AuthModalProvider, useAuthModal } from "./context/AuthModalProvider";
import { Navbar } from "./components/layout/Navbar";
import { SignInOverlay } from "./components/auth/SignInOverlay";
import { SignUpOverlay } from "./components/auth/SignUpOverlay";

// AuthModals component to render the modals
function AuthModals() {
  const { isSignInOpen, isSignUpOpen, closeSignIn, closeSignUp } =
    useAuthModal();

  return (
    <>
      <SignInOverlay isOpen={isSignInOpen} onClose={closeSignIn} />
      <SignUpOverlay isOpen={isSignUpOpen} onClose={closeSignUp} />
    </>
  );
}

// AppContent component to handle the navbar visibility
function AppContent() {
  const location = useLocation();
  // Hide the navbar on pages that render their own navbar inside PageBackground
  const hideNavbar = [
    "/",
    "/dashboard",
    "/about",
    "/account",
    "/smart-docs",
    "/task-board",
    "/meeting-summaries",
  ].includes(location.pathname);

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
