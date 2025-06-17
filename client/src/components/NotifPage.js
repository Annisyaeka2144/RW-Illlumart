import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../styles/NotifPage.css";

const NotifPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/transaksi") // pastikan endpoint backend benar
      .then(async (response) => {
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Error ${response.status}: ${text}`);
        }
        return response.json();
      })
      .then(data => {
        // Buat array notifikasi dari data transaksi dengan status lunas
        const notifs = data
          .filter(trx => trx.status_pembayaran === "lunas")
          .map(trx => ({
            id: trx.id,
            message: `Karya  ${trx.nama_karya} berhasil terjual`
          }));
        setNotifications(notifs);
        setLoading(false);
      })
      .catch(error => {
        console.error("Gagal fetch notifikasi:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="notif-page">
      <div className="container">
        <aside className="sidebar">
          <div className="logo-section">
            <div className="logo"></div>
            <h1 className="brand">ILLUMART</h1>
          </div>
          <div className="sidebar-menu">
            <Link to="/DashboardSeller" className="sidebar-link">
              <i className="icon-home"></i> BERANDA
            </Link>
            <Link to="/Karya" className="sidebar-link">
              <i className="icon-pencil"></i> KARYA
            </Link>
            <Link to="/Lisensi" className="sidebar-link">
              <i className="icon-file"></i> LISENSI
            </Link>
            <Link to="/Pendapatan" className="sidebar-link">
              <i className="icon-dollar"></i> PENDAPATAN
            </Link>
            <Link to="/Notifikasi" className="sidebar-link active">
              <i className="icon-bell"></i> NOTIFIKASI
            </Link>
          </div>
        </aside>

        <main className="main-content">
          <header className="topbar">
            <div className="profile-picture"></div>
          </header>

          <section className="content-area">
            <h2 className="notif-title">Notifikasi</h2>

            {loading && <p>Loading notifikasi...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            {!loading && !error && notifications.length === 0 && (
              <p>Tidak ada notifikasi.</p>
            )}

            {!loading && !error && notifications.length > 0 && (
              notifications.map(notif => (
                <div key={notif.id} className="notif-card">
                  {notif.message}
                </div>
              ))
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default NotifPage;
