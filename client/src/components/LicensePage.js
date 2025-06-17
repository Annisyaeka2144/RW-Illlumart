import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LicensePage.css';

const LicensePage = () => {
  const [karyaList, setKaryaList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/karya")
      .then(response => response.json())
      .then(data => setKaryaList(data))
      .catch(error => console.error("Gagal mengambil data karya:", error));
  }, []);

  return (
    <div className="license-page">
      <div className="container">
        <aside className="sidebar">
          <div className="logoSection">
            <img src="/logo.png" alt="Logo" className="logoIcon" />
            <h1 className="logoText">ILLUMART</h1>
          </div>
          <div className="sidebar-menu">
            <Link to="/DashboardSeller" className="sidebar-link">
              <i className="icon-home"></i> BERANDA
            </Link>
            <Link to="/Karya" className="sidebar-link">
              <i className="icon-pencil"></i> KARYA
            </Link>
            <Link to="/Lisensi" className="sidebar-link active">
              <i className="icon-file"></i> LISENSI
            </Link>
            <Link to="/Pendapatan" className="sidebar-link">
              <i className="icon-dollar"></i> PENDAPATAN
            </Link>
            <Link to="/Notifikasi" className="sidebar-link">
              <i className="icon-bell"></i> NOTIFIKASI
            </Link>
          </div>
        </aside>

        <main className="mainContent">
          <h2>Lisensi</h2>

          {/* Lisensi Statis */}
          <div className="licenseTable">
            <div className="tableHeader">
              <div>Jenis Lisensi</div>
              <div>Deskripsi</div>
            </div>
            <div className="licenseItem">
              <div>Eksklusif</div>
              <div>
                Lisensi ini memberikan hak penuh hanya kepada satu pembeli. Setelah karya
                (baik itu gambar, puisi, maupun novel) dibeli secara eksklusif, karya tersebut
                tidak akan tersedia untuk orang lain.
              </div>
            </div>
            <div className="licenseItem">
              <div>Non Eksklusif</div>
              <div>
                Lisensi ini tetap dapat menggunakan karya yang dijual untuk kebutuhan pribadi
                maupun komersial ringan (sesuai ketentuan), namun karya tersebut masih bisa dibeli
                dan digunakan oleh orang lain.
              </div>
            </div>
          </div>

          {/* Data dari Backend */}
          <h3 style={{ marginTop: '40px' }}>Daftar Karya dan Lisensinya</h3>
          <div className="licenseTable">
            <div className="tableHeader">
              <div>Nama Karya</div>
              <div>Jenis Lisensi</div>
              <div>Deskripsi</div>
            </div>

            {karyaList.length === 0 ? (
              <p>Belum ada karya yang diunggah.</p>
            ) : (
              karyaList.map((karya) => (
                <div className="licenseItem" key={karya.id}>
                  <div>{karya.nama}</div>
                  <div>{karya.lisensi === 'eksklusif' ? 'Eksklusif' : 'Non Eksklusif'}</div>
                  <div>{karya.deskripsi}</div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LicensePage;
