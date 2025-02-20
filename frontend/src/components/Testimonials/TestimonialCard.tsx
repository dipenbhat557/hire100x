import { Testimonial } from '../../types';

interface Props {
  testimonial: Testimonial;
  isActive: boolean;
}

export const TestimonialCard = ({ testimonial, isActive }: Props) => {
  return (
    <div 
      className={`transition-all duration-500 ${
        isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">{testimonial.title}</h3>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          "{testimonial.description}"
        </p>
        <div className="flex items-center">
          <img 
            src={testimonial.company.logo} 
            alt={`${testimonial.company.name} logo`} 
            className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
          />
        </div>
      </div>
    </div>
  );
}; 