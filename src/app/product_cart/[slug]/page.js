// src/app/product_cart/[slug]/page.js

"use client";

import { use } from 'react'; // Import the `use` function from React
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ProductDetails from '../../../components/product_cart/ProductDetails';
import { products } from '../../../components/products/AllProducts'; // Adjust path as necessary

const ProductCartPage = ({ params }) => {
  // Use `React.use()` to unwrap `params`
  const { slug } = use(params);

  // Find the product based on slug
  const product = products.find((p) => p.title.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <ProductDetails product={product} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductCartPage;
