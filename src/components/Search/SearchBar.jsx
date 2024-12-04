import { useState } from 'react';
import { FiSearch, FiMapPin } from 'react-icons/fi';

const SearchBar = () => {
  const [searchType, setSearchType] = useState('buy');

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded-md ${searchType === 'buy'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700'
              }`}
            onClick={() => setSearchType('buy')}
          >
            Buy
          </button>
          <button
            className={`px-4 py-2 rounded-md ${searchType === 'rent'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700'
              }`}
            onClick={() => setSearchType('rent')}
          >
            Rent
          </button>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <FiMapPin className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Enter location"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex-1">
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
            </select>
          </div>
          <div className="flex-1">
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="">Budget</option>
              <option value="0-5000000">Under 50L</option>
              <option value="5000000-10000000">50L - 1Cr</option>
              <option value="10000000+">Above 1Cr</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 flex items-center">
            <FiSearch className="mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;