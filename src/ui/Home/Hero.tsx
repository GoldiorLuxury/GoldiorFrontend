function Hero({
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
      <div className="bg-white flex flex-col lg:flex-row items-center justify-between w-full -mt-16 px-24">
        <div className="flex flex-col items-start justify-center lg:pr-8 lg:w-1/2 p-4 lg:p-0">
          <h1 className="text-3xl lg:text-5xl mb-4 text-brown-800">Elevate your spirit with</h1>
          <h1 className="text-3xl lg:text-5xl mb-4 text-brown-800">Victory Scented Fragrances!</h1>
          <p className="text-lg lg:text-xl text-brown-600 mb-6">{subtext}</p>
          <button className="bg-[var(--theme-brown)] text-white px-6 py-3 rounded-lg">
            {buttonText}
          </button>
        </div>
  
        <div className="lg:w-1/4 w-full lg:h-auto">
          <img
            src={imageUrl}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }
  
  export default Hero;