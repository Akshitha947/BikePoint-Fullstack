import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import Popup from './components/Popup';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import HelpPage from './pages/HelpPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; 
import BikeDetailPage from './pages/BikeDetailPage';
import AdminPage from './pages/AdminPage';
import SearchResultsPage from './pages/SearchResultsPage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';

function App() {
  const [popupMessage, setPopupMessage] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPopup = (message) => {
    setPopupMessage(message);
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 3000);
  };

  return (
    <Router>
      <Popup message={popupMessage} isVisible={isPopupVisible} />
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bikes/:id" element={<BikeDetailPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/login" element={<LoginPage showPopup={showPopup} />} />
            <Route path="/register" element={<RegisterPage />} /> 
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <AdminPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;