import { ShieldCheck, Star, Truck } from "lucide-react";
import FeaturBox from "./FeaturBox";
import FeaturHeader from "./FeaturHeader";

function FeaturesSection() {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <FeaturHeader />

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <FeaturBox
            icon={Star}
            header='Premium Quality'
            input='All our products are crafted with the finest materials and
              attention to detail.'
          />

          <FeaturBox
            icon={ShieldCheck}
            header='Satisfaction Guaranteed'
            input='We stand behind our products with a 100% satisfaction guarantee.'
          />

          <FeaturBox
            icon={Truck}
            header='Fast Delivery'
            input='Quick and reliable shipping to get your products to you as soon as
              possible.'
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
