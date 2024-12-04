const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-[500px]">
      <img
        src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=1200&auto=format"
        alt="Hero"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Find Your Dream Properties
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8">
          Discover the perfect place to call home
        </p>
      </div>
    </div>
  );
};

export default Hero;