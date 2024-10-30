// src/components/ourstory/Hero.js
"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      className="w-full h-[40vh] flex items-center justify-center bg-gray-100"
    >
      <div className="text-center px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#432c24] mb-4 font-serif">
          Empowering Mothers,<br />Strengthening Communities
        </h1>
        <p className="text-md md:text-lg lg:text-xl font-semibold text-[#432c24] font-serif">
          Rooted in Compassion, Guided by Values
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
