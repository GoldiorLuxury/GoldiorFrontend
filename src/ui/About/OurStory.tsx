function OurStory({
  heading,
  subtext,
  imageUrl,
}: {
  heading: string;
  subtext: string;
  imageUrl: string;
}) {
  return (
    <>
      {/* Text content */}
      <div className="w-full p-6 flex flex-col bg-[radial-gradient(circle,#f7eaea,white)] justify-center items-center  md:py-40">
        <div className="text-3xl text-[var(--theme-brown)] text-center md:px-28 lg:px-72 font-bold mb-4 lg:text-5xl roboto drop-shadow-lg">
          {heading}
        </div>

        <p className="text-lg lg:text-2xl text-justify md:px-28 lg:px-42 drop-shadow-lg">{subtext}</p>
      </div>

      {/* Image below text */}
      <div className="w-full">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-[618px] object-cover bg-center"
        />
      </div>
    </>
  );
}
export default OurStory;
