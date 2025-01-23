import { NavLink } from "react-router-dom";
import logo from "../../assets/goldior-logo.png";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  // return (
  //   <footer className="py-4 flex flex-col items-center lg:px-32">
  //     <div className="container px-6 text-left">
  //       <div className="flex flex-col md:flex-row md:justify-between items-center md:items-center border-t border-[var(--theme-brown)] pt-8 pb-6">
  //         {/* Logo and Social Links */}
  //         <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
  //           <img src={logo} alt="Logo" className="h-16 mb-4" />
  //           <div className="flex space-x-12 m-4 text-3xl">
  //             <a
  //               href="#"
  //               className="text-blue-500 hover:text-blue-300 duration-300"
  //               aria-label="Twitter"
  //             >
  //               <FaTwitter />
  //             </a>
  //             <a
  //               href="#"
  //               className="text-blue-700 hover:text-blue-500 duration-300"
  //               aria-label="Facebook"
  //             >
  //               <FaFacebook />
  //             </a>
  //             <a
  //               href="#"
  //               className="text-blue-600 hover:text-blue-400 duration-300"
  //               aria-label="LinkedIn"
  //             >
  //               <FaLinkedin />
  //             </a>
  //             <a
  //               href="#"
  //               className="text-pink-600 hover:text-pink-400 duration-300"
  //               aria-label="Instagram"
  //             >
  //               <FaInstagram />
  //             </a>
  //           </div>
  //         </div>

  //         {/* Footer Links */}
  //         <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 w-full md:w-3/5 md:text-left">
  //           {/* Shopping */}
  //           <div>
  //             <h3 className="font-semibold text-lg mb-4">Shopping</h3>
  //             <ul>
  //               <li className="cursor-pointer hover:text-gray-400 mb-2">
  //                 Payments
  //               </li>
  //               <li className="cursor-pointer hover:text-gray-400 mb-2">
  //                 Delivery Options
  //               </li>
  //               <li className="cursor-pointer hover:text-gray-400 mb-2">
  //                 Buyer Protection
  //               </li>
  //             </ul>
  //           </div>

  //           {/* Customer Care */}
  // <div>
  //   <h3 className="font-semibold text-lg mb-4">Customer Care</h3>
  //   <ul>
  //     <li className="cursor-pointer hover:text-gray-400 mb-2">
  //       Help Center
  //     </li>
  //     <li className="cursor-pointer hover:text-gray-400 mb-2">
  //       Terms & Conditions
  //     </li>
  //     <li className="cursor-pointer hover:text-gray-400 mb-2">
  //       Privacy Policy
  //     </li>
  //     <li className="cursor-pointer hover:text-gray-400 mb-2">
  //       Returns & Refund
  //     </li>
  //     <li className="cursor-pointer hover:text-gray-400 mb-2">
  //       Survey & Feedback
  //     </li>
  //   </ul>
  // </div>

  //           {/* Pages */}
  //     <div>
  //       <h3 className="font-semibold text-lg mb-4">Pages</h3>
  //       <ul>
  //         <li className="cursor-pointer hover:text-gray-400 mb-2">
  //           <NavLink to="/about">About</NavLink>
  //         </li>
  //         <li className="cursor-pointer hover:text-gray-400 mb-2">
  //           <NavLink to="/shop">Shop</NavLink>
  //         </li>
  //         <li className="cursor-pointer hover:text-gray-400 mb-2">
  //           Contact Us
  //         </li>
  //         <li className="cursor-pointer hover:text-gray-400 mb-2">
  //           Blog
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </div>

  //       {/* Footer Text */}
  //       <div className="mt-10 text-sm border-t border-[var(--theme-brown)] text-gray-400 text-center">
  //         <p>Copyright © 2024 Glodior Luxury Pvt. Ltd.<br/> Registered office: 202, Crystal Tower, Gundavali Road, Near Apollo Diagnostic, Andheri East.</p>
  //       </div>
  //     </div>
  //   </footer>
  // );

  return (
    // <footer className="bg-white py-8 pl-20">
    //   <div className="flex flex-col md:flex-row justify-between">
    //     {/* Logo and Newsletter */}
    //     <div className="w-1/3">
    //       <img
    //         src={logo} /* Replace with your logo path */
    //         alt="Goldior Logo"
    //         className="h-12 mb-4"
    //       />
    //       <h3 className="text-xl font-semibold mb-2">
    //         Subscribe to Our Newsletter:
    //       </h3>
    //       <p className="text-gray-600 mb-4">
    //         Receive Updates on New Arrivals and Special Promotions!
    //       </p>
    //       <div className="flex items-center">
    //         <input
    //           type="email"
    //           placeholder="Your email here"
    //           className="border border-gray-300 rounded-l-md p-2 flex-grow"
    //         />
    //         <button className="bg-orange-600 text-white px-4 py-2 rounded-r-md">
    //           Submit
    //         </button>
    //       </div>
    //       <div className="flex space-x-12 m-4 text-3xl">
    //         <a
    //           href="#"
    //           className="text-blue-500 hover:text-blue-300 duration-300"
    //           aria-label="Twitter"
    //         >
    //           <FaTwitter />
    //         </a>
    //         <a
    //           href="#"
    //           className="text-blue-700 hover:text-blue-500 duration-300"
    //           aria-label="Facebook"
    //         >
    //           <FaFacebook />
    //         </a>
    //         <a
    //           href="#"
    //           className="text-blue-600 hover:text-blue-400 duration-300"
    //           aria-label="LinkedIn"
    //         >
    //           <FaLinkedin />
    //         </a>
    //         <a
    //           href="#"
    //           className="text-pink-600 hover:text-pink-400 duration-300"
    //           aria-label="Instagram"
    //         >
    //           <FaInstagram />
    //         </a>
    //       </div>
    //     </div>

    //     <div className=" w-3/5 grid grid-cols-1 md:grid-cols-3 gap-8">
    //       <div>
    //         <h3 className="font-semibold text-lg mb-4">Shopping</h3>
    //         <ul>
    //           <li className="cursor-pointer hover:text-gray-400 mb-2">
    //             Payments
    //           </li>
    //           <li className="cursor-pointer hover:text-gray-400 mb-2">
    //             Delivery Options
    //           </li>
    //           <li className="cursor-pointer hover:text-gray-400 mb-2">
    //             Buyer Protection
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h3 className="font-semibold text-lg mb-4">Customer Care</h3>
    //         <ul>
    //           <li className="cursor-pointer hover:text-gray-400 mb-2">
    //             Help Center
    //           </li>
    //           <li className="cursor-pointer hover:text-gray-400 mb-2">
    //             Terms & Conditions
    //           </li>
    //           <li className="cursor-pointer hover:text-gray-400 mb-2">
    //             Privacy Policy
    //           </li>
    //           <li className="cursor-pointer hover:text-gray-400 mb-2">
    //             Returns & Refund
    //           </li>
    //           <li className="cursor-pointer hover:text-gray-400 mb-2">
    //             Survey & Feedback
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h3 className="font-semibold text-lg mb-4">Pages</h3>
    //         <ul>
    //           <li className="cursor-pointer hover:text-gray-400 mb-2">
    //             <NavLink to="/about">About</NavLink>
    //           </li>
    //           <li className="cursor-pointer hover:text-gray-400 mb-2">
    //             <NavLink to="/shop">Shop</NavLink>
    //           </li>
    //           <li className="cursor-pointer hover:text-gray-400 mb-2">
    //             Contact Us
    //           </li>
    //           <li className="cursor-pointer hover:text-gray-400 mb-2">Blog</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className="px-8 sm:px-16 md:px-16 lg:px-32 pt-16 pb-4 bg-gradient-to-r from-[#fef3e6] via-white to-[#fdebd0] border-t-2">
      <div>
        <div className="w-[7rem] h-auto mx-auto sm:w-[8rem] md:w-[9rem] lg:w-[10rem]">
          <img
            src={logo}
            alt="Glodior Logo"
            className="h-full max-h-[70%] sm:max-h-[auto] w-auto object-contain rounded-md"
          />
        </div>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[var(--theme-brown)] mt-6 text-center">
          Where luxury meets the art of fragrance
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-8">
          <div>
            <div className="font-medium text-xl mb-3 text-slate-800">Office Address</div>
            <div className="text-sm sm:text-base text-gray-500">
              202, Crystal Tower, Gundavali Road, Near Apollo Diagnostic, <br /> Andheri East, Maharashtra, India.
            </div>
            <div>
              <ul className="flex flex-wrap xs:w-full gap-4 text-sm sm:text-base text-slate-800 mt-12">
                <li className="cursor-pointer hover:text-gray-700 mb-2">
                  <NavLink to={"/terms & conditions"}>Terms & Conditions</NavLink>
                </li>
                <li className="cursor-pointer hover:text-gray-700 mb-2">
                  <NavLink to={"/privacy-policy"}> Privacy Policy </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="font-medium text-xl mb-3 text-slate-800">Shopping</div>
            <ul>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to={""}>Payments</NavLink>
              </li>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to={""}>Delivery Options</NavLink>
              </li>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to={""}>Buyer Protection</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-xl mb-3 text-slate-800">Customer Care</div>
            <ul>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to={""}>Help Center</NavLink>
              </li>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to={"/refund-policy"}>Returns & Refund </NavLink>
              </li>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to={""}>Survey & Feedback</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-xl mb-3 text-slate-800">Pages</div>
            <ul>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to="/Discover">Discover</NavLink>
              </li>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to="/Collection">Collection</NavLink>
              </li>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                Contact Us
              </li>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-xl mb-3 text-slate-800">Social Media</div>
            <div className="flex gap-2">
              <NavLink
                to={""}
                className="bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white p-2 duration-300 rounded-md"
                aria-label="Facebook"
              >
                <TiSocialFacebook className="text-2xl sm:text-3xl" />
              </NavLink>
              <NavLink
                className="bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white p-2 duration-300 rounded-md"
                aria-label="Instagram"
                to={""}
              >
                <IoLogoInstagram className="text-2xl sm:text-3xl" />
              </NavLink>
              <NavLink
                to={""}
                className="bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white p-2 duration-300 rounded-md"
                aria-label="LinkedIn"
              >
                <TiSocialLinkedin className="text-2xl sm:text-3xl" />
              </NavLink>
              <NavLink
                className="bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white p-2 duration-300 rounded-md"
                aria-label="Whatsapp"
                to={"https://wa.link/t09and"}
              >
                <MdOutlineWhatsapp className="text-2xl sm:text-3xl" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <hr className="border-gray-400 mb-4" />
        <p className="text-sm sm:text-base text-gray-800 mb-2 flex justify-center items-start gap-2">
          <FaRegCopyright className="xs:text-base" /> Copyright 2024 Glodior Luxury Pvt. Ltd. All Rights Reserved
        </p>
      </div>
    </footer>

  );
}

export default Footer;
