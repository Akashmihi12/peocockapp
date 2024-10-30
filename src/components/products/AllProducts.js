"use client"; // Add this to mark the file as a client component

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

// Sample data for products
const products = [
  { id: 1, title: 'Product 1', description: 'Best of the best product in the market.', price: 120, discountedPrice: 150, rating: 5, image: '/images/products/pro-1.jpg', category: 'Category 1' },
  { id: 2, title: 'Product 2', description: 'High quality and affordable product.', price: 100, discountedPrice: 130, rating: 4, image: '/images/products/pro-2.jpg', category: 'Category 2' },
  { id: 3, title: 'Product 3', description: 'Top-notch product with great value.', price: 80, discountedPrice: 100, rating: 5, image: '/images/products/pro-3.jpg', category: 'Category 3' },
  { id: 4, title: 'Product 4', description: 'Exclusive product for discerning customers.', price: 150, discountedPrice: 200, rating: 3, image: '/images/products/pro-4.jpg', category: 'Category 4' },
  { id: 5, title: 'Product 5', description: 'Premium quality product at a fair price.', price: 180, discountedPrice: 220, rating: 4, image: '/images/products/pro-5.jpg', category: 'Category 5' },
  { id: 6, title: 'Product 6', description: 'A top-selling product loved by many.', price: 90, discountedPrice: 110, rating: 4, image: '/images/products/pro-6.jpg', category: 'Category 6' },
  { id: 7, title: 'Product 7', description: 'Highly recommended by professionals.', price: 75, discountedPrice: 95, rating: 5, image: '/images/products/pro-7.jpg', category: 'Category 1' },
  { id: 8, title: 'Product 8', description: 'The ultimate product in its category.', price: 210, discountedPrice: 250, rating: 4, image: '/images/products/pro-8.jpg', category: 'Category 2' },
  { id: 9, title: 'Product 9', description: 'Reliable and durable product.', price: 95, discountedPrice: 125, rating: 3, image: '/images/products/pro-9.jpg', category: 'Category 3' },
  { id: 10, title: 'Product 10', description: 'Best in class with a modern design.', price: 160, discountedPrice: 180, rating: 5, image: '/images/products/pro-10.jpg', category: 'Category 4' },
  { id: 11, title: 'Product 11', description: 'A product that stands the test of time.', price: 220, discountedPrice: 270, rating: 4, image: '/images/products/pro-11.jpg', category: 'Category 5' },
  { id: 12, title: 'Product 12', description: 'Value-packed product for daily use.', price: 130, discountedPrice: 160, rating: 4, image: '/images/products/pro-12.jpg', category: 'Category 6' },
];

const AllProducts = ({ filters }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const { category, searchQuery, priceRange } = filters;

    const filtered = products.filter((product) => {
      const matchesCategory = category === 'All Product' || product.category === category;
      const matchesTitle = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesTitle && matchesPrice;
    });

    setFilteredProducts(filtered);
  }, [filters]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-8"
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <div className="text-center col-span-4 text-gray-500 font-serif text-xl">No matching items</div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default AllProducts;
