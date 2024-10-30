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

const rootedImage = 'https://peocock.s3.ap-southeast-2.amazonaws.com/home/Rooted.jpg';

const Rooted = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      id="rooted-section"
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
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 md:px-8">
        <motion.div
          className="lg:w-1/2 w-full mb-8 lg:mb-0"
          variants={fadeInLeft}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image 
            src={rootedImage} 
            alt="Rooted in Buddhist Values" 
            className="rounded-lg"
            layout="responsive"
            width={500}
            height={500}
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2 w-full lg:pl-12"
          variants={fadeInRight}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-serif text-[#432c24]">Rooted in Buddhist Values</h2>
          <p className="mb-6 font-serif text-[#432c24]">
            Our business is deeply rooted in Buddhist principles, guiding every aspect of what we do. At DDS Social Ventures, we embrace the concept of "Right Livelihood" (Sammā Ājīva), ensuring that our practices are ethical, mindful, and compassionate.
          </p>
          <p className="mb-6 font-serif text-[#432c24]">
            These values shape our commitment to integrity, respect for all beings, and a sustainable way of life. We believe that by aligning our business with these spiritual teachings, we create not only high-quality products but also meaningful impact.
          </p>
          <p className="text-[#432c24] font-serif">
            Our dedication to Buddhist values fosters a culture of mindfulness and compassion, resonating with those who value ethical and spiritually conscious living.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Rooted;
