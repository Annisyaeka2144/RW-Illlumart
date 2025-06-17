import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/LoginPage.css';
import MuseumImg from '../assets/Museum.jpg';
import Logo from '../assets/cart.png';

const LoginPage = () => {
  const navigate = useNavigate();

  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama, password }),
      });

      const data = await response.json();
      console.log('Response dari server:', data);

      if (response.ok) {
        alert('Login berhasil!');
        const role = data.user.role; // Ambil role dari data.user

        // Simpan user info kalau mau, misal nama
        localStorage.setItem('userNama', data.user.nama);

        // Arahkan ke dashboard sesuai role
        if (role === 'penjual') {
          navigate('/DashboardSeller');
        } else if (role === 'pembeli') {
          navigate('/DashboardHome');
        } else {
          alert('Role tidak dikenali.');
        }
      } else {
        alert(data.message || 'Login gagal. Periksa kembali nama pengguna dan password.');
      }
    } catch (error) {
      console.error('Error saat login:', error);
      alert('Terjadi kesalahan saat login.');
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${MuseumImg})` }}>
      <div className="login-header">
        <img src={Logo} alt="Logo" className="login-logo" />
        <h1 className="login-title">ILLUMART</h1>
      </div>

      <div className="login-form-container">
        <h2 className="login-heading">Silakan login terlebih dahulu</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Masukkan nama pengguna"
            className="login-input"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Masukkan Kata Sandi"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="login-links">
          <Link to="/reset-password" className="forgot-password">
            Lupa kata sandi anda?
          </Link>
          <br />
          <span>
            Belum punya akun?{' '}
            <Link to="/SelectPage" className="register-link">
              Daftar sekarang
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
