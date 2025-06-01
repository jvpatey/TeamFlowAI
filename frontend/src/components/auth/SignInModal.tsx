import { SignIn } from "@clerk/clerk-react";
import { AuthModal } from "./AuthModal";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignInModal({ isOpen, onClose }: SignInModalProps) {
  return (
    <AuthModal isOpen={isOpen} onClose={onClose} title="Sign In">
      <div className="flex justify-center">
        <SignIn
          routing="virtual"
          afterSignInUrl="/dashboard"
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "shadow-none border-none bg-transparent",
            },
          }}
        />
      </div>
    </AuthModal>
  );
}
