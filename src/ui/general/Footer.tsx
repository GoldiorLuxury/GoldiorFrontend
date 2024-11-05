import logo from "../../assets/goldior-logo.png";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white py-6 lg:px-20 ">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start border-t border-b border-gray-300 pt-8 pb-6">
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
              <button className="bg-[var(--theme-brown)] text-white px-4 py-2 rounded-r-lg">
                Submit
              </button>
            </div>
            <div className="flex space-x-12 m-4">
              <a
                href="#"
                className="text-[var(--twitterIcon)] hover:text-gray-800"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-[var(--facebookIcon)] hover:text-gray-800"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-[var(--linkedinIcon)] hover:text-gray-800"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-[var(--instagramIcon)] hover:text-gray-800"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-2/3 text-md">
            <div>
              <h3 className="font-semibold mb-2">Categories</h3>
              <ul>
                <li>Fashion</li>
                <li>Jewelry</li>
                <li>Sports</li>
                <li>Electronics</li>
                <li>Indoor</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Shopping</h3>
              <ul>
                <li>Payments</li>
                <li>Delivery options</li>
                <li>Buyer protection</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Customer Care</h3>
              <ul>
                <li>Help center</li>
                <li>Terms & Conditions</li>
                <li>Privacy policy</li>
                <li>Returns & refund</li>
                <li>Survey & feedback</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Pages</h3>
              <ul>
                <li>About Us</li>
                <li>Shop</li>
                <li>Contact Us</li>
                <li>Services</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
