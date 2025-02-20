import { Link } from 'react-router-dom';

export const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
        We Support Your{' '}
        <span className="text-blue-600">Ideas While You</span>{' '}
        <span className="relative inline-block">
          Build Great Things
          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform -skew-x-12"></div>
        </span>
      </h1>
      <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg max-w-xl">
        We help build your platform with tech support that you need by finding you
        talented professionals for the job!
      </p>
      <div className="mt-6 sm:mt-8">
        <Link
          to="/hire-talent"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-base sm:text-lg font-medium group"
        >
          Hire a Talent
          <svg
            className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
        </Link>
      </div>
    </div>
  );
}; 