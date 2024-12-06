function Welcome({
  heading,
  subtext,
  imageUrl,
}: {
  heading?: string;
  subtext?: string;
  imageUrl?: string;
}) {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundBlendMode: "darken",
          backgroundColor: "rgba(0, 0, 0, 0.70)",
        }}
      >

        <div className="relative z-10 text-center">
          <h1 className="text-7xl font-semibold text-transparent bg-gradient-to-r from-[#FFFF] to-[#AB572D] bg-clip-text drop-shadow-lg mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h1>
          <p className="text-lg text-white drop-shadow-md text-center px-10 md:text-xl lg:px-72">
            {subtext}
          </p>
        </div>
      </div>
    </>
  );
}

export default Welcome;