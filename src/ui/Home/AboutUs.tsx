import { useNavigate } from "react-router-dom";

interface HeroProps {
    heading?: string;
    subHead?: string;
    subtext?: string;
    imageUrl?: string;
    shopButton?: string;
    navigateToshop?: string;
}

function Hero({
    heading,
    subHead,
    subtext,
    imageUrl,
    shopButton,
    navigateToshop,
}: HeroProps) {
    const navigate = useNavigate();

    return (
        <div className="px-6 sm:px-16 md:px-16 py-8 sm:py-16 lg:px-32 bg-[#fdf6ed]">
            <div className="relative flex flex-col-reverse lg:flex-row-reverse md:flex-row-reverse items-center lg:justify-between w-full bg-white py-8 sm:py-12 px-6 sm:px-12 md:px-8 lg:px-24 rounded-bl-[1.5rem] rounded-tr-[1.5rem] rounded-tl-[6rem] rounded-br-[6rem] border shadow-md">
                {/* Text Section */}
                <div className="flex flex-col justify-center items-start w-full lg:w-[55%] text-center lg:text-left">
                    <p className="mt-1 xl:text-[3rem] sm:text-[2.5rem] md:text-[2rem] xs:text-[1.5rem] lg:text-[2.2rem] my-4 font-medium font-serif text-slate-700 leading-[2.5rem] sm:leading-[3rem] lg:leading-[4.25rem]">
                        {heading}
                    </p>
                    <p className="xl:text-[1.2rem] sm:text-[1.1rem] xs:text-[0.95rem] md:text-[1rem] lg:text-[1.15rem] text-brown-600 mb-4 text-[var(--theme-brown)]">
                        {subHead}
                    </p>
                    <p className="xl:text-[1.1rem] sm:text-[1rem] xs:text-[0.85rem] md:text-[0.8rem] lg:text-[1rem] text-brown-600 mb-4 text-slate-500 text-justify">
                        {subtext}
                    </p>
                    <button
                        onClick={() => navigate(navigateToshop || "/")}
                        className="bg-[var(--theme-brown)] text-white shadow-md font-medium px-6 py-3 xs:text-xs md:text-xs xl:text-base rounded-lg w-fit mt-1 hover:bg-[var(--buttonHover)] duration-500">
                        {shopButton}
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-[45%] flex justify-center items-center mb-8 lg:mb-0">
                    <img
                        src={imageUrl || "/default-image.jpg"}
                        alt="Hero Banner"
                        className="rounded-t-full xl:w-[70%] sm:w-[60%] md:w-[80%] md:-ml-14 lg:-ml-28 lg:w-[90%] h-auto object-cover"
                    />
                </div>

                {/* Decorative Borders */}
                <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-2 md:-top-4 md:-right-4 xs:-top-4 xs:-right-4 p-6 sm:p-8 border-t-2 sm:border-t-3 border-r-2 sm:border-r-3 border-dotted border-orange-300 rounded-tr-xl"></div>
                <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-4 md:-bottom-5 md:-left-5 xs:-bottom-4 xs:-left-4 p-6 sm:p-8 border-b-2 sm:border-b-3 border-l-2 sm:border-l-3 border-dotted border-orange-300 rounded-bl-xl"></div>
            </div>
        </div>
    );
}

export default Hero;
