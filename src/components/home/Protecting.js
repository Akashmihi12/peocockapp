"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import protectingImage from '/public/images/home/Protecting.jpg';

const Protecting = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      id="protecting-section"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="py-16 bg-white"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
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
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image 
            src={protectingImage} 
            alt="Protecting Our Planet" 
            className="rounded-lg"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Protecting;
