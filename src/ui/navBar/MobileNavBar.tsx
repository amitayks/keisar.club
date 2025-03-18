import HeaderTab from "./HeaderTab";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun, LogIn } from "lucide-react";
import Logo from "../logo/Logo";
import { useState, useEffect } from "react";
import MenuButton from "./MenuButton";
import { useSettingsContext } from "../../hooks/useSettingsContext";

function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, toggleDarkMode } = useSettingsContext();
  const { darkMode, siteName, navbarPosition } = settings;

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Determine which side the navbar slides in from
  const slideDirection =
    navbarPosition === "left"
      ? {
          open: "translate-x-0",
          closed: "-translate-x-full",
          position: "left-0",
        }
      : {
          open: "translate-x-0",
          closed: "translate-x-full",
          position: "right-0",
        };

  return (
    <nav className='bg-white dark:bg-gray-800 shadow-md md:hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex justify-between w-full'>
            <Link to='/' className='flex-shrink-0 flex items-center space-x-3'>
              <Logo
                width={40}
                height={40}
                fill={darkMode ? "white" : "black"}
              />
              <span className='text-xl font-bold text-gray-900 dark:text-white'>
                {siteName}
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

      {/* Slide-in menu */}
      <div
        className={`fixed top-0 ${
          slideDirection.position
        } h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
          isOpen ? slideDirection.open : slideDirection.closed
        }`}
      >
        {/* Close button */}
        <div className='flex justify-end p-4'>
          <MenuButton onClick={() => setIsOpen(false)}>
            <X className='h-6 w-6 dark:text-white' />
          </MenuButton>
        </div>

        {/* Main navigation links */}
        <div className='px-4 pt-2 pb-3 flex-grow'>
          <div className='space-y-2'>
            <HeaderTab
              to='/'
              className='mobile'
              input='Home'
              onClick={() => setIsOpen(false)}
            />
            <HeaderTab
              to='/products'
              className='mobile'
              input='Products'
              onClick={() => setIsOpen(false)}
            />
            <HeaderTab
              to='/portfolio'
              className='mobile'
              input='Portfolio'
              onClick={() => setIsOpen(false)}
            />
            <HeaderTab
              to='/about'
              className='mobile'
              input='About'
              onClick={() => setIsOpen(false)}
            />
            <HeaderTab
              to='/contact'
              className='mobile'
              input='Contact'
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>

        {/* Bottom section with login and dark mode toggle */}
        <div className='px-4 py-4 border-t border-gray-200 dark:border-gray-700'>
          <div className='flex justify-between items-center'>
            <HeaderTab
              to='/login'
              className='mobileOrder'
              input='Login'
              icon={LogIn}
              onClick={() => setIsOpen(false)}
            />

            <button
              onClick={toggleDarkMode}
              className='flex items-center text-gray-700 dark:text-gray-300 hover:text-stone-900 dark:hover:text-white'
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className='h-5 w-5' />
              ) : (
                <Moon className='h-5 w-5' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for clicking outside to close */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}

export default MobileNavBar;
