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

const protectingImage = 'https://peocock.s3.ap-southeast-2.amazonaws.com/home/Protecting.jpg';

const Protecting = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      id="protecting-section"
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
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 md:px-8">
        <motion.div
          className="lg:w-1/2 w-full lg:pr-12 mb-8 lg:mb-0"
          variants={fadeInLeft}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold font-serif mb-4 text-[#432c24]">Protecting Our Planet</h2>
          <p className="mb-6 font-serif text-[#432c24]">
            Environmental stewardship is a cornerstone of our mission at DDS Social Ventures. We recognize that caring for our planet is essential to ensuring a sustainable future for the next generation. Our commitment goes beyond producing quality products; it extends to active reforestation efforts and sustainable practices that protect the Earth.
          </p>
          <p className="mb-6 font-serif text-[#432c24]">
            By planting thousands of trees and minimizing our ecological footprint, we contribute to the health and vitality of our environment. Our dedication to sustainability resonates with eco-conscious consumers, making every purchase a step toward preserving the natural beauty and resources of our world for years to come.
          </p>
        </motion.div>

        <motion.div
          className="lg:w-1/2 w-full"
          variants={fadeInRight}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image 
            src={protectingImage} 
            alt="Protecting Our Planet" 
            className="rounded-lg"
            layout="responsive"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Protecting;
