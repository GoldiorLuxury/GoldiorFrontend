import logo from "../../assets/goldior-logo.png";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-6 lg:px-20 ">
      <div className="container mx-auto px-10 text-center">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start border-t border-b border-gray-300 pt-8 pb-6 text-left">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
            <img src={logo} alt="Logo" className="h-12 mb-4" />
            <p className="font-semibold text-2xl">
              Subscribe to Our Newsletter:
            </p>
            <p className="text-md mb-4">
              Receive Updates on New Arrivals and Special Promotions!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email here"
                className="p-2 border border-gray-300 rounded-l-lg w-full focus:outline-none md:w-auto"
              />
              <button className="bg-[var(--theme-brown)] text-white px-4 py-2 rounded-r-lg hover:bg-[var(--buttonHover)] duration-300">
                Submit
              </button>
            </div>
            <div className="flex space-x-12 m-4 text-2xl">
              <a
                href="#"
                className="text-[var(--twitterIcon)] hover:text-3xl duration-500"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-[var(--facebookIcon)] hover:text-3xl duration-500"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-[var(--linkedinIcon)] hover:text-3xl duration-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-[var(--instagramIcon)] hover:text-3xl duration-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-2/3 text-md">
            <div>
              <h3 className="font-semibold mb-2">Categories</h3>
              <ul>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Fashion
                </li>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Jewelry
                </li>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Sports
                </li>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Electronics
                </li>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Indoor
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Shopping</h3>
              <ul>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Payments
                </li>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Delivery options
                </li>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Buyer protection
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Customer Care</h3>
              <ul>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Help center
                </li>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Terms & Conditions
                </li>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Privacy policy
                </li>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Returns & refund
                </li>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Survey & feedback
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Pages</h3>
              <ul>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  About Us
                </li>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Shop
                </li>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Contact Us
                </li>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Services
                </li>
                <li className="cursor-pointer hover:text-gray-400 hover:font-medium">
                  Blog
                </li>
              </ul>
            </div>
          </div>
        </div>
        @Goldior
      </div>
    </footer>
  );
}

export default Footer;
