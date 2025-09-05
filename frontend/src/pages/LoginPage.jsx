import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const LoginPage = ({ showPopup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await axios.post('https://bikepoint-backend-vf44.onrender.com/api/auth/login', {
                username,
                password
            });

            if (response.data.success) {
                const { role, user } = response.data;
                if (role === 'admin') {
                    localStorage.setItem('isAuthenticated', 'true');
                    navigate('/dashboard');
                } else {
                    localStorage.setItem('isAuthenticated', 'false');
                    localStorage.setItem('currentUser', user.name);
                    showPopup(`Welcome, ${user.name}!`);
                    navigate('/');
                }
            }
        } catch (err) {
            setError('Invalid username or password.');
            console.error('Login error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-sm mx-auto my-20 p-8 bg-black rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.5)] text-center">
            <h2 className="text-red-600 text-2xl font-bold mb-8">Login to Your Account</h2>
            <form onSubmit={handleLogin}>
                <div className="text-left">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" required value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2.5 mt-2 rounded-md bg-black text-white border border-white/30"/>
                </div>
                <div className="text-left mt-4">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2.5 mt-2 rounded-md bg-black text-white border border-white/30"/>
                </div>
                {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                <button
                    type="submit"
                    className="mt-8 py-2.5 px-5 w-full bg-red-600 hover:bg-red-700 text-white text-base rounded-md cursor-pointer transition-opacity disabled:opacity-50"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <FaSpinner className="animate-spin mx-auto" />
                    ) : (
                        'Login'
                    )}
                </button>
            </form>
            <p className="text-sm text-white/60 mt-6">
              Don't have an account? <Link to="/register" className="text-red-500 hover:underline">Register now</Link>
            </p>
        </div>
    );
};

export default LoginPage;