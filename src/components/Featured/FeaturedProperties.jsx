import PropertyCard from './PropertyCard';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Apartment with Sea View",
      price: "₹1.2 Cr",
      location: "Bandra West, Mumbai",
      type: "Apartment",
      beds: 3,
      baths: 2,
      area: 1200,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format"
    },
    {
      id: 2,
      title: "Luxury Villa with Garden",
      price: "₹2.5 Cr",
      location: "Jubilee Hills, Hyderabad",
      type: "Villa",
      beds: 4,
      baths: 3,
      area: 2500,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format"
    },
    {
      id: 3,
      title: "Premium Office Space",
      price: "₹85 L",
      location: "Whitefield, Bangalore",
      type: "Commercial",
      beds: 0,
      baths: 2,
      area: 1800,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;