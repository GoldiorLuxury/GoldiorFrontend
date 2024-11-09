import logo from "../../assets/goldior-logo.png";
import WLproduct1 from "../../assets/old-fashion-perfume-black-gold.png";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BsHandbag } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import { MdOutlineArrowForwardIos } from "react-icons/md";
import WishlistCard from "./WishlistCard";
import { FaChevronUp } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isWishlistOpen, setWishlistOpen] = useState(false);

  return (
    // <>
    //   <nav className={"h-24 p-3 flex items-center justify-between "}>
    //     <span
    //       className={
    //         "flex items-center justify-center gap-4 w-[35%] sm:w-[25%] h-full"
    //       }
    //     >
    //       <button onClick={() => console.log("l")}>
    //         <RxHamburgerMenu size={25} className={"block sm:hidden"} />
    //       </button>
    //       <img
    //         src={logo}
    //         alt="Goldior"
    //         className={"h-[60%] sm:h-[80%] w-[65%] sm:w-[55%] md:w-[30%]"}
    //       />
    //     </span>
    //     <div className={"hidden sm:flex w-[55%]"}>
    //       <ul
    //         className={
    //           "flex items-center justify-center sm:gap-6 md:gap-10 lg:gap-16 w-full"
    //         }
    //       >
    //         <NavLink
    //           to={"/"}
    //           className={"text-center lg:text-lg roboto-regular"}
    //         >
    //           Home
    //         </NavLink>
    //         <NavLink
    //           to={"/"}
    //           className={"text-center lg:text-lg roboto-regular"}
    //         >
    //           Shop
    //         </NavLink>
    //         <NavLink
    //           to={"/about"}
    //           className={"text-center lg:text-lg roboto-regular"}
    //         >
    //           About
    //         </NavLink>
    //         <NavLink
    //           to={"/services"}
    //           className={"text-center lg:text-lg roboto-regular"}
    //         >
    //           Services
    //         </NavLink>
    //         <li className={"text-center lg:text-lg roboto-regular"}>Blog</li>
    //       </ul>
    //     </div>
    //     <div
    //       className={
    //         "h-full w-[40%] sm:w-[25%] flex items-center justify-evenly lg:mx-16"
    //       }
    //     >
    //       <IoSearchSharp size={23} />
    //       <FaRegUser size={23} />
    //       <FaRegHeart size={23} />
    //       <BsHandbag size={23} />
    //     </div>
    //   </nav>
    //   <span className={" mx-8 sm:mx-16 md:mx-24 lg:mx-32"}>path from url</span>
    // </>

    <>
      <nav className="h-24 p-3 flex items-center justify-between">
        <span className="flex items-center justify-center gap-4 w-[35%] sm:w-[25%] h-full">
          <button onClick={() => setMobileMenuOpen(true)} className="sm:hidden">
            <RxHamburgerMenu size={25} />
          </button>
          <img
            src={logo}
            alt="Goldior"
            className="h-[60%] sm:h-[80%] w-[65%] sm:w-[55%] md:w-[30%]"
          />
        </span>

        {/* Desktop Menu */}
        <div className="hidden sm:flex w-[55%]">
          <ul className="flex items-center justify-center sm:gap-6 md:gap-10 lg:gap-16 w-full">
            <NavLink to="/" className="text-center lg:text-lg roboto-regular">
              Home
            </NavLink>
            <NavLink to="/shop" className="text-center lg:text-lg roboto-regular">
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className="text-center lg:text-lg roboto-regular"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="text-center lg:text-lg roboto-regular"
            >
              Services
            </NavLink>
            <li className="text-center lg:text-lg roboto-regular">Blog</li>
          </ul>
        </div>

        {/* Mobile Menu with Slide Animation */}
        <div
          className={`absolute top-0 left-0 h-screen bg-[var(--theme-brown)] text-white transform opacity-95 transition-transform duration-300 z-20 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
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
              className="text-center text-2xl roboto-regular hover:text-gray-200 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/"
              className="text-center text-2xl roboto-regular hover:text-gray-200 transition-colors duration-200"
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
            <li className="text-center text-2xl roboto-regular hover:text-gray-200 transition-colors duration-200">
              Blog
            </li>
          </ul>
        </div>

        {/* Wishlist
        <div
          className={`absolute top-0 right-0 h-screen bg-white transform transition-transform duration-500 z-20 ease-in-out ${
            isWishlistOpen ? "translate-x-0" : "translate-x-full hidden"
          } w-4/5 md:w-3/5 lg:w-1/4 shadow-lg`}
        >
          <div className="flex p-6 justify-between items-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Wishlist</h2>
            <MdOutlineArrowForwardIos
              onClick={() => setWishlistOpen(false)}
              size={28}
              className="cursor-pointer"
            />
          </div>
          <WishlistCard name="Luxurious elixer" imageUrl={WLproduct1} quantity="250ml" price="300"/>
          <WishlistCard />
          <WishlistCard />
        </div> */}
        <div
          className={`absolute top-0 right-0 w-full h-screen bg-white transform transition-transform duration-500 z-20 ease-in-out ${
            isWishlistOpen ? "translate-y-0" : "-translate-y-full"
          } w-2/3 md:w-3/5 lg:w-1/4 shadow-lg`}
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
          {/* <IoSearchSharp size={23} /> */}
          <FaRegUser size={23}/>
          <FaRegHeart size={23} onClick={() => setWishlistOpen(true)} />
          <BsHandbag size={23} />
        </div>
      </nav>
      <span className="mx-8 sm:mx-16 md:mx-24 lg:mx-32">path from url</span>
    </>
  );
}

