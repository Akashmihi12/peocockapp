"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Team = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "Name Name Name",
      designation: "Designation",
      email: "E-mail Here",
      contact: "Contact Number",
      image: "https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/profile1.webp",
    },
    {
      name: "Name Name Name",
      designation: "Designation",
      email: "E-mail Here",
      contact: "Contact Number",
      image: "https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/profile2.webp",
    },
    {
      name: "Name Name Name",
      designation: "Designation",
      email: "E-mail Here",
      contact: "Contact Number",
      image: "https://peocock.s3.ap-southeast-2.amazonaws.com/ourstory/profile3.webp",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      className="w-full py-16 bg-gray-100 flex items-center justify-center"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 font-serif text-[#432c24]">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
            >
              <Image 
                src={member.image} 
                alt={`Team Member ${index + 1}`} 
                className="rounded-full mb-4 mx-auto"
                width={120}
                height={120}
                unoptimized
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
