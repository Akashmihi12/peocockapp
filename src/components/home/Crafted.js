"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Sample component for star ratings
const StarRating = () => {
  return <span className="text-orange-400 font-serif text-lg">★★★★★</span>;  // Simplified rating representation
};

// Dummy data for products (6 items for testing)
const products = [
  { id: 1, title: "Chilly Kokis 100g", price: "250LKR" },
  { id: 2, title: "Chilly Kokis 200g", price: "250LKR" },
  { id: 3, title: "Chilly Kokis 300g", price: "250LKR" },
  { id: 4, title: "Chilly Kokis 400g", price: "250LKR" },
  { id: 5, title: "Chilly Kokis 500g", price: "250LKR" },
  { id: 6, title: "Chilly Kokis 600g", price: "250LKR" },
];

// Image URLs from S3
const craftedImage = 'https://peocock.s3.ap-southeast-2.amazonaws.com/home/Crafted.jpg';
const craftedLeft = 'https://peocock.s3.ap-southeast-2.amazonaws.com/home/Crafted_left.jpg';
const craftedRight = 'https://peocock.s3.ap-southeast-2.amazonaws.com/home/Crafted_right.jpg';

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

const Crafted = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null); // Track direction for sliding animation
  const [cardsToShow, setCardsToShow] = useState(3); // Number of cards to show based on screen size

  // Detect the screen width and adjust the number of visible cards
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3); // Show 3 cards on large screens
      } else if (window.innerWidth >= 640) {
        setCardsToShow(2); // Show 2 cards on medium screens
      } else {
        setCardsToShow(1); // Show 1 card on small screens
      }
    };

    window.addEventListener('resize', updateCardsToShow);
    updateCardsToShow(); // Set initial value based on current screen size

    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  // Calculate the visible products based on the current index and number of cards to show
  const visibleProducts = products.slice(currentIndex, currentIndex + cardsToShow);

  // Handlers to move left and right by 1 card
  const handleNext = () => {
    if (currentIndex + cardsToShow < products.length) {
      setDirection('left'); // Set direction for right sliding animation
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection('right'); // Set direction for left sliding animation
      setCurrentIndex(currentIndex - 1);
    }
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
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-serif font-bold text-[#432c24] mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafted with Love
        </motion.h2>

        <div className="flex items-center font-serif justify-center">
          {/* Left arrow */}
          {currentIndex > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={handlePrev}
              className="cursor-pointer mx-2"
            >
              <Image src={craftedLeft} alt="Previous" width={48} height={48} />
            </motion.div>
          )}

          {/* Product Cards */}
          <motion.div
            className={`grid grid-cols-1 ${
              cardsToShow === 2 ? 'sm:grid-cols-2' : ''
            } ${cardsToShow === 3 ? 'lg:grid-cols-3' : ''} gap-8 mx-2 relative`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            layout
          >
            {visibleProducts.map((item, index) => (
              <motion.div
                key={item.id}
                className="p-4 font-serif bg-gray-100 rounded-lg shadow-lg"
                layout
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                variants={slideVariants}
                transition={{ duration: 0.6 }}
              >
                <Image src={craftedImage} alt={`Product ${item.id}`} className="rounded-lg mb-4" width={250} height={250} />
                <h3 className="text-xl font-serif font-semibold text-[#432c24] mb-2">{item.title}</h3>
                <StarRating />
                <p className="text-gray-700 font-serif mb-4">{item.price}</p>
                <button className="bg-[#d77642] hover:bg-[#ffea7a] text-white hover:text-[#432c24] px-6 py-2 rounded-full shadow-md transition duration-300 font-bold">Add to Cart</button>
              </motion.div>
            ))}
          </motion.div>

          {/* Right arrow */}
          {currentIndex + cardsToShow < products.length && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={handleNext}
              className="cursor-pointer mx-2"
            >
              <Image src={craftedRight} alt="Next" width={48} height={48} />
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Crafted;
