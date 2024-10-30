"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import productHeroImage from '/public/images/products/product_hero.png';

const Hero = () => {
  // Intersection observer to trigger animation when in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers every time the hero section is in view
    threshold: 0.1, // Adjust to trigger animation earlier or later
  });

  return (
    <motion.section
      ref={ref} // Attach ref to trigger animation when section is in view
      initial={{ opacity: 0 }} // Initial opacity before animation
      animate={inView ? { opacity: 1 } : { opacity: 0 }} // Animate opacity when in view
      transition={{ duration: 1 }} // Animation duration
      className="relative w-full h-[400px] overflow-hidden" // Added overflow-hidden
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={productHeroImage}
          alt="Product Hero Image"
          fill
          style={{ objectFit: 'cover' }} // Adjusted for Next.js Image component
          priority
        />
      </div>

      {/* Overlay Text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4"
        initial={{ opacity: 0, y: 50 }} // Initial state
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
        transition={{ duration: 0.8, delay: 0.2 }} // Adjust transition timing
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
          Shop with Purpose
        </h1>
        <p className="text-base md:text-lg text-white mb-8 font-serif">
          <span className="font-bold">Every purchase supports mothers, families, and communities</span> <br />
          <span className="font-bold">in Sri Lanka.</span>
        </p>
        <motion.button
          className="bg-[#d77642] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#ffea7a] hover:text-[#432c24] transition duration-300 font-bold font-serif"
          initial={{ opacity: 0, y: 50 }} // Initial state
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore Our Products
        </motion.button>
      </motion.div>

      {/* Optional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 z-5" />
    </motion.section>
  );
};

export default Hero;
