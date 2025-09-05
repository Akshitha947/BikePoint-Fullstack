import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { bikes } from '../bikeData';

const categories = ['All', ...new Set(bikes.map(bike => bike.category))];

const Navbar = () => {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAuthenticated') === 'true';
  const currentUser = localStorage.getItem('currentUser');
  const isAuthenticated = isAdmin || currentUser;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() || selectedCategory !== 'All') {
      navigate(`/search?q=${searchQuery}&category=${selectedCategory}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    window.location.href = '/login';
  };

  return (
    <header className="bg-black shadow-[0_2px_10px_rgba(255,0,0,0.3)] sticky top-0 z-50">
      <div className="container mx-auto h-20 flex items-center justify-between px-6 gap-6">
        <div className="flex-shrink-0">
          <Link to="/" className="text-3xl font-black tracking-wider text-white flex items-center">
            BIKE
            <FaMapMarkerAlt className="text-red-600 mx-1 text-2xl" />
            POINT
          </Link>
        </div>
        <div className="flex-grow flex justify-center">
          <form onSubmit={handleSearch} className="hidden md:flex w-full max-w-lg lg:max-w-xl h-10 rounded-md overflow-hidden shadow-[0_0_10px_rgba(255,0,0,0.4)] border border-white/30">
            <select 
              className="bg-black text-white px-3 outline-none w-32"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Find your motorcycle model..."
              className="w-full bg-black text-white px-3 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="bg-red-600 hover:bg-red-700 px-4 flex items-center justify-center">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="flex-shrink-0">
          <nav className="hidden md:flex items-center text-sm font-semibold">
          
            <Link to="/book" className="px-3 py-2 hover:underline">Book a Test Ride</Link>
            <Link to="/service" className="px-3 py-2 hover:underline">Service Info</Link>
            <Link to="/about" className="px-3 py-2 hover:underline">About Us</Link>
            <Link to="/help" className="px-3 py-2 hover:underline">Help</Link>
            {isAdmin && <Link to="/dashboard" className="px-3 py-2 hover:underline">Dashboard</Link>}
            {isAuthenticated ? (
              <button onClick={handleLogout} className="px-3 py-2 hover:underline">
                Logout
              </button>
            ) : (
              <Link to="/login" className="px-3 py-2 hover:underline">Login</Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;