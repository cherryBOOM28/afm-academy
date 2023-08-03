import React, { useState } from 'react';
import cl from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import language from '../../assets/icons/lang.svg';
import igIcon from '../../assets/icons/ig.svg';
import fbIcon from '../../assets/icons/fb.svg';
import tgIcon from '../../assets/icons/tg.svg';
import searchIcon from '../../assets/icons/search.svg';
import Button from '../UI/button/Button';
import Navigation from '../navigation/Navigation';
import { Link } from 'react-router-dom';
import personalAccount from '../../assets/icons/acc.svg';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = () => {
      // Logic for handling the login process (setIsLoggedIn to true).
      setIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      // Logic for handling the logout process (setIsLoggedIn to false).
      setIsLoggedIn(false);
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
                <img src={logo} alt="logo" />
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
                  <img src={searchIcon} alt="search" className={cl.search__icon} />
                  <input type='search' className={cl.search__input} />
                </div>
  
                {!isLoggedIn ? (
                  <>
                    <div className={cl.personalAccount}>
                      <img src={personalAccount} alt="personal Account" />
                    </div>
                    <Link to="/" className={cl.personalAccountLink}>
                      <Button className={cl.personalAccountBtn}>Выйти</Button>
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