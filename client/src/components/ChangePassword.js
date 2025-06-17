import React from "react";
import "../styles/ChangePassword.css";

const ChangePassword = () => {
  return (
    <div className="change-password-container">
      <div className="change-password-content">
        <div className="change-password-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Lock Icon" />
        </div>
        <div className="change-password-text">
          <h2>GANTI KATA SANDI</h2>
          <p>Ubah kata sandi akunmu agar tetap aman!!!</p>
        </div>
        <button className="change-password-button">GANTI KATA SANDI</button>
      </div>
    </div>
  );
};

export default ChangePassword;
