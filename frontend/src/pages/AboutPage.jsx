import { motion } from 'framer-motion';
import { FaWrench, FaHeart, FaUsers } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          About BikePoint
        </h2>
        <p className="text-lg text-white/80 mb-12">
          Your Trusted Local Motorcycle Experts
        </p>
      </div>

      <div className="bg-black border border-white/20 p-8 md:p-12 rounded-lg max-w-4xl mx-auto">
     
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
          <p className="text-white/70 leading-relaxed">
            Welcome to BikePoint, premier destination for motorcycle sales and service. Founded on a passion for two-wheelers and a commitment to our community, we have been proudly serving riders for over 15 years. Our journey began with a simple mission: to provide honest, reliable, and expert service that our customers can depend on. We believe that every ride should be a safe and enjoyable one, and we treat every bike that comes into our workshop as if it were our own.
          </p>
        </div>

       
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <FaWrench className="text-4xl text-red-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Expertise</h4>
            <p className="text-white/70">Our certified technicians have years of experience with all major motorcycle models, ensuring your bike gets the best care possible.</p>
          </div>
          <div className="text-center">
            <FaHeart className="text-4xl text-red-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Passion</h4>
            <p className="text-white/70">We are riders ourselves. We share your passion for the open road and are dedicated to keeping that passion alive through quality service.</p>
          </div>
          <div className="text-center">
            <FaUsers className="text-4xl text-red-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Community</h4>
            <p className="text-white/70">We are more than just a workshop; we are a part of the local riding community. We are here to support you throughout your ownership journey.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;