'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../../public/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="absolute inset-0 z-10 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" width={80} height={40} className="cursor-pointer" />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white text-orbitron border-b-2 border-transparent hover:text-[#2b5c17] hover:border-[#ad8c19]">
            HOME
          </Link>
          <Link href="/about" className="text-white text-orbitron border-b-2 border-transparent hover:text-[#2b5c17] hover:border-[#ad8c19]">
            ABOUT US
          </Link>
          <Link href="/exporting" className="text-white text-orbitron border-b-2 border-transparent hover:text-[#2b5c17] hover:border-[#ad8c19]">
            EXPORTING
          </Link>
          <Link href="/products" className="text-white text-orbitron border-b-2 border-transparent hover:text-[#2b5c17] hover:border-[#ad8c19]">
            PRODUCTS
          </Link>
          <Link href="/contact" className="text-white text-orbitron border-b-2 border-transparent hover:text-[#2b5c17] hover:border-[#ad8c19]">
            CONTACT
          </Link>
        </nav>
        <button className="hidden md:block bg-gradient-to-r from-[#2b5c17] to-[#ad8c19] text-white px-4 py-2 rounded-full ml-4">
          Get in Touch
        </button>
        <div className="md:hidden flex items-center w-20 h-20">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            ☰
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 right-0 py-2">
          <nav className="flex flex-col space-y-4 px-4">
            <Link href="/" className="text-gray-700 border-b-2 border-transparent hover:border-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 border-b-2 border-transparent hover:border-gray-900">
              About Us
            </Link>
            <Link href="/exporting" className="text-gray-700 border-b-2 border-transparent hover:border-gray-900">
              Exporting
            </Link>
            <Link href="/products" className="text-gray-700 border-b-2 border-transparent hover:border-gray-900">
              Products
            </Link>
            <Link href="/services" className="text-gray-700 border-b-2 border-transparent hover:border-gray-900">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 border-b-2 border-transparent hover:border-gray-900">
              Contact
            </Link>
            <button className="bg-gradient-to-r from-[#2b5c17] to-[#ad8c19] text-white px-4 py-2 rounded-lg">
              Get in Touch
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
