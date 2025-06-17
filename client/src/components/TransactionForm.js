import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/TransactionForm.css';

const TransactionForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { namaKarya, penulis, harga, gambar, fileUrl, karyaId } = location.state || {};

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [metodePembayaran, setMetodePembayaran] = useState('DANA');
  const [showPopup, setShowPopup] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    if (!namaKarya) {
      navigate('/');
    }
  }, [namaKarya, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleConfirmPayment = () => {
    fetch('http://localhost:5000/api/transaksi/bayar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nama_karya: namaKarya,
        nama,
        email,
        metode_pembayaran: metodePembayaran,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(() => {
        alert('Transaksi berhasil!');
        setIsPaid(true);
        setShowPopup(false);
      })
      .catch((err) => {
        alert('Gagal membuat transaksi!');
        console.error('Error transaksi:', err);
      });
  };

  const handleDownload = () => {
    fetch('http://localhost:5000/api/download/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nama_karya: namaKarya,
        email,
        karyaId,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Gagal mencatat log download');
        return res.json();
      })
      .then(() => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setDownloadSuccess(true);

        setTimeout(() => {
          setDownloadSuccess(false);
          navigate('/koleksi', { state: { reload: true } }); // ⬅ auto-reload koleksi
        }, 2000);
      })
      .catch((err) => {
        alert('Gagal mencatat log download');
        console.error('Error saat log download:', err);
      });
  };

  return (
    <div className="transaction-container">
      <div className="transaction-header">
        <img src={gambar} alt={namaKarya} className="transaction-image" />
        <div className="transaction-info">
          <h2 className="transaction-title">{namaKarya}</h2>
          <p className="transaction-author">{penulis}</p>
          <p className="transaction-price">Rp {harga}</p>
        </div>
      </div>

      <hr />

      <form onSubmit={handleSubmit} className="transaction-form">
        <h3>Informasi Pembeli</h3>
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <h3>Metode Pembayaran</h3>
        {['DANA', 'OVO', 'BCA', 'BRI'].map((metode) => (
          <label key={metode} className="payment-option">
            <input
              type="radio"
              name="metode"
              value={metode}
              checked={metodePembayaran === metode}
              onChange={(e) => setMetodePembayaran(e.target.value)}
            />
            {metode}
          </label>
        ))}

        {isPaid ? (
          <button type="button" className="btn-submit" onClick={handleDownload}>
            Download
          </button>
        ) : (
          <button type="submit" className="btn-submit">
            Bayar Sekarang
          </button>
        )}
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            <h3>Konfirmasi Pembayaran</h3>
            <p><strong>Total Pembayaran:</strong> Rp {harga}</p>
            <p><strong>Metode Pembayaran:</strong> {metodePembayaran}</p>
            <p><strong>ID Pembayaran:</strong> 085341888976</p>
            <ol>
              <li>Buka aplikasi {metodePembayaran}</li>
              <li>Pilih menu Transfer/Kirim</li>
              <li>Masukkan tujuan: BNI 085341888976</li>
              <li>Isi catatan dengan judul karya</li>
              <li>Konfirmasi dan kirim</li>
            </ol>
            <button onClick={handleConfirmPayment} className="btn-submit">
              Konfirmasi
            </button>
          </div>
        </div>
      )}

      {downloadSuccess && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setDownloadSuccess(false)}>
              &times;
            </span>
            <h3>Download Berhasil!</h3>
            <p>File berhasil diunduh dan telah dicatat di sistem.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionForm;
