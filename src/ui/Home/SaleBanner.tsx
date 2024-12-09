function SaleBanner({
  heading,
  subtext,
  imageUrl,
  // buttonText,
}: {
  heading?: string;
  subtext?: string;
  imageUrl?: string;
  // buttonText?: string;
}) {
  return (
    <div className="">
      <div
        className="relative w-full h-[80vh] sm:h-screen flex items-center justify-start bg-cover bg-center"
        style={{
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${imageUrl})`,
        }}
      >
        <div className="max-w-3xl p-8 lg:p-12 text-white z-10 ml-6 bg-transparent">
          <h1 className="text-4xl text-gray-300 lg:text-6xl font-bold mb-4 bg-transparent">{heading}</h1>
          <p className="text-lg text-gray-300 lg:text-xl lg:font-light mb-6 lg:mb-12 bg-transparent">
            {subtext}
          </p>
          {/* <button className="bg-[var(--theme-brown)] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[var(--buttonHover)] duration-500">
            {buttonText}
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default SaleBanner;
