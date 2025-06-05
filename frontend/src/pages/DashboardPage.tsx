import { PageBackground } from "../components/layout/PageBackground";
import { FlowingBackground } from "../components/layout/FlowingBackground";
import { Navbar } from "../components/layout/Navbar";
import { DashboardTiles } from "../components/dashboard/DashboardTiles";

const DashboardPage = () => {
  return (
    <PageBackground className="py-0 relative overflow-hidden min-h-screen">
      {/* Dynamic Flowing Background */}
      <FlowingBackground />

      {/* Navbar inside the flowing background */}
      <Navbar />

      <div className="flex flex-col flex-1 justify-start items-center w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 relative z-10">
        <DashboardTiles />
      </div>
    </PageBackground>
  );
};

export default DashboardPage;
