import { Link } from 'react-router-dom';

export const ActionButtons = () => {
  return (
    <div className="flex items-center space-x-4">
      <Link
        to="/join-as-freelancer"
        className="text-blue-600 hover:text-blue-700 hidden sm:block"
      >
        Join as FreeLancer
      </Link>
      <Link
        to="/hire-talent"
        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap"
      >
        Hire a Talent
      </Link>
    </div>
  );
}; 