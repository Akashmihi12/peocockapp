"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Family = () => {
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
      className="w-full py-16 bg-white flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image 
            src="https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/familly.webp" 
            alt="Making a Difference" 
            className="rounded-lg"
            width={500}
            height={500}
            unoptimized
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2 lg:pl-12"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-serif text-[#432c24]">Making a Difference, One Family at a Time</h2>
          <p className="font-serif text-[#432c24]">
            Through our efforts, we have provided sustainable livelihoods for mothers, prevented financial migration, and contributed to the economic growth of the Kegalle District.
          </p>
          <p className="font-serif text-[#432c24]">
            Each product purchased supports a family, strengthens a community, and helps preserve our environment. Together, we are creating a brighter future for the next generation.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Family;
