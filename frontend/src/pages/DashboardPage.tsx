import { PageBackground } from "../components/layout/PageBackground";
import { DashboardTiles } from "../components/dashboard/DashboardTiles";

const DashboardPage = () => {
  return (
    <PageBackground>
      <div className="flex flex-col min-h-[calc(100vh-64px)] justify-start items-center w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <DashboardTiles />
      </div>
    </PageBackground>
  );
};

export default DashboardPage;
