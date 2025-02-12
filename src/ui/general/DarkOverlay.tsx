
import AboutImage from "../../assets/welcome-page-image.png";
import { useNavigate } from "react-router-dom";

function DarkOverlay({

  image,
}: {
  image: string;
}) {
  const navigate = useNavigate();
  return (
    <div className="pt-24">
      <div
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center p-4"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="px-6 xs:px-0 sm:px-0 md:px-16 py-8 sm:py-16 lg:px-32 ">
          <div className="relative flex flex-col-reverse lg:flex-row-reverse sm:flex-row-reverse md:flex-row-reverse items-center lg:justify-between w-full bg-white py-8 sm:py-4 px-6 sm:px-12 md:px-8 lg:px-24 lg:py-32 rounded-bl-[1.5rem] rounded-tr-[1.5rem] rounded-tl-[6rem] rounded-br-[6rem] border shadow-md">
            {/* Text Section */}
            <div className="flex flex-col justify-center items-start w-full lg:w-[55%] text-center lg:text-left">
              <p className="mt-1 xl:text-[3rem] sm:text-[2rem] md:text-[2rem] xs:text-[1.5rem] lg:text-[2.2rem] my-4 font-medium font-serif text-slate-700 leading-[2.5rem] sm:leading-[3rem] lg:leading-[4.25rem]">
                About Us
              </p>
              <p className="xl:text-[1.2rem] sm:text-[1rem] xs:text-[0.95rem] md:text-[1rem] lg:text-[1.15rem] text-brown-600 mb-4 text-[var(--theme-brown)]">
                Our Legacy Of Excellence
              </p>
              <p className="xl:text-[1.1rem] sm:text-[0.7rem] xs:text-[0.85rem] md:text-[0.8rem] lg:text-[1rem] text-brown-600 mb-4 text-slate-500 text-justify">
                Goldior is a luxury perfume brand that provides an exclusive collection of premium lifestyle products for everyone. Our formulations are a mix of luxurious & made from the best oils from around the world in every product. We provide premium quality and sophistication at affordable prices.
              </p>
              <button
                onClick={() => navigate("/blogs")}
                className="bg-[var(--theme-brown)] text-white shadow-md font-medium px-6 py-3 xs:text-xs md:text-xs xl:text-base rounded-lg w-fit mt-1 hover:bg-[var(--buttonHover)] duration-500">
                Discover More
              </button>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-[45%] flex justify-center items-center mb-8 lg:mb-0">
              <img
                src={AboutImage || "/default-image.jpg"}
                alt="Hero Banner"
                className="rounded-t-full xl:w-[70%] sm:w-[70%] xs:w-[70%] md:w-[80%] md:-ml-14 sm:-ml-14 lg:-ml-28 lg:w-[90%] h-auto object-cover"
              />
            </div>
            <div className="absolute top-[1.5rem] right-[1.5rem] xs:top-[1.5rem] xs:right-[1rem] p-[3rem] border-t-[3px] border-r-[3px] border-dotted border-orange-300 rounded-tr-[1.5rem]"></div>
            <div className="absolute bottom-[1.5rem] left-[1.5rem] xs:bottom-[1rem] xs:left-[1rem] p-[3rem] border-b-[3px] border-l-[3px] border-dotted border-orange-300 rounded-bl-[1.5rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DarkOverlay;
