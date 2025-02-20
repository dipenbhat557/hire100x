import { useState } from 'react';
import { TESTIMONIALS } from '../../constants';
import { TestimonialCard } from './TestimonialCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((current) => 
      current === 0 ? TESTIMONIALS.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => 
      current === TESTIMONIALS.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            What They Are <span className="text-purple-600">Saying</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Discover the stories and experiences of individuals and
            companies who have found success and excellence through Hire100x
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full transition-all duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <TestimonialCard 
                  testimonial={testimonial}
                  isActive={index === activeIndex}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end items-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full border border-gray-300 hover:border-purple-600 hover:text-purple-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-gray-300 hover:border-purple-600 hover:text-purple-600 transition-colors"
              aria-label="Next testimonial"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 