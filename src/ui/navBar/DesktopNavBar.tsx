import { Link } from "react-router-dom";
import HeaderTab from "./HeaderTab";
import Logo from "../logo/Logo";

function DesktopNavBar() {
  return (
    <nav className='bg-white shadow-md hidden md:block'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='hidden md:flex items-center'>
            <Link to='/' className='flex-shrink-0 flex items-center'>
              <Logo width={40} height={40} fill='black' />
              <span className='ml-2 text-xl font-bold text-gray-900 '>
                Keisar Club
              </span>
            </Link>
          </div>

          <div className='md:flex md:items-center md:space-x-8'>
            <HeaderTab to='/' className='default' input='Home' />
            <HeaderTab to='/about' className='default' input='About' />
            <HeaderTab to='/products' className='default' input='Products' />
            <HeaderTab to='/contact' className='default' input='Contact' />
            <HeaderTab to='/portfolio' className='default' input='Portfolio' />
            <HeaderTab to='/order' className='order' input='Order Now' />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DesktopNavBar;
