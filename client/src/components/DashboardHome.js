import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/DashboardHome.css';

import logo from '../assets/cart.png';
import profileIcon from '../assets/cart.png';

const DashboardHome = () => {
  const [karyas, setKaryas] = useState([]);

  useEffect(() => {
    const fetchKaryas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/karya');
        if (!response.ok) {
          throw new Error('Gagal mengambil data');
        }
        const data = await response.json();
        setKaryas(data);
      } catch (error) {
        console.error('Error saat fetch data:', error);
      }
    };

    fetchKaryas();
  }, []);

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="brand-text">ILLUMART</span>
        </div>

        <div className="navbar-center">
          <NavLink to="/DashboardHome" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>BERANDA</NavLink>
          <NavLink to="/Koleksi" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>KOLEKSI</NavLink>
          <NavLink to="/Kategori" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>KATEGORI</NavLink>
        </div>

        <div className="navbar-right">
          <Link to="/profile">
            <img src={profileIcon} alt="Profile" className="profile-icon" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="dashboard-content">
        <h1 className="welcome-text">Selamat Datang di ILLUMART!</h1>
        <h2 className="recommendation-title">Rekomendasi</h2>

        <div className="recommendation-grid">
          {karyas.map((karya, index) => (
            <div key={index} className="recommendation-item">
              {karya.file_path ? (
                <img src={`http://localhost:5000/${karya.file_path}`} alt={karya.nama} />
              ) : (
                <p>Tidak ada gambar</p>
              )}
              <p className="karya-title">{karya.nama}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
