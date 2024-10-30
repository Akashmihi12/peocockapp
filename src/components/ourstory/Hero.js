"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      id="hero-section"
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={fadeInUp}
      transition={{ duration: 1 }}
      className="w-full h-[50vh] flex items-center justify-center bg-gray-100"
    >
      <div className="text-center px-4 md:px-8">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#432c24] mb-4 font-serif"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering Mothers,<br />Strengthening Communities
        </motion.h1>
        <motion.p
          className="text-md md:text-lg lg:text-xl font-semibold text-[#432c24] font-serif"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Rooted in Compassion, Guided by Values
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;
