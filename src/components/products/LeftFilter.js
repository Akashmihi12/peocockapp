"use client";

import { useState, useEffect, useRef } from 'react'; 
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { FaSearch, FaFilter } from 'react-icons/fa';
import '../../styles/customCheckbox.css'; 
import '../../styles/customPriceFilter.css'; 

const categories = ['All Product', 'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'];

const LeftFilter = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Product'); // Default to 'All Product'
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false); // For showing filter on mobile
  const sidebarRef = useRef(null); // For detecting clicks outside the sidebar

  // Handle screen size changes to detect if it's mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint based on the Navbar's breakpoint
    };

    // Check on component mount
    handleResize();

    // Listen for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Set the selected category
    triggerFilterChange({ category, searchQuery, priceRange });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    triggerFilterChange({ category: selectedCategory, searchQuery: e.target.value, priceRange });
  };

  const handlePriceChange = (e) => {
    setPriceRange([e.target.value, priceRange[1]]);
    triggerFilterChange({ category: selectedCategory || 'All Product', searchQuery, priceRange: [e.target.value, priceRange[1]] });
  };

  const triggerFilterChange = (filters) => {
    onFilterChange(filters);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible); // Toggle filter visibility
  };

  // Close the filter panel when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsFilterVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      className="relative w-full bg-white p-6 rounded-lg shadow-lg h-auto"
      initial={{ opacity: 0, scale: 0.9 }} // Initial state for scrolling animation
      animate={{ opacity: 1, scale: 1 }} // Animate to visible and normal size
      transition={{ duration: 0.6 }} // Scrolling animation duration
      whileHover={{ scale: 1.02 }} // Slight zoom on hover for the entire LeftFilter section
    >
      <div className="mb-6 flex items-center space-x-4">
        {/* Filter Button - Only show on mobile */}
        {isMobile && (
          <button
            className="w-1/4 py-2 bg-[#d77642] text-white font-bold rounded-full flex items-center justify-center"
            onClick={toggleFilterVisibility}
          >
            <FaFilter />
          </button>
        )}

        {/* Search Bar */}
        <motion.div
          className="relative flex items-center w-full"
          whileHover={{ scale: 1.05 }} // Slight zoom on hover
          transition={{ duration: 0.3 }} // Smooth transition
        >
          <input
            type="text"
            placeholder="Search product"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full py-2 px-3 pr-10 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaSearch />
          </button>
        </motion.div>
      </div>

      {/* Filter Sidebar for Mobile */}
      {isMobile && isFilterVisible && (
        <div
          ref={sidebarRef}
          className="fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg z-50 p-6"  // Increased z-index to 50
        >
          {/* Close Button */}
          <button
            className="text-[#432c24] absolute top-4 right-4 font-bold"
            onClick={() => setIsFilterVisible(false)}
          >
            Close
          </button>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#432c24] font-serif mb-2">Categories</h3>
            <ul>
              {categories.map((category, index) => (
                <motion.li
                  key={index}
                  className="mb-3"
                  whileHover={{ scale: 1.05 }} // Zoom on hover for categories
                  transition={{ duration: 0.3 }}
                >
                  <label className="custom-checkbox inline-flex items-center">
                    <input
                      type="radio"
                      className="hidden" // Hide the default radio button
                      onChange={() => handleCategoryChange(category)}
                      checked={selectedCategory === category}
                    />
                    <span className={`custom-checkbox-box ${selectedCategory === category ? "bg-[#d77642] border-[#d77642]" : "bg-white border-gray-300"}`}></span>
                    <span className={`ml-3 font-serif ${selectedCategory === category ? "text-[#d77642] font-bold" : "text-[#432c24]"}`}>
                      {category}
                    </span>
                  </label>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <motion.div
            className="mb-6"
            whileHover={{ scale: 1.05 }} // Zoom on hover for price filter
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-bold text-[#432c24] font-serif mb-2">Price filter</h3>
            <div className="relative flex items-center mb-2">
              <input
                type="range"
                className="custom-range-track"
                min="50"
                max="500"
                value={priceRange[0]}
                onChange={handlePriceChange}
                style={{
                  background: `linear-gradient(to right, #d77642 0%, #d77642 ${(priceRange[0] - 50) / (500 - 50) * 100}%, #e5e5e5 ${(priceRange[0] - 50) / (500 - 50) * 100}%, #e5e5e5 100%)`
                }}
              />
            </div>
            <div className="flex justify-between text-sm text-[#432c24]">
              <span className="font-serif font-bold">${priceRange[0]} From</span>
              <span className="font-serif font-bold">to ${priceRange[1]}</span>
            </div>
          </motion.div>
        </div>
      )}

      {/* Filter Sidebar for Desktop */}
      {!isMobile && (
        <>
          <div className="w-full border-t border-gray-200 mb-6"></div>

          {/* Categories */}
          <motion.div
            className="mb-6"
            whileHover={{ scale: 1.05 }} // Zoom on hover for the whole categories section
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-bold text-[#432c24] font-serif mb-2">Categories</h3>
            <ul>
              {categories.map((category, index) => (
                <motion.li
                  key={index}
                  className="mb-3"
                  whileHover={{ scale: 1.05 }} // Zoom on hover for each category
                  transition={{ duration: 0.3 }}
                >
                  <label className="custom-checkbox inline-flex items-center">
                    <input
                      type="radio"
                      className="hidden" // Hide the default radio button
                      onChange={() => handleCategoryChange(category)}
                      checked={selectedCategory === category}
                    />
                    <span className={`custom-checkbox-box ${selectedCategory === category ? "bg-[#d77642] border-[#d77642]" : "bg-white border-gray-300"}`}></span>
                    <span className={`ml-3 font-serif ${selectedCategory === category ? "text-[#d77642] font-bold" : "text-[#432c24]"}`}>
                      {category}
                    </span>
                  </label>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Price Filter */}
          <motion.div
            className="mb-6"
            whileHover={{ scale: 1.05 }} // Zoom on hover for the price filter section
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-bold text-[#432c24] font-serif mb-2">Price filter</h3>
            <div className="relative flex items-center mb-2">
              <input
                type="range"
                className="custom-range-track"
                min="50"
                max="500"
                value={priceRange[0]}
                onChange={handlePriceChange}
                style={{
                  background: `linear-gradient(to right, #d77642 0%, #d77642 ${(priceRange[0] - 50) / (500 - 50) * 100}%, #e5e5e5 ${(priceRange[0] - 50) / (500 - 50) * 100}%, #e5e5e5 100%)`
                }}
              />
            </div>
            <div className="flex justify-between text-sm text-[#432c24]">
              <span className="font-serif font-bold">${priceRange[0]} From</span>
              <span className="font-serif font-bold">to ${priceRange[1]}</span>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default LeftFilter;
