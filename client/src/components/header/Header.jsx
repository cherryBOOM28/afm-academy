import React, { useState, useEffect } from 'react';
import cl from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import logo from '../../assets/images/logo.svg';
import language from '../../assets/icons/lang.svg';
import igIcon from '../../assets/icons/ig.svg';
import fbIcon from '../../assets/icons/fb.svg';
import tgIcon from '../../assets/icons/tg.svg';
import searchIcon from '../../assets/icons/search.svg';
import search_icon from '../../assets/icons/search-light.svg';
import Button from '../UI/button/Button';
import Navigation from '../navigation/Navigation';
import { Link } from 'react-router-dom';
import personalAccount from '../../assets/icons/acc.svg';

import { useAuth } from '../../auth/AuthContext';

function Header() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(Cookies.get('email')) || ''
  
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
    Cookies.remove('token')
    Cookies.remove('email')
    setUsername('')
  }; 
  
    return (
      <div className={cl.headerWrapper}>
        <div className={cl.container}>
          <div className={cl.header}>
            <div className={cl.header__logo}>
              <div className={cl.languages}>
                <a href='/#' className={cl.lang}>қаз</a>
                <a href='/#' className={cl.lang}>РУС</a>
                <a href='/#' className={cl.lang}>ENG</a>
              </div>
              <Link to="/" className={cl.header__logo}>
                <img src={logo} alt="logo" style={{ borderRadius: '50%' }} />
                <p className={cl.logo__text}>Академия финансового мониторинга</p>
              </Link>
            </div>
            <div className={cl.menu}>
              <div className={cl.menu__utils}>
                <div className={cl.socials}>
                  <a href='/#' className={cl.rounde}>
                    <img src={language} alt="language" className={cl.icon} />
                  </a>
                  <a href='/#' className={cl.rounde}>
                    <img src={igIcon} alt="instagram" className={cl.icon} />
                  </a>
                  <a href='/#' className={cl.rounde}>
                    <img src={fbIcon} alt="facebook" className={cl.icon} />
                  </a>
                  <a href='/#' className={cl.rounde}>
                    <img src={tgIcon} alt="telegram" className={cl.icon} />
                  </a>
                </div>
                <div className={cl.search}>
                  <img src={search_icon} alt="search" className={cl.search__icon} />
                  <input type='search' className={cl.search__input} />
                </div>
  
                {username != '' ? (
                  <>
                    <div className={cl.personalAccount} style={{display: 'flex', alignItems: 'center', gap: '5px', marginRight: '15px'}}>
                      <img src={personalAccount} alt="personal Account" />
                      <p style={{fontSize: '1.1rem', fontWeight: '300', color: 'white'}}>{authUser}</p>
                    </div>
                    <Link className={cl.personalAccountLink}>
                      <Button className={cl.personalAccountBtn} onClick={handleLogout}>Выйти</Button>
                    </Link>
                  </>
                ) : (
                  <Link to="/login">
                    <Button onClick={handleLogin}>Войти</Button>
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
  


// function Header() {
//     return (
//         <div className={cl.headerWrapper}>
//             <div className={cl.container}>
//                 <div className={cl.header}>
//                     <div className={cl.header__logo}>
//                         <div className={cl.languages}>
//                             <a href='/#' className={cl.lang}>қаз</a>
//                             <a href='/#' className={cl.lang}>РУС</a>
//                             <a href='/#' className={cl.lang}>ENG</a>
//                         </div>
//                         <Link to="/" className={cl.header__logo}>
//                             <img src={logo} alt="logo" />
//                             <p className={cl.logo__text}>Академия финансового мониторинга</p>
//                         </Link>
//                     </div>
//                     <div className={cl.menu}>
//                         <div className={cl.menu__utils}>
//                             <div className={cl.socials}>
//                                 <a href='/#' className={cl.rounde}>
//                                     <img src={language} alt="language" className={cl.icon} />
//                                 </a>
//                                 <a href='/#' className={cl.rounde}>
//                                     <img src={igIcon} alt="instagram" className={cl.icon} />
//                                 </a>
//                                 <a href='/#' className={cl.rounde}>
//                                     <img src={fbIcon} alt="facebook" className={cl.icon} />
//                                 </a>
//                                 <a href='/#' className={cl.rounde}>
//                                     <img src={tgIcon} alt="telegram" className={cl.icon} />
//                                 </a>
//                             </div>
//                             <div className={cl.search}>
//                                 <img src={searchIcon} alt="search" className={cl.search__icon} />
//                                 <input type='search' className={cl.search__input} />
//                             </div>

//                             <Link to="/login"><Button>Войти</Button></Link>

//                             <Link to="/" className={cl.personalAccountLink}><Button className={cl.personalAccountBtn}>Выйти</Button></Link>
//                             <div className={cl.personalAccount}>
//                                 <img src={personalAccount} alt="personal Account" />
//                             </div>
                            
//                         </div>
//                         <div className={cl.menu__navigation}>
//                            <Navigation />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Header;