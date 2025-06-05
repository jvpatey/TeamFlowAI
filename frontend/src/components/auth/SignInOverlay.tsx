import { SignIn } from "@clerk/clerk-react";
import { AuthOverlay } from "./AuthOverlay";

interface SignInOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignInOverlay({ isOpen, onClose }: SignInOverlayProps) {
  return (
    <AuthOverlay isOpen={isOpen} onClose={onClose} title="Welcome back">
      <SignIn
        routing="virtual"
        afterSignInUrl="/dashboard"
        appearance={{
          elements: {
            rootBox: "w-full",
            card: "shadow-none border-none bg-white/80 dark:bg-gray-800/30 backdrop-blur-md p-8 rounded-2xl border border-brand-primary/30",

            // Headers
            headerTitle:
              "text-2xl font-bold text-gray-900 dark:text-white mb-2",
            headerSubtitle: "text-base text-gray-700 dark:text-gray-200 mb-6",

            // Primary button
            formButtonPrimary:
              "w-full bg-white/80 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-600/80 backdrop-blur-md text-gray-900 dark:text-white border-2 border-feature-blue-500 hover:border-feature-blue-400 dark:hover:border-feature-blue-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105",

            // Input fields
            formFieldInput:
              "w-full px-4 py-3 bg-white/80 dark:bg-gray-700/60 backdrop-blur-md border-2 border-brand-primary/60 hover:border-feature-green-500 focus:border-feature-green-400 dark:hover:border-feature-green-400 dark:focus:border-feature-green-400 rounded-lg text-gray-900 dark:text-brand-text placeholder-gray-600 dark:placeholder-gray-400 transition-all duration-300 focus:outline-none",

            // Labels
            formFieldLabel:
              "text-gray-900 dark:text-white font-medium mb-2 block",

            // Social buttons
            socialButtonsBlockButton:
              "w-full bg-white/80 dark:bg-gray-700/60 backdrop-blur-md hover:bg-white/90 dark:hover:bg-gray-600/80 border-2 border-feature-purple-500 hover:border-feature-purple-400 dark:hover:border-feature-purple-400 text-gray-900 dark:text-brand-text font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 mb-3",

            socialButtonsBlockButtonText:
              "text-gray-900 dark:text-brand-text font-medium",

            // Footer links
            footerActionText: "text-gray-700 dark:text-gray-300",
            footerActionLink:
              "text-brand-primary hover:text-brand-secondary font-semibold transition-colors duration-200",

            // Dividers
            dividerLine: "bg-brand-primary/40",
            dividerText: "text-gray-700 dark:text-gray-200 px-3",

            // Form styling
            form: "space-y-4",
            formFieldRow: "flex gap-3",

            // Error and success messages
            formFieldErrorText:
              "text-feature-red-500 dark:text-feature-red-400 text-sm mt-1",
            formFieldSuccessText:
              "text-feature-green-600 dark:text-feature-green-400 text-sm mt-1",

            // Footer
            footer: "mt-6 pt-4 border-t border-brand-primary/20",

            // Google button
            googleButton:
              "w-full bg-white/80 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-600/80 backdrop-blur-md text-gray-900 dark:text-white border-2 border-feature-blue-500 hover:border-feature-blue-400 dark:hover:border-feature-blue-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105",

            // Submit button
            submitButton:
              "w-full bg-white/80 dark:bg-gray-700/60 backdrop-blur-md hover:bg-white/90 dark:hover:bg-gray-600/80 border-2 border-feature-purple-500 hover:border-feature-purple-400 dark:hover:border-feature-purple-400 text-gray-900 dark:text-brand-text font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 mb-3",
          },
        }}
      />
    </AuthOverlay>
  );
}
