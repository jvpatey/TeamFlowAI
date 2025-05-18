import { PageBackground } from "../components/layout/PageBackground";
import { WelcomeBackgroundShapes } from "../components/layout/WelcomeBackgroundShapes";

export function WelcomePage() {
  return (
    <PageBackground>
      <WelcomeBackgroundShapes />
      {/* Main card */}
      <div className="relative z-10 bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold text-onyx mb-4">Welcome!</h1>
        <p className="text-keppel">This is the welcome page.</p>
      </div>
    </PageBackground>
  );
}
