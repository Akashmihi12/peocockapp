// src/components/product_cart/ProductDetails.js

import Image from 'next/image';
import { useState } from 'react';

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Product Image */}
      <div>
        <Image src={product.image} alt={product.title} width={300} height={300} className="object-cover rounded-md" />
        <div className="flex justify-center mt-4 space-x-2">
          {[...Array(5)].map((_, i) => (
            <Image key={i} src={product.image} alt={`${product.title} ${i}`} width={60} height={60} className="border rounded-md" />
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <div className="flex items-center mb-4">
          <span className="text-yellow-500">★ {product.rating}</span>
          <span className="ml-2 text-gray-500">({product.reviews} reviews)</span>
        </div>
        <p className="text-lg mb-4">{product.description}</p>

        {/* Price and Discount */}
        <p className="text-2xl font-semibold text-orange-500 mb-2">${product.price}</p>
        <p className="text-gray-400 line-through">${product.discountedPrice}</p>

        {/* Quantity Selector */}
        <div className="flex items-center mt-4">
          <button onClick={() => handleQuantityChange(quantity - 1)} className="px-2 py-1 border">-</button>
          <span className="px-4">{quantity}</span>
          <button onClick={() => handleQuantityChange(quantity + 1)} className="px-2 py-1 border">+</button>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-[#d77642] text-white px-4 py-2 rounded-full mt-4 hover:bg-[#ffea7a] transition">
          Add to Cart
        </button>

        {/* Additional Info */}
        <div className="mt-6 text-sm text-gray-500">
          <p>Free 3-5 day shipping · Home-made · No chemicals added</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
