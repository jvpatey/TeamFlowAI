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
        iconBgColor="bg-blue-100 dark:bg-blue-900"
        iconColor="text-blue-600 dark:text-blue-400"
        borderColor="hover:border-blue-500 dark:hover:border-blue-400"
        onClick={() => navigate("/smart-docs")}
      />
      <DashboardTile
        icon={<FaTrello />}
        title="Task Board"
        subtitle="with auto subtasks"
        iconBgColor="bg-green-100 dark:bg-green-900"
        iconColor="text-green-600 dark:text-green-400"
        borderColor="hover:border-green-500 dark:hover:border-green-400"
        onClick={() => navigate("/task-board")}
      />
      <DashboardTile
        icon={<FaMicrophone />}
        title="Meeting Summaries"
        subtitle="auto-generated from audio"
        iconBgColor="bg-purple-100 dark:bg-purple-900"
        iconColor="text-purple-600 dark:text-purple-400"
        borderColor="hover:border-purple-500 dark:hover:border-purple-400"
        onClick={() => navigate("/meeting-summaries")}
      />
    </div>
  );
}
