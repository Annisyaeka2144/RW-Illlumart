import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SelectPage from './components/SelectPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import DashboardHome from './components/DashboardHome';
import DashboardSeller from './components/DashboardSeller';
import WorksPage from './components/WorksPage';
import LicensePage from './components/LicensePage';
import IncomePage from './components/IncomePage';
import NotifPage from './components/NotifPage';
import ProfilePage from './components/ProfilePage';
import EditProfile from './components/EditProfile';
import ChangePassword from './components/ChangePassword';
import ChangePass from './components/ChangePass';
import Logout from './components/Logout';
import UploadPage from './components/UploadPage';
import TransactionForm from './components/TransactionForm';
import KaryaList from './components/KaryaList';
import CategoryPage from './components/CategoryPage';
import PoetryCategory from './components/PoetryCategory';
import GalleryPage from './components/GalleryPage';
import NovelCategory from './components/NovelCategory';
import Collection from './components/Collection';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SelectPage" element={<SelectPage />} />
        <Route path="/RegisterPage/:role" element={<RegisterPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/DashboardHome" element={<DashboardHome />} />
        <Route path="/DashboardSeller" element={<DashboardSeller />} />
        <Route path="/Karya" element={<WorksPage />} />
        <Route path="/Lisensi" element={<LicensePage />} />
        <Route path="/Pendapatan" element={<IncomePage />} />
        <Route path="/Notifikasi" element={<NotifPage />} />
        <Route path="/Profil" element={<ProfilePage />} />
        <Route path="/EditProfil" element={<EditProfile/>} />
        <Route path="/UbahSandi" element={<ChangePassword/>} />
        <Route path="/UbahKataSandi" element={<ChangePass/>}/>
        <Route path="/Logout" element={<Logout/>}/>
        <Route path="/UbahKataSandi" element={<ChangePass/>}/>
        <Route path="/Upload" element={<UploadPage/>} />
        <Route path="/Transaksi" element={<TransactionForm/>} />
        <Route path="/KaryaList" element={<KaryaList/>} />
        <Route path="/Kategori" element={<CategoryPage/>} />
        <Route path="/KategoriPuisi" element={<PoetryCategory/>} />
        <Route path="/KategoriGambar" element={<GalleryPage/>} />
        <Route path="/KategoriNovel" element={<NovelCategory/>} />
        <Route path="/Koleksi" element={<Collection/>} />
      </Routes>
    </Router>
  );
}

export default App;  