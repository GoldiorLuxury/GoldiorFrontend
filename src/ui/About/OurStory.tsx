function OurStory({
  heading,
  subtext,
  subtext2,
  imageUrl,
}: {
  heading: string;
  subtext: string;
  subtext2: string;
  imageUrl: string;
}) {
  return (
    <>
      {/* bg-[radial-gradient(circle,#f7eaea,white)] */}
      <div className="w-full p-6 flex flex-col  justify-center items-center  md:py-40">
        <div className="text-3xl text-[var(--theme-brown)] text-center md:px-28 lg:px-72 font-bold mb-4 lg:text-5xl roboto drop-shadow-lg">
          {heading}
        </div>

        <p className="text-lg lg:text-2xl text-justify md:px-28 lg:px-42 drop-shadow-lg">{subtext}</p>
        <div style={{ marginBottom: "26px" }}></div> {/* Adds a gap */}
        <p className="text-lg lg:text-2xl text-justify md:px-28 lg:px-42 drop-shadow-lg">{subtext2}</p>
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
