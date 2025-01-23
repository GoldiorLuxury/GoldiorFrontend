import CountUp from "react-countup";

const Statistics = () => {
  const stats = [
    { value: 150, label: "Perfumes Available" },
    { value: 50000, label: "Sales Made" },
    { value: 20, label: "Fragrance Collections" },
    { value: 2000, label: "Happy Customers" },
  ];

  return (
    <div className="bg-[#fde8d4] py-6 sm:py-8 px-4 sm:px-6 lg:px-12">
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${index < stats.length - 1 ? "border-b-2 sm:border-b-0 sm:border-r-2 border-[#f3d3b1]" : ""
              } pb-4 sm:pb-0`}
          >
            <p className="text-[1.8rem] sm:text-[1.5rem] xs:text-2xl lg:text-[2.5rem] xl:mb-3 font-bold text-[#a67a50]">
              <CountUp start={0} end={stat.value} duration={2} separator="," />+
            </p>
            <p className="text-[0.85rem] sm:text-[0.8rem] lg:text-[1rem] font-semibold text-[#876243]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
