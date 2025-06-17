import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GalleryPage.css";
import logo from '../assets/cart.png';
import profileIcon from '../assets/cart.png';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [imageList, setImageList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = ["semua", "pemandangan", "3d", "vintage"];

  useEffect(() => {
    setLoading(true);
    setError(null);

    let url = "http://localhost:5000/api/karya";
    if (selectedCategory !== "semua") {
      url += `?kategori=${selectedCategory}`;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Gagal fetch data");
        return response.json();
      })
      .then((data) => {
        setImageList(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [selectedCategory]);

  const handleBuyNow = (image) => {
    navigate("/transaksi", {
      state: {
        namaKarya: image.nama,
        penulis: "Anonim",
        harga: image.harga,
        gambar: `http://localhost:5000/${image.file_path.replace(/\\/g, "/")}`,
        fileUrl: `http://localhost:5000/${image.fileUrl?.replace(/\\/g, "/") || image.file_path.replace(/\\/g, "/")}`,
        karyaId: image.id,
      },
    });
  };

  return (
    <div className="gallery-page">
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

      <h2 className="gallery-title">
        Kategori: {selectedCategory === "semua"
          ? "Semua Karya"
          : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
      </h2>

      {/* Kategori filter */}
      <div className="category-selector">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-button ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat === "semua" ? "Semua" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Loading dan Error */}
      {loading && <p style={{ textAlign: "center", marginTop: 20 }}>Memuat karya...</p>}
      {error && <p style={{ textAlign: "center", marginTop: 20, color: "red" }}>{error}</p>}

      {/* Produk */}
      <div className="product-grid">
        {!loading && imageList.length === 0 && (
          <p style={{ textAlign: "center", marginTop: 20 }}>Belum ada karya dalam kategori ini.</p>
        )}

        {!loading && imageList.map((image, index) => (
          <div key={index} className="product-card">
            <p className="license">Lisensi: {image.lisensi}</p>
            <img
              src={`http://localhost:5000/${image.file_path.replace(/\\/g, "/")}`}
              alt={image.nama}
              className="product-image"
              onError={e => e.target.src = "/default-image.png"}
            />
            <h3>{image.nama}</h3>
            <p>Format File: {image.fileType || "N/A"}</p>
            <div className="rating">{"★".repeat(5)}</div>
            <p className="description">{image.deskripsi}</p>
            <p className="category-label">Kategori: {image.kategori}</p>

            <div className="product-footer">
              <span className="price">Rp {image.harga.toLocaleString()}</span>
              <button className="buy-button" onClick={() => handleBuyNow(image)}>
                BELI SEKARANG
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
