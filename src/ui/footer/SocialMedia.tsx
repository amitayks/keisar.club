import { Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <div>
      <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
      <div className='flex space-x-4'>
        <a
          href='#'
          className='text-gray-400 hover:text-white transition-colors'
        >
          <Facebook className='h-6 w-6' />
        </a>
        <a
          href='#'
          className='text-gray-400 hover:text-white transition-colors'
        >
          <Instagram className='h-6 w-6' />
        </a>
        <a
          href='#'
          className='text-gray-400 hover:text-white transition-colors'
        >
          <Twitter className='h-6 w-6' />
        </a>
      </div>
      <div className='mt-6'>
        <Link
          to='/order'
          className='bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700'
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}

export default SocialMedia;
