import { PageBackground } from "../components/layout/PageBackground";
import { WelcomeBackgroundShapes } from "../components/layout/WelcomeBackgroundShapes";
import { WelcomeCard } from "../components/WelcomeCard";

export function WelcomePage() {
  return (
    <PageBackground>
      <WelcomeBackgroundShapes />
      <WelcomeCard />
    </PageBackground>
  );
}
