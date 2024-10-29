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
            backgroundColor: "rgba(0, 0, 0, 0.65)",
          }}
        >
          {/* Overlay to darken the background image */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
  
          {/* Text content, centered */}
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl lg:text-6xl mb-12 text-[var(--theme-brown)] drop-shadow-lg">
              {heading}
            </h1>
            <p className="text-2xl lg:text-xl text-white drop-shadow-md px-64">
              {subtext}
            </p>
          </div>
        </div>
      </>
    );
  }
  
  export default Welcome;