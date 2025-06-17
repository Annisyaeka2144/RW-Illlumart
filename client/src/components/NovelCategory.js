import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NovelCategory.css";
import logo from '../assets/cart.png';
import profileIcon from '../assets/cart.png';

const NovelCategory = () => {
  const navigate = useNavigate();
  const [novelList, setNovelList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/karya")
      .then((response) => response.json())
      .then((data) => {
        const novels = data.filter(item => item.kategori.toLowerCase() === "novel");
        setNovelList(novels);
      })
      .catch((error) => console.error("Gagal ambil data:", error));
  }, []);

  const handleBuyNow = (novel) => {
    navigate("/transaksi", {
      state: {
        namaKarya: novel.nama,
        penulis: "Anonim", // Ganti jika ada field penulis
        harga: novel.harga,
        gambar: `http://localhost:5000/${novel.file_path.replace(/\\/g, "/")}`,
      },
    });
  };

  return (
    <div className="kategori-novel-page">
      {/* Navbar */}
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

      <h2 className="kategori-title">Kategori: Novel</h2>

      <div className="novel-list">
        {novelList.map((novel, index) => (
          <div key={index} className="novel-card">
            <p className="license">Lisensi: {novel.lisensi}</p>
            <img
              src={`http://localhost:5000/${novel.file_path.replace(/\\/g, "/")}`}
              alt={novel.nama}
              className="novel-image"
            />
            <h3>{novel.nama}</h3>
            <p className="author">Kategori: {novel.kategori}</p>
            <div className="rating">{"★".repeat(5)}</div>
            <p className="description">{novel.deskripsi}</p>
            <div className="novel-footer">
              <span className="price">Rp {novel.harga.toLocaleString()}</span>
              <button
                className="buy-button"
                onClick={() => handleBuyNow(novel)}
              >
                BELI SEKARANG
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NovelCategory;
