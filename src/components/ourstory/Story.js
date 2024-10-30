"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Story = () => {
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
      className="w-full py-16 bg-gray-100 flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center">
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image 
            src="https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/story.webp" 
            alt="Our Story" 
            className="rounded-lg"
            width={500}
            height={500}
            unoptimized
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2 lg:pr-12"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-serif text-[#432c24]">Our Story</h2>
          <p className="font-serif text-[#432c24]">
            DDS Social Ventures was born from a simple yet powerful idea: that every mother deserves the opportunity to provide for her family without leaving her home or community. Founded in the heart of the Kegalle District, our initiative started with a few local women crafting handmade products.
          </p>
          <p className="font-serif text-[#432c24]">
            Today, we've grown into a thriving social enterprise rooted in Buddhist principles of compassion and right livelihood. Our journey has been one of growth, hope, and transformation—both for the women we work with and the communities we serve.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Story;
