import logo from "../../assets/goldior-logo.png";
import WLproduct1 from "../../assets/old-fashion-perfume-black-gold.png";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BsHandbag } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import WishlistCard from "./WishlistCard";
import { FaChevronUp } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isWishlistOpen, setWishlistOpen] = useState(false);

  return (
    <>
      <nav className="h-24 p-3 bg-[#FFFF] shadow-md flex items-center justify-between absolute top-0 w-full z-20">
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
            <NavLink
              to="/services"
              className="text-center lg:text-xl roboto-regular hover:text-[var(--theme-brown)] hover:font-semibold duration-300"
            >
              Services
            </NavLink>
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
              to="/"
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
              to="/services"
              className="text-center text-2xl roboto-regular hover:text-gray-200 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/blog"
              className="text-center text-2xl roboto-regular hover:text-black-500 transition-colors duration-200"
            >
              Blog
            </NavLink>
          </ul>
        </div>

        <div
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
          <WishlistCard
            name="Luxurious elixer"
            imageUrl={WLproduct1}
            quantity="250ml"
            price="300"
          />
          <WishlistCard />
          <WishlistCard />
        </div>

        <div className="h-full w-[40%] sm:w-[22%] flex items-center justify-evenly lg:mx-16">
          <Link to="/login">
            <FaRegUser
              size={23}
              className="hover:text-[var(--theme-brown)] cursor-pointer"
            />
          </Link>
          <FaRegHeart
            size={23}
            className="hover:text-[var(--theme-brown)] cursor-pointer"
            onClick={() => setWishlistOpen(true)}
          />
          <Link to="/cart">
            <BsHandbag size={23}
              className="hover:text-[var(--theme-brown)] cursor-pointer"
            />
          </Link>
        </div>
      </nav>
      {/* <span className="mx-8 sm:mx-16 md:mx-24 lg:mx-32 z-20 top-28 relative">path from url</span> */}
    </>
  );
}
