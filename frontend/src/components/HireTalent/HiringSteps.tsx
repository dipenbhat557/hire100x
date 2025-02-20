import { HIRING_STEPS } from '../../constants';

export const HiringSteps = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        How to Hire Developers Through{' '}
        <span className="text-blue-600">Hire.100x</span>
      </h2>
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-12 left-0 right-0 h-0.5 bg-blue-100 hidden md:block" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HIRING_STEPS.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-6 relative z-10">
                  <span className="text-3xl font-bold text-blue-600">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 