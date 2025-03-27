import { Link } from "react-router-dom";
import { Moon, Sun, LogIn } from "lucide-react";
import HeaderTab from "./HeaderTab";
import Logo from "../logo/Logo";
import { toggleTheme } from "../../hooks/darkTheme";
import { useState } from "react";
import { HEADER_LINKS } from "../../utils/constants";
function DesktopNavBar() {
  const darkMode = localStorage.getItem("darkMode");
  const [isDarkMode, setIsDarkMode] = useState(darkMode === "true");

  return (
    <nav className=' dark:bg-zinc-900 shadow-md hidden md:block'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='hidden md:flex items-center'>
            <Link to='/' className='flex-shrink-0 flex items-center'>
              <Logo
                width={40}
                height={40}
                fill={isDarkMode ? "white" : "black"}
              />
              <span className='ml-2 text-xl font-bold text-zinc-900 dark:text-stone-100'>
                Keisar Club
              </span>
            </Link>
          </div>

          <div className='md:flex md:items-center md:space-x-8'>
            {HEADER_LINKS.map((link, i) => (
              <HeaderTab
                key={i}
                to={link.to}
                input={link.input}
                className='mobile'
              />
            ))}
          </div>

          <div className='md:flex md:items-center md:space-x-6'>
            <button
              onClick={() => {
                toggleTheme();
                setIsDarkMode(!isDarkMode);
              }}
              className='text-zinc-900 dark:text-stone-100 hover:text-stone-900 dark:hover:text-white'
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
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
