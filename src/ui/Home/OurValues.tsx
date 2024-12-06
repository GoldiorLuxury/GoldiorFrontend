function OurValues({
    heading,
    subtext,
    imageUrl,
    // buttonText,
  }: {
    heading?: string;
    subtext?: string;
    imageUrl?: string;
    buttonText?: string;
  }) {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-between p-10">
        {/* Image Section - Left */}
        <div className="lg:w-1/2 w-fit mb-8 p-16 lg:mb-0">
          <img
            src={imageUrl}
            alt="Banner"
            className="w-full h-auto object-cover"
          />
        </div>
  
        {/* Text Section - Right */}
        <div className="flex flex-col justify-center lg:pl-8 lg:w-1/2">
          <h1 className="text-3xl lg:text-6xl font-semibold mb-4 text-brown-800 text-center">
            {heading}
          </h1>
          <p className="text-lg lg:text-lg text-brown-600 mb-7 text-justify">{subtext}</p>
          <p className="text-lg lg:text-lg text-brown-600 mb-7 text-justify">
            Embracing sustainability and continuous learning, Local Face strives
            to be more than just a shopping destination; we are a community that
            inspires and empowers individuals on their fragrance journey."
          </p>
        </div>
      </div>
    );
  }
  
  export default OurValues;