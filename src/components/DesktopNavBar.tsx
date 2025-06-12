import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { toggleTheme } from "../hooks/darkTheme";
import { HEADER_LINKS } from "../utils/constants";
import HeaderTab from "./HeaderTab";

function DesktopNavBar() {
  const darkMode = localStorage.getItem("darkMode");
  const [isDarkMode, setIsDarkMode] = useState(darkMode === "true");

  return (
    <nav className='bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 hidden md:block'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link to='/' className='flex-shrink-0 flex items-center group'>
              <Logo
                width={32}
                height={32}
                fill={isDarkMode ? "white" : "black"}
                style={{ transform: "scaleX(-1)" }}
              />
              <span className='ml-3 text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                Keisar Club
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className='flex items-center space-x-8'>
            {HEADER_LINKS.map((link, i) => (
              <HeaderTab
                key={i}
                to={link.to}
                input={link.input}
                className='default'
              />
            ))}
          </div>

          {/* Theme Toggle */}
          <div className='flex items-center'>
            <button
              onClick={() => {
                toggleTheme();
                setIsDarkMode(!isDarkMode);
              }}
              className='p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <Sun className='h-5 w-5' />
              ) : (
                <Moon className='h-5 w-5' />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DesktopNavBar;
