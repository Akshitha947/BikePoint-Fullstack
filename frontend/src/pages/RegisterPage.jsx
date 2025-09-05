import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa'; 

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await axios.post('https://bikepoint-backend-vf44.onrender.com/api/auth/register', {
        username,
        password,
      });
      setMessage(response.data.message);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError(err.response.data.message || 'Registration failed. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto my-20 p-8 bg-black rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.5)] text-center">
      <h2 className="text-red-600 text-2xl font-bold mb-8">Create Account</h2>
      <form onSubmit={handleRegister}>
      
        <div className="text-left">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" required value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2.5 mt-2 rounded-md bg-black text-white border border-white/30"/>
        </div>
        <div className="text-left mt-4">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2.5 mt-2 rounded-md bg-black text-white border border-white/30"/>
        </div>
        
        {message && <p className="text-green-500 text-sm mt-4">{message}</p>}
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

        <button
          type="submit"
          className="mt-8 py-2.5 px-5 w-full bg-red-600 hover:bg-red-700 text-white text-base rounded-md cursor-pointer transition-opacity disabled:opacity-50"
          disabled={isLoading} 
        >
        
          {isLoading ? (
            <FaSpinner className="animate-spin mx-auto" />
          ) : (
            'Register'
          )}
        </button>
      </form>
      <p className="text-sm text-white/60 mt-6">
        Already have an account? <Link to="/login" className="text-red-500 hover:underline">Login here</Link>
      </p>
    </div>
  );
};

export default RegisterPage;