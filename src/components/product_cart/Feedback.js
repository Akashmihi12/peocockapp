// src/components/product_cart/Feedback.js
import { useState, useEffect } from 'react';

const Feedback = ({ feedbacks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (feedbacks && feedbacks.length > 0) {
      setCurrentIndex(0);
    }
  }, [feedbacks]);

  const nextFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const prevFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length);
  };

  if (!feedbacks || feedbacks.length === 0) {
    return <p>No feedback available</p>;
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Our Customer Feedback</h2>
      <div className="flex items-center space-x-4">
        <button onClick={prevFeedback} className="p-2 bg-gray-300 rounded-full">&#8249;</button>
        <div className="bg-gray-100 p-6 rounded-lg flex-1">
          <h3 className="text-xl font-semibold">{feedbacks[currentIndex].name}</h3>
          <p className="text-yellow-500">{[...Array(feedbacks[currentIndex].rating)].map((_, i) => <span key={i}>★</span>)}</p>
          <p className="text-gray-700 mt-2">{feedbacks[currentIndex].comment}</p>
        </div>
        <button onClick={nextFeedback} className="p-2 bg-gray-300 rounded-full">&#8250;</button>
      </div>
    </div>
  );
};

export default Feedback;
