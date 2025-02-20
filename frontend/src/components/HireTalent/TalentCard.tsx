import { Link } from 'react-router-dom';
import { TalentCard as TalentCardType } from '../../types';

interface Props {
  card: TalentCardType;
}

export const TalentCard = ({ card }: Props) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <img src={card.icon} alt={card.title} className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{card.description}</p>
        <Link
          to={card.link.href}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
        >
          {card.link.text}
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