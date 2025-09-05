import { motion } from 'framer-motion';

const HelpPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-2xl mx-auto my-20 p-8 bg-black rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.4)]"
    >
      <h2 className="text-red-600 text-center text-2xl font-bold mb-6">Need Help?</h2>
      <p className="text-white/80">
        If you have any queries regarding test rides, bike models, or services, feel free to contact us using the details below.
      </p>
      
      <div className="bg-black border border-white/20 p-6 rounded-lg my-6 leading-7">
        <p>
          <strong className="text-white">Phone:</strong> 
        
          <span className="text-white/80 ml-2">+91 98XXX XXXXX / +91 97XXX XXXXX</span>
        </p>
        <p className="mt-2">
          <strong className="text-white">Email:</strong> 
          <span className="text-white/80 ml-2">contact.bikepoint@email.com</span>
        </p>
        <p className="mt-2">
          <strong className="text-white">Showroom Address:</strong> 
          <span className="text-white/80 ml-2">Main Showroom Complex, Bypass Road</span>
        </p>
      </div>

      <p className="text-sm text-white/60 text-center mt-8">
        You can also visit us directly during working hours (Mon-Sat, 9 AM to 6 PM).
      </p>
    </motion.div>
  );
};

export default HelpPage;