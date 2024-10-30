'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

// Function to handle the redirection
const handleShopRedirect = () => {
  window.location.href = '/products';
};

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Set up the scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
      canvasRef.current.appendChild(renderer.domElement);

      // Load the 3D model
      const loader = new GLTFLoader();
      loader.load(
        'https://peocock.s3.ap-southeast-2.amazonaws.com/home/heroearth.glb',
        (gltf) => {
          const model = gltf.scene;
          model.scale.set(0.5, 0.5, 0.5);
          scene.add(model);

          // Animation loop
          const animate = () => {
            requestAnimationFrame(animate);
            model.rotation.y += 0.005;
            renderer.render(scene, camera);
          };

          animate();
        },
        undefined,
        (error) => {
          console.error('An error occurred while loading the 3D model:', error);
        }
      );

      // Handle resizing
      const handleResize = () => {
        if (canvasRef.current) {
          camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (canvasRef.current) {
          canvasRef.current.removeChild(renderer.domElement);
        }
      };
    }
  }, [canvasRef]);

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }}
      transition={{ duration: 1 }}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* 3D Model Canvas */}
      <div ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Overlay and Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-start justify-center text-left z-10 px-6 md:px-16 lg:px-24"
        variants={fadeInUp}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#432c24] mb-4 leading-tight">
          Nurturing Communities,<br className="block md:hidden" /> One Sale at a Time
        </h1>
        <p className="text-md md:text-lg lg:text-xl font-serif font-semibold text-[#432c24] mb-8">
          From the Heart of Sri Lanka to the World—<span className="font-bold">Empowering Mothers, Preserving Traditions.</span> <br />
          Grounded in Buddhist Values | <span className="font-bold">Driven by Compassion | Committed to Sustainability</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <motion.button
            className="bg-[#d77642] font-serif hover:bg-[#ffea7a] text-white hover:text-[#432c24] px-6 py-3 rounded-full shadow-md transition duration-300 font-bold"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore Our Journey
          </motion.button>

          <motion.button
            onClick={handleShopRedirect}
            className="bg-[#d77642] font-serif hover:bg-[#ffea7a] text-white hover:text-[#432c24] px-6 py-3 rounded-full shadow-md transition duration-300 font-bold"
            variants={fadeInUp}
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
