import React from "react";
import "../styles/ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profile-page-container">
      <div className="profile-header">
        <div className="profile-icon">
          <img src="profile-icon.png" alt="Profile Icon" />
        </div>
        <div className="profile-menu">
          <button className="profile-tab active">Edit Profil</button>
          <button className="profile-tab">Ganti Kata Sandi</button>
          <button className="profile-tab">Keluar</button>
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-card-icon">
            <img src="edit-icon.png" alt="Edit Icon" />
          </div>
          <div className="profile-card-content">
            <h2>Edit Profil</h2>
            <p>Perbarui informasi akun seperti nama pengguna, email, dan nomor telepon</p>
            <button className="edit-profile-button">EDIT PROFIL</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
