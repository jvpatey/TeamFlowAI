import logoNoBg from "../assets/logo_no_bg.png";

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
        Your second brain for code, collaboration, and clarity.
      </p>
    </div>
  );
}
