// src/app/add_to_cart/page.js

"use client";

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CartItem from '../../components/add_to_cart/CartItem';
import OrderSummary from '../../components/add_to_cart/OrderSummary';

const AddToCartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart data from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto py-8 flex-grow mt-16">
        <h1 className="text-3xl font-semibold mb-4" style={{ color: 'rgb(78, 52, 46)' }}>
          Cart <span className="text-gray-500 text-lg">({cartItems.length} ITEMS)</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3 p-6 bg-white rounded-lg shadow-md">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemoveItem}
              />
            ))}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-700">
              <p>10% Instant Discount with Federal Bank Debit Cards on a minimum spend of $150. T&C Apply.</p>
            </div>
          </div>
          <OrderSummary cartItems={cartItems} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddToCartPage;
