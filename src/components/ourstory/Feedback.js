"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Feedback = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const feedbacks = [
    {
      name: "Floyd Miles",
      image: "https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/profile1.webp",
      feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Excepteur veniam consequat sunt nostrud amet.",
      rating: 4,
    },
    {
      name: "Ronald Richards",
      image: "https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/profile2.webp",
      feedback: "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Excepteur veniam consequat sunt nostrud amet.",
      rating: 4,
    },
    {
      name: "Savannah Nguyen",
      image: "https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/profile3.webp",
      feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Excepteur veniam consequat sunt nostrud amet.",
      rating: 4,
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      className="w-full py-16 bg-white flex items-center justify-center"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 font-serif text-[#432c24]">Our Customer Feedback</h2>
        <p className="mb-12 font-serif text-[#432c24]">Don't take our word for it. Trust our customers!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
            >
              <Image 
                src={feedback.image} 
                alt={feedback.name} 
                className="rounded-full mb-4 mx-auto"
                width={100}
                height={100}
                unoptimized
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
