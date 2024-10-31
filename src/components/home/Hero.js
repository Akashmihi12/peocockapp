'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

// Function to handle the redirection
const handleShopRedirect = () => {
  window.location.href = '/products';
};

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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
      className="relative w-full h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url(https://peocock.s3.ap-southeast-2.amazonaws.com/home/home_hero.webp)' }}
    >
      {/* Overlay and Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-start justify-center text-left z-10 px-6 md:px-16 lg:px-24"
        variants={fadeInUp}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#432c24] mb-4 leading-tight">
          Nurturing Communities,<br className="block md:hidden" /> One Sale at a Time
        </h1>
        <p className="text-md md:text-lg lg:text-xl font-serif font-semibold text-[#432c24] mb-8">
          From the Heart of Sri Lanka to the World—<span className="font-bold">Empowering Mothers, Preserving Traditions.</span> <br />
          Grounded in Buddhist Values | <span className="font-bold">Driven by Compassion | Committed to Sustainability</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <motion.button
            className="bg-[#d77642] font-serif hover:bg-[#ffea7a] text-white hover:text-[#432c24] px-6 py-3 rounded-full shadow-md transition duration-300 font-bold"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore Our Journey
          </motion.button>

          <motion.button
            onClick={handleShopRedirect}
            className="bg-[#d77642] font-serif hover:bg-[#ffea7a] text-white hover:text-[#432c24] px-6 py-3 rounded-full shadow-md transition duration-300 font-bold"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Shop Our Products
          </motion.button>
        </div>
      </motion.div>

      {/* Optional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-70 z-5" />
    </motion.section>
  );
};

export default Hero;
