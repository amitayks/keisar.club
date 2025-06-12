import HeaderTab from "./HeaderTab";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import MenuButton from "./MenuButton";
import { toggleTheme } from "../hooks/darkTheme";
import { HEADER_LINKS } from "../utils/constants";

function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const darkMode = localStorage.getItem("darkMode");
  const [isDarkMode, setIsDarkMode] = useState(darkMode === "true");

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

  return (
    <nav className='bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 md:hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex justify-between w-full items-center'>
            <Link to='/' className='flex-shrink-0 flex items-center space-x-3'>
              <Logo
                width={32}
                height={32}
                fill={isDarkMode ? "white" : "black"}
                style={{ transform: "scaleX(-1)" }}
              />
              <span className='text-lg font-bold text-gray-900 dark:text-white'>
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

      {/* Slide-in menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50 flex flex-col border-l border-gray-100 dark:border-gray-800 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className='flex justify-end p-4 border-b border-gray-100 dark:border-gray-800'>
          <MenuButton onClick={() => setIsOpen(false)}>
            <X className='h-6 w-6' />
          </MenuButton>
        </div>

        {/* Main navigation links */}
        <div className='px-4 pt-6 pb-3 flex-grow'>
          <div className='space-y-1'>
            {HEADER_LINKS.map((link, i) => (
              <HeaderTab
                key={i}
                to={link.to}
                input={link.input}
                className='mobile'
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
        </div>

        {/* Theme toggle */}
        <div className='px-4 py-6 border-t border-gray-100 dark:border-gray-800'>
          <button
            onClick={() => {
              toggleTheme();
              setIsDarkMode(!isDarkMode);
            }}
            className='flex items-center w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <>
                <Sun className='h-5 w-5 mr-3' />
                Light Mode
              </>
            ) : (
              <>
                <Moon className='h-5 w-5 mr-3' />
                Dark Mode
              </>
            )}
          </button>
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
