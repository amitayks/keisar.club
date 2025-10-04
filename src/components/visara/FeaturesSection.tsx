import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

import PhoneMockup from './PhoneMockup';

const features = [
  {
    title: "AI-Powered Search",
    description: "Search for anything in your photos. Visara understands objects, text, and scenes. Find that photo of the 'sunset over the mountains' instantly.",
  },
  {
    title: "Automatic Organization",
    description: "Visara automatically groups your photos by date, creating a beautiful, scrollable timeline of your life's moments.",
  },
  {
    title: "Document & Text Recognition",
    description: "Find receipts, notes, or any document just by searching for the text within them. Visara's OCR makes everything searchable.",
  },
  {
    title: "Intelligent Albums",
    description: "Visara automatically creates albums for you based on content, like 'Receipts & Bills', 'Screenshots', and 'Handwritten Notes'.",
  },
];

const FeaturesSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={targetRef} className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky top-20 h-[600px]">
            <PhoneMockup scrollYProgress={scrollYProgress} />
          </div>
          <div>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8 }}
                className="mb-24 last:mb-0"
              >
                <h3 className="text-3xl font-bold mb-4 text-visara-light-text dark:text-visara-dark-text">{feature.title}</h3>
                <p className="text-lg text-visara-light-textSecondary dark:text-visara-dark-textSecondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
