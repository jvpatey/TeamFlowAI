import logoNoBg from "../../assets/logo_no_bg.png";

interface WelcomeScreenshotBoxProps {
  className?: string;
}

// WelcomeScreenshotBox component for the welcome page
export function WelcomeScreenshotBox({
  className = "",
}: WelcomeScreenshotBoxProps) {
  return (
    <div
      className={`card card-bordered w-full min-h-28 max-h-64 aspect-[4/3] bg-saffron rounded-xl flex items-center justify-center shadow-inner p-2 sm:p-4 ${className}`}
    >
      <div className="w-full h-full flex flex-col gap-1 sm:gap-2 justify-center">
        {/* Document style content lines */}
        <div className="flex items-center gap-2 mb-1">
          <img
            src={logoNoBg}
            alt="Logo"
            className="w-7 h-7 rounded-md bg-white p-1 shadow"
          />
          <div className="bg-white/80 rounded-md h-3 w-1/3" />
        </div>
        <div className="bg-white/80 rounded-md h-4 w-3/4 mb-1" />
        <div className="bg-white/80 rounded-md h-4 w-2/3" />
        <div className="bg-white/60 rounded-md h-4 w-1/2" />
        {/* Trello board style cards */}
        <div className="flex gap-1 sm:gap-2 mt-2">
          <div className="bg-keppel/80 rounded-lg h-8 w-1/4" />
          <div className="bg-platinum/80 rounded-lg h-8 w-1/4" />
          <div className="bg-saffron/80 rounded-lg h-8 w-1/4" />
        </div>
        <div className="flex gap-1 sm:gap-2">
          <div className="bg-keppel/60 rounded-lg h-6 w-1/6" />
          <div className="bg-platinum/60 rounded-lg h-6 w-1/6" />
        </div>
      </div>
    </div>
  );
}
