import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage";
import DashboardPage from "./pages/DashboardPage";

// Define the routes for the app
const AppRouter = () => (
  <Routes>
    {/* Welcome page */}
    <Route path="/" element={<WelcomePage />} />

    {/* Dashboard page */}
    <Route path="/dashboard" element={<DashboardPage />} />
  </Routes>
);

export default AppRouter;
