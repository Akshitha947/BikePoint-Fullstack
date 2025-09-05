import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa'; 

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-red-600 mb-8">
        Dashboard: Test Ride Bookings
      </h2>

    
      {loading ? (
        <div className="flex justify-center items-center py-16">
          <FaSpinner className="animate-spin text-4xl text-red-500" />
        </div>
      ) : (
    
        <div className="bg-black border border-white/20 rounded-lg overflow-x-auto">
          <table className="min-w-full text-left text-sm text-white">
            <thead className="bg-white/10 border-b border-white/20 uppercase">
              <tr>
                <th scope="col" className="px-6 py-4">Name</th>
                <th scope="col" className="px-6 py-4">Phone</th>
                <th scope="col" className="px-6 py-4">Email</th>
                <th scope="col" className="px-6 py-4">Bike Model</th>
                <th scope="col" className="px-6 py-4">Preferred Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="border-b border-white/10 hover:bg-white/5">
                  <td className="px-6 py-4 font-medium">{booking.name}</td>
                  <td className="px-6 py-4">{booking.phone}</td>
                  <td className="px-6 py-4">{booking.email}</td>
                  <td className="px-6 py-4">{booking.bike}</td>
                  <td className="px-6 py-4">{formatDate(booking.date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPage;