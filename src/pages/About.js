import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <h2 className="about-headline">Tentang Digistar CRM Dashboard 2024</h2>
      <p className="about-description">
        Halo! 👋 Selamat datang di halaman "Tentang Kami". Platform ini, yaitu <strong>Digistar CRM Dashboard 2024</strong>, dikembangkan sebagai proyek yang awalnya "iseng" 😄. Ide dasarnya adalah untuk melakukan modifikasi dari latihan hands-on React Router, sehingga saya bisa langsung terjun ke dalam pengembangan komponen serta mengimplementasikan navigasi antar halaman menggunakan React Router.
      </p>
      <p className="about-description">
        Proyek ini memberi kesempatan untuk mengasah kemampuan dalam mengembangkan aplikasi React, khususnya dalam membangun sistem dashboard yang dinamis dan mudah digunakan. Dengan memanfaatkan berbagai fitur seperti Protected Routes dan pengelolaan state, platform ini dirancang untuk membantu meningkatkan produktivitas melalui pengelolaan data CRM secara efisien 🚀.
      </p>

      <h3 className="about-subheadline">Tentang Developer</h3>
      <p className="about-description">
        Nama: <strong>I Putu Adhitya Pratama Mangku Purnama</strong><br />
        Jurusan: <strong>Sistem Informasi</strong><br />
        Instansi: <strong>Institut Teknologi Sepuluh Nopember</strong>
      </p>

      <h3 className="about-subheadline">Kontak Media Sosial</h3>
      <p className="about-description">
        Instagram: <a href="https://instagram.com/yaaelahdit" target="_blank" rel="noopener noreferrer">instagram.com/yaaelahdit</a><br />
        LinkedIn: <a href="https://linkedin.com/in/portodit" target="_blank" rel="noopener noreferrer">linkedin.com/in/portodit</a><br />
        Personal Site: <a href="https://portodit.cloud" target="_blank" rel="noopener noreferrer">portodit.cloud</a>
      </p>
    </div>
  );
}

export default About;