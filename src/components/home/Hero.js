"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';

const Hero = () => {
  // Intersection observer to trigger animation when in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers every time the hero section is in view
    threshold: 0.1, // Adjust to trigger animation earlier or later
  });

  // Function to handle the redirection
  const handleShopRedirect = () => {
    window.location.href = '/products'; // Redirect to the products page
  };

  // Model component to load and display the GLB animation
  const Model = () => {
    const { scene, animations } = useGLTF('https://peocock.s3.ap-southeast-2.amazonaws.com/home/heroearth.glb');
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
      if (actions) {
        // Play all available animations
        Object.values(actions).forEach((action) => action.play());
      }
    }, [actions]);

    return <primitive object={scene} />;
  };

  // Canvas component for rendering the 3D model
  const ModelCanvas = () => {
    return (
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    );
  };

  // Dynamically import the ModelCanvas component without SSR
  const DynamicModelCanvas = dynamic(() => Promise.resolve(ModelCanvas), { ssr: false });

  return (
    <motion.section
      ref={ref} // Attach ref to trigger animation when section is in view
      initial={{ opacity: 0 }} // Initial opacity before animation
      animate={inView ? { opacity: 1 } : { opacity: 0 }} // Animate opacity when in view
      transition={{ duration: 1 }} // Animation duration
      className="relative w-full h-screen overflow-hidden" // Added overflow-hidden
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <DynamicModelCanvas />
      </div>

      {/* Overlay and Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-start justify-center text-left z-10 px-8 md:px-20 lg:px-32"
        initial={{ opacity: 0, y: 50 }} // Initial state
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
        transition={{ duration: 0.8, delay: 0.2 }} // Adjust transition timing
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#432c24] mb-4 leading-tight">
          Nurturing Communities,<br className="block md:hidden" /> One Sale at a Time
        </h1>
        <p className="text-md md:text-lg lg:text-xl font-serif font-semibold text-[#432c24] mb-8">
          From the Heart of Sri Lanka to the World—<span className="font-bold">Empowering Mothers, Preserving Traditions.</span> <br />
          Grounded in Buddhist Values | <span className="font-bold">Driven by Compassion | Committed to Sustainability</span>
        </p>

        {/* Buttons: Stack vertically on small screens */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          {/* Button 1 */}
          <motion.button
            className="bg-[#d77642] font-serif hover:bg-[#ffea7a] text-white hover:text-[#432c24] px-6 py-3 rounded-full shadow-md transition duration-300 font-bold"
            initial={{ opacity: 0, y: 50 }} // Initial state
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore Our Journey
          </motion.button>

          {/* Button 2 with redirection */}
          <motion.button
            onClick={handleShopRedirect} // Add the redirection on click
            className="bg-[#d77642] font-serif hover:bg-[#ffea7a] text-white hover:text-[#432c24] px-6 py-3 rounded-full shadow-md transition duration-300 font-bold"
            initial={{ opacity: 0, y: 50 }} // Initial state
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Shop Our Products
          </motion.button>
        </div>
      </motion.div>

      {/* Optional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-70 z-5" />
    </motion.section>
  );
};

export default Hero;
