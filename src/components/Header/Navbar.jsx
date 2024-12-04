import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Menu } from '@headlessui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">RealEstate</span>
          </div>

          {/* for desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Buy</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Rent</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Sell</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Post Property
            </button>
            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
              Login
            </button>
          </div>

          {/* for mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Buy</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Rent</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Sell</a>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">
                Post Property
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;