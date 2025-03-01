import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <ShoppingBag className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Keisar Club</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">
              About
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">
              Products
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">
              Contact
            </Link>
            <Link to="/order" className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700">
              Order Now
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/products" 
              className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/contact" 
              className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/order" 
              className="block bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 mt-2"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;