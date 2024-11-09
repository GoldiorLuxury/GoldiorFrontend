function Hero({
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
      <div className="bg-white flex flex-col-reverse items-center justify-between w-full p-6 -mt-6 lg:flex-row lg:px-28 lg:p-0 lg:mt-0">
        <div className="flex flex-col justify-center items-center text-center p-0 m-0 lg:-mt-20 lg:items-start">
          <p className="text-2xl mt-1 lg:text-6xl lg:my-1.5 ">Elevate your spirit with</p>
          <p className="text-2xl mt-1 lg:text-6xl lg:my-1.5 ">Victory Scented Fragrances!</p>
          <p className=" lg:text-2xl text-brown-600 mb-4 lg:mb-16 lg:mt-2">{subtext}</p>
          <button className="bg-[var(--theme-brown)] text-white px-6 py-3 rounded-lg w-1/2 lg:mt-1 lg:w-1/5">
            {buttonText}
          </button>
        </div>
  
        <div className="w-4/5 md:w-1/2 lg:w-1/4">
          <img
            src={imageUrl}
            alt="Banner"
            className="rounded-b-3xl w-full h-full object-cover lg:rounded-none"
          />
        </div>
      </div>
    );
  }
  

export default Hero;
