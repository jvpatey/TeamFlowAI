import { SignUp } from "@clerk/clerk-react";
import { AuthModal } from "./AuthModal";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  return (
    <AuthModal isOpen={isOpen} onClose={onClose} title="Sign Up">
      <div className="flex justify-center">
        <SignUp
          routing="virtual"
          afterSignUpUrl="/dashboard"
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
