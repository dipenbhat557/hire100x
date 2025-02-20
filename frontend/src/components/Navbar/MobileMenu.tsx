import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              to={link.href}
              className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/join-as-freelancer"
            className="block text-blue-600 hover:text-blue-700 py-2"
            onClick={() => setIsOpen(false)}
          >
            Join as FreeLancer
          </Link>
        </div>
      )}
    </div>
  );
}; 