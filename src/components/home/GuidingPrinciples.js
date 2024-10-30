"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

const principles = [
  { 
    title: "Empowering Mothers", 
    icon: 'https://peocock.s3.ap-southeast-2.amazonaws.com/home/Maternity.jpg', 
    description: "We honor the strength, care, and resilience of mothers, celebrating their central role in families and communities.",
    link: "empowering-section"
  },
  { 
    title: "Rooted in Buddhist Values", 
    icon: 'https://peocock.s3.ap-southeast-2.amazonaws.com/home/Buddhist.jpg', 
    description: "Guided by Buddhist principles, we practice right livelihood, mindfulness, and compassion in all aspects of our work.",
    link: "rooted-section"
  },
  { 
    title: "Protecting Our Planet", 
    icon: 'https://peocock.s3.ap-southeast-2.amazonaws.com/home/Leaf.jpg', 
    description: "We are committed to environmental sustainability, planting trees and caring for the earth to ensure a thriving future.",
    link: "protecting-section"
  },
  { 
    title: "Building Strong Communities", 
    icon: 'https://peocock.s3.ap-southeast-2.amazonaws.com/home/Family.jpg', 
    description: "Our work empowers mothers and uplifts entire communities, fostering economic stability and social cohesion.",
    link: "communities-section"
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const GuidingPrinciples = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }}
      transition={{ duration: 1 }}
      // Reduced vertical padding from py-12 to py-6
      className="py-6 bg-gray-100"
    >
      <div className="container mx-auto text-center px-4 md:px-8">
        <motion.h2
          className="text-3xl font-bold mb-8 text-[#432c24] font-serif"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Our Guiding Principles
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6">
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
                style={{ width: '280px', height: '350px' }}
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
                whileHover={{ scale: 1.05 }}
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
