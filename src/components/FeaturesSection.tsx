import { ShieldCheck, Star, Truck } from "lucide-react";

function FeaturesSection() {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Why Choose Keisar Club?
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            We pride ourselves on delivering exceptional quality and service to
            all our customers.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white p-8 rounded-lg shadow-md text-center'>
            <div className='inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4'>
              <Star className='h-8 w-8' />
            </div>
            <h3 className='text-xl font-semibold mb-2'>Premium Quality</h3>
            <p className='text-gray-600'>
              All our products are crafted with the finest materials and
              attention to detail.
            </p>
          </div>

          <div className='bg-white p-8 rounded-lg shadow-md text-center'>
            <div className='inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4'>
              <ShieldCheck className='h-8 w-8' />
            </div>
            <h3 className='text-xl font-semibold mb-2'>
              Satisfaction Guaranteed
            </h3>
            <p className='text-gray-600'>
              We stand behind our products with a 100% satisfaction guarantee.
            </p>
          </div>

          <div className='bg-white p-8 rounded-lg shadow-md text-center'>
            <div className='inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4'>
              <Truck className='h-8 w-8' />
            </div>
            <h3 className='text-xl font-semibold mb-2'>Fast Delivery</h3>
            <p className='text-gray-600'>
              Quick and reliable shipping to get your products to you as soon as
              possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
