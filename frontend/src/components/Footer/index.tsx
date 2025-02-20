import { Link } from 'react-router-dom';
import { FOOTER_COLUMNS, COMPANY_INFO } from '../../constants';
import { FooterColumn } from './FooterColumn';

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src={COMPANY_INFO.logo}
                alt="Hire100x"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              {COMPANY_INFO.description}
            </p>
          </div>

          {/* Footer Columns */}
          {FOOTER_COLUMNS.map((column, index) => (
            <FooterColumn key={index} column={column} />
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Hire100x. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 