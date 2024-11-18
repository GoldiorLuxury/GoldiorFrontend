function ServicesCard({
  serviceNumber,
  serviceTitle,
  serviceDescription,
  imageUrl,
  imageRight,
}: {
  serviceNumber: string;
  serviceTitle: string;
  serviceDescription: string;
  imageUrl: string;
  imageRight: boolean;
}) {
  return (
    <div
      className={`md:flex ${
        imageRight ? "flex-row-reverse" : "flex-row"
      } items-center p-12 md:p-20`}
    >
      <img
        src={imageUrl}
        alt={serviceTitle}
        className="md:w-1/2 h-[300px] rounded-lg object-cover md:mx-10 md:h-[400px] lg:mx-16 bg-center lg:h-[500px]"
      />
      <div className="md:w-1/2 p-4 text-left">
        <p className="text-2xl font-bold mb-6 text-[var(--theme-brown)] md:text-5xl lg:text-6xl lg:mb-12">
          {serviceNumber}
        </p>
        <h2 className="text-lg font-semibold mb-4 md:text-2xl lg:text-3xl lg:mb-6">
          {serviceTitle}
        </h2>
        <p className="text-sm md:text-lg lg:text-xl">{serviceDescription}</p>
      </div>
    </div>
  );
}

export default ServicesCard;
