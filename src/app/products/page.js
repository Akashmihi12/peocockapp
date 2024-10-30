"use client"; // Add this at the top to mark the file as a client component

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Hero from '../../components/products/Hero';
import Explore from '../../components/products/Explore';
import AllProducts from '../../components/products/AllProducts';
import LeftFilter from '../../components/products/LeftFilter';

export default function Products() {
  const [filters, setFilters] = useState({
    category: 'All Product',
    searchQuery: '',
    priceRange: [50, 500],
  });

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      {/* Flex container to adjust the full height of the page */}
      <div className="container mx-auto flex flex-col md:flex-row py-8">
        {/* Left filter section */}
        <div className="w-full md:w-1/4 px-4">
          <LeftFilter onFilterChange={handleFilterChange} />
        </div>
        {/* Product section */}
        <div className="w-full md:w-3/4 px-4">
          <Explore />
          <AllProducts filters={filters} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
