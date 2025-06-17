import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UploadPage.css';
import PopupSukses from './PopupSukses';

function UploadPage() {
  const [namaKarya, setNamaKarya] = useState('');
  const [harga, setHarga] = useState('');
  const [kategori, setKategori] = useState('');
  const [subKategoriGambar, setSubKategoriGambar] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [jenisLisensi, setJenisLisensi] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const isFormValid =
    namaKarya && harga && kategori && deskripsi && jenisLisensi && file &&
    (kategori.toLowerCase() !== 'gambar' || subKategoriGambar); // subKategori wajib jika kategori gambar

  const handleUpload = async () => {
    if (!isFormValid) {
      alert('⚠️ Harap lengkapi semua field dan upload file!');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('nama', namaKarya);
    formData.append('harga', harga);
    formData.append('kategori', kategori);
    formData.append('sub_kategori', subKategoriGambar); // Kirim huruf kecil
    formData.append('deskripsi', deskripsi);
    formData.append('lisensi', jenisLisensi);
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/api/karya', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.status === 201) {
        console.log(data.message);
        setShowPopup(true);

        setTimeout(() => {
          switch (kategori.toLowerCase()) {
            case 'novel':
              navigate('/KategoriNovel');
              break;
            case 'puisi':
              navigate('/KategoriPuisi');
              break;
            case 'gambar':
              navigate('/KategoriGambar');
              break;
            default:
              alert('Kategori tidak dikenal, tetap di halaman ini.');
              break;
          }
        }, 2000);
      } else {
        alert(data.message || 'Gagal mengupload karya');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengupload karya');
    } finally {
      setLoading(false);
    }

    setNamaKarya('');
    setHarga('');
    setKategori('');
    setSubKategoriGambar('');
    setDeskripsi('');
    setJenisLisensi('');
    setFile(null);
    document.getElementById('fileInput').value = '';
  };

  return (
    <div className="upload-page">
      <div className="upload-card">
        <div className="upload-form">
          <h2>Upload Karya</h2>
          <input
            type="text"
            placeholder="Nama Karya"
            value={namaKarya}
            onChange={(e) => setNamaKarya(e.target.value)}
          />
          <input
            type="number"
            placeholder="Harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />

          <select
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          >
            <option value="">-- Pilih Kategori --</option>
            <option value="Puisi">Puisi</option>
            <option value="Novel">Novel</option>
            <option value="Gambar">Gambar</option>
          </select>

          {/* Munculkan pilihan tambahan jika kategori adalah "Gambar" */}
          {kategori === 'Gambar' && (
            <div className="upload-radio-group">
              Pilih Sub-Kategori Gambar:
              <label>
                <input
                  type="radio"
                  name="subKategoriGambar"
                  value="3d"
                  checked={subKategoriGambar === '3d'}
                  onChange={(e) => setSubKategoriGambar(e.target.value)}
                />
                3D
              </label>
              <label>
                <input
                  type="radio"
                  name="subKategoriGambar"
                  value="pemandangan"
                  checked={subKategoriGambar === 'pemandangan'}
                  onChange={(e) => setSubKategoriGambar(e.target.value)}
                />
                Pemandangan
              </label>
              <label>
                <input
                  type="radio"
                  name="subKategoriGambar"
                  value="vintage"
                  checked={subKategoriGambar === 'vintage'}
                  onChange={(e) => setSubKategoriGambar(e.target.value)}
                />
                Vintage
              </label>
            </div>
          )}

          <textarea
            placeholder="Deskripsi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />

          <div className="upload-radio-group">
            Pilih Jenis Lisensi
            <label>
              <input
                type="radio"
                name="lisensi"
                value="Exclusive"
                checked={jenisLisensi === 'Exclusive'}
                onChange={(e) => setJenisLisensi(e.target.value)}
              />
              Exclusive
            </label>
            <label>
              <input
                type="radio"
                name="lisensi"
                value="Non-Exclusive"
                checked={jenisLisensi === 'Non-Exclusive'}
                onChange={(e) => setJenisLisensi(e.target.value)}
              />
              Non-Exclusive
            </label>
          </div>

          <div className="upload-file-group">
            Upload File/Gambar
            <input
              type="file"
              id="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
              accept="image/*,application/pdf"
            />
          </div>
        </div>

        <div className="upload-controls">
          <button type="button" onClick={handleUpload} disabled={loading} className="upload-button">
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      </div>

      {showPopup && <PopupSukses onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default UploadPage;
