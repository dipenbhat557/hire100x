interface Props {
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
}

export const StepIndicator = ({ currentStep, totalSteps, onBack }: Props) => {
  return (
    <div className="flex items-center mb-8">
      {onBack && (
        <button
          onClick={onBack}
          className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Go back"
        >
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}
      <div className="text-sm text-gray-500 font-medium">
        STEP {currentStep} OF {totalSteps}
      </div>
    </div>
  );
}; 