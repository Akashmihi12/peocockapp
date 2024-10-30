"use client";

import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const Navbar = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <motion.nav
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-between px-4 py-6 bg-transparent absolute w-full z-50"
    >
      <div className="flex items-center justify-between w-full">
        {!isOpen && (
          <Link href="/" className="text-[#432c24] font-bold text-xl md:block">
            <img
              src="https://peocock.s3.ap-southeast-2.amazonaws.com/coman/peacock_logo.png"
              alt="Peacock Logo"
              className="h-8"
            />
          </Link>
        )}

        <div className="flex md:hidden">
          {!isOpen && (
            <button onClick={toggleMenu} className="text-[#432c24] focus:outline-none z-40">
              <FaBars size={24} />
            </button>
          )}
        </div>

        <div className="hidden md:flex space-x-6 text-[#432c24]">
          <Link href="/" className="hover:text-orange-500 transition font-serif font-bold duration-300">
            Home
          </Link>
          <Link href="/products" className="hover:text-orange-500 font-serif transition font-bold duration-300">
            Products
          </Link>
          <Link href="/ourstory" className="hover:text-orange-500 font-serif transition font-bold duration-300">
            Our Story
          </Link>
          <Link href="/contact" className="hover:text-orange-500 font-serif transition font-bold duration-300">
            Contact
          </Link>
        </div>
      </div>

      {isOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-0 right-0 h-full w-2/3 font-serif bg-white shadow-lg z-30 flex flex-col pt-8 text-center"
        >
          <Link href="/" onClick={closeMenu} className="text-[#432c24] font-serif font-bold mb-8">
            <img
              src="https://peocock.s3.ap-southeast-2.amazonaws.com/coman/peacock_logo.png"
              alt="Peacock Logo"
              className="h-12 mx-auto"
            />
          </Link>

          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 font-serif font-bold text-[#432c24] focus:outline-none z-50"
          >
            <FaTimes size={24} />
          </button>

          <Link
            href="/"
            onClick={closeMenu}
            className="text-[#432c24] font-serif font-bold hover:text-orange-500 py-4"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={closeMenu}
            className="text-[#432c24] font-bold font-serif hover:text-orange-500 py-4"
          >
            Products
          </Link>
          <Link
            href="/ourstory"
            onClick={closeMenu}
            className="text-[#432c24] font-bold font-serif hover:text-orange-500 py-4"
          >
            Our Story
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="text-[#432c24] font-bold font-serif hover:text-orange-500 py-4"
          >
            Contact
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
