import React from 'react';
import './Home.css'; 
import FeatureCard from '../components/FeatureCard'; 

import digistarLogo from '../assets/digistar.png';
import telkomLogo from '../assets/telkom.png';
import livinginTelkomLogo from '../assets/livingintelkom.png';
import levelupLogo from '../assets/levelup.png';

function Home() {
  return (
    <div className="home-container">
      <div className="headline-container">
        <h1 className="headline">
          <span className="digistar">DIGISTAR</span> CRM DASHBOARD 2024 🚀
        </h1>
        <p className="description">
        DIGISTAR CRM Dashboard 2024 adalah solusi yang dirancang untuk membantu Class Manager dalam menyederhanakan proses pengelolaan hubungan dengan para Mentee Digistar Class 2024. Platform ini menyediakan fitur-fitur unggulan yang memungkinkan pemantauan progres, pengelolaan tugas, serta komunikasi yang lebih efektif dan efisien. Dengan fitur-fitur andal yang terintegrasi, DIGISTAR CRM Dashboard membantu memastikan bahwa setiap interaksi dengan Mentee berjalan lancar dan terorganisir
        </p>
        <h2 className="company-list">
          <strong>Platform ini mendapatkan dukungan penuh dari:</strong>
        </h2>
        <div className="support-logos">
          <img src={digistarLogo} alt="Digistar" className="support-logo" />
          <img src={telkomLogo} alt="Telkom" className="support-logo" />
          <img src={livinginTelkomLogo} alt="Living in Telkom" className="support-logo" />
          <img src={levelupLogo} alt="Level Up" className="support-logo" />
        </div>
      </div>

      {/* Second Section: Features */}
      <div className="features-section">
        <h2 className="features-headline">
          <span className="fitur">Fitur Unggulan</span> DIGISTAR CRM Dashboard
        </h2>
        <div className="features-container">
          <FeatureCard 
            icon="📊" 
            title="Analytics" 
            description="Pantau performa class dengan analisis data yang terintegrasi." 
          />
          <FeatureCard 
            icon="🗂️" 
            title="Class Management" 
            description="Atur seluruh kegiatan kelas dan monitor peserta secara efisien." 
          />
          <FeatureCard 
            icon="📧" 
            title="Communication" 
            description="Kelola komunikasi dengan para mentee menggunakan berbagai channel." 
          />
          <FeatureCard 
            icon="🔔" 
            title="Notifications" 
            description="Dapatkan notifikasi real-time untuk update penting dan pengingat." 
          />
          <FeatureCard 
            icon="📅" 
            title="Scheduling" 
            description="Organisasikan jadwal kelas dan sesi mentoring dengan mudah." 
          />
          <FeatureCard 
            icon="⚙️" 
            title="Settings" 
            description="Sesuaikan pengaturan platform sesuai dengan kebutuhan Anda." 
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
