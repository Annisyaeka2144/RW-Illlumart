import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../styles/Collection.css';
import logo from '../assets/cart.png';
import profileIcon from '../assets/cart.png';

function Collection() {
  const [downloads, setDownloads] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch('http://localhost:5000/api/download/logs')
      .then(res => res.json())
      .then(data => {
        console.log('Data koleksi:', data.logs);
        setDownloads(Array.isArray(data.logs) ? data.logs : []);
      })
      .catch(error => {
        console.error('Gagal mengambil data koleksi:', error);
        setDownloads([]);
      });
  }, [location.state?.reload]); // akan refresh kalau navigate kirim {state: { reload: true }}

  return (
    <div className="koleksi-saya-container">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="brand-text">ILLUMART</span>
        </div>

        <div className="navbar-center">
          <NavLink to="/DashboardHome" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            BERANDA
          </NavLink>
          <NavLink to="/Koleksi" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            KOLEKSI
          </NavLink>
          <NavLink to="/Kategori" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            KATEGORI
          </NavLink>
        </div>

        <div className="navbar-right">
          <Link to="/profile">
            <img src={profileIcon} alt="Profile" className="profile-icon" />
          </Link>
        </div>
      </div>

      {/* Konten Koleksi */}
      <div className="koleksi-saya-content">
        <h2>Koleksi Saya</h2>

        <div className="koleksi-saya-grid">
          {downloads.length === 0 ? (
            <p>Tidak ada koleksi yang ditemukan.</p>
          ) : (
            downloads.map((item, index) => (
              <div key={index} className="koleksi-saya-card">
                <img
                  src={item.karya?.gambar || 'https://via.placeholder.com/250x150?text=No+Image'}
                  alt={item.karya?.nama || item.nama_karya}
                  className="koleksi-saya-image"
                />

                <div className="koleksi-saya-info">
                  <h3 className="koleksi-saya-title">
                    {item.karya?.nama || item.nama_karya}
                  </h3>

                  <p className="koleksi-saya-email">Email: {item.email}</p>

                  <p className="koleksi-saya-kategori">
                    Kategori: {item.karya?.kategori || '-'}
                  </p>

                  <p className="koleksi-saya-harga">
                    Harga: Rp
                    {item.karya?.harga
                      ? item.karya.harga.toLocaleString()
                      : '0'}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;
