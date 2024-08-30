import React from 'react';
import { FaUsers, FaCalendarAlt, FaStar } from 'react-icons/fa'; 
import './Overview.css';

function Overview() {
  return (
    <div className="overview-container">
      <h1 className="headline">Overview Page</h1>
      <p className="description">
        Berikut adalah ringkasan dari metrik dan informasi penting. Lihat kartu-kartu di bawah untuk mendapatkan gambaran cepat tentang data terkait sistem kita.
      </p>
      <div className="cards-container">
        <div className="card">
          <FaUsers className="card-icon" />
          <div className="card-content">
            <h3>Total Mentee</h3>
            <p>125</p>
          </div>
        </div>
        <div className="card">
          <FaCalendarAlt className="card-icon" />
          <div className="card-content">
            <h3>Acara Mendatang</h3>
            <p>8</p>
          </div>
        </div>
        <div className="card">
          <FaStar className="card-icon" />
          <div className="card-content">
            <h3>Mentee Terbaik</h3>
            <p>John Doe</p>
          </div>
        </div>
        {/* Tambahkan kartu lain jika diperlukan */}
      </div>
    </div>
  );
}

export default Overview;
