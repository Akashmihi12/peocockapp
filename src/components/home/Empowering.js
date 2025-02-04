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

const Empowering = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const empoweringImage = 'https://peocock.s3.ap-southeast-2.amazonaws.com/home/Empowering.jpg';

  return (
    <motion.section
      ref={ref}
      id="empowering-section"
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
          <h2 className="text-3xl font-bold font-serif mb-4 text-[#432c24]">Empowering Mothers</h2>
          <p className="mb-6 font-serif text-[#432c24]">
            Empowering mothers is at the heart of our business. At DDS Social Ventures, we believe that when mothers thrive, entire communities flourish. By providing local employment opportunities, we enable mothers to work within their communities, ensuring they can support their families without the need for financial migration.
          </p>
          <p className="mb-6 font-serif text-[#432c24]">
            Our approach not only preserves family unity but also fosters economic stability and social cohesion in the Kegalle District. Each product we create is a symbol of resilience, care, and the nurturing spirit of motherhood, driving positive change.
          </p>
          <p className="font-serif text-[#432c24]">
            Empowering mothers is more than our mission—it’s our commitment to building a brighter, more sustainable future.
          </p>
        </motion.div>
        
        <motion.div
          className="lg:w-1/2 w-full"
          variants={fadeInRight}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image 
            src={empoweringImage} 
            alt="Empowering Mothers" 
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

export default Empowering;
