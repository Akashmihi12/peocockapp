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

const Family = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const familyImage = 'https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/familly.webp';

  return (
    <motion.section
      ref={ref}
      id="family-section"
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }}
      transition={{ duration: 1 }}
      // Reduced vertical padding from py-16 to py-6
      className="w-full py-6 bg-white flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 md:px-8">
        <motion.div
          className="lg:w-1/2 w-full mb-8 lg:mb-0"
          variants={fadeInLeft}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image 
            src={familyImage} 
            alt="Making a Difference" 
            className="rounded-lg"
            width={500}
            height={500}
            unoptimized
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2 w-full lg:pl-12"
          variants={fadeInRight}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-serif text-[#432c24]">Making a Difference, One Family at a Time</h2>
          <p className="mb-4 font-serif text-[#432c24]">
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
