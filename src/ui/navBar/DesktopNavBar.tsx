import { Link } from "react-router-dom";
import { Moon, Sun, LogIn } from "lucide-react";
import HeaderTab from "./HeaderTab";
import Logo from "../logo/Logo";
import { useSettingsContext } from "../../hooks/useSettingsContext";

function DesktopNavBar() {
  const { settings, toggleDarkMode } = useSettingsContext();
  const { darkMode, siteName } = settings;

  return (
    <nav className='bg-white dark:bg-gray-800 shadow-md hidden md:block'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='hidden md:flex items-center'>
            <Link to='/' className='flex-shrink-0 flex items-center'>
              <Logo
                width={40}
                height={40}
                fill={darkMode ? "white" : "black"}
              />
              <span className='ml-2 text-xl font-bold text-gray-900 dark:text-white'>
                {siteName}
              </span>
            </Link>
          </div>

          <div className='md:flex md:items-center md:space-x-8'>
            <HeaderTab to='/' className='default' input='Home' />
            <HeaderTab to='/portfolio' className='default' input='Portfolio' />
            <HeaderTab to='/products' className='default' input='Products' />
            <HeaderTab to='/contact' className='default' input='Contact' />
            <HeaderTab to='/about' className='default' input='About' />
          </div>

          <div className='md:flex md:items-center md:space-x-6'>
            <button
              onClick={toggleDarkMode}
              className='text-gray-700 dark:text-gray-300 hover:text-stone-900 dark:hover:text-white'
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

            <HeaderTab
              to='/login'
              className='order'
              input='Login'
              icon={LogIn}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DesktopNavBar;
