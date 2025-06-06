import { PageBackground } from "../components/layout/PageBackground";
import { useAuthModal } from "../context/AuthModalProvider";
import { FeatureCard } from "../components/welcome/FeatureCard";
import { DarkModeToggle } from "../components/DarkModeToggle";
import { FlowingBackground } from "../components/layout/FlowingBackground";
import { FaFileAlt, FaTasks, FaMicrophone } from "react-icons/fa";
import { useState, useEffect } from "react";
import logoNoBg from "../assets/logo_no_bg.png";

// Feature data for the cards
const features = [
  {
    id: 1,
    icon: <FaFileAlt size={28} />,
    title: "Smart Documents",
    description:
      "Create and organize documents with AI assistance to boost your productivity and collaboration.",
    borderColor:
      "hover:border-feature-blue-500 dark:hover:border-feature-blue-400",
    iconBgColor: "bg-feature-blue-100 dark:bg-feature-blue-900",
    iconColor: "text-feature-blue-600 dark:text-feature-blue-400",
    hasScaleEffect: false,
  },
  {
    id: 2,
    icon: <FaTasks size={28} />,
    title: "Task Management",
    description:
      "Track your tasks and projects efficiently with visual boards and AI-powered insights.",
    borderColor:
      "hover:border-feature-green-500 dark:hover:border-feature-green-400",
    iconBgColor: "bg-feature-green-100 dark:bg-feature-green-900",
    iconColor: "text-feature-green-600 dark:text-feature-green-400",
    hasScaleEffect: true,
  },
  {
    id: 3,
    icon: <FaMicrophone size={28} />,
    title: "Meeting Summaries",
    description:
      "Generate intelligent meeting summaries and action items automatically with AI.",
    borderColor:
      "hover:border-feature-purple-500 dark:hover:border-feature-purple-400",
    iconBgColor: "bg-feature-purple-100 dark:bg-feature-purple-900",
    iconColor: "text-feature-purple-600 dark:text-feature-purple-400",
    hasScaleEffect: false,
  },
];

// WelcomePage component for the welcome page
export function WelcomePage() {
  const { openSignIn, openSignUp } = useAuthModal();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations when component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageBackground className="py-4 sm:py-6 relative overflow-hidden">
      {/* Dynamic Flowing Background */}
      <FlowingBackground />

      {/* Dark Mode Toggle - Top Right Corner */}
      <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50">
        <DarkModeToggle />
      </div>

      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-10">
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 animate-on-load ${
              isLoaded ? "animate-fade-in-up" : ""
            }`}
          >
            <img
              src={logoNoBg}
              alt="TeamFlowAI Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-dark dark:text-brand-text">
              TeamFlowAI
            </h1>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark dark:text-brand-text mb-3 sm:mb-4 px-2">
            Create, organize, and automate
            <br />
            <span className="text-gray-500 dark:text-gray-400">
              your workflow
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Streamline your productivity with AI-powered tools — from
            intelligent meeting summaries to smart task management and seamless
            document creation.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 sm:mb-8 px-4">
            <button
              onClick={openSignUp}
              className="btn btn-md sm:btn-lg bg-transparent hover:bg-brand-primary/10 dark:hover:bg-brand-primary/20 text-brand-dark dark:text-white border-2 border-brand-primary hover:border-brand-secondary px-4 sm:px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 w-full sm:w-auto"
            >
              Get started for free
            </button>
            <button
              onClick={openSignIn}
              className="btn btn-md sm:btn-lg bg-transparent hover:bg-brand-primary/10 dark:hover:bg-brand-primary/20 text-brand-dark dark:text-white border-2 border-brand-primary hover:border-brand-secondary px-4 sm:px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 w-full sm:w-auto"
            >
              Sign in
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto w-full">
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
