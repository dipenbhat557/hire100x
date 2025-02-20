import { STATS } from '../../constants';

export const Stats = () => {
  return (
    <div className="mt-16 lg:mt-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            <span className="text-blue-600">Our Productivity</span>
            {' '}Performance
          </h2>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-8 sm:gap-12">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="text-center flex-1"
            >
              <div className="flex items-center justify-center text-3xl sm:text-4xl font-bold">
                <span className="text-blue-600">{stat.prefix}</span>
                <span>{stat.value}</span>
              </div>
              <p className="mt-2 text-gray-600 text-sm sm:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 