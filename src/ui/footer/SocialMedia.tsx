import { Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <div className='text-center'>
      <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
      <div className='flex space-x-4 justify-center'>
        <a
          href='https://www.facebook.com/profile.php?id=100086721472400&mibextid=ZbWKwL'
          className='text-stone-300 hover:text-white transition-colors'
        >
          <Facebook className='h-6 w-6' />
        </a>
        <a
          href='https://instagram.com/keisar.club?igshid=YmMyMTA2M2Y='
          className='text-stone-300 hover:text-white transition-colors'
        >
          <Instagram className='h-6 w-6' />
        </a>
        <a
          href='https://x.com/AmKeisar'
          className='text-stone-300 hover:text-white transition-colors'
        >
          <Twitter className='h-6 w-6' />
        </a>
      </div>
      <div className='mt-6'>
        <Link
          to='/order'
          className='bg-stone-600 text-white px-4 py-2 rounded-md font-medium hover:bg-stone-700'
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}

export default SocialMedia;
