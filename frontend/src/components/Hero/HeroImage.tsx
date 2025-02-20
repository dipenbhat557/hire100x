import { heroImage } from '../../assets';

export const HeroImage = () => {
  return (
    <div className="relative mt-8 lg:mt-0">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-2xl transform rotate-3 scale-105" />
      <img
        src={heroImage}
        alt="Hero Illustration"
        className="relative w-full h-auto max-w-lg mx-auto lg:max-w-none animate-float"
      />
    </div>
  );
}; 