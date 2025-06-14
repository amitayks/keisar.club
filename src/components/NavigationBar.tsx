import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toggleTheme } from "../hooks/darkTheme";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { HEADER_LINKS } from "../utils/constants";
import HeaderTab from "./HeaderTab";
import Logo from "./Logo";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  // Custom hook to detect screen size
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isMobile]);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  const handleThemeToggle = () => {
    toggleTheme();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className='bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link to='/' className='flex-shrink-0 flex items-center group'>
              <Logo
                width={32}
                height={32}
                fill={isDarkMode ? "white" : "black"}
                style={{ transform: "scaleX(-1)" }}
              />
              <span className='ml-3 text-xl font-bold text-gray-900 dark:text-white'>
                Keisar Club
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <div className='flex items-center space-x-8'>
                {HEADER_LINKS.map((link, i) => (
                  <HeaderTab
                    key={i}
                    to={link.to}
                    input={link.input}
                    // icon={link.icon}
                    className='default'
                  />
                ))}
              </div>

              <button
                onClick={handleThemeToggle}
                className='text-gray-500 dark:text-gray-400 dark:hover:text-gray-200'
              >
                {isDarkMode ? (
                  <Sun className='h-5 w-5' />
                ) : (
                  <Moon className='h-5 w-5' />
                )}
              </button>
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className={`rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white`}
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      {isMobile && (
        <div className='mobile-menu-content'>
          <div
            className={`fixed left-0 right-0 bg-white dark:bg-gray-900 shadow-2xl transform transition-all duration-600 ease-in-out z-50 ${
              isOpen ? " visible opacity-100" : "invisible opacity-0"
            }`}
            style={{
              top: "64px", // Start below the navbar
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            {/* Main Navigation Links - Centered */}
            <div className=' py-10'>
              <div className='space-y-3 flex flex-col items-center'>
                {HEADER_LINKS.map((link, i) => (
                  <div
                    key={i}
                    className={`transform transition-all duration-200 ease-in-out max-w-sm ${
                      isOpen
                        ? "translate-y-4 visible"
                        : "translate-y-0 invisible"
                    }`}
                    // style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <HeaderTab
                      to={link.to}
                      input={link.input}
                      //   icon={link.icon}
                      onClick={() => setIsOpen(false)}
                      className='mobile'
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className='mx-6 border-t border-gray-200 dark:border-gray-700'></div>

            {/* Theme Toggle - Centered */}
            <div className='px-6 py-6 rounded-b-2xl'>
              <div className='flex justify-center'>
                <button
                  onClick={handleThemeToggle}
                  className='flex items-center px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200'
                >
                  {isDarkMode ? (
                    <>
                      <Sun className='h-5 w-5 mr-3' />
                      <span className='font-medium'>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className='h-5 w-5 mr-3' />
                      <span className='font-medium'>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Overlay */}
          {isOpen && (
            <div
              className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-1000 ease-in-out'
              onClick={() => setIsOpen(false)}
              style={{ top: "64px" }}
            />
          )}
        </div>
      )}
    </nav>
  );
}

export default NavigationBar;
