import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaPhone, FaChartLine, FaUser } from 'react-icons/fa';
import digistarLogo from '../assets/digistar-white.png';

const Sidebar = ({ handleAuth, isLoggedIn }) => {
  return (
    <div className="sidebar">
      <img src={digistarLogo} alt="Digistar Logo" className="sidebar-logo" />
      <ul>
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaInfoCircle /> About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaPhone /> Contact
          </Link>
        </li>

        {/* Conditionally show protected routes after login */}
        {isLoggedIn && (
          <>
            <li className="dropdown">
              <span>
                <FaChartLine /> Reports
              </span>
              <ul className="dropdown-content">
                <li>
                  <Link to="/dashboard/overview">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/stats">
                    Stats
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/user">
                <FaUser /> User Profile
              </Link>
            </li>
          </>
        )}
      </ul>

      <Link to={isLoggedIn ? "/" : "/login"}>
        <button className="auth-button" onClick={isLoggedIn ? handleAuth : null}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
