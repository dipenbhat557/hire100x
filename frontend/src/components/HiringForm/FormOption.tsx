interface Props {
  label: string;
  isSelected?: boolean;
  onClick: () => void;
}

export const FormOption = ({ label, isSelected, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg border transition-all ${
        isSelected
          ? 'border-blue-600 bg-blue-600 text-white shadow-md'
          : 'border-gray-200 hover:border-blue-600'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-base font-medium">{label}</span>
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </button>
  );
}; 