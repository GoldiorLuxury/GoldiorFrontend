import HomeGrid from "../ui/Home/HomeGrid";
import Hero from "../ui/Home/Hero";
import OurValues from "../ui/Home/OurValues";
import Welcome from "../ui/Home/Welcome";
import Navbar from "../ui/general/Navbar";
import landingPageImage from "../assets/landing-page-perfume.png";
import welcomeBg from "../assets/welcome-bg.png";
import welcomePage from "../assets/welcome-page-image.png";
import SaleBanner from "../ui/Home/SaleBanner";
import salePageBG from "../assets/sale_page_bg.jpg";
import Footer from "../ui/general/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        heading={"Elevate your fragrance! Victory Scented Fragrances!"}
        subtext={
          "Shop now and embrace the sweet smell of victory with Local Face."
        }
        buttonText={"Shop now"}
        imageUrl={landingPageImage}
      />
      <Welcome
        heading="Welcome to Goldior Luxury"
        subtext={
          "Welcome to Goldior Luxury Perfumes, where the spirit of victory and triumph come alive through scents that empower and inspire. Our curated collection, aptly named Victory Scented, is a celebration of success and elegance, designed to unleash your victorious essence. Indulge in the sweet taste of triumph with captivating fragrances that tell the tale of your achievements. At Goldior Luxury, we believe that every victory deserves a signature scent, and we are dedicated to providing unforgettable fragrances that elevate your spirit and empower your journey."
        }
        imageUrl={welcomeBg}
      />
      <OurValues
        heading="Our values"
        subtext={
          "At Goldior Luxury, our perfume retail store is built on a foundation of passion and authenticity. We believe in celebrating the individuality of every customer, providing a diverse collection of scents that resonate with their unique personality and style. Our dedicated team of fragrance enthusiasts is committed to creating a welcoming and inclusive environment, where connections are forged, and inspiration thrives."
        }
        imageUrl={welcomePage}
        buttonText={"Shop now"}
      />
      <HomeGrid />
      <SaleBanner
        heading="Perfume Year-End Sale! Up to 50% OFF"
        subtext={
          "Discover an exquisite collection of premium perfumes at unbelievable prices during our exclusive Perfume Sale!"
        }
        imageUrl={salePageBG}
        buttonText={"Know more"}
      />
      <Footer />
    </>
  );
}

export default Home;
