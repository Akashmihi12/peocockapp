"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const Feedback = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const feedbacks = [
    {
      name: "Floyd Miles",
      image: "https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/profile1.webp",
      feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      rating: 4,
    },
    {
      name: "Ronald Richards",
      image: "https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/profile2.webp",
      feedback: "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      rating: 4,
    },
    {
      name: "Savannah Nguyen",
      image: "https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/profile3.webp",
      feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      rating: 4,
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="feedback-section"
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={fadeInUp}
      transition={{ duration: 1 }}
      // Reduced vertical padding from py-16 to py-6
      className="w-full py-6 bg-white flex items-center justify-center"
    >
      <div className="container mx-auto text-center px-4 md:px-8">
        <motion.h2
          className="text-3xl font-bold mb-4 font-serif text-[#432c24]"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Customer Feedback
        </motion.h2>
        <motion.p
          className="mb-8 font-serif text-[#432c24]"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Don't take our word for it. Trust our customers!
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg shadow-lg p-6"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 + (index * 0.2) }}
            >
              <Image 
                src={feedback.image} 
                alt={feedback.name} 
                className="rounded-full mb-4 mx-auto"
                width={100}
                height={100}
                layout="fixed"
              />
              <h3 className="text-xl font-bold mb-2 font-serif text-[#432c24]">{feedback.name}</h3>
              <p className="font-serif text-[#432c24] mb-4">{feedback.feedback}</p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-orange-400 ${i < feedback.rating ? "text-orange-500" : "text-gray-300"}`}>
                    &#9733;
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Feedback;
