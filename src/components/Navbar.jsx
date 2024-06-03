import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../services/authService';

const Navbar = () => {
  const history = useNavigate();

  const handleLogout = () => {
    logout();
    history('/login');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg font-bold">Movie Booking</Link>
        <div>
          {isAuthenticated() ? (
            <>
              <Link to="/profile" className="text-white px-3">Profile</Link>
              <button onClick={handleLogout} className="text-white px-3">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white px-3">Login</Link>
              <Link to="/register" className="text-white px-3">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
