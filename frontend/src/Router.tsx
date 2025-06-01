import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage";
import DashboardPage from "./pages/DashboardPage";
import AccountPage from "./pages/AccountPage";
import SmartDocsPage from "./pages/SmartDocsPage";
import TaskBoardPage from "./pages/TaskBoardPage";
import MeetingSummariesPage from "./pages/MeetingSummariesPage";
import AboutPage from "./pages/AboutPage";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";

// Define the routes for the app
const AppRouter = () => (
  <Routes>
    {/* Welcome page - public */}
    <Route path="/" element={<WelcomePage />} />

    {/* About page - public */}
    <Route path="/about" element={<AboutPage />} />

    {/* Protected routes - require authentication */}
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      }
    />

    <Route
      path="/account"
      element={
        <ProtectedRoute>
          <AccountPage />
        </ProtectedRoute>
      }
    />

    <Route
      path="/smart-docs"
      element={
        <ProtectedRoute>
          <SmartDocsPage />
        </ProtectedRoute>
      }
    />

    <Route
      path="/task-board"
      element={
        <ProtectedRoute>
          <TaskBoardPage />
        </ProtectedRoute>
      }
    />

    <Route
      path="/meeting-summaries"
      element={
        <ProtectedRoute>
          <MeetingSummariesPage />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AppRouter;
