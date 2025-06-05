import { DashboardTile } from "./DashboardTile";
import { FaFileAlt, FaTrello, FaMicrophone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// DashboardTiles component for the dashboard page
export function DashboardTiles() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full justify-center items-center mt-6 sm:mt-16 justify-items-center max-w-5xl mx-auto">
      <DashboardTile
        icon={<FaFileAlt />}
        title="Smart Docs"
        subtitle="with Inline AI"
        iconBgColor="bg-feature-blue-100 dark:bg-feature-blue-900"
        iconColor="text-feature-blue-600 dark:text-feature-blue-400"
        borderColor="hover:border-feature-blue-500 dark:hover:border-feature-blue-400"
        onClick={() => navigate("/smart-docs")}
      />
      <DashboardTile
        icon={<FaTrello />}
        title="Task Board"
        subtitle="with auto subtasks"
        iconBgColor="bg-feature-green-100 dark:bg-feature-green-900"
        iconColor="text-feature-green-600 dark:text-feature-green-400"
        borderColor="hover:border-feature-green-500 dark:hover:border-feature-green-400"
        onClick={() => navigate("/task-board")}
      />
      <DashboardTile
        icon={<FaMicrophone />}
        title="Meeting Summaries"
        subtitle="auto-generated from audio"
        iconBgColor="bg-feature-purple-100 dark:bg-feature-purple-900"
        iconColor="text-feature-purple-600 dark:text-feature-purple-400"
        borderColor="hover:border-feature-purple-500 dark:hover:border-feature-purple-400"
        onClick={() => navigate("/meeting-summaries")}
      />
    </div>
  );
}
