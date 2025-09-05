import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { bikes } from '../bikeData';
import { motion } from 'framer-motion';

const BikeDetailPage = () => {
  const { id } = useParams();
  const bike = bikes.find(b => b.id === id);
  const [mainImage, setMainImage] = useState(bike ? bike.image : null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (bike) {
        setMainImage(bike.image);
    }
  }, [id, bike]);

  if (!bike) {
    return (
        <div className="text-center py-20">
            <h1 className="text-2xl text-red-600">Bike not found!</h1>
            <Link to="/" className="text-white hover:underline mt-4 inline-block">Return to Homepage</Link>
        </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-12 px-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <motion.img
            key={mainImage}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={mainImage}
            alt={bike.name}
            className="w-full h-auto object-cover rounded-lg shadow-2xl shadow-red-900/20"
          />
          <div className="flex space-x-4 mt-4">
            {bike.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${bike.name} thumbnail ${index + 1}`}
                className={`w-24 h-24 object-cover rounded-md cursor-pointer border-2 transition-all duration-300 ${
                  mainImage === img ? 'border-red-600 scale-110' : 'border-white/20 hover:border-white/50'
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2">{bike.name}</h1>
          <p className="text-2xl font-bold text-white mb-6">{bike.price} <span className="text-sm text-white/60">(Ex-Showroom)</span></p>
          <p className="text-white/80 leading-relaxed mb-8">{bike.description}</p>
          <div className="bg-black border border-white/20 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Key Specifications</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex justify-between border-b border-white/20 pb-2"><strong>Engine:</strong> <span>{bike.specs.engine}</span></li>
              <li className="flex justify-between border-b border-white/20 pb-2"><strong>Max Power:</strong> <span>{bike.specs.power}</span></li>
              <li className="flex justify-between"><strong>Mileage:</strong> <span>{bike.specs.mileage}</span></li>
            </ul>
          </div>
          <Link to="/book">
          
            <button className="w-full py-4 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-700 transition-transform hover:scale-105">
              Book a Test Ride Now
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BikeDetailPage;