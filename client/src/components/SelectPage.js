import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SelectPage.css';
import MuseumImg from '../assets/Museum.jpg';
import Logo from '../assets/cart.png';
import SellerIcon from '../assets/cart.png';
import BuyerIcon from '../assets/cart.png';

const SelectPage = () => {
  const navigate = useNavigate();

  // Handle role selection and navigate to the registration page
  const handleClick = (role) => {
    navigate(`/RegisterPage/${role}`);  // Send role to RegisterPage
  };

  return (
    <div
      className="selectpage-container"
      style={{ backgroundImage: `url(${MuseumImg})` }}
    >
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo-image" />
        <span className="brand">ILLUMART</span>
      </div>

      <div className="button-group">
        <div className="role-button" onClick={() => handleClick('penjual')}>
          <img src={SellerIcon} alt="Penjual Icon" className="role-icon" />
          <div className="role-label">Penjual</div>
        </div>
        <div className="role-button" onClick={() => handleClick('pembeli')}>
          <img src={BuyerIcon} alt="Pembeli Icon" className="role-icon" />
          <div className="role-label">Pembeli</div>
        </div>
      </div>
    </div>
  );
};

export default SelectPage;
