import { TALENT_CARDS } from '../../constants';
import { TalentCard } from './TalentCard';
import { HiringSteps } from './HiringSteps';
import { TrustedCompanies } from './TrustedCompanies';

export const HireTalent = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Hire our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Talent</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TALENT_CARDS.map((card, index) => (
            <TalentCard key={index} card={card} />
          ))}
        </div>

        <HiringSteps />
        <TrustedCompanies />
      </div>
    </section>
  );
}; 