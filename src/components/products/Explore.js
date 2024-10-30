"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Image URLs from S3
const leftArrow = 'https://peocock.s3.ap-southeast-2.amazonaws.com/products/left.png';
const rightArrow = 'https://peocock.s3.ap-southeast-2.amazonaws.com/products/right.png';

// Category images from S3
const exp1 = 'https://peocock.s3.ap-southeast-2.amazonaws.com/products/exp-1.jpg';
const exp2 = 'https://peocock.s3.ap-southeast-2.amazonaws.com/products/exp-2.jpg';
const exp3 = 'https://peocock.s3.ap-southeast-2.amazonaws.com/products/exp-3.jpg';
const exp4 = 'https://peocock.s3.ap-southeast-2.amazonaws.com/products/exp-4.jpg';
const exp5 = 'https://peocock.s3.ap-southeast-2.amazonaws.com/products/exp-5.jpg';
const exp6 = 'https://peocock.s3.ap-southeast-2.amazonaws.com/products/exp-6.jpg';
const exp7 = 'https://peocock.s3.ap-southeast-2.amazonaws.com/products/exp-7.jpg';
const exp8 = 'https://peocock.s3.ap-southeast-2.amazonaws.com/products/exp-8.jpg';

// Sample data for categories
const categories = [
  { id: 1, name: 'Category 1', image: exp1 },
  { id: 2, name: 'Category 2', image: exp2 },
  { id: 3, name: 'Category 3', image: exp3 },
  { id: 4, name: 'Category 4', image: exp4 },
  { id: 5, name: 'Category 5', image: exp5 },
  { id: 6, name: 'Category 6', image: exp6 },
  { id: 7, name: 'Category 7', image: exp7 },
  { id: 8, name: 'Category 8', image: exp8 },
];

// Variants for sliding animations
const slideVariants = {
  enter: (direction) => ({
    x: direction === 'left' ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction === 'left' ? -300 : 300,
    opacity: 0,
  }),
};

const Explore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null); // Track direction for sliding animation
  const [cardsToShow, setCardsToShow] = useState(5); // Number of cards to show based on screen size
  const [isHovered, setIsHovered] = useState(false); // To detect when the user hovers over the section
  const intervalRef = useRef(null); // To store the interval ID for auto-swapping

  // Detect the screen width and adjust the number of visible cards
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(5); // Show 5 cards on large screens
      } else if (window.innerWidth >= 768) {
        setCardsToShow(3); // Show 3 cards on medium screens
      } else if (window.innerWidth >= 640) {
        setCardsToShow(2); // Show 2 cards on smaller screens
      } else {
        setCardsToShow(1); // Show 1 card on very small screens
      }
    };

    window.addEventListener('resize', updateCardsToShow);
    updateCardsToShow(); // Set initial value based on current screen size

    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  // Start auto-swapping on component mount
  useEffect(() => {
    startAutoSwap();
    return () => stopAutoSwap(); // Clean up the interval on component unmount
  }, [currentIndex]);

  // Function to handle auto-swapping to the next item
  const startAutoSwap = () => {
    stopAutoSwap(); // Clear any previous interval
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 4000); // Change the interval to 4 seconds (adjust as needed)
  };

  const stopAutoSwap = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Wrap around to allow circular carousel behavior
  const visibleCategories = categories.slice(currentIndex, currentIndex + cardsToShow).concat(
    categories.slice(0, Math.max(0, currentIndex + cardsToShow - categories.length))
  );

  // Handlers to move left and right by 1 card
  const handleNext = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrev = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="py-16 font-serif bg-white"
      onMouseEnter={() => {
        setIsHovered(true);
        stopAutoSwap(); // Stop the auto-swapping when hovering
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        startAutoSwap(); // Resume auto-swapping when not hovering
      }}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-serif font-bold text-[#432c24] mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore Our Categories
        </motion.h2>

        <div className="flex items-center justify-center">
          {/* Left arrow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={handlePrev}
            className="cursor-pointer mx-2"
          >
            {/* Manually adjust the size of the left arrow image here */}
            <Image
              src={leftArrow}
              alt="Previous"
              width={24}  // Adjust the width as needed
              height={24} // Adjust the height as needed
            />
          </motion.div>

          {/* Category Cards */}
          <motion.div
            className={`grid grid-cols-1 ${
              cardsToShow === 2 ? 'sm:grid-cols-2' : ''
            } ${cardsToShow === 3 ? 'md:grid-cols-3' : ''} ${
              cardsToShow === 5 ? 'lg:grid-cols-5' : ''
            } gap-8 mx-2 relative`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            layout
          >
            {visibleCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="p-4 bg-gray-100 rounded-lg shadow-lg"
                layout
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                variants={slideVariants}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  className="rounded-lg mb-4"
                  width={150}
                  height={150}
                />
                <h3 className="text-xl font-serif font-semibold text-[#432c24] mb-2">{category.name}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Right arrow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={handleNext}
            className="cursor-pointer mx-2"
          >
            {/* Manually adjust the size of the right arrow image here */}
            <Image
              src={rightArrow}
              alt="Next"
              width={24}  // Adjust the width as needed
              height={24} // Adjust the height as needed
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Explore;
