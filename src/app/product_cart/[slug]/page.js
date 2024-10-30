"use client";

import { use } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ProductDetails from '../../../components/product_cart/ProductDetails';
import Feedback from '../../../components/product_cart/Feedback';
import { products } from '../../../components/products/AllProducts';

const ProductCartPage = ({ params }) => {
  const { slug } = use(params); // Unwrap params with React.use()

  const product = products.find((p) => p.title.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto py-8 flex-grow mt-16"> {/* Increased mt-16 for more spacing */}
        <ProductDetails product={product} />
        <Feedback feedbacks={product.feedbacks} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductCartPage;
