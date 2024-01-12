import React, { useState, useEffect, useRef  } from 'react';
// import cl from './Header.module.css';
import './Header.scss'
import './Navigation.scss'
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
import SearchIcon from '@mui/icons-material/Search';
import { useAuth } from '../../auth/AuthContext';

import { Email } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';



function Header(props) {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem('jwtToken');
  const userEmail = localStorage.getItem('email');
  const name = localStorage.getItem('firstname') + " " + localStorage.getItem('lastname')
  const pfp = name.split(' ')[0][0] + name.split(' ')[1][0]

  const [username, setUsername] = useState(localStorage.getItem('email'))

  const {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn
  } = useAuth()

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userToggleRef = useRef(null);

  useEffect(() => {
    // console.log(username)
    const handleClickOutside = (event) => {
      // Check if the clicked element is a descendant of the .user-icon button
      if (
        userToggleRef.current &&
        !userToggleRef.current.contains(event.target) &&
        event.target.className !== 'toggle-user-button' &&
        event.target.className !== 'user-icon'
      ) {
        // Clicked outside of user-toggle (excluding user-icon button), close it
        setIsMenuOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogin = () => {
    // Logic for handling the login process (setIsLoggedIn to true).
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('email');
    localStorage.removeItem('user_id');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');

    setIsLoggedIn(false)
    setUsername('')

    navigate('/login')
  }; 

  const profilePageLink = () => {
    navigate('/profile')
  }

  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={`navbar ${props.dark? 'dark' : ''}`}>
      <Link to="/" className='logo'>
        <img src={logo} alt="logo" style={{pointerEvents: 'none', userSelect: 'none',  borderRadius: '50%' }} />
      </Link>
      <div className='tool-navigation-container'>
        <div className='language-container'>
          <div className='lg-sm'>
            <a className='language' onClick={() => changeLanguage('kz')}>ҚАЗ</a>
            <a className='language' onClick={() => changeLanguage('ru')}>РУС</a>
            <a className='language' onClick={() => changeLanguage('eng')}>ENG</a>
          </div>
        </div>
        <div className='tool-container'>
          <div className='social-icons'>
            <a href='#' className='soc-icon blue-button'>
              <img src={language} alt="language" className='icon' />
            </a>
            <a href='https://www.instagram.com/aml_academy/' className='soc-icon blue-button'>
              <img src={igIcon} alt="instagram" className='icon' />
            </a>
            <a href='https://t.me/s/afm_rk?before=1811' className='soc-icon blue-button'>
              <img src={tgIcon} alt="telegram" className='icon' />
            </a>
          </div>
          <div className='search-box'>
            <SearchIcon sx={{ color: 'white' }}/>
            <input type='search' className={`search-input ${props.dark? 'dark' : ''}`} />
          </div>
          {jwtToken ? 
            <div className='user-actions'>
              <div onClick={toggleMenu} className='user-icon toggle-user-button'>
                <a className='toggle-user-button'>{pfp.toUpperCase()}</a>
              </div>
              <div className='user-toggle' 
                style={{
                  display: isMenuOpen ? 'flex' : 'none'
                }}
                ref={userToggleRef}
              >
                <div onClick={profilePageLink} className='person-menu-item menu-item underline-item'>
                  <div onClick={toggleMenu} className='user-icon'>
                    <a>{pfp.toUpperCase()}</a>
                  </div>
                  <div>
                  </div>
                  <a className='user-toggle-links'>{name}</a>
                </div>
                {username == 'derzeet@gmail.com' ? 
                <div onClick={() => navigate('/manager')} className='person-menu-item menu-item underline-item'>
                  <a className='user-toggle-links'>Админ панель</a>
                </div> : null
                }
                <div onClick={handleLogout} className='menu-item'>
                  <a className='user-toggle-links'>Выйти</a>
                </div>
              </div> 
            </div> 
            : 
            <div className='user-actions'>
              <a href='/registration' className='text-button'>{t('regestration')}</a>
              <a href='/login' className={`contained-button blue-button ${props.dark? 'dark' : ''}`}>{t('signin')}</a>
            </div>
          }
          <div className='hamburger-navigation'>
              <div className='bar'></div>
              <div className='bar'></div>
              <div className='bar'></div>
          </div>
        </div>
        <div className={`navigation-container ${isMenuOpen ? 'menu-open' : ''}`}>
          <NavigationBar dark={props.dark}/>
        </div>
      </div>
    </div>
  )

}

const NavigationBar = (props) => {
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth();

  const scrollToNews = () => {
      const newsSection = document.getElementById('newsSection');
      if (newsSection) {
        newsSection.scrollIntoView({ behavior: 'smooth' });
      }
  };

  const scrollToCourses = () => {
    // history.push('/');
      navigate('/#coursesSection');
      const coursesSection = document.getElementById('coursesSection');
      if (coursesSection) {
          coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
      <div className={`navbarBoxes`}>
          <div className={`menuBox`}>
              <a className={`menu ${props.dark? 'dark' : ''}`}>{t('about us')}</a>
              <ul className={'dropdownSub'}>
                  <li>
                      <Link to="/about" className={'subPages'}>{t('about the academy')} </Link>
                  </li>
                  <li>
                      <Link to="/management" className={'subPages'}>{t('board of directors')}</Link>
                  </li>
                  <li>
                      <Link to="/structure" className={'subPages'}>{t('structure')}</Link>
                  </li>
                  <li>
                      <Link to="/charter" className={'subPages'}>{t('regulation')}</Link>
                  </li>
                  <li>
                      <Link to="/roadmap" className={'subPages'}>{t('development plan')}</Link>
                  </li>
              </ul>
          </div>
          <div className={'menuBox'}>
              <a className={`menu ${props.dark ? 'dark' : ''}`}>{t('training')}</a>
              <ul className={'dropdownSub'}>
                  <li>
                      <a onClick={scrollToCourses} className={'subPages'}>{t('types of courses')}</a>
                  </li>  
                  <li>
                      <Link to="/courses/catalog" className={'subPages'}>{t('course catalog')}</Link>
                  </li>
                  {isLoggedIn ? <li>
                      <Link to="/courses/myCourses" className={'subPages'}>{t('my courses')}</Link>
                  </li> : null}
              </ul>
          </div>
          {/* <div className={'menuBox'}>
              <a className={`menu ${props.dark? 'dark' : ''}`}>Библиотека</a>
              <ul className={'dropdownSub'}>
                  <li>
                      <Link to="/services/service1" className={'subPages'}>НПА</Link>
                  </li>
                  <li>
                      <Link to="/services/service2" className={'subPages'}>Документы международных организаций</Link>
                  </li>
                  <li>
                      <Link to="/services/service2" className={'subPages'}>Иное </Link>
                  </li>
              </ul>
          </div> */}
          <div className={'menuBox'}>
              <a className={`menu ${props.dark? 'dark' : ''}`}>{t('webinars')}</a>
              <ul className={'dropdownSub'}>
                  <li>
                      <Link to="/vebinars" className={'subPages'}>{t('all webinars')}</Link>
                  </li>
                  <li>
                      <Link to="/vebinars/calendar" className={'subPages'}>{t('calendar of events')}</Link>
                  </li>
                  <li>
                      <Link to="/vebinars/surveys" className={'subPages'}>{t('surveys')}</Link>
                  </li>
              </ul>
          </div>
          <div className={'menuBox'}>
              <a className={`menu ${props.dark? 'dark' : ''}`} onClick={() => scrollToNews()}>{t('news')}</a>
          </div>
          <div className={'menuBox'}>
              <a className={`menu ${props.dark? 'dark' : ''}`}>{t('aml/ft')}</a>
              <ul className={'dropdownSub'}>
                  <li>
                      <Link to="/anti-laundering" className={'subPages'}>{t('anti-washing system of the RK')}</Link>
                  </li>
                  <li>
                      <Link to="/fatf" className={'subPages'}>{t('fatf')}</Link>
                  </li>
                  <li>
                      <Link to="/eag" className={'subPages'}>{t('eag')}</Link>
                  </li>
                  <li>
                      <Link to="/mutual-evaluation" className={'subPages'}>{t('mutual assessment')}</Link>
                  </li>
              </ul>
          </div>
          <div className={'menuBox'}>
              <a className={`menu ${props.dark? 'dark' : ''}`}>{t('sfm')}</a>
              <ul className={'dropdownSub'}>
                  <li>
                      <Link to="/subjects" className={'subPages'}>{t('types of subjects of financial monitoring')}</Link>
                  </li>
                  <li>
                      <Link to="/rules" className={'subPages'}>{t('internal control rules')}</Link>
                  </li>
                  <li>
                      <Link to="/operations" className={'subPages'}>{t('transactions subject to financial monitoring')}</Link>
                  </li>
              </ul>
          </div>
          {/* <div className={'menuBox'}>
              <a className={`menu ${props.dark? 'dark' : ''}`}>Эксперты</a>
              <ul className={'dropdownSub'}>
                  <li>
                      <Link to="/services/service1" className={'subPages'}>Пул экспертов Академии</Link>
                  </li>
                  <li>
                      <Link to="/services/service2" className={'subPages'}>Заявка на позицию эксперта в Академии</Link>
                  </li>
                  <li>
                      <Link to="/services/service2" className={'subPages'}>Вакансии</Link>
                  </li>
              </ul>
          </div> */}
      </div>
  )
}


export default Header;