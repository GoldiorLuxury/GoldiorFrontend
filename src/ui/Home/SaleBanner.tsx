function SaleBanner({
  heading,
  subtext,
  imageUrl,
  buttonText,
}: {
  heading?: string;
  subtext?: string;
  imageUrl?: string;
  buttonText?: string;
}) {
  return (
    <div className="p-4">
      <div
        className="relative w-full h-screen flex items-center justify-start bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${imageUrl})`,
        }}
      >
        <div className="max-w-3xl p-8 lg:p-12 text-white z-10 ml-6">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">{heading}</h1>
          <p className="text-lg lg:text-xl lg:font-light mb-6 lg:mb-12">{subtext}</p>
          <button className="bg-[var(--theme-brown)] hover:bg-opacity-80 text-white font-semibold py-3 px-6 rounded-lg">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SaleBanner;
