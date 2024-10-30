// src/components/product_cart/ProductDetails.js

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('500g'); // Default weight
  const router = useRouter();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      size: selectedWeight,
      quantity: quantity,
      image: product.image,
    };

    // Save to localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify([...existingCart, cartItem]));

    // Redirect to the add_to_cart page
    router.push('/add_to_cart');
  };

  return (
    <div className="flex flex-col md:flex-row gap-12">
      {/* Product Details */}
      <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-2" style={{ color: 'rgb(78, 52, 46)' }}>
          {product.title}
        </h1>
        <div className="flex items-center mb-6">
          <span className="flex items-center text-yellow-500 text-lg font-medium">
            ★ {product.rating}
          </span>
          <span className="ml-3" style={{ color: 'rgb(78, 52, 46)' }}>
            ({product.reviews} reviews)
          </span>
        </div>

        <p className="leading-relaxed mb-6" style={{ color: 'rgb(78, 52, 46)' }}>
          {product.description}
        </p>

        {/* Price and Weight Selector */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <p className="text-3xl font-bold mr-6" style={{ color: 'rgb(217, 118, 66)' }}>
              ${product.price}
            </p>
            <div className="flex space-x-2">
              {['100g', '250g', '500g', '1kg'].map((weight) => (
                <button
                  key={weight}
                  onClick={() => setSelectedWeight(weight)}
                  className={`px-4 py-2 rounded-full border transition ${
                    selectedWeight === weight
                      ? 'bg-[#d77642] text-white border-[#d77642]'
                      : 'bg-white text-[#4e342e] border-[#d77642] hover:bg-gray-100'
                  } shadow-md`}
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center mb-6 space-x-4">
          <span className="font-medium" style={{ color: 'rgb(78, 52, 46)' }}>
            Quantity:
          </span>
          <div className="flex items-center">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="px-3 py-2 border border-r-0 rounded-l-full hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-4 py-2 border-t border-b" style={{ color: 'rgb(78, 52, 46)' }}>
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="px-3 py-2 border border-l-0 rounded-r-full hover:bg-gray-100"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-[#d77642] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#ffea7a] hover:text-[#4e342e] transition shadow-md"
          >
            Add to Cart
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-sm" style={{ color: 'rgb(78, 52, 46)' }}>
          <p>✓ Free 3-5 day shipping</p>
          <p>✓ Home-made</p>
          <p>✓ No chemicals added</p>
        </div>
      </div>

      {/* Product Image */}
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-cover rounded-lg mb-6"
        />
        <div className="flex space-x-4">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src={product.image}
              alt={`${product.title} ${i}`}
              width={80}
              height={80}
              className="border rounded-md cursor-pointer hover:shadow-lg transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
