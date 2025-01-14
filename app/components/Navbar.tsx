"use client";
import React, { useState } from "react";
import { FaCheck, FaBars } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { BsCartDash } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#272343] text-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <FaCheck />
            <span>Free shipping on all orders over $50</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="hover:underline cursor-pointer">Eng</div>
            <div className="hover:underline cursor-pointer">FAQs</div>
            <div className="flex items-center space-x-1">
              <CiCircleAlert size={16} />
              <span className="hover:underline cursor-pointer">Need Help</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="bg-gray-100 shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/LogoIcon.png"
              alt="Comforty Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-gray-700">Comforty</span>
          </div>

          {/* Cart */}
          <div className="relative hidden md:flex items-center">
            <BsCartDash size={30} className="text-gray-700" />
            <span className="absolute top-0 right-0 bg-teal-600 text-white text-xs rounded-full px-1">
              4
            </span>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <FaBars
              size={24}
              className="text-gray-700 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex justify-between items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between w-full">
          <div className="flex space-x-6 font-thin text-gray-700">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: "Product", path: "/product" },
              { name: "FAQ", path: "/faq" },
              { name: "About", path: "/about" },
              { name: "SinglePage", path: "/singlepage" },
              { name: "Cart", path: "/cart" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="hover:text-teal-600 transition duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="text-gray-700">Contact: (808) 555-0111</div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-3 space-y-2 text-gray-700">
          {[
            { name: "Home", path: "/" },
            { name: "Shop", path: "/shop" },
            { name: "Product", path: "/product" },
            { name: "FAQ", path: "/faq" },
            { name: "About", path: "/about" },
            { name: "Cart", path: "/cart" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="hover:text-teal-600 transition duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
