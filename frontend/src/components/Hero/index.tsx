import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';
import { Stats } from './Stats';
import '../../styles/animations.css';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70" />

        {/* Main Content */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-up [animation-delay:0.2s] opacity-0">
              <HeroContent />
            </div>
            <div className="animate-fade-in-up [animation-delay:0.4s] opacity-0">
              <HeroImage />
            </div>
          </div>

          <div className="animate-fade-in-up [animation-delay:0.6s] opacity-0">
            <Stats />
          </div>
        </div>
      </div>
    </section>
  );
};