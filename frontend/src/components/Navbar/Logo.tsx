import { Link } from 'react-router-dom';
import { logo } from '../../assets';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src={logo} alt="Hire100x Logo" className="h-8" />
    </Link>
  );
}; 