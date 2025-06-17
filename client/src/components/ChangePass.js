import React from "react";
import "../styles/ChangePass.css";

const ChangePass = () => {
  return (
    <div className="page-container">
      <div className="header">
        <div className="header-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User Icon"
          />
        </div>
        <div className="header-title">GANTI KATA SANDI</div>
      </div>

      <div className="form-container">
        <form className="form-content">
          <div className="form-group">
            <label>KATA SANDI LAMA</label>
            <input type="password" placeholder=" " />
          </div>

          <div className="form-group">
            <label>KATA SANDI BARU</label>
            <input type="password" placeholder=" " />
          </div>

          <div className="form-group">
            <label>KONFIRMASI KATA SANDI</label>
            <input type="password" placeholder=" " />
          </div>

          <div className="form-button">
            <button type="submit">SIMPAN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePass;
