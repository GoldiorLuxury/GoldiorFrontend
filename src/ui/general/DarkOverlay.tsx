function DarkOverlay({
  heading,
  subtext,
  image,
}: {
  heading: string;
  subtext: string;
  image: string;
}) {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`,
      }}
    >
      <div className="text-black z-10 p-4 md:mx-28 lg:mx-72 lg:p-12 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center">{heading}</h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-6 text-justify">{subtext}</p>
      </div>
    </div>
  );
}

export default DarkOverlay;
