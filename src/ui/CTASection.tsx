import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className='bg-indigo-600 text-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-3xl font-bold mb-4'>Ready to Get Started?</h2>
        <p className='text-xl text-indigo-100 mb-8 max-w-3xl mx-auto'>
          Join thousands of satisfied customers who have chosen Keisar Club for
          their needs.
        </p>
        <Link
          to='/order'
          className='bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors inline-flex items-center'
        >
          Order Now
          <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
      </div>
    </section>
  );
}

export default CTASection;
