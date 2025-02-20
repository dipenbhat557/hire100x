import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';

export const NavLinks = () => {
  return (
    <div className="hidden lg:flex items-center space-x-8">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.key}
          to={link.href}
          className="text-gray-600 hover:text-blue-600 transition-colors text-base font-medium"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}; 