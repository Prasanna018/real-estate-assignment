import { FiHome, FiDroplet, FiSquare } from 'react-icons/fi';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{property.price}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {property.type}
          </span>
        </div>
        <h4 className="text-gray-600 mb-2">{property.title}</h4>
        <p className="text-gray-500 text-sm mb-4">{property.location}</p>
        <div className="flex justify-between text-gray-600 text-sm">
          <span className="flex items-center">
            <FiHome className="mr-1" /> {property.beds} Beds
          </span>
          <span className="flex items-center">
            <FiDroplet className="mr-1" /> {property.baths} Baths
          </span>
          <span className="flex items-center">
            <FiSquare className="mr-1" /> {property.area} sq.ft
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;