// src/app/add_to_cart/page.js

"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CartItem from '../../components/add_to_cart/CartItem';
import OrderSummary from '../../components/add_to_cart/OrderSummary';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const AddToCartPage = () => {
  const router = useRouter();

  // Example cart data
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'Product 01', price: 149.99, size: '1kg', quantity: 1, image: 'https://peocock.s3.ap-southeast-2.amazonaws.com/products/pro-1.jpg' },
    { id: 2, title: 'Product 02', price: 169.99, size: '500g', quantity: 1, image: 'https://peocock.s3.ap-southeast-2.amazonaws.com/products/pro-2.jpg' },
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto py-8 flex-grow">
        <h1 className="text-3xl font-semibold mb-4" style={{ color: 'rgb(78, 52, 46)' }}>Cart</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items Section */}
          <div className="w-full lg:w-2/3">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} onRemove={() => handleRemoveItem(item.id)} />
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="w-full lg:w-1/3">
            <OrderSummary cartItems={cartItems} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddToCartPage;
