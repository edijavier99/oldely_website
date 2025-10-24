import { useState } from 'react';
import { supabase } from '../../../core/lib/supabaseClient';
import { toast } from 'sonner';

interface SurveyFormData {
  email: string;
  livesAlone: boolean | null;
  concerns: string[];
  previousSolutions: string[];
}

interface SurveyFormProps {
  email: string;
  onComplete: () => void;
}

const SurveyForm: React.FC<SurveyFormProps> = ({ email, onComplete }) => {
  const [formData, setFormData] = useState<SurveyFormData>({
    email,
    livesAlone: null,
    concerns: [],
    previousSolutions: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const concernOptions = [
    { id: 'falls', label: 'Falls' },
    { id: 'general-health', label: 'General health' },
    { id: 'loneliness', label: 'Loneliness' },
    { id: 'medication', label: 'Medication' },
  ];

  const solutionOptions = [
    { id: 'panic-buttons', label: 'Panic buttons' },
    { id: 'smartwatches', label: 'Smartwatches' },
    { id: 'cameras', label: 'Cameras' },
    { id: 'none', label: 'None' },
  ];

  const handleLivesAloneChange = (value: boolean) => {
    setFormData((prev) => ({ ...prev, livesAlone: value }));
  };

  const handleConcernToggle = (concernId: string) => {
    setFormData((prev) => ({
      ...prev,
      concerns: prev.concerns.includes(concernId)
        ? prev.concerns.filter((id) => id !== concernId)
        : [...prev.concerns, concernId],
    }));
  };

  const handleSolutionToggle = (solutionId: string) => {
    setFormData((prev) => ({
      ...prev,
      previousSolutions: prev.previousSolutions.includes(solutionId)
        ? prev.previousSolutions.filter((id) => id !== solutionId)
        : [...prev.previousSolutions, solutionId],
    }));
  };

  const isStepValid = (): boolean => {
    if (step === 1) return true;
    if (step === 2) return formData.livesAlone !== null;
    if (step === 3) return formData.concerns.length > 0;
    if (step === 4) return formData.previousSolutions.length > 0;
    return false;
  };

  const handleNext = () => {
    if (!isStepValid()) {
      toast.error('Please answer before continuing');
      return;
    }
    setStep((s) => s + 1);
  };

  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('waitlist_survey')
        .insert([
          {
            email: formData.email,
            lives_alone: formData.livesAlone,
            concerns: formData.concerns,
            previous_solutions: formData.previousSolutions,
          },
        ]);

      if (error) throw error;

      toast.success('Thank you!');
      onComplete();
      setStep(5);
    } catch (error) {
      console.error('Error submitting survey:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-5 transition-all duration-500">
      {/* Step indicator */}
      <div className="text-center">
        <p className="text-sm text-neutral-500 ">
          Step {step} of 4
        </p>
      </div>

      {/* Step 1: Welcome */}
      {step === 1 && (
        <div className="text-center space-y-5">
            <h3 className="text-2xl font-medium text-neutral-900">
                Thanks for joining!
            </h3>
            <p className="text-neutral-600 max-w-sm mx-auto">
                You’re now on our waitlist. We’ll keep you posted on just relevant updates.
            </p>
            <p className="text-neutral-600 max-w-sm mx-auto">
                We’d also love to learn a bit more about your situation so we can better
                support you — it’s a quick 1-minute survey.
            </p>
            <button
                onClick={handleNext}
                className="px-8 py-4 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-all duration-300"
            >
                Continue
            </button>
        </div>
      )}

      {/* Step 2: Lives Alone */}
      {step === 2 && (
        <div className="space-y-5 text-center">
          <h3 className="text-lg font-medium text-neutral-900">
            Does your elderly relative live alone?
          </h3>
          <div className="flex gap-3 justify-center">
            <button
              type="button"
              onClick={() => handleLivesAloneChange(true)}
              className={`flex-1 max-w-[150px] px-6 py-4 rounded-xl text-sm font-medium border-2 ${
                formData.livesAlone === true
                  ? 'bg-neutral-900 text-white border-neutral-900'
                  : 'bg-white text-neutral-900 border-neutral-200 hover:border-neutral-300'
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => handleLivesAloneChange(false)}
              className={`flex-1 max-w-[150px] px-6 py-4 rounded-xl text-sm font-medium border-2 ${
                formData.livesAlone === false
                  ? 'bg-neutral-900 text-white border-neutral-900'
                  : 'bg-white text-neutral-900 border-neutral-200 hover:border-neutral-300'
              }`}
            >
              No
            </button>
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={handleBack}
              className="text-neutral-500 text-sm underline"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-all duration-300"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Concerns */}
      {step === 3 && (
        <div className="space-y-4">
          <h3 className="text-center text-lg font-medium text-neutral-900">
            What worries you most?
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {concernOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleConcernToggle(option.id)}
                className={`px-4 py-3 rounded-xl text-sm font-medium border-2 text-left ${
                  formData.concerns.includes(option.id)
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'bg-white text-neutral-900 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <button onClick={handleBack} className="text-neutral-500 text-sm underline">
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-all duration-300"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Previous Solutions */}
      {step === 4 && (
        <div className="space-y-4">
          <h3 className="text-center text-lg font-medium text-neutral-900">
            Have they tried other solutions?
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {solutionOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSolutionToggle(option.id)}
                className={`px-4 py-3 rounded-xl text-sm font-medium border-2 text-left ${
                  formData.previousSolutions.includes(option.id)
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'bg-white text-neutral-900 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <button onClick={handleBack} className="text-neutral-500 text-sm underline">
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                isSubmitting
                  ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                  : 'bg-neutral-900 text-white hover:bg-neutral-800'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Final Thank You */}
      {step === 5 && (
        <div className="text-center space-y-6">
          <div className="w-12 h-12 mx-auto rounded-full bg-neutral-900 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-medium text-neutral-900">
            You're all set!
          </h3>
          <p className="text-neutral-600 max-w-sm mx-auto">
            Thanks for sharing your input — we'll notify you as soon as we launch.
          </p>
        </div>
      )}
    </div>
  );
};

export default SurveyForm;
