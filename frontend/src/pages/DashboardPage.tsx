import { PageBackground } from "../components/layout/PageBackground";
import { FlowingBackground } from "../components/layout/FlowingBackground";
import { DashboardTiles } from "../components/dashboard/DashboardTiles";

const DashboardPage = () => {
  return (
    <PageBackground className="py-4 sm:py-6 relative overflow-hidden">
      {/* Dynamic Flowing Background */}
      <FlowingBackground />

      <div className="flex flex-col min-h-[calc(100vh-64px)] justify-start items-center w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 relative z-10">
        <DashboardTiles />
      </div>
    </PageBackground>
  );
};

export default DashboardPage;
