"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll'; // Importing Link from react-scroll

const principles = [
  { 
    title: "Empowering Mothers", 
    icon: 'https://peocock.s3.ap-southeast-2.amazonaws.com/home/Maternity.jpg', 
    description: "We honor the strength, care, and resilience of mothers, celebrating their central role in families and communities.",
    link: "empowering-section" // Link to Empowering.js section
  },
  { 
    title: "Rooted in Buddhist Values", 
    icon: 'https://peocock.s3.ap-southeast-2.amazonaws.com/home/Buddhist.jpg', 
    description: "Guided by Buddhist principles, we practice right livelihood, mindfulness, and compassion in all aspects of our work.",
    link: "rooted-section" // Link to Rooted.js section
  },
  { 
    title: "Protecting Our Planet", 
    icon: 'https://peocock.s3.ap-southeast-2.amazonaws.com/home/Leaf.jpg', 
    description: "We are committed to environmental sustainability, planting trees and caring for the earth to ensure a thriving future.",
    link: "protecting-section" // Link to Protecting.js section
  },
  { 
    title: "Building Strong Communities", 
    icon: 'https://peocock.s3.ap-southeast-2.amazonaws.com/home/Family.jpg', 
    description: "Our work empowers mothers and uplifts entire communities, fostering economic stability and social cohesion.",
    link: "communities-section" // Link to Communities.js section
  }
];

const GuidingPrinciples = () => {
  // Use intersection observer to trigger animations
  const { ref, inView } = useInView({
    triggerOnce: false, // Triggers animation every time the section is in view
    threshold: 0.1, // Adjust this to trigger animation earlier or later
  });

  return (
    <motion.section
      ref={ref} // Attach ref to section for the animation trigger
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="py-16 bg-gray-100"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl font-bold mb-8 text-[#432c24] font-serif"
        >
          Our Guiding Principles
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <Link
              key={index}
              to={principle.link}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <motion.div
                className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg"
                style={{ width: '280px', height: '350px', margin: '0 auto' }}  // Adjust card size here
                initial={{ opacity: 0, y: 50 }} // Initial animation state
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
                transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }} // Delay each card slightly
                whileHover={{ scale: 1.05 }} // Add zoom effect on hover
              >
                <img src={principle.icon} alt={principle.title} className="h-16 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#432c24] font-serif">{principle.title}</h3>
                <p className="text-[#432c24] text-center font-serif">{principle.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default GuidingPrinciples;
