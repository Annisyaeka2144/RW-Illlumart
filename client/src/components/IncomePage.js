import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // gunakan useLocation
import '../styles/IncomePage.css';

const IncomePage = () => {
  const [transaksi, setTransaksi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation(); // untuk deteksi path aktif

  useEffect(() => {
    fetch('http://localhost:5000/api/transaksi')
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Error ${res.status}: ${text}`);
        }
        return res.json();
      })
      .then(data => {
        setTransaksi(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pendapatan-page">
      <div className="container">
        <aside className="sidebar">
          <div className="logoSection">
            <div className="logo">LM</div>
            <h1 className="brand">ILLUMART</h1>
          </div>
          <div className="sidebar-menu">
            <Link to="/DashboardSeller" className={`sidebar-link ${location.pathname === '/DashboardSeller' ? 'active' : ''}`}>
              <i className="icon-home"></i> BERANDA
            </Link>
            <Link to="/Karya" className={`sidebar-link ${location.pathname === '/Karya' ? 'active' : ''}`}>
              <i className="icon-pencil"></i> KARYA
            </Link>
            <Link to="/Lisensi" className={`sidebar-link ${location.pathname === '/Lisensi' ? 'active' : ''}`}>
              <i className="icon-file"></i> LISENSI
            </Link>
            <Link to="/Pendapatan" className={`sidebar-link ${location.pathname === '/Pendapatan' ? 'active' : ''}`}>
              <i className="icon-dollar"></i> PENDAPATAN
            </Link>
            <Link to="/Notifikasi" className={`sidebar-link ${location.pathname === '/Notifikasi' ? 'active' : ''}`}>
              <i className="icon-bell"></i> NOTIFIKASI
            </Link>
          </div>
        </aside>

        <main className="mainContent">
          <header className="header">
            <div className="profileIcon"></div>
          </header>

          <section className="content">
            <h2>Pendapatan</h2>

            {loading && <p>Loading data transaksi...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            {!loading && !error && transaksi.length === 0 && (
              <p>Tidak ada data transaksi.</p>
            )}

            {!loading && !error && transaksi.length > 0 && (
              <div className="table">
                <div className="tableHeader">
                  <span>Nama Karya</span>
                  <span>Pendapatan</span>
                  <span>Status</span>
                </div>

                {transaksi.map(item => (
                  <div className="tableRow" key={item.id}>
                    <div className="karyaInfo">
                      <span>{item.nama_karya}</span>
                    </div>
                    <span>Rp. {item.harga.toLocaleString()}</span>
                    <span>{item.status_pembayaran}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default IncomePage;
