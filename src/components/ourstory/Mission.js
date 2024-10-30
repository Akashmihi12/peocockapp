"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Mission = () => {
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
            src="https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/mission.webp" 
            alt="Our Mission" 
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
          <h2 className="text-3xl font-bold mb-4 font-serif text-[#432c24]">Our Mission</h2>
          <p className="mb-6 font-serif text-[#432c24]">
            At DDS Social Ventures, our mission is to empower mothers in the Kegalle District of Sri Lanka by providing local employment opportunities. We believe that when mothers thrive, so do their families and communities. By offering sustainable livelihoods, we help prevent financial migration, keeping families united and fostering community growth.
          </p>
          <p className="font-serif text-[#432c24]">
            Our products are more than just items—they're symbols of resilience, care, and the transformative power of empowering women.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Mission;
