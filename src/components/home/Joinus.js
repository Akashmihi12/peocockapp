"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
};

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const joinusImage = 'https://peocock.s3.ap-southeast-2.amazonaws.com/home/Joinus.jpg';

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
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }}
      transition={{ duration: 1 }}
      // Reduced vertical padding from py-12 to py-6
      className="py-6 bg-white"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 md:px-8">
        {/* Image on the left side for large screens and below text on small screens */}
        <motion.div
          className="lg:w-1/2 w-full mb-8 lg:mb-0"
          variants={fadeInLeft}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image 
            src={joinusImage} 
            alt="Join Us in Making a Difference" 
            className="rounded-lg"
            layout="responsive"
            width={500}
            height={500}
          />
        </motion.div>

        {/* Text on the right */}
        <motion.div
          className="lg:w-1/2 w-full lg:pl-12"
          variants={fadeInRight}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold font-serif mb-4 text-[#432c24]">Join Us in Making a Difference</h2>
          <p className="mb-6 font-serif text-[#432c24]">
            Support our mission to empower mothers and uplift communities. Every purchase and contribution helps keep families together, provides sustainable livelihoods, and fosters the growth of thriving communities. Together, we can create lasting change and build a brighter future for the next generation. Join us on this journey of compassion, resilience, and transformation.
          </p>
          <motion.button
            onClick={handleShopRedirect}
            className="font-serif bg-[#d77642] hover:bg-[#ffea7a] text-white hover:text-[#432c24] px-6 py-3 rounded-full shadow-md transition duration-300 font-bold"
            variants={fadeInUp}
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
