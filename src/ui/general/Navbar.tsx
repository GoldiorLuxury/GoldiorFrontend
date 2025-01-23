/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/goldior-logo.png";
import { PiHeart, PiUser, PiShoppingCartSimple } from "react-icons/pi";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import WishlistCard from "./WishlistCard";
import { FaLongArrowAltRight } from "react-icons/fa";

import wishimg from "../../assets/8.jpg"
import { getWishlist } from "../../data/wishlist/getWishlist";
import ProfileCard from "../components/profile";

// Type definition for Wishlist item
interface WishlistItem {
  id: string;
  name: string;
  imageUrl: string;
  discountPercentage?: number;
  quantity: string;
  price: number;
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        profileCardRef.current &&
        !profileCardRef.current.contains(event.target)
      ) {
        setIsProfileCardOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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

  const NavItem: React.FC<{ to?: string; children: React.ReactNode }> = ({
    children,
    to,
  }) => {
    if (to) {
      // If 'to' exists, render NavLink
      return (
        <li className="mx-1 sm:mx-2 md:mx-3">
          <NavLink
            to={to}
            className={({ isActive }) =>
              `cursor-pointer text-center text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.05rem] xl:text-[1.05rem] text-slate-700 hover:text-[var(--theme-brown)] max-w-fit px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg ease-in-out duration-300 ${
                isActive ? "text-yellow-500 font-medium" : ""
              }`
            }
          >
            {children}
          </NavLink>
        </li>
      );
    }

    // If 'to' doesn't exist, render a span or other element (no link)
    return (
      <li className="mx-1 sm:mx-2 md:mx-3">
        <span className="cursor-pointer text-center text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.05rem] xl:text-[1.05rem] text-slate-700 hover:text-[var(--theme-brown)] max-w-fit px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg ease-in-out duration-300">
          {children}
        </span>
      </li>
    );
  };

  return (
    <nav
      className={`flex justify-between items-center w-full h-[4rem] xs:h-[5rem] sm:h-[6rem] md:h-[6rem] fixed top-0 z-20 px-4 sm:px-8 sm:py-2 xs:py-2 md:px-8 lg:px-[3rem] xl:px-32 ${
        isScrolled ? "bg-[#fffef9] shadow" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="lg:w-[7rem] h-auto xs:w-[30%] sm:w-[20%] md:w-[12%]">
        <img
          src={logo}
          alt="Goldior Logo"
          className="h-full max-h-[70%] sm:max-h-[auto] w-auto object-contain rounded-md"
        />
      </div>
      <div className="hidden md:block">
        <ul className="flex justify-between items-center font-medium lg:w-[36rem] md:w-[26rem] xl:w-[34rem]">
          {["Home", "Collection", "Discover", "Blog"].map((menu) =>
            menu === "Home" ? (
              <NavItem key={menu} to={`/`}>
                {menu}
              </NavItem>
            ) : (
              <NavItem key={menu} to={`/${menu.toLowerCase()}`}>
                {menu}
              </NavItem>
            )
          )}
        </ul>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center justify-between w-[8rem]">
          <div>
            <PiUser
              className="ease-in-out duration-200 text-[1.4rem] cursor-pointer"
              onClick={toggleProfileCard}
            />
            {isProfileCardOpen && userEmail && (
              <div
                style={{
                  position: "absolute",
                  top: "3rem",
                  transform: "translateX(-50%)",
                }}
              >
                <ProfileCard
                  name="Hey:)"
                  email={userEmail}
                  imageUrl={""}
                  onLogout={handleLogout}
                />
              </div>
            )}
          </div>
          <NavItem>
            <PiHeart
              className="ease-in-out duration-200 lg:text-[1.4rem] md:text-[1.2rem]"
              onClick={() => setWishlistOpen(true)}
            />
          </NavItem>
          <NavItem to="/cart">
            <div className="relative">
              <PiShoppingCartSimple className="ease-in-out duration-200 lg:text-[1.4rem] md:text-[1.2rem]" />
              <span className="absolute top-[0rem] lg:left-[0.95rem] md:left-[0.75rem] w-[0.6rem] h-[0.6rem] bg-[#eca95c] rounded-full border-2 border-white"></span>
            </div>
          </NavItem>
        </ul>
      </div>
      <div
        ref={wishlistRef}
        className={`fixed top-0 right-0 h-screen bg-white border-2 bg-transparent transform transition-transform duration-500 z-20 ease-in-out ${
          isWishlistOpen ? "translate-x-0" : "translate-x-full"
        } w-4/5 md:w-3/5 lg:w-1/4`}
      >
        <div className="flex p-6 justify-between items-center text-slate-700">
          <h2 className="text-2xl md:text-2xl font-semibold">Wishlist</h2>
          <div className="bg-slate-200 w-[2rem] h-[2rem] flex justify-center items-center rounded-lg">
            <FaLongArrowAltRight
              onClick={() => setWishlistOpen(false)}
              size={20}
              className="cursor-pointer"
            />
          </div>
        </div>
        {favourites.length > 0 ? (
          favourites.map((item, index) => (
            <WishlistCard
              key={index}
              favorites={favourites}
              setFavourites={setFavourites}
              // @ts-expect-error: The types of `favourites` and `setFavourites` are not compatible.
              id={item._id}
              name={item.name}
              // @ts-expect-error: The types of `favourites` and `setFavourites` are not compatible.
              imageUrl={item.imgUrl}
              // @ts-expect-error: The types of `favourites` and `setFavourites` are not compatible.
              discountPercentage={item.discountPercentage}
              quantity="250ml"
              price={item.price}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-100 px-4">
            {/* Empty Cart Image */}
            <img
              src={wishimg} // Use a relevant empty cart image
              alt="Empty Cart"
              className="w-full max-w-[200px] h-auto object-cover mix-blend-multiply mb-6"
            />

            {/* Empty Cart Title */}
            <p className="text-3xl text-slate-700 font-bold text-center">
              Your Wishlist is Empty!
            </p>

            {/* Additional Text */}
            <p className="text-base text-slate-500 text-center mt-4">
              It seems you haven't added anything to your cart yet. Start
              shopping now and add some exciting products to your cart!
            </p>

            {/* Shop Now Button */}
            <NavLink
              to="/Collection"
              className="mt-8 bg-[var(--theme-brown)] text-white text-base font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[var(--buttonHover)]"
            >
              Shop Now
            </NavLink>
          </div>
        )}
      </div>
      <div className="md:hidden flex items-center">
        <RxHamburgerMenu
          className="text-xl cursor-pointer"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-[6rem] bg-white border-2 rounded-2xl p-4 z-10 w-[90%] mx-auto">
          <ul className="flex flex-col items-center py-4">
            {["Home", "Collection", "Discover", "Blog"].map((menu) => (
              <NavItem key={menu} to={`/${menu.toLowerCase()}`}>
                {menu}
              </NavItem>
            ))}
            <div className="flex justify-center gap-5 mt-2">
              <div>
                <PiUser
                  className="ease-in-out duration-200 text-[1.4rem]"
                  onClick={toggleProfileCard}
                />
                {isProfileCardOpen && userEmail && (
                  <div
                    style={{
                      position: "absolute",
                      top: "3rem",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <ProfileCard
                      name="Hey:)"
                      email={userEmail}
                      imageUrl={""}
                      onLogout={handleLogout}
                    />
                  </div>
                )}
              </div>

              <NavItem>
                <PiHeart className="ease-in-out duration-200 text-[1.4rem]" />
              </NavItem>
              <NavItem to="/cart">
                <div className="relative">
                  <PiShoppingCartSimple className="ease-in-out duration-200 text-[1.4rem]" />
                  <span className="absolute top-[0.1rem] left-[1rem] w-[0.55rem] h-[0.55rem] bg-[#eca95c] rounded-full border-2 border-white"></span>
                </div>
              </NavItem>
            </div>
          </ul>
          <div
            className="absolute top-0 right-0 p-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <RxCross2 className="text-xl cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
}
