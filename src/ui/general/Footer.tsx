import { NavLink } from "react-router-dom";
import logo from "../../assets/goldior-logo.png";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-4 flex flex-col items-center lg:px-32">
      <div className="container px-6 text-left">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-center border-t border-[var(--theme-brown)] pt-8 pb-6">
          {/* Logo and Social Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
            <img src={logo} alt="Logo" className="h-16 mb-4" />
            <div className="flex space-x-12 m-4 text-3xl">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-300 duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-blue-700 hover:text-blue-500 duration-300"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-400 duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-pink-600 hover:text-pink-400 duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 w-full md:w-3/5 md:text-left">
            {/* Shopping */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Shopping</h3>
              <ul>
                <li className="cursor-pointer hover:text-gray-400 mb-2">
                  Payments
                </li>
                <li className="cursor-pointer hover:text-gray-400 mb-2">
                  Delivery Options
                </li>
                <li className="cursor-pointer hover:text-gray-400 mb-2">
                  Buyer Protection
                </li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Customer Care</h3>
              <ul>
                <li className="cursor-pointer hover:text-gray-400 mb-2">
                  Help Center
                </li>
                <li className="cursor-pointer hover:text-gray-400 mb-2">
                  Terms & Conditions
                </li>
                <li className="cursor-pointer hover:text-gray-400 mb-2">
                  Privacy Policy
                </li>
                <li className="cursor-pointer hover:text-gray-400 mb-2">
                  Returns & Refund
                </li>
                <li className="cursor-pointer hover:text-gray-400 mb-2">
                  Survey & Feedback
                </li>
              </ul>
            </div>

            {/* Pages */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Pages</h3>
              <ul>
                <li className="cursor-pointer hover:text-gray-400 mb-2">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="cursor-pointer hover:text-gray-400 mb-2">
                  <NavLink to="/shop">Shop</NavLink>
                </li>
                <li className="cursor-pointer hover:text-gray-400 mb-2">
                  Contact Us
                </li>
                <li className="cursor-pointer hover:text-gray-400 mb-2">
                  Blog
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-10 text-sm border-t border-[var(--theme-brown)] text-gray-400 text-center">
          <p>Copyright © 2024 Glodior Luxury Pvt. Ltd.<br/> Registered office: 202, Crystal Tower, Gundavali Road, Near Apollo Diagnostic, Andheri East.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
