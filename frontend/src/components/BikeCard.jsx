import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BikeCard = ({ bike, index }) => {

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-black border border-white/20 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]"
    >
      <div className="h-40 p-2 overflow-hidden">
        <img
          src={bike.image}
          alt={bike.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-4 text-center">
        <h2 className="text-lg font-bold text-white mb-1">{bike.name}</h2>
        <p className="text-red-600 font-semibold mb-3">{bike.price}</p>
        <Link to={`/bikes/${bike.id}`}>
          <button className="w-full py-2 bg-red-600 text-white text-sm font-bold rounded-md hover:bg-red-700 transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default BikeCard;