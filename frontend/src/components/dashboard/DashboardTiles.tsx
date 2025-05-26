import { DashboardTile } from "./DashboardTile";
import { FaFileAlt, FaTrello, FaMicrophone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// DashboardTiles component for the dashboard page
export function DashboardTiles() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-center items-center mt-6 sm:mt-16 justify-items-center">
      <DashboardTile
        icon={<FaFileAlt />}
        title="Smart Docs"
        subtitle="with Inline AI"
        bgColor="bg-keppel"
        onClick={() => navigate("/smart-docs")}
      />
      <DashboardTile
        icon={<FaTrello />}
        title="Task Board"
        subtitle="with auto subtasks"
        bgColor="bg-saffron"
        onClick={() => navigate("/task-board")}
      />
      <DashboardTile
        icon={<FaMicrophone />}
        title="Meeting Summaries"
        subtitle="auto-generated from audio"
        bgColor="bg-saffron"
        onClick={() => navigate("/meeting-summaries")}
      />
    </div>
  );
}
