import DarkOverlay from "../ui/general/DarkOverlay"
import aboutBG from '../assets/about-bg.png'
import OutStory from "../ui/About/OurStory"
import ourStoryImage from '../assets/our-story.jpg'
import WhatMakesUsUnique from "../ui/About/WhatMakesUsUnique"
import Navbar from "../ui/general/Navbar"
import Footer from "../ui/general/Footer"


function About() {
  return (
    <>
    <Navbar />
    <DarkOverlay 
    heading="About us"
    subtext="At Goldior, we believe that perfumes are more than just scents; they are expressions of one's individuality and style. Our passion for exquisite fragrances led us to curate a collection that captures the essence of diverse personalities, bringing you an unparalleled olfactory experience."
    image={aboutBG} />
    <OutStory heading="Our story"
    subtext="Goldior Perfumes was founded by a group of perfume enthusiasts with a shared vision to create a haven for perfume lovers seeking authentic, locally-inspired fragrances. Inspired by the diversity and richness of cultures around the world, we set out on a journey to curate a collection of scents that capture the essence of each region. Our aim is to bring you closer to the heart and soul of different cultures through the art of perfumery."
    imageUrl={ourStoryImage}/>
    <WhatMakesUsUnique />
    <Footer />
    </>
  )
}

export default About