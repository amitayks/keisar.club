
import React from 'react';

import EarlyAccessSection from '../components/visara/EarlyAccessSection';
import FeaturesSection from '../components/visara/FeaturesSection';
import HeroSection from '../components/visara/HeroSection';
import OnboardingSection from '../components/visara/OnboardingSection';

const VisaraPage: React.FC = () => {
  return (
    <div className="bg-visara-light-background dark:bg-visara-dark-background min-h-screen text-visara-light-text dark:text-visara-dark-text">
      <HeroSection />
      <OnboardingSection />
      <FeaturesSection />
      <EarlyAccessSection />
    </div>
  );
};

export default VisaraPage;
