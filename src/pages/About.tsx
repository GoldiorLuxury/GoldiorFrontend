import { useEffect } from 'react'
import DarkOverlay from "../ui/general/DarkOverlay";
import aboutBG from "../assets/about-bg.png";
import OutStory from "../ui/About/OurStory";
import ourStoryImage from "../assets/our-story.jpg";
// import WhatMakesUsUnique from "../ui/About/WhatMakesUsUnique";
import Navbar from "../ui/general/Navbar";
import Footer from "../ui/general/Footer";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
      <Navbar />
      <DarkOverlay
        image={aboutBG}
      />
      <OutStory
        heading="Goldior Luxury: A Tradition of Magnificence"
        subtext="Goldior Luxury is proud to explore the rich history of the perfume industry. We have been creating outstanding fragrances for years, paying tribute to the age-old craft of creating perfumes. We source brilliant citrus from Italy, rare oud from Asia, and exquisite roses from Bulgaria to give the best notes to your memories. Each scent is a work of art that perfectly captures the spirit of luxury, elegance, and sophistication. Goldior Luxury is committed to making perfumes that make an impression because we think every scent has a story."
        subtext2="Shop with confidence at Goldior Luxury, where your satisfaction and protection are our top priorities. Enjoy luxurious fragrances at budget-friendly prices, backed by our commitment to your security and peace of mind."
        imageUrl={ourStoryImage}
      />


      {/* <WhatMakesUsUnique /> */}
      <Footer />
    </>
  );
}

export default About;
