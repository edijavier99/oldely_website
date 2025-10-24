import { useState } from "react";
import EmailInputForm from "./EmailInputForm.tsx";

interface Props {
    onSuccess: (email: string) => void; // <-- cambia esto
}

const WaitlistForm = ({ onSuccess }: Props) => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuccess = (email: string) => {
    setIsSubmitted(true);
    onSuccess(email);
  };


  return (
    <div className="w-full max-w-xl">
      {!isSubmitted ? (
        <>
          <EmailInputForm  onSuccess={handleSuccess} />            
          <p className="text-xs text-center lg:text-left text-neutral-500 mt-5">
            <span className="text-xs text-amber-600">⚡</span> Early access available Q1 2026 • Limited launch price: £19/mo
          </p>

          <div className="flex w-full justify-center lg:justify-start items-center gap-3 mt-5">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-400 border-2 border-white"
                />
              ))}
            </div>
            <span className="text-sm text-black/50 font-light">
              Only 100 Spots Available
            </span>
          </div>
        </>
      ) : (
        <div className="w-full max-w-xl p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
          <div className="flex items-center gap-3 text-neutral-900 mb-2">
            <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">You're on the list!</span>
          </div>
          <p className="text-sm text-neutral-600 ml-11">We'll notify you of the latest updates and when we launch.</p>
        </div>
      )}
    </div>
  );
};

export default WaitlistForm;
