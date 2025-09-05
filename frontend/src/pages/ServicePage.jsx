import { FaPhone, FaRegClock, FaTools, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Accordion from '../components/Accordion';

const ServicePage = () => {
  const serviceList1And3 = [
    "Oil Filter Clean (Rotor Filter Clean)",
    "Engine Oil Change",
    "Spark Plug & Air Filter Clean",
    "Chain Lubrication",
    "Inspect Oil Circulation",
    "Check & Adjust All Control Cables",
    "Check & Adjust Brake System",
    "Inspect & Tighten All Fasteners (Bolts & Nuts)",
    "Check & Adjust Tyre Air Pressure",
    "Inspect All Electrical Items (Lights, Horn, Indicators)",
    "Vehicle Wash & Polish",
  ];

  const serviceList2And4 = [
    "Check Engine Oil Level (Top-up if necessary)",
    "Spark Plug & Air Filter Clean",
    "Chain Lubrication",
    "Inspect Oil Circulation",
    "Check & Adjust All Control Cables",
    "Check & Adjust Brake System",
    "Inspect & Tighten All Fasteners (Bolts & Nuts)",
    "Check & Adjust Tyre Air Pressure",
    "Inspect All Electrical Items (Lights, Horn, Indicators)",
    "Vehicle Wash & Polish",
  ];
  
  const paidServiceTasks = [
    "Comprehensive check-up of all major components.",
    "Includes everything in the 1st service plus:",
    "Air filter and spark plug replacement (if required).",
    "Clutch and tappet adjustment.",
    "Battery and charging system check."
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-12 px-4"
    >
      <h2 className="text-4xl font-extrabold text-center text-red-600 mb-4">
        Our Service Commitment
      </h2>
      <p className="text-center text-white/80 max-w-2xl mx-auto mb-12">
        We are dedicated to keeping your Hero motorcycle in peak condition. Explore our detailed service schedules and book your appointment today.
      </p>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-white">
       
        <div className="bg-black border border-white/20 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
          <FaRegClock className="text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Service Timings</h3>
          <p className="text-white/80">Monday - Saturday</p>
          <p className="text-white/80">9:00 AM to 6:00 PM</p>
        </div>
       
        <div className="bg-black border border-white/20 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
          <FaPhone className="text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Book a Service</h3>
          <p className="text-white/80">Call our dedicated service line:</p>
          <a href="tel:9591506864" className="text-lg font-bold text-white hover:text-red-500">9591506864</a>
        </div>
        
        <div className="bg-black border border-white/20 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
          <FaShieldAlt className="text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Vehicle Warranty</h3>
          <p className="text-white/80">All new vehicles come with a</p>
          <p className="text-lg font-bold">5-Year Warranty</p>
        </div>
      </div>
      
    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
       
        <div>
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
            <FaTools className="text-red-500 mr-3" />
            Free Service Schedule
          </h3>
          <Accordion title="1st Service (500-750 Kms or 60 days)">
            <ul className="space-y-2 text-white/80">
              {serviceList1And3.map((task, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </Accordion>
          <Accordion title="2nd Service (3000-3500 Kms or 100 days)">
            <ul className="space-y-2 text-white/80">
              {serviceList2And4.map((task, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </Accordion>
          <Accordion title="3rd Service (6000-6500 Kms or 200 days)">
             <ul className="space-y-2 text-white/80">
              {serviceList1And3.map((task, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </Accordion>
          <Accordion title="4th Service (9000-9500 Kms or 300 days)">
             <ul className="space-y-2 text-white/80">
              {serviceList2And4.map((task, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </Accordion>
        </div>

       
        <div>
          <h3 className="text-3xl font-bold text-white mb-6">Paid Service Schedule</h3>
          <div className="bg-black border border-white/20 p-6 rounded-lg">
            <h4 className="font-bold text-red-500 text-lg mb-2">Recommended Interval</h4>
            <p className="font-semibold text-white mb-4">Every 3000 Kms or 90 days</p>
            <h4 className="font-bold text-red-500 text-lg mb-2">Key Actions</h4>
             <ul className="space-y-2 text-white/80">
              {paidServiceTasks.map((task, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ServicePage;