import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/20 pt-10 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        <div>
          <h3 className="text-2xl font-black tracking-wider text-white flex items-center justify-center md:justify-start mb-4">
            BIKE
            <FaMapMarkerAlt className="text-red-600 mx-1 text-xl" />
            POINT
          </h3>
          <p className="text-white/60">
            Your trusted point for expert motorcycle service and sales.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-white/60 hover:text-red-500 transition-colors">Home</a></li>
            <li><a href="/about" className="text-white/60 hover:text-red-500 transition-colors">About Us</a></li>
            <li><a href="/book" className="text-white/60 hover:text-red-500 transition-colors">Book a Test Ride</a></li>
            <li><a href="/help" className="text-white/60 hover:text-red-500 transition-colors">Contact & Help</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <div className="text-white/60 space-y-3">
            <p className="flex items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="text-red-500 mr-3" />
              <span>Main Showroom Complex, Bypass Road</span>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <FaPhone className="text-red-500 mr-3" />

              <span>+91 98XXX XXXXX / +91 97XXX XXXXX</span>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="text-red-500 mr-3" />
              <span>contact.bikepoint@email.com</span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-white/40 mt-8 pt-6 border-t border-white/20">
        <p className="text-xs mb-2">This project is a student learning project.The bike images and brand names are used for demonstration purpose only.All rights belong to their respective owners.</p>
        <p>&copy; {new Date().getFullYear()} BikePoint Service & Sales. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;