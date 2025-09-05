import { Link } from 'react-router-dom';
import { bikes } from '../bikeData';
import { motion } from 'framer-motion';
import BackgroundImg from '../assets/background.png';
import BikeCard from '../components/BikeCard';

const HomePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      
   
      <div className="container mx-auto h-[60vh] md:h-[80vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          
         
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left px-4"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-white">
              Your Journey Starts Here
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-8 text-white/80">
              Explore our collection of reliable, fuel-efficient motorcycles built to be your trusted partner on every ride.
            </p>
            <Link to="/book">
              <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition-transform hover:scale-105">
                Book a Test Ride
              </button>
            </Link>
          </motion.div>

        
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full hidden md:flex items-center justify-center"
          >
            <img 
              src={BackgroundImg} 
              alt="Hero Motorcycle" 
              className="max-h-full max-w-full object-contain"
            />
          </motion.div>

        </div>
      </div>
      
   
      <div className="bg-black py-12"> 
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-2">Our Featured Models</h2>
          <p className="text-center text-white/60 mb-12">Click on any model to learn more.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bikes.map((bike, index) => (
              <BikeCard key={bike.id} bike={bike} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;