const SubscriptionBanner = () => {
    return (
        <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 xs:pt-0 sm:pt-0 sm:py-12 md:py-16">
            <div className="relative flex flex-col items-center justify-center w-full p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-[#fdf6ed] rounded-bl-[1.5rem] rounded-tr-[1.5rem] rounded-tl-[6rem] rounded-br-[6rem]">
                {/* Header */}
                <h2 className="text-sm xs:text-sm xs:pt-4 sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 mb-4 text-center">
                    Stay Connected with{" "}
                    <span className="text-[var(--theme-brown)]">Glodior Luxury</span>
                </h2>
                <p className="text-xs xs:text-xs sm:text-base md:text-lg lg:text-xl xl:text-base xl:w-[30%] text-slate-400 text-center mb-6">
                    Receive exclusive offers, first looks at new fragrances, and invitations to special events.
                </p>

                {/* Input and Button */}
                <div className="flex flex-col sm:flex-row items-center sm:w-[60%] lg:w-[50%] mb-6">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="border border-gray-200 xs:w-[80%] sm:w-[60%] md:w-[70%] lg:w-[80%] xl:w-[20%] rounded-l-md p-2 xs:p-1 sm:p-3 md:p-2 lg:p-3 flex-grow focus:outline-none placeholder:text-gray-500 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base text-slate-700 transition-all"
                    />
                    <button className="bg-[var(--theme-brown)] text-white xs:w-[80%] sm:w-[30%] md:w-[25%] lg:w-[30%]  xl:w-[30%] xs:px-2 xs:py-1 xs:text-sm sm:px-4 sm:py-3 md:px-3 md:py-2 lg:px-6 lg:py-3 xs:rounded-md rounded-r-md hover:bg-[var(--buttonHover)] transition-all duration-300 ease-in-out mt-4 sm:mt-0">
                        Subscribe
                    </button>
                </div>

                {/* Decorative Dots */}
                <div className="absolute -top-[1.5rem] -right-[1.5rem] xs:-top-[0.5rem] xs:-right-[0.5rem] sm:-top-[1.2rem] sm:-right-[1.2rem] p-[2rem] sm:p-[3rem] border-t-[3px] border-r-[3px] border-dotted border-orange-300 rounded-tr-[1.5rem]"></div>
                <div className="absolute -bottom-[1.5rem] -left-[1.5rem] xs:-bottom-[0.5rem] xs:-left-[0.5rem] sm:-bottom-[1.2rem] sm:-left-[1.2rem] p-[2rem] sm:p-[3rem] border-b-[3px] border-l-[3px] border-dotted border-orange-300 rounded-bl-[1.5rem]"></div>
            </div>
        </div>
    );
};

export default SubscriptionBanner;
