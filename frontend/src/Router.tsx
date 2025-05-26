import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage";
import DashboardPage from "./pages/DashboardPage";
import AccountPage from "./pages/AccountPage";
import SmartDocsPage from "./pages/SmartDocsPage";
import TaskBoardPage from "./pages/TaskBoardPage";
import MeetingSummariesPage from "./pages/MeetingSummariesPage";
import AboutPage from "./pages/AboutPage";

// Define the routes for the app
const AppRouter = () => (
  <Routes>
    {/* Welcome page */}
    <Route path="/" element={<WelcomePage />} />

    {/* Dashboard page */}
    <Route path="/dashboard" element={<DashboardPage />} />

    {/* Account page */}
    <Route path="/account" element={<AccountPage />} />

    {/* Smart Docs page */}
    <Route path="/smart-docs" element={<SmartDocsPage />} />

    {/* Task Board page */}
    <Route path="/task-board" element={<TaskBoardPage />} />

    {/* Meeting Summaries page */}
    <Route path="/meeting-summaries" element={<MeetingSummariesPage />} />

    {/* About page */}
    <Route path="/about" element={<AboutPage />} />
  </Routes>
);

export default AppRouter;
