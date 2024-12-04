// import { useNavigate, useNavigation } from "react-router-dom";

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
    <div className="relative flex flex-col-reverse items-center justify-between w-full p-6 mt-12 lg:flex-row lg:px-28 md:mt-0 h-screen">
      <div className="flex flex-col justify-center items-center text-center p-0 m-0 lg:items-start lg:w-2/3 lg:text-left">
        <p className="text-2xl mt-1 lg:text-6xl lg:my-1.5 font-medium">
          {heading}
        </p>
        <p className=" lg:text-2xl text-brown-600 mb-4 lg:mb-10 lg:mt-2">
          {subtext}
        </p>
        <button className="bg-[var(--theme-brown)] text-white font-medium px-6 py-3 rounded-lg w-36 lg:mt-1 hover:bg-[var(--buttonHover)] duration-500">
          {buttonText}
        </button>

      </div>

      <div className="w-4/5 md:w-1/2 lg:w-1/4 h-screen md:py-6">
        <img
          src={imageUrl}
          alt="Banner"
          className="rounded-b-full w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
