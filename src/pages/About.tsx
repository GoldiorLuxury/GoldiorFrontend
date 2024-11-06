import DarkOverlay from "../ui/general/DarkOverlay";
import aboutBG from "../assets/about-bg.png";
import OutStory from "../ui/About/OurStory";
import ourStoryImage from "../assets/our-story.jpg";
import WhatMakesUsUnique from "../ui/About/WhatMakesUsUnique";
import Navbar from "../ui/general/Navbar";
import Footer from "../ui/general/Footer";

function About() {
  return (
    <>
      <Navbar />
      <DarkOverlay
        heading="About us"
        subtext="Goldior is a luxury perfume brand that provides an exclusive collection of premium lifestyle products for everyone. Our formulations are a mix of luxurious & made from the best oils from around the world in every product. We provide premium quality and sophistication at affordable prices."
        image={aboutBG}
      />
      <OutStory
        heading="Goldior Luxury: A Legacy of Excellence
"
        subtext="Goldior Luxury is proud to celebrate the rich history of the perfume business. We have crafted exceptional fragrances for years, honoring the timeless art of perfume making. We source the finest raw materials from across the globe—delicate roses from Bulgaria, rare oud from the Middle East, and vibrant citrus from Italy. Our commitment to quality ensures that each perfume is a masterpiece, capturing the essence of luxury, elegance, and sophistication. At Goldior Luxury, we believe that every scent tells a story, and we are dedicated to creating perfumes that leave a lasting impression.
"
        imageUrl={ourStoryImage}
      />
      <WhatMakesUsUnique />
      <Footer />
    </>
  );
}

export default About;
