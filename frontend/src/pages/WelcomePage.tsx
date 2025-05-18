import { PageBackground } from "../components/layout/PageBackground";
import { WelcomeBackgroundShapes } from "../components/layout/WelcomeBackgroundShapes";
import { WelcomeCard } from "../components/welcome/WelcomeCard";

// WelcomePage component for the welcome page
export function WelcomePage() {
  return (
    <PageBackground>
      <WelcomeBackgroundShapes />
      <WelcomeCard />
    </PageBackground>
  );
}
