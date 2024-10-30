"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const Team = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "Amanda Lee",
      designation: "CEO",
      email: "amanda@example.com",
      contact: "+1 234 567 890",
      image: "https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/profile1.webp",
    },
    {
      name: "James Smith",
      designation: "CTO",
      email: "james@example.com",
      contact: "+1 234 567 891",
      image: "https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/profile2.webp",
    },
    {
      name: "Sarah Johnson",
      designation: "CFO",
      email: "sarah@example.com",
      contact: "+1 234 567 892",
      image: "https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/profile3.webp",
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="team-section"
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={fadeInUp}
      transition={{ duration: 1 }}
      // Reduced vertical padding from py-16 to py-6
      className="w-full py-6 bg-gray-100 flex items-center justify-center"
    >
      <div className="container mx-auto text-center px-4 md:px-8">
        <motion.h2
          className="text-3xl font-bold mb-4 font-serif text-[#432c24]"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Meet the Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.3 + (index * 0.2) }}
            >
              <Image 
                src={member.image} 
                alt={member.name} 
                className="rounded-full mb-4 mx-auto"
                width={120}
                height={120}
                layout="fixed"
              />
              <h3 className="text-xl font-bold mb-2 font-serif text-[#432c24]">{member.name}</h3>
              <p className="font-serif text-[#432c24]">{member.designation}</p>
              <p className="font-serif text-[#432c24]">{member.email}</p>
              <p className="font-serif text-[#432c24]">{member.contact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Team;
