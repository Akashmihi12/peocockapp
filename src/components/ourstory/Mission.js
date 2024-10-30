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

const Mission = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const missionImage = 'https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/mission.webp';

  return (
    <motion.section
      ref={ref}
      id="mission-section"
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
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 md:px-8">
        {/* Text section */}
        <motion.div
          className="lg:w-1/2 w-full lg:pr-12"
          variants={fadeInLeft}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-serif text-[#432c24]">Our Mission</h2>
          <p className="mb-6 font-serif text-[#432c24]">
            At DDS Social Ventures, our mission is to empower mothers in the Kegalle District of Sri Lanka by providing local employment opportunities. We believe that when mothers thrive, so do their families and communities. By offering sustainable livelihoods, we help prevent financial migration, keeping families united and fostering community growth.
          </p>
          <p className="font-serif text-[#432c24]">
            Our products are more than just items—they're symbols of resilience, care, and the transformative power of empowering women.
          </p>
        </motion.div>

        {/* Image section */}
        <motion.div
          className="lg:w-1/2 w-full mt-8 lg:mt-0"
          variants={fadeInRight}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image 
            src={missionImage} 
            alt="Our Mission" 
            className="rounded-lg"
            width={500}
            height={500}
            unoptimized
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Mission;
