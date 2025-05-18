export function WelcomeBackgroundShapes() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
      {/* Upper half: dark green */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-keppel" />
      {/* Lower left: light green */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-keppelLight" />
    </div>
  );
}
