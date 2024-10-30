// src/components/add_to_cart/CartItem.js

import Image from 'next/image';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-4 border-b">
      <Image src={item.image} alt={item.title} width={80} height={80} className="rounded-md" />
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-medium" style={{ color: 'rgb(78, 52, 46)' }}>{item.title}</h3>
        <p className="text-sm text-gray-500">Size: {item.size}</p>
        <p className="text-lg font-semibold" style={{ color: 'rgb(217, 118, 66)' }}>
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="px-3 py-1 border border-r-0 rounded-l-full hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-4 py-2 border-t border-b" style={{ color: 'rgb(78, 52, 46)' }}>
            {item.quantity}
          </span>
          <button
            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
            className="px-3 py-1 border border-l-0 rounded-r-full hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>
      <button onClick={() => onRemove(item.id)} className="text-red-500 hover:underline">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
