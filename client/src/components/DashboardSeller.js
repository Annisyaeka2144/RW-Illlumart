import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/DashboardSeller.css';

const DashboardSeller = () => {
  const [worksCount, setWorksCount] = useState(0);
  const [salesHistory, setSalesHistory] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const worksResponse = await fetch('http://localhost:5000/api/karya');
        const worksData = await worksResponse.json();
        setWorksCount(worksData.length);

        const salesResponse = await fetch('http://localhost:5000/api/transaksi');
        const salesData = await salesResponse.json();
        setSalesHistory(salesData);

        // Proses notifikasi dari transaksi lunas
        const notifs = salesData
          .filter(trx => trx.status_pembayaran?.toLowerCase().trim() === 'lunas')
          .map(trx => ({
            id: trx.id,
            message: `Karya ${trx.nama_karya} berhasil terjual`
          }));
        setNotifications(notifs);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  const totalPendapatan = salesHistory
    .filter(sale => sale.status_pembayaran?.toLowerCase().trim() === 'lunas')
    .reduce((sum, sale) => sum + Number(sale.harga), 0);

  return (
    <div className="dashboard-seller-page">
      <div className="dashboard-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="logo-section">
            <img src="/logo.png" alt="Logo" className="sidebar-logo" />
            <h2 className="sidebar-title">ILLUMART</h2>
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
            <Link to="/Notifikasi" className="sidebar-link">
              <i className="icon-bell"></i> NOTIFIKASI
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="topbar">
            <img src="/profile-icon.png" alt="Profile" className="profile-picture" />
          </div>
          <div className="content-area">
            <h1 className="welcome-text">Selamat Datang di ILLUMART!</h1>
            <div className="stats-cards">
              <div className="stat-card">
                <p>Karya Digital Saya</p>
                <h2>{worksCount}</h2>
              </div>
              <div className="stat-card">
                <p>Total Pendapatan</p>
                <h2>Rp. {totalPendapatan.toLocaleString('id-ID')}</h2>
              </div>
              <div className="stat-card">
                <p>Notifikasi</p>
                <h2>{notifications.length}</h2>
              </div>
            </div>

            {/* Riwayat Penjualan Terbaru */}
<h2 className="sales-title">Riwayat Penjualan Terbaru</h2>
<div className="sales-table">
  <div className="sales-row sales-header">
    <span className="column karya">Karya</span>
    <span className="column pembeli">Nama Pembeli</span>
    <span className="column pendapatan">Pendapatan</span>
    <span className="column status">Status</span>
  </div>
  {salesHistory.map((sale) => (
    <div className="sales-row" key={sale.id}>
      <span className="column karya">{sale.nama_karya}</span>
      <span className="column pembeli">{sale.nama}</span>
      <span className="column pendapatan">Rp. {Number(sale.harga).toLocaleString('id-ID')}</span>
      <span className="column status">{sale.status_pembayaran}</span>
    </div>
  ))}
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSeller;
