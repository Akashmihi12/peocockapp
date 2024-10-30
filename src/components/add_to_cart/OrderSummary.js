// src/components/add_to_cart/OrderSummary.js

import { useState } from 'react';

const OrderSummary = ({ cartItems }) => {
  const [coupon, setCoupon] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 50; // Example discount
  const shipping = subtotal > 200 ? 0 : 10; // Free shipping over $200
  const total = subtotal - discount + shipping;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6" style={{ color: 'rgb(78, 52, 46)' }}>Order Summary</h2>
      
      <div className="mb-4">
        <div className="flex justify-between text-gray-700">
          <p>Price</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-gray-700">
          <p>Discount</p>
          <p>-${discount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-gray-700">
          <p>Shipping</p>
          <p>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</p>
        </div>
        <div className="flex justify-between text-gray-700">
          <p>Coupon Applied</p>
          <p>${coupon ? '-10.00' : '0.00'}</p>
        </div>
      </div>

      <div className="flex justify-between font-semibold text-lg mb-4" style={{ color: 'rgb(217, 118, 66)' }}>
        <p>Total</p>
        <p>${total.toFixed(2)}</p>
      </div>
      
      <div className="text-gray-500 mb-6">Estimated Delivery by 01 Feb, 2023</div>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <button className="bg-[#432c24] text-white py-2 px-4 rounded-full w-full hover:bg-[#d77642] transition">
          Apply Coupon
        </button>
      </div>

      <button className="bg-[#432c24] text-white py-3 px-4 rounded-full w-full hover:bg-[#d77642] transition">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
