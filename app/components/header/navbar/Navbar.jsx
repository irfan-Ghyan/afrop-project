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
        <Link href="/contact" className="hidden md:block bg-gradient-to-r from-[#2b5c17] to-[#ad8c19] text-white px-4 py-2 rounded-full ml-4">
          Get in Touch
        </Link>
        <div className="md:hidden flex w-6 h-6">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? '✖' : '☰'} 
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-20 right-5 py-2 w-40">
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

            <Link href="/contact" className="text-gray-700 border-b-2 border-transparent hover:border-gray-900">
              Contact
            </Link>
            <Link href="/contact" className="bg-gradient-to-r from-[#2b5c17] to-[#ad8c19] text-white px-4 py-2 rounded-lg">
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
