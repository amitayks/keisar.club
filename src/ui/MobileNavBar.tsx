import HeaderTab from "./HeaderTab";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./logo/Logo";
import { useState } from "react";
import MenuButton from "./MenuButton";

function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-md md:hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex justify-between w-full'>
            <Link to='/' className='flex-shrink-0 flex items-center space-x-3'>
              <Logo width={40} height={40} />
              <span className='text-xl font-bold text-gray-900'>
                Keisar Club
              </span>
            </Link>
            <MenuButton onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </MenuButton>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <HeaderTab
            to='/'
            className='mobile'
            input='Home'
            onClick={() => setIsOpen(false)}
          />
          <HeaderTab
            to='/about'
            className='mobile'
            input='About'
            onClick={() => setIsOpen(false)}
          />
          <HeaderTab
            to='/products'
            className='mobile'
            input='Products'
            onClick={() => setIsOpen(false)}
          />
          <HeaderTab
            to='/contact'
            className='mobile'
            input='Contact'
            onClick={() => setIsOpen(false)}
          />
          <HeaderTab
            to='/order'
            className='mobileOrder'
            input='Order Now'
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </nav>
  );
}

export default MobileNavBar;
