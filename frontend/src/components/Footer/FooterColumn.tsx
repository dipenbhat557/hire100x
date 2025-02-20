import { Link } from 'react-router-dom';
import { FooterColumn as FooterColumnType } from '../../types';

interface Props {
  column: FooterColumnType;
}

export const FooterColumn = ({ column }: Props) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
      <ul className="space-y-3">
        {column.links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}; 