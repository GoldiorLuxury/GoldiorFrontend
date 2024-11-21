import logo from "../../assets/goldior-logo.png";
// import WLproduct1 from "../../assets/old-fashion-perfume-black-gold.png";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import WishlistCard from "./WishlistCard";
import ProfileCard from '../components/profile';
import { FaChevronUp } from "react-icons/fa";
import { RiHandbagLine } from "react-icons/ri";
import profileimg from "../../assets/profile.jpg"
import wishimg from "../../assets/8.jpg"
import { getWishlist } from "../../data/wishlist/getWishlist";


interface WishlistItem {
  id: string;
  name: string;
  imageUrl: string;
  discountPercentage?: number;  // Ensure this matches your actual data model.
  quantity: string;
  price: number;  // This must be a number if that's what you're receiving.
}

export default function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isWishlistOpen, setWishlistOpen] = useState(false);
  const [favourites, setFavourites] = useState<WishlistItem[]>([]);
  const [isProfileCardOpen, setIsProfileCardOpen] = useState(false);
  const profileCardRef = useRef<HTMLDivElement>(null);
  const wishlistRef = useRef<HTMLDivElement>(null);
  const userEmail = localStorage.getItem("user_email_goldior_luxury");

  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (profileCardRef.current && !profileCardRef.current.contains(event.target)) {
        setIsProfileCardOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const items = await getWishlist();
      setFavourites(items);
    };
    fetchData();
  }, [isWishlistOpen]);

  const handleLogout = () => {
    localStorage.removeItem("user_email_goldior_luxury");
    setIsProfileCardOpen(false);
    navigate("/");
  };

  const toggleProfileCard = () => {
    if (!userEmail) {
      navigate("/login");
    } else {
      setIsProfileCardOpen(!isProfileCardOpen);
    }
  };


  return (
    <>
      <nav className="h-24 p-3 bg-[#F7F1F1]  flex items-center justify-between fixed top-0 w-full z-20">
        <span className="flex items-center justify-center gap-4 w-[35%] sm:w-[25%] h-full">
          <button onClick={() => setMobileMenuOpen(true)} className="sm:hidden">
            <RxHamburgerMenu size={25} />
          </button>
          <img
            src={logo}
            alt="Goldior"
            className="h-[50%] sm:h-[70%] object-cover"
          />
        </span>

        {/* Desktop Menu */}
        <div className="hidden sm:flex w-[55%]">
          <ul className="flex items-center justify-center sm:gap-6 md:gap-10 lg:gap-16 w-full">
            <NavLink
              to="/"
              className="text-center lg:text-xl roboto-regular hover:text-[var(--theme-brown)] hover:font-semibold duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className="text-center lg:text-xl roboto-regular hover:text-[var(--theme-brown)] hover:font-semibold duration-300"
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className="text-center lg:text-xl roboto-regular hover:text-[var(--theme-brown)] hover:font-semibold duration-300"
            >
              About
            </NavLink>

            {/* <NavLink
              to="/services"
              className="text-center lg:text-xl roboto-regular hover:text-[var(--theme-brown)] hover:font-semibold duration-300"
            >
              Services
            </NavLink> */}
            <NavLink
              to="/blog"
              className="text-center lg:text-xl roboto-regular hover:text-[var(--theme-brown)] hover:font-semibold duration-300"
            >
              Blog
            </NavLink>
          </ul>
        </div>

        <div
          className={`fixed top-0 left-0 h-screen bg-[var(--theme-brown)] text-white transform opacity-95 transition-transform duration-300 z-20 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } w-3/4 sm:hidden shadow-lg`}
        >
          <div className="flex p-6 justify-between items-center border-b border-white/50">
            <img
              src={logo}
              alt="Goldior"
              className="h-10 w-28 sm:h-16 sm:w-32 md:w-[30%]"
            />
            <RxCross2
              onClick={() => setMobileMenuOpen(false)}
              size={24}
              className="cursor-pointer"
            />
          </div>
          <ul className="flex flex-col items-center gap-8 py-8">
            <NavLink
              to="/"
              className="text-center text-2xl roboto-regular duration-200 hover:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className="text-center text-2xl roboto-regular hover:text-gray-200 duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className="text-center text-2xl roboto-regular hover:text-gray-200 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className="text-center text-2xl roboto-regular hover:text-gray-200 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </NavLink>
          </ul>
        </div>

        <div
          ref={wishlistRef}
          className={`fixed top-0 right-0 h-screen bg-white transform transition-transform duration-500 z-20 ease-in-out ${isWishlistOpen ? "translate-y-0" : "-translate-y-full"
            } w-4/5 md:w-3/5 lg:w-1/4 shadow-lg`}
        >
          <div className="flex p-6 justify-between items-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Wishlist</h2>
            <FaChevronUp
              onClick={() => setWishlistOpen(false)}
              size={28}
              className="cursor-pointer"
            />
          </div>
          {favourites.length > 0 ? (
            favourites.map((item, index) => (
              <WishlistCard
                key={index}
                favorites={favourites}
                setFavourites={setFavourites}
                id={item._id}
                name={item.name}
                imageUrl={item.imgUrl}
                discountPercentage={item.discountPercentage}
                quantity="250ml"
                price={item.price}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-100">
              <img
                src={wishimg} // You should replace this with your actual image path or use an imported image
                alt="Empty Wishlist"
                className="w-1/2"
              />
              <p className="text-xl text-black  font-extrabold font-[Inria-Serif]">Your Wishlist is Empty!</p>

              <NavLink to="/shop" className="mt-10 bg-[var(--theme-brown)] text-white font-medium px-6 py-2 rounded-lg hover:bg-[var(--buttonHover)]">
                Shop Now
              </NavLink>
            </div>
          )}
        </div>

        <div className="h-full w-[40%] sm:w-[22%] flex items-center justify-evenly lg:mx-16">
          <div className="relative">
            <FaRegUser
              size={23}
              className="hover:text-[var(--theme-brown)] cursor-pointer"
              onClick={toggleProfileCard}
            />
            {isProfileCardOpen && userEmail && (
              <div style={{ position: 'absolute', top: '3rem', transform: 'translateX(-50%)' }}>
                <ProfileCard
                  name="Hey:)"
                  email={userEmail}
                  imageUrl={profileimg}
                  onLogout={handleLogout}
                />
              </div>
            )}
          </div>


          <FaRegHeart
            size={23}
            className="hover:text-[var(--theme-brown)] cursor-pointer"
            onClick={() => setWishlistOpen(true)}
          />

          <NavLink to={"/cart"}>
            <RiHandbagLine
              size={23}
              className="hover:text-[var(--theme-brown)] cursor-pointer"
            />
          </NavLink>
        </div>
      </nav >
      <span className="mx-8 sm:mx-16 md:mx-24 lg:mx-32 z-20 top-28 relative">
        path from url
      </span>
    </>
  );
}



