import { motion } from 'framer-motion';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-visara-light-background dark:bg-visara-dark-background">
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-visara-light-text dark:text-visara-dark-text tracking-tighter mb-4"
        >
          Meet Visara
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-visara-light-textSecondary dark:text-visara-dark-textSecondary mb-8"
        >
          The intelligent gallery that understands your photos as well as you do. Search, organize, and relive your moments—all with absolute privacy.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-3 font-semibold text-white bg-visara-light-accent dark:bg-visara-dark-accent rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300">
            Join Early Access
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
