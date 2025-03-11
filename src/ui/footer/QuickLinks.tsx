import { Link } from "react-router-dom";

function QuickLinks() {
  return (
    <div>
      <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
      <ul className='space-y-2'>
        <li>
          <Link
            to='/'
            className='text-gray-400 hover:text-white transition-colors'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            className='text-gray-400 hover:text-white transition-colors'
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to='/products'
            className='text-gray-400 hover:text-white transition-colors'
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to='/contact'
            className='text-gray-400 hover:text-white transition-colors'
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default QuickLinks;
