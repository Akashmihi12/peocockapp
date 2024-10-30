"use client"; // Add this if ProductCard is using any client-side logic (hooks)
import Image from 'next/image';
import { motion } from 'framer-motion';

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mb-2">
      {[...Array(5)].map((star, index) => (
        <span key={index} className={`text-orange-400 ${index < rating ? 'text-xl' : 'text-gray-300'}`}>
          ★
        </span>
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow-lg text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="h-40 mb-4">
        {/* Product Image */}
        <Image src={product.image} alt={product.title} width={150} height={150} className="object-cover w-full h-full rounded-md" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-500 mb-2">{product.description}</p>
      <StarRating rating={product.rating} />
      <p className="text-lg font-bold text-orange-500">{product.price}</p>
      <p className="text-gray-400 line-through">{product.discountedPrice}</p>
      <button className="bg-[#d77642] text-white px-4 py-2 rounded-full mt-4 hover:bg-[#ffea7a] hover:text-[#432c24] transition duration-300">
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCard;
