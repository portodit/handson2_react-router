import React from 'react';
import { FaInstagram, FaLinkedin, FaGlobe } from 'react-icons/fa'; 
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-headline">Hubungi Saya</h2>
      <p className="contact-description">
        Jika Anda ingin menghubungi saya, silakan temukan saya melalui media sosial atau kunjungi situs pribadi saya. Saya selalu terbuka untuk berdiskusi tentang teknologi, pengembangan perangkat lunak, atau kolaborasi dalam proyek yang menarik! 😊
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <a href="https://instagram.com/yaaelahdit" target="_blank" rel="noopener noreferrer">Instagram: @yaaelahdit</a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://linkedin.com/in/portodit" target="_blank" rel="noopener noreferrer">LinkedIn: linkedin.com/in/portodit</a>
        </div>
        <div className="contact-item">
          <FaGlobe className="contact-icon" />
          <a href="https://portodit.cloud" target="_blank" rel="noopener noreferrer">Website: portodit.cloud</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
