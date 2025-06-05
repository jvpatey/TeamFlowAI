import { PageBackground } from "../components/layout/PageBackground";
import { FlowingBackground } from "../components/layout/FlowingBackground";
import { Navbar } from "../components/layout/Navbar";

export default function MeetingSummariesPage() {
  return (
    <PageBackground className="py-0 relative overflow-hidden min-h-screen">
      {/* Dynamic Flowing Background */}
      <FlowingBackground />

      {/* Navbar inside the flowing background */}
      <Navbar />

      <div className="flex flex-col flex-1 justify-start items-center w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-dark dark:text-brand-text mb-6">
            Meeting Summaries
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
            Generate intelligent meeting summaries and action items
            automatically with AI.
          </p>
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <p className="text-gray-600 dark:text-gray-300">
              Meeting Summaries feature coming soon...
            </p>
          </div>
        </div>
      </div>
    </PageBackground>
  );
}
