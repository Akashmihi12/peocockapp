// src/components/add_to_cart/CartItem.js

import Image from 'next/image';
import { useState } from 'react';

const CartItem = ({ item, onRemove }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="flex items-center">
        <Image src={item.image} alt={item.title} width={80} height={80} className="rounded-md" />
        <div className="ml-4">
          <h2 className="text-xl font-medium" style={{ color: 'rgb(78, 52, 46)' }}>{item.title}</h2>
          <p className="text-sm text-gray-500">Size: {item.size}</p>
          <p className="text-lg font-semibold" style={{ color: 'rgb(217, 118, 66)' }}>${item.price}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <button onClick={() => handleQuantityChange(quantity - 1)} className="px-3 py-1 border rounded-l-full hover:bg-gray-100">-</button>
          <span className="px-4 py-2 border-t border-b" style={{ color: 'rgb(78, 52, 46)' }}>{quantity}</span>
          <button onClick={() => handleQuantityChange(quantity + 1)} className="px-3 py-1 border rounded-r-full hover:bg-gray-100">+</button>
        </div>
        <button onClick={onRemove} className="text-red-500 hover:underline">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
