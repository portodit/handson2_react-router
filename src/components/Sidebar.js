import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import CSS for sidebar

const Sidebar = ({ handleAuth }) => {
  return (
    <div className="sidebar">
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
        <li>
          <Link to="/dashboard/overview">Overview</Link>
        </li>
        <li>
          <Link to="/dashboard/stats">Stats</Link>
        </li>
        <li>
          <Link to="/user">User Profile</Link>
        </li>
      </ul>
      <button className="logout-button" onClick={handleAuth}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
