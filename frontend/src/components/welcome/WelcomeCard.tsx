import logoNoBg from "../../assets/logo_no_bg.png";
import { WelcomeButton } from "./WelcomeButton";
import { WelcomeFormField } from "./WelcomeFormField";
import { WelcomeScreenshotBox } from "./WelcomeScreenshotBox";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

// WelcomeCard component for the welcome page
export function WelcomeCard() {
  return (
    <div className="relative z-10 bg-timberwolf rounded-2xl shadow-lg p-4 max-w-[calc(100vw-2rem)] sm:max-w-xl box-border flex flex-col items-center mx-4 my-8 sm:mx-8 sm:my-12">
      <div className="flex items-center gap-2 mb-6 mt-4">
        <img
          src={logoNoBg}
          alt="TeamFlowAI Logo"
          className="w-14 h-14 object-contain"
        />
        <span className="text-5xl font-bold text-onyx">TeamFlowAI</span>
      </div>
      <p className="text-center text-gray-600 mb-6">
        A smarter way to write, organize, and plan — with docs, meetings, and
        tasks all in one AI-powered workspace.
      </p>
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Login options (left) */}
        <div className="flex-1 flex flex-col gap-3 justify-center">
          <WelcomeButton className="bg-saffron text-onyx hover:bg-saffron/90">
            <FaGithub size={24} /> Sign in with GitHub
          </WelcomeButton>
          <WelcomeButton className="bg-saffron text-onyx hover:bg-saffron/90">
            <FcGoogle size={24} /> Sign in with Google
          </WelcomeButton>
          <div className="flex items-center gap-2 my-2">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          <WelcomeFormField type="text" placeholder="Email" />
          <WelcomeFormField type="password" placeholder="Password" />
          <WelcomeButton className="bg-keppel text-white mt-2 hover:bg-keppel/90">
            Sign in
          </WelcomeButton>
          <p className="text-xs text-center mt-2 text-onyx">
            Don't have an account?{" "}
            <a href="#" className="text-keppel font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>
        {/* Screenshot placeholder (right) */}
        <div className="flex-1 flex items-center justify-center">
          <WelcomeScreenshotBox>
            <span className="text-4xl text-onyx opacity-40">[screenshot]</span>
          </WelcomeScreenshotBox>
        </div>
      </div>
    </div>
  );
}
