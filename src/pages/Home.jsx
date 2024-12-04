import Navbar from '../components/Header/Navbar';
import Hero from '../components/Hero/Hero';
import SearchBar from '../components/Search/SearchBar';
import FeaturedProperties from '../components/Featured/FeaturedProperties';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <div className="relative -mt-24">
        <SearchBar />
      </div>
      <FeaturedProperties />
    </div>
  );
};

export default Home;