import React from 'react';
import '../styles/PopupSukses.css';

function PopupSukses({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <p className="popup-message">✅ Karya berhasil diupload!</p>
        <button className="popup-close" onClick={onClose}>Tutup</button>
      </div>
    </div>
  );
}

export default PopupSukses;
