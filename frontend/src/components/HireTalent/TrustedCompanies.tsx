import { TRUSTED_COMPANIES } from '../../constants';
import { useState, useEffect, useRef } from 'react';

export const TrustedCompanies = () => {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current && !isHovered) {
        if (carouselRef.current.scrollLeft >= (carouselRef.current.scrollWidth - carouselRef.current.clientWidth)) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += 1;
        }
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <div className="mt-20">
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-8">
        Trusted by 100+ fast-growing-company
      </h3>
      <div 
        ref={carouselRef}
        className="flex overflow-hidden gap-16 opacity-70 h-auto items-center w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES].map((company, index) => (
          <div key={index} className="flex-shrink-0 w-24">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="w-full h-auto grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
};