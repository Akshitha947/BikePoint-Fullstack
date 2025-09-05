import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { bikes } from '../bikeData';

const BookPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', bike: '', date: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const url = 'http://localhost:5000/api/bookings';
      const response = await axios.post(url, formData);
      console.log('Booking successful:', response.data);
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError(true);
    }
  };
  
  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center py-16">
        <div className="max-w-md w-full bg-black p-8 rounded-lg shadow-[0_0_20px_rgba(255,0,0,0.6)] text-center">
      
          <h2 className="text-2xl font-bold text-red-600 mb-4">Thank You!</h2>
          <p>Your test ride request has been submitted. We will contact you shortly.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12">
      <div className="max-w-md mx-auto bg-black p-8 rounded-lg shadow-[0_0_20px_rgba(255,0,0,0.6)]">
       
        <h2 className="text-center text-red-600 text-2xl font-bold mb-5">Book a Test Ride</h2>
        
      

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mt-4 text-white">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required className="w-full p-2 mt-1 border border-white/30 rounded-md bg-black text-white" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="phone" className="block mt-4 text-white">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="10-digit number" pattern="[6-9]{1}[0-9]{9}" required className="w-full p-2 mt-1 border border-white/30 rounded-md bg-black text-white" value={formData.phone} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email" className="block mt-4 text-white">Email Address:</label>
            <input type="email" id="email" name="email" placeholder="your@example.com" required className="w-full p-2 mt-1 border border-white/30 rounded-md bg-black text-white" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="bike" className="block mt-4 text-white">Select Bike Model:</label>
            <select 
              id="bike" 
              name="bike" 
              required 
              className="w-full p-2 mt-1 border border-white/30 rounded-md bg-black text-white" 
              value={formData.bike} 
              onChange={handleChange}
            >
              <option value="">-- Choose a bike --</option>
              {bikes.map((bike) => (
                <option key={bike.id} value={bike.name}>
                  {bike.name}
                </option>
              ))}
            </select>
          </div>
          <div>
          
            <label htmlFor="date" className="block mt-4 text-white">Preferred Test Ride Date:</label>
            <input type="date" id="date" name="date" required className="w-full p-2 mt-1 border border-white/30 rounded-md bg-black text-white" value={formData.date} onChange={handleChange} />
          </div>
          <button type="submit" className="w-full py-3 mt-5 bg-red-600 hover:bg-red-700 text-white font-bold text-base cursor-pointer rounded-md">
           
            Submit
          </button>
          {error && (<p className="text-red-500 text-center mt-4">Something went wrong. Please try again later.</p>)}
        </form>
      </div>
    </motion.div>
  );
};

export default BookPage;