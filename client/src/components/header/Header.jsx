import React, { useState, useEffect } from 'react';
import cl from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import logo from '../../assets/images/logo.svg';
import language from '../../assets/icons/lang.svg';
import igIcon from '../../assets/icons/ig.svg';
import fbIcon from '../../assets/icons/fb.svg';
import tgIcon from '../../assets/icons/tg.svg';
// import searchIcon from '../../assets/icons/search.svg';
import search_icon from '../../assets/icons/search-light.svg';
import Button from '../UI/button/Button';
import Navigation from '../navigation/Navigation';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

import { useAuth } from '../../auth/AuthContext';

function Header() {
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem('jwtToken');
  const userEmail = localStorage.getItem('email');

  const [username, setUsername] = useState(localStorage.getItem('email'))
  
  const {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn
  } = useAuth()

  const handleLogin = () => {
    // Logic for handling the login process (setIsLoggedIn to true).
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('email');
    setIsLoggedIn(false)
    setUsername('')

    navigate('/login')
  }; 
  
    return (
      <div className={cl.headerWrapper}>
        <div className={cl.container}>
          <div className={cl.header}>
            <div className={cl.header__logo}>
              
              <Link to="/" className={cl.header__logo}>
                <img src={logo} alt="logo" style={{ borderRadius: '50%', width: "140px" }} />
                {/* <p className={cl.logo__text}>Академия финансового мониторинга</p> */}
              </Link>
            </div>
            <div className={cl.menu}>
              <div className={cl.menu__utils}>
                <div className={cl.socials}>
                  <a href='#' className={cl.rounde}>
                    <img src={language} alt="language" className={cl.icon} />
                  </a>
                  <a href='#' className={cl.rounde}>
                    <img src={igIcon} alt="instagram" className={cl.icon} />
                  </a>
                  <a href='#' className={cl.rounde}>
                    <img src={fbIcon} alt="facebook" className={cl.icon} />
                  </a>
                  <a href='#' className={cl.rounde}>
                    <img src={tgIcon} alt="telegram" className={cl.icon} />
                  </a>
                </div>
                <div className={cl.search}>
                  <img src={search_icon} alt="search" className={cl.search__icon} />
                  <input type='search' className={cl.search__input} />
                </div>
  
                {username ? (
                  <>
                    <Link to={'/profile'} style={{color: 'inherit', textDecoration: 'inherit'}}>
                      <div className={cl.personalAccount} style={{display: 'flex', alignItems: 'center', gap: '5px', marginRight: '15px'}}>
                        {/* <img src={personalAccount} alt="personal Account" /> */}
                        <FaUser size={20} style={{color: 'white'}}/>
                        <p style={{fontSize: '1.1rem', fontWeight: '300', color: 'white'}}>{userEmail}</p>
                      </div>
                    </Link>
                    <div className={cl.languages}>
                      <a href='#' className={cl.lang}>қаз</a>
                      <a href='#' className={cl.lang}>РУС</a>
                      <a href='#' className={cl.lang}>ENG</a>
                    </div>
                    <Link className={cl.personalAccountLink}>
                      <Button className={cl.personalAccountBtn} onClick={handleLogout} style={{ borderRadius: '5px' }}>Выйти</Button>
                    </Link>
                  </>
                ) : (
                  <Link to="/login">
                    <Button onClick={handleLogin} style={{ borderRadius: '5px' }}>Войти</Button>
                  </Link>
                )}
  
              </div>
              <div className={cl.menu__navigation}>
                <Navigation />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;