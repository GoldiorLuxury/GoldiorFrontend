function WhatMakesUsUnique() {
  return (
    <div className="relative w-full h-full flex flex-col items-center p-8 space-y-8 lg:px-28">
      <h1 className="text-4xl font-bold text-[var(--theme-brown)] text-center mt-4">
        What Makes Us Unique
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 w-full  md:text-justify">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Locally Inspired</h2>
          <p className="text-xl">
            Our perfumes are meticulously crafted to reflect the cultural
            heritage, traditions, and landscapes of various regions. From the
            vibrant streets of Marrakech to the serene cherry blossom gardens of
            Kyoto, each fragrance tells a unique story.
          </p>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">
            High-Quality Ingredients
          </h2>
          <p className="text-xl">
            We believe that the key to an extraordinary scent lies in the
            quality of ingredients. That's why we collaborate with expert
            perfumers who source the finest and ethically-sourced materials from
            around the world. We never compromise on the quality of our
            products, ensuring a long-lasting and luxurious experience.
          </p>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Personalized Service</h2>
          <p className="text-xl">
            We understand that choosing the perfect scent is a deeply personal
            experience. Our team of fragrance experts is always ready to assist
            you in finding a fragrance that complements your personality and
            style. Whether you're exploring new scents or seeking to rediscover
            an old favorite, we're here to guide you every step of the way.
          </p>
        </div>
      </div>

      <div className="mt-8 text-xl font-light px-6">
        <p>
          Join us on this olfactory journey, celebrating the diverse tapestry of
          scents worldwide. Discover captivating aromas that connect with the
          essence of local cultures.
          <br />
          <br />
          Thank you for being a part of our journey.
          <br />
          <br />
          With love and gratitude,
          <br />
          The Goldior Luxury team
        </p>
      </div>
    </div>
  );
}

export default WhatMakesUsUnique;
