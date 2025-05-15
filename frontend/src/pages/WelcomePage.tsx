import { PageBackground } from "../components/layout/PageBackground";

export function WelcomePage() {
  return (
    <PageBackground>
      <h1 className="text-4xl font-bold text-onyx mb-4">Welcome!</h1>
      <p className="text-keppel">This is the welcome page.</p>
    </PageBackground>
  );
}
