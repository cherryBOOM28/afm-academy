import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from './../../../assets/images/logo.svg';
import './NavBarGame.scss';

function NavbarGame() {
    const navigate = useNavigate();

    return (
        <div className="navbarGame">
        <div className='navWrapperGame'>
         <div className="left-section">
          <img src={logo} alt="Logo" className="logoGame" />
          <span className='textGame'>Академия финансового мониторинга</span>
         </div>
        <div className="right-section">
          <LogoutIcon sx={{ color: 'rgba(114, 99, 99, 0.5)', width: '60px' }} onClick={() => {
            navigate("/")
          } } />
        </div>
        </div>
      </div>
    )
}
export default NavbarGame;