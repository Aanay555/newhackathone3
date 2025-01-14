
import { RiLinkedinLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-white">
    <div className="w-full  px-6 md:px-10 bg-gray-100">
      {/* Top Section */}
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
        {/* Logo and About Section */}
        <div className="mb-6 mt-6 md:mb-0">
          <h3 className="text-2xl font-bold text-teal-500 mb-4">Comforty</h3>
          <p className="text-gray-600 mb-6">
            Discover the finest furniture that combines comfort and style to elevate your space.
          </p>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <FiTwitter />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <RiLinkedinLine />
            </a>
          </div>
        </div>

        {/* Category Section */}
        <div className="mb-6 mt-6 md:mb-0">
          <h4 className="font-bold mb-4">CATEGORY</h4>
          {["Sofa", "Wing Chair", "Desk Chair", "Office Chair", "Park Bench"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                aria-label={`Navigate to ${item}`}
                className="block text-gray-600 hover:text-gray-900 mb-2"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Support Section */}
        <div className="mb-6 mt-6 md:mb-0">
          <h4 className="font-bold mb-4">SUPPORT</h4>
          {["Help & Support", "Terms & Conditions", "Privacy Policy", "Blog"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                aria-label={`Navigate to ${item}`}
                className="block text-gray-600 hover:text-gray-900 mb-2"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Newsletter Section */}
        <div className="mb-6 mt-6 md:mb-0">
          <h4 className="font-bold mb-4">NEWSLETTER</h4>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Enter your email for the newsletter"
              className="flex-1 px-4 w-40 py-2 mb-4 sm:mb-0 sm:mr-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              className="bg-teal-500 text-white px-4 py-2 rounded-r hover:bg-teal-600 focus:ring-2 focus:ring-teal-500"
              aria-label="Subscribe to the newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-gray-600 mb-2 sm:mb-0">
          © 2024 - Uzma Riaz. All rights reserved.
        </p>
        <div className="flex space-x-4">
          {["PayPal", "Visa", "Mastercard"].map((payment, index) => (
            <span key={index} className="text-gray-400">
              {payment}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
