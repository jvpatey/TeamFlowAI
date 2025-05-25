import logoNoBg from "../../assets/logo_no_bg.png";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { DarkModeToggle } from "../DarkModeToggle";
import { WelcomeScreenshotBox } from "./WelcomeScreenshotBox";
import { useNavigate } from "react-router-dom";

// WelcomeCard component for the welcome page
export function WelcomeCard() {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 card bg-timberwolf dark:bg-outerSpace shadow-xl max-w-[calc(100vw-2rem)] sm:max-w-xl mx-4 my-8 sm:mx-8 sm:my-12">
      {/* Dark mode toggle */}
      <DarkModeToggle />
      {/* Card body */}
      <div className="card-body items-center">
        {/* Logo and title */}
        <div className="flex items-center gap-2 mb-4 mt-2">
          <img
            src={logoNoBg}
            alt="TeamFlowAI Logo"
            className="w-14 h-14 object-contain"
          />
          <span className="text-5xl font-bold text-onyx dark:text-timberwolf">
            TeamFlowAI
          </span>
        </div>
        <p className="text-center text-onyx dark:text-timberwolf mb-6">
          A smarter way to write, organize, and plan — with docs, meetings, and
          tasks all in one AI-powered workspace.
        </p>
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Login options (left) */}
          <div className="flex-1 flex flex-col gap-3 justify-center">
            <button className="btn btn-outline btn-lg w-full flex items-center gap-2 text-onyx dark:text-timberwolf border-saffron btn-fill-right btn-saffron">
              <span className="btn-content flex items-center gap-2">
                <FaGithub size={24} /> Sign in with GitHub
              </span>
            </button>
            <button className="btn btn-outline btn-lg w-full flex items-center gap-2 text-onyx dark:text-timberwolf border-saffron btn-fill-right btn-saffron">
              <span className="btn-content flex items-center gap-2">
                <FcGoogle size={24} /> Sign in with Google
              </span>
            </button>
            <div className="flex items-center gap-2 my-2">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="text-xs text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full bg-white dark:bg-outerSpace text-onyx dark:text-timberwolf"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full bg-white dark:bg-outerSpace text-onyx dark:text-timberwolf"
            />
            <button
              onClick={() => navigate("/dashboard")}
              className="btn btn-primary shadow-none border-none w-full bg-keppel text-timberwolf dark:text-onyx hover:bg-keppel/90 dark:hover:bg-keppel/90 btn-fill-right btn-keppel mt-2"
            >
              <span className="btn-content flex items-center gap-2">
                Sign in
              </span>
            </button>
            <p className="text-xs text-center mt-2 text-onyx dark:text-timberwolf">
              Don't have an account?{" "}
              <a href="#" className="text-keppel font-semibold hover:underline">
                Sign up
              </a>
            </p>
          </div>
          {/* Screenshot placeholder (right) */}
          <div className="flex-1 flex items-center justify-center">
            <WelcomeScreenshotBox />
          </div>
        </div>
      </div>
    </div>
  );
}
