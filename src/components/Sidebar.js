import React from 'react';
import { Link } from 'react-router-dom';
import digistarLogo from '../assets/digistar-white.png'; 
const Sidebar = ({ handleAuth, isLoggedIn }) => {
  return (
    <div className="sidebar">
      <img src={digistarLogo} alt="Digistar Logo" className="sidebar-logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

        {/* Conditionally show protected routes after login */}
        {isLoggedIn && (
          <>
            <li className="dropdown">
              <span>Reports</span>
              <ul className="dropdown-content">
                <li>
                  <Link to="/dashboard/overview">Overview</Link>
                </li>
                <li>
                  <Link to="/dashboard/stats">Stats</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/user">User Profile</Link>
            </li>
          </>
        )}
      </ul>

      <button className="auth-button" onClick={handleAuth}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Sidebar;
