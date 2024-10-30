"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Communities = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const communitiesImage = 'https://peocock.s3.ap-southeast-2.amazonaws.com/home/Communities.jpg';

  return (
    <motion.section
      ref={ref}
      id="communities-section"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="py-16 bg-white"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image 
            src={communitiesImage} 
            alt="Building Strong Communities" 
            className="rounded-lg"
            width={500}
            height={500}
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2 lg:pl-12"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-serif text-[#432c24]">Building Strong Communities</h2>
          <p className="mb-6 font-serif text-[#432c24]">
            At DDS Social Ventures, enriching communities is more than a goal—it’s our way of life. We are dedicated to creating lasting social impact by empowering mothers and fostering economic stability in the Kegalle District.
          </p>
          <p className="mb-6 font-serif text-[#432c24]">
            Our initiatives go beyond individual employment, aiming to uplift entire communities by providing sustainable livelihoods and preventing the disruption caused by financial migration.
          </p>
          <p className="font-serif text-[#432c24]">
            By keeping families intact and fostering strong community bonds, we create a model of success that inspires others globally. Our commitment to community development not only strengthens local economies but also promotes social cohesion and shared prosperity.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Communities;
