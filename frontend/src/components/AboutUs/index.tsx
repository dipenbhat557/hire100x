import { Link } from 'react-router-dom';
import { ABOUT_INFO } from '../../constants';

export const AboutUs = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-6">
              Get to Know Us <span className="text-purple-600">Better</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {ABOUT_INFO.description}
            </p>
            <Link
              to={ABOUT_INFO.link.href}
              className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 group"
            >
              {ABOUT_INFO.link.text}
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
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-2xl transform rotate-3" />
              <img
                src={ABOUT_INFO.image}
                alt="About Us"
                className="relative rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 