import React from "react";
import "../styles/EditProfile.css";

const EditProfile = () => {
  return (
    <div className="edit-profile-container">
      <div className="edit-profile-header">
        <div className="edit-profile-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Profile Icon" />
        </div>
        <h2>EDIT PROFIL</h2>
      </div>

      <div className="edit-profile-form-container">
        <form className="edit-profile-form">
          <label>
            NAMA:
            <input type="text" placeholder="Masukkan Nama" />
          </label>
          <label>
            EMAIL:
            <input type="email" placeholder="Masukkan Email" />
          </label>
          <label>
            NOMOR TELEPON:
            <input type="tel" placeholder="Masukkan Nomor Telepon" />
          </label>

          <button type="submit" className="save-button">SIMPAN</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
