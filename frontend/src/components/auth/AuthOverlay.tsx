import type { ReactNode } from "react";
import { FlowingBackground } from "../layout/FlowingBackground";

interface AuthOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

export function AuthOverlay({
  isOpen,
  onClose,
  children,
  title,
}: AuthOverlayProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 min-h-screen bg-darkBg flex flex-col">
      {/* Flowing Background */}
      <FlowingBackground />

      {/* Header with close button */}
      <div className="relative z-10 flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <button
          onClick={onClose}
          className="text-white hover:text-keppel transition-colors duration-200 text-xl font-bold"
        >
          ✕
        </button>
      </div>

      {/* Main content area - centered vertically */}
      <div className="relative z-10 flex-1 overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-6">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    </div>
  );
}
