import React from "react";
import "../styles/Logout.css";

const Logout = () => {
  return (
    <div className="logout-page">
      <div className="header">
        <div className="header-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User Icon"
          />
        </div>
        <div className="header-menu">
          <span className="menu-item active">Profil</span>
          <span className="menu-item">Edit Profil</span>
          <span className="menu-item">Ganti Kata Sandi</span>
          <span className="menu-item logout">Keluar</span>
        </div>
      </div>

      <div className="logout-container">
        <div className="logout-box">
          <div className="logout-content">
            <div className="logout-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png"
                alt="Logout Icon"
              />
            </div>
            <div className="logout-text">
              <div className="logout-title">KELUAR</div>
              <div className="logout-subtitle">Keluar dari akun kamu.</div>
            </div>
          </div>
          <button className="logout-button">KELUAR</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
