import { PageBackground } from "../components/layout/PageBackground";

const DashboardPage = () => {
  return (
    <PageBackground>
      <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl font-bold text-onyx dark:text-timberwolf mb-4">
          Dashboard
        </h1>
      </div>
    </PageBackground>
  );
};

export default DashboardPage;
