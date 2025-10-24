import { useState } from "react";
import Modal from "../../../core/components/CustomModal";
import WaitlistForm from "../form/WaitlistForm";
import SurveyForm from "../form/SurveyForm";

interface WaitlistFlowProps {
  buttonLabel?: string;
  buttonClassName?: string;
}

const WaitlistFlow: React.FC<WaitlistFlowProps> = ({
  buttonLabel = "Join Waitlist",
  buttonClassName = "",
}) => {
  const [isBasicOpen, setIsBasicOpen] = useState(false);
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const handleOnSuccessEmail = (email: string) => {
    setIsBasicOpen(false);
    setIsSurveyOpen(true);
    setUserEmail(email);
  };

  const handleSurveyComplete = () => {
    setIsSurveyOpen(false);
  };

  const handleOpenModal = () => {
    setIsBasicOpen(true);
  };

  return (
    <>
      {/* 🔘 Reusable button */}
      <button
        onClick={handleOpenModal}
        className={`px-10 py-4 bg-black text-white rounded-full text-sm font-medium tracking-wide transition-all duration-300 inline-flex items-center gap-3 hover:bg-neutral-800 hover:scale-105 group shadow-lg ${buttonClassName}`}
      >
        <span>{buttonLabel}</span>
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Waitlist modal */}
      <Modal
        isOpen={isBasicOpen}
        onClose={() => setIsBasicOpen(false)}
        title="Welcome to Oldely"
        size="md"
        closeOnOverlayClick={false}
      >
        <WaitlistForm onSuccess={handleOnSuccessEmail} />
      </Modal>

      {/* Survey modal */}
      <Modal
        isOpen={isSurveyOpen}
        onClose={() => setIsSurveyOpen(false)}
        title="Welcome to Oldely"
        size="md"
        closeOnOverlayClick={false}
      >
        <SurveyForm
          onComplete={handleSurveyComplete}
          email={userEmail || ""}
        />
      </Modal>
    </>
  );
};

export default WaitlistFlow;
