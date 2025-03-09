import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='md:w-1/2 mb-10 md:mb-0'>
            <h1 className='text-4xl md:text-5xl font-extrabold leading-tight mb-4'>
              Premium Products for Your Everyday Needs
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-indigo-100'>
              Discover our exclusive collection of high-quality products
              designed to enhance your lifestyle.
            </p>
            <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
              <Link
                to='/products'
                className='bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors inline-flex items-center justify-center'
              >
                Explore Products
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
              <Link
                to='/contact'
                className='bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center justify-center'
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className='md:w-1/2'>
            <img
              src='https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
              alt='Hero Image'
              className='rounded-lg shadow-xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
