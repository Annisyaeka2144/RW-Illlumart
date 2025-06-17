import React from "react";
import "../styles/CategoryPage.css";
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/cart.png';
import profileIcon from '../assets/cart.png';
import puisiImg from '../assets/puisi.png';     // Tambahkan ini di folder assets
import gambarImg from '../assets/gambar.png';   // Tambahkan ini di folder assets
import novelImg from '../assets/novel.png';     // Tambahkan ini di folder assets

const CategoryPage = () => {
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
    
      <div className="search-bar">
        <input type="text" placeholder="Telusuri Kategori" />
      </div>

      <div className="kategori-container">
        <div className="kategori-card">
          <img src={puisiImg} alt="Puisi" />
          <Link to="/KategoriPuisi"><button>Puisi</button></Link>
        </div>
        <div className="kategori-card">
          <img src={gambarImg} alt="Gambar" />
          <Link to="/KategoriGambar"><button>Gambar</button></Link>
        </div>
        <div className="kategori-card">
          <img src={novelImg} alt="Novel" />
          <Link to="/KategoriNovel"><button>Novel</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
