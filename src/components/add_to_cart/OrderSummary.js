// src/components/add_to_cart/OrderSummary.js

import { useMemo } from 'react';

const OrderSummary = ({ cartItems }) => {
  // Calculate totals
  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );
  const discount = subtotal * 0.1; // Example 10% discount
  const total = subtotal - discount;

  return (
    <div className="w-full lg:w-1/3 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6" style={{ color: 'rgb(78, 52, 46)' }}>Order Summary</h2>
      <div className="flex justify-between text-gray-700 mb-4">
        <p>Price</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between text-gray-700 mb-4">
        <p>Discount</p>
        <p>-${discount.toFixed(2)}</p>
      </div>
      <div className="flex justify-between text-gray-700 mb-4">
        <p>Shipping</p>
        <p>Free</p>
      </div>
      <div className="flex justify-between text-gray-700 mb-4">
        <p>Coupon Applied</p>
        <p>$0.00</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between font-semibold text-lg mb-4" style={{ color: 'rgb(217, 118, 66)' }}>
        <p>Total</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <div className="text-gray-500 text-sm mb-4">Estimated Delivery by 01 Feb, 2023</div>
      <input
        type="text"
        placeholder="Coupon Code"
        className="w-full p-2 border rounded mb-4"
      />
      <button className="bg-[#432c24] text-white py-3 px-4 rounded-full w-full hover:bg-[#d77642] transition">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
