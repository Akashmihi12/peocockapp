"use client";

import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.footer
      ref={ref}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={fadeInUp}
      transition={{ duration: 1 }}
      className="bg-[#432c24] text-white py-6"
    >
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <motion.a
          href="#"
          className="hover:text-orange-500 transition duration-300"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FaFacebookF size={24} />
        </motion.a>
        <motion.a
          href="#"
          className="hover:text-orange-500 transition duration-300"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <FaTelegramPlane size={24} />
        </motion.a>
        <motion.a
          href="#"
          className="hover:text-orange-500 transition duration-300"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FaInstagram size={24} />
        </motion.a>
      </div>

      {/* Navigation Links */}
      <motion.div
        className="flex justify-center space-x-4 mb-4"
        variants={fadeInUp}
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
        variants={fadeInUp}
        transition={{ duration: 0.8, delay: 0.6 }}
      />

      {/* Copyright Text */}
      <motion.p
        className="text-center font-serif text-sm"
        variants={fadeInUp}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        © 2024 All Rights Reserved
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
