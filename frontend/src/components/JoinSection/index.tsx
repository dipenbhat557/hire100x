import { Link } from 'react-router-dom';
import { JOIN_SECTION } from '../../constants';

export const JoinSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={JOIN_SECTION.image}
              alt="Join Us"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              {JOIN_SECTION.title}{' '}
              <span className="text-blue-600">{JOIN_SECTION.highlight}</span>.
            </h2>
            <Link
              to={JOIN_SECTION.cta.href}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              {JOIN_SECTION.cta.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}; 