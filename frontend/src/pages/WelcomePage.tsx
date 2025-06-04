import { PageBackground } from "../components/layout/PageBackground";
import { useAuthModal } from "../context/AuthModalProvider";
import { FeatureCard } from "../components/welcome/FeatureCard";
import { DarkModeToggle } from "../components/DarkModeToggle";
import { FaFileAlt, FaTasks, FaMicrophone } from "react-icons/fa";
import logoNoBg from "../assets/logo_no_bg.png";

// Feature data for the cards
const features = [
  {
    id: 1,
    icon: <FaFileAlt size={28} />,
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
    icon: <FaTasks size={28} />,
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
    icon: <FaMicrophone size={28} />,
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
      {/* Dark Mode Toggle - Top Right Corner */}
      <div className="fixed top-4 right-4 z-10">
        <DarkModeToggle />
      </div>

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
              className="btn btn-lg bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-onyx dark:text-white border-2 border-keppel hover:border-keppelLight px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Get started for free
            </button>
            <button
              onClick={openSignIn}
              className="btn btn-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-onyx dark:text-white border-2 border-keppel hover:border-keppelLight px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg transform hover:scale-105"
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
