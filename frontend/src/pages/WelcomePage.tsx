import { PageBackground } from "../components/layout/PageBackground";
import { useAuthModal } from "../context/AuthModalProvider";
import { FeatureCard } from "../components/welcome/FeatureCard";
import logoNoBg from "../assets/logo_no_bg.png";

// Feature data for the cards
const features = [
  {
    id: 1,
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Smart Documents",
    description:
      "Create and organize documents with AI assistance to boost your productivity and collaboration.",
    borderColor: "hover:border-blue-500 dark:hover:border-blue-400",
    iconBgColor: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
    hasScaleEffect: false,
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Task Management",
    description:
      "Track your tasks and projects efficiently with visual boards and AI-powered insights.",
    borderColor: "hover:border-green-500 dark:hover:border-green-400",
    iconBgColor: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400",
    hasScaleEffect: true,
  },
  {
    id: 3,
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Meeting Summaries",
    description:
      "Generate intelligent meeting summaries and action items automatically with AI.",
    borderColor: "hover:border-purple-500 dark:hover:border-purple-400",
    iconBgColor: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-600 dark:text-purple-400",
    hasScaleEffect: false,
  },
];

// WelcomePage component for the welcome page
export function WelcomePage() {
  const { openSignIn, openSignUp } = useAuthModal();

  return (
    <PageBackground className="py-6">
      <div className="container mx-auto px-4 h-screen flex flex-col justify-center">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src={logoNoBg}
              alt="TeamFlowAI Logo"
              className="w-14 h-14 object-contain"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-onyx dark:text-timberwolf">
              TeamFlowAI
            </h1>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-onyx dark:text-timberwolf mb-4">
            Think, plan, and track
            <br />
            <span className="text-gray-500 dark:text-gray-400">
              all in one place
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            A smarter way to write, organize, and plan — with docs, meetings,
            and tasks all in one AI-powered workspace.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <button
              onClick={openSignUp}
              className="btn btn-lg bg-blue-600 hover:bg-blue-700 text-white border-none px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get started for free
            </button>
            <button
              onClick={openSignIn}
              className="btn btn-lg btn-outline border-gray-300 dark:border-gray-600 text-onyx dark:text-timberwolf hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-2 rounded-lg font-semibold transition-all duration-200"
            >
              Sign in
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              borderColor={feature.borderColor}
              iconBgColor={feature.iconBgColor}
              iconColor={feature.iconColor}
              hasScaleEffect={feature.hasScaleEffect}
            />
          ))}
        </div>
      </div>
    </PageBackground>
  );
}
