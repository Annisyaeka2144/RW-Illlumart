import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UploadPage from './UploadPage'; // Import UploadPage
import '../styles/WorksPage.css';

const WorksPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [works, setWorks] = useState([]); // State to store fetched works

  // Fetch works data from the API when the component is mounted
  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/karya');
        const data = await response.json();
        setWorks(data); // Set the fetched data to the state
      } catch (error) {
        console.error('Error fetching works:', error);
      }
    };

    fetchWorks();
  }, []); // Empty array means this effect runs only once when the component mounts

  // Handle modal opening and closing
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Handle status update (marking a work as sold or not sold)
  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:5000/api/karya/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();
      if (data.karya) {
        // Update status karya in state
        setWorks((prevWorks) =>
          prevWorks.map((work) =>
            work.id === id ? { ...work, status: newStatus } : work
          )
        );
        alert('Status berhasil diperbarui');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Gagal memperbarui status');
    }
  };

  return (
    <div className="works-page">
      <div className="container">
        <aside className="sidebar">
          <div className="logo-section">
            <img src="logo-placeholder.png" alt="Logo" className="sidebar-logo" />
            <div className="sidebar-title">ILLUMART</div>
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
        </aside>

        <main className="main-content">
          <header className="topbar">
            <div className="profile-picture">👤</div>
          </header>

          <section className="content-area">
            <h1 className="notif-title">Karya</h1>
            <button className="btn-tambah" onClick={handleOpenModal}>
              Tambah Karya
            </button>

            <div className="table">
              <div className="table-header">
                <div className="col-karya">Karya</div>
                <div className="col-harga">Harga</div>
                <div className="col-status">Status</div>
              </div>

              {works.length > 0 ? (
                works.map((work) => (
                  <div className="table-row" key={work.id}>
                    <div className="col-karya">
                      <img
                        src={`http://localhost:5000/${work.file_path}`}
                        alt={work.nama}
                        className="karya-thumbnail"
                      />
                      <span className="karya-title">{work.nama}</span>
                    </div>
                    <div className="col-harga">Rp. {work.harga}</div>
                    <div className="col-status">
                      {work.status === 'belum terjual' ? (
                        <button onClick={() => handleUpdateStatus(work.id, 'terjual')}>
                          Tandai Terjual
                        </button>
                      ) : (
                        <span>Terjual</span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p>No works available</p>
              )}
            </div>
          </section>
        </main>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <UploadPage />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorksPage;
