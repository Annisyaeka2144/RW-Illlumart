import React, { useState } from 'react';  
import { useParams, useNavigate } from 'react-router-dom'; 
import '../styles/RegisterPage.css';
import MuseumImg from '../assets/Museum.jpg';

const RegisterPage = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [konfirmasiPassword, setKonfirmasiPassword] = useState('');
  const [noHp, setNoHp] = useState('');

  const { role } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi input
    if (password !== konfirmasiPassword) {
      alert('Password dan konfirmasi password tidak cocok!');
      return;
    }

    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
      alert('Email tidak valid');
      return;
    }

    if (password.length < 6) {
      alert('Password minimal 6 karakter');
      return;
    }

    if (!role) {
      alert('Role tidak ditemukan!');
      return;
    }

    const userData = {
      nama,
      email,
      no_hp: noHp,
      password,
      role,
    };

    try {
      console.log('Mengirim data registrasi:', userData);

      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log('Response dari server:', data);

      if (response.ok) {
        alert('Registrasi berhasil');
        navigate('/LoginPage');
      } else {
        alert(data.message || 'Terjadi kesalahan saat registrasi');
      }
    } catch (error) {
      console.error('Error saat registrasi:', error);
      alert('Gagal menghubungi server');
    }
  };

  return (
    <div className="register-container" style={{ backgroundImage: `url(${MuseumImg})` }}>
      <div className="form-box">
        <h2>Silakan Registrasi sebagai {role}</h2> 
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Masukkan Nama Pengguna"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <input
            type="email"
            placeholder="Masukkan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Masukkan Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Masukkan Ulang Kata Sandi"
            value={konfirmasiPassword}
            onChange={(e) => setKonfirmasiPassword(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Masukkan Nomor Telepon"
            value={noHp}
            onChange={(e) => setNoHp(e.target.value)}
          />
          <button type="submit" className="register-btn">Registrasi</button>
        </form>
        <p className="login-link" onClick={() => navigate('/LoginPage')}>Sudah punya akun? Login</p>
      </div>
    </div>
  );
};

export default RegisterPage;
