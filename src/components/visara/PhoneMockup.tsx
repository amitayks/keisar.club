import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583207138328-ac00a9eea2a7?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504454217853-4a350913a533?q=80&w=2574&auto=format&fit=crop",
];

interface PhoneMockupProps {
  scrollYProgress: any;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ scrollYProgress }) => {
  const imageIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);

  return (
    <div className="sticky top-20 mx-auto w-[300px] h-[600px] bg-visara-dark-surface rounded-[40px] shadow-2xl border-4 border-visara-dark-tertiary overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full p-4">
        <div className="w-full h-full bg-visara-dark-background rounded-[30px] overflow-hidden">
          <motion.div className="w-full h-full relative">
            {images.map((src, i) => {
              const opacity = useTransform(imageIndex, (latest) => (latest === i ? 1 : 0));
              return (
                <motion.img
                  key={src}
                  src={src}
                  alt={`feature image ${i + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  style={{ opacity }}
                  transition={{ duration: 0.3 }}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
