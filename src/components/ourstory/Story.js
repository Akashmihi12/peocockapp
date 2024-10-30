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

const Story = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const storyImage = 'https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/story.webp';

  return (
    <motion.section
      ref={ref}
      id="story-section"
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }}
      transition={{ duration: 1 }}
      // Reduced vertical padding from py-16 to py-6
      className="w-full py-6 bg-gray-100 flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row-reverse items-center px-4 md:px-8">
        <motion.div
          className="lg:w-1/2 w-full mb-8 lg:mb-0"
          variants={fadeInRight}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image 
            src={storyImage} 
            alt="Our Story" 
            className="rounded-lg"
            width={500}
            height={500}
            unoptimized
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2 w-full lg:pr-12"
          variants={fadeInLeft}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-serif text-[#432c24]">Our Story</h2>
          <p className="font-serif text-[#432c24] mb-6">
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
