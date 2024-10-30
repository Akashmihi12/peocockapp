"use client";

import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';  // Importing icons
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  // Intersection observer to trigger animation when in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers every time the footer is in view
    threshold: 0.1, // Adjust to trigger animation earlier or later
  });

  return (
    <motion.footer
      ref={ref} // Attach ref to trigger animation when footer is in view
      initial={{ opacity: 0 }} // Initial opacity before animation
      animate={inView ? { opacity: 1 } : { opacity: 0 }} // Animate opacity when in view
      transition={{ duration: 1 }} // Animation duration
      className="bg-[#432c24] text-white py-6"
    >
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <motion.a
          href="#"
          className="hover:text-orange-500 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FaFacebookF size={24} />
        </motion.a>
        <motion.a
          href="#"
          className="hover:text-orange-500 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <FaTelegramPlane size={24} />
        </motion.a>
        <motion.a
          href="#"
          className="hover:text-orange-500 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FaInstagram size={24} />
        </motion.a>
      </div>

      {/* Navigation Links */}
      <motion.div
        className="flex justify-center space-x-4 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <a href="#" className="text-white font-serif hover:text-orange-500 transition duration-300">About</a>
        <a href="#" className="text-white font-serif hover:text-orange-500 transition duration-300">Features</a>
        <a href="#" className="text-white font-serif hover:text-orange-500 transition duration-300">Pricing</a>
        <a href="#" className="text-white font-serif hover:text-orange-500 transition duration-300">Gallery</a>
        <a href="#" className="text-white font-serif hover:text-orange-500 transition duration-300">Team</a>
      </motion.div>

      {/* Horizontal Line */}
      <motion.hr
        className="border-t border-gray-200 w-3/4 mx-auto mb-4 opacity-50"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />

      {/* Copyright Text */}
      <motion.p
        className="text-center font-serif text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        © 2024 All Rights Reserved
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
