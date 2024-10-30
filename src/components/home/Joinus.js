"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import joinusImage from '/public/images/home/Joinus.jpg';

const Joinus = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleShopRedirect = () => {
    window.location.href = '/products'; // Simple redirection to the products page
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="py-16 bg-white"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        {/* Image on the left side for large screens and below text on small screens */}
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image 
            src={joinusImage} 
            alt="Join Us in Making a Difference" 
            className="rounded-lg"
            width={500}
            height={500}
          />
        </motion.div>

        {/* Text on the right */}
        <motion.div
          className="lg:w-1/2 lg:pl-12"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold font-serif mb-4 text-[#432c24]">Join Us in Making a Difference</h2>
          <p className="mb-6 font-serif text-[#432c24]">
          Support our mission to empower mothers and uplift communities. Every purchase and contribution helps keep families together, provides sustainable livelihoods, and fosters the growth of thriving communities. Together, we can create lasting change and build a brighter future for the next generation. Join us on this journey of compassion, resilience, and transformation.
          </p>
          <motion.button
            onClick={handleShopRedirect} // Simple redirection with window.location.href
            className="font-serif bg-[#d77642] hover:bg-[#ffea7a] text-white hover:text-[#432c24] px-6 py-3 rounded-full shadow-md transition duration-300 font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Visit Our Shop
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Joinus;
