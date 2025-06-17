import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PoetryCategory.css";
import logo from '../assets/cart.png';
import profileIcon from '../assets/cart.png';

const PoetryCategory = () => {
  const navigate = useNavigate();
  const [puisiList, setPuisiList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/karya?kategori=puisi")
      .then((response) => response.json())
      .then((data) => setPuisiList(data))
      .catch((error) => console.error("Gagal ambil data:", error));
  }, []);

  const handleBuyNow = (puisi) => {
    navigate("/Transaksi", {
      state: {
        namaKarya: puisi.nama,
        penulis: "Anonim",
        harga: puisi.harga,
        gambar: puisi.file_path,
      },
    });
  };

  return (
    <div className="dashboard-container">
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="brand-text">ILLUMART</span>
        </div>

        <div className="navbar-center">
          <a href="/dashboard" className="nav-link active">BERANDA</a>
          <a href="/koleksi" className="nav-link">KOLEKSI</a>
          <a href="/kategori" className="nav-link">KATEGORI</a>
        </div>

        <div className="navbar-right">
          <a href="/profile">
            <img src={profileIcon} alt="Profile" className="profile-icon" />
          </a>
        </div>
      </div>

      <h2 className="kategori-title">Kategori: Puisi</h2>

      <div className="puisi-list">
        {puisiList.map((puisi, index) => (
          <div key={index} className="puisi-card">
            <p className="license">Lisensi: {puisi.lisensi}</p>
            <img
              src={`http://localhost:5000/${puisi.file_path.replace(/\\/g, "/")}`}
              alt={puisi.nama}
              className="puisi-image"
            />
            <h3>{puisi.nama}</h3>
            <p className="author">Kategori: {puisi.kategori}</p>
            <div className="rating">{"★".repeat(5)}</div>
            <p className="description">{puisi.deskripsi}</p>
            <div className="puisi-footer">
              <span className="price">Rp {puisi.harga}</span>
              <button className="buy-button" onClick={() => handleBuyNow(puisi)}>
                BELI SEKARANG
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoetryCategory;
