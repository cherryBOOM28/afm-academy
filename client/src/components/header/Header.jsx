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


function Header(props) {
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
    console.log(username)
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

  return (
    <div className={`navbar ${props.dark? 'dark' : ''}`}>
      <Link to="/" className='logo'>
        <img src={logo} alt="logo" style={{ borderRadius: '50%' }} />
      </Link>
      <div className='tool-navigation-container'>
        <div className='language-container'>
          <div className='lg-sm'>
            <a className='language'>ҚАЗ</a>
            <a className='language'>РУС</a>
            <a className='language'>ENG</a>
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
          {isLoggedIn ? 
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
              <a href='/registration' className='text-button'>Регистрация</a>
              <a href='/login' className='contained-button blue-button'>Войти</a>
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
  const { isLoggedIn } = useAuth();

  const scrollToNews = () => {
      const newsSection = document.getElementById('newsSection');
      if (newsSection) {
        newsSection.scrollIntoView({ behavior: 'smooth' });
      }
  };

  const scrollToCourses = () => {
      const coursesSection = document.getElementById('coursesSection');
      if (coursesSection) {
          coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
      <div className={`navbarBoxes`}>
          <div className={`menuBox`}>
              <a className={`menu ${props.dark? 'dark' : ''}`}>О нас</a>
              <ul className={'dropdownSub'}>
                  <li>
                      <Link to="/about" className={'subPages'}>Об Академии </Link>
                  </li>
                  <li>
                      <Link to="/management" className={'subPages'}>Совет директоров</Link>
                  </li>
                  <li>
                      <Link to="/structure" className={'subPages'}>Структура</Link>
                  </li>
                  <li>
                      <Link to="/charter" className={'subPages'}>Устав</Link>
                  </li>
                  <li>
                      <Link to="/roadmap" className={'subPages'}>План развития</Link>
                  </li>
              </ul>
          </div>
          <div className={'menuBox'}>
              <a className={`menu ${props.dark ? 'dark' : ''}`}>Обучение</a>
              <ul className={'dropdownSub'}>
                  <li>
                      <a href='#' onClick={() => scrollToCourses()} className={'subPages'}>Виды курсов</a>
                  </li>  
                  <li>
                      <Link to="/courses/catalog" className={'subPages'}>Каталог курсов</Link>
                  </li>
                  {isLoggedIn ? <li>
                      <Link to="/courses/myCourses" className={'subPages'}>Мои курсы</Link>
                  </li> : null}
              </ul>
          </div>
          <div className={'menuBox'}>
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
          </div>
          <div className={'menuBox'}>
              <a className={`menu ${props.dark? 'dark' : ''}`}>Вебинары</a>
              <ul className={'dropdownSub'}>
                  <li>
                      <Link to="/vebinars" className={'subPages'}>Все вебинары</Link>
                  </li>
                  <li>
                      <Link to="/vebinars/calendar" className={'subPages'}>Календарь мероприятий</Link>
                  </li>
                  <li>
                      <Link to="/vebinars/surveys" className={'subPages'}>Опросы</Link>
                  </li>
              </ul>
          </div>
          <div className={'menuBox'}>
              <a className={`menu ${props.dark? 'dark' : ''}`} onClick={() => scrollToNews()}>Новости</a>
          </div>
          <div className={'menuBox'}>
              <a className={`menu ${props.dark? 'dark' : ''}`}>ПОД/ФТ</a>
              <ul className={'dropdownSub'}>
                  <li>
                      <Link to="/anti-laundering" className={'subPages'}>Антиотмывочная система РК</Link>
                  </li>
                  <li>
                      <Link to="/fatf" className={'subPages'}>ФАТФ</Link>
                  </li>
                  <li>
                      <Link to="/eag" className={'subPages'}>ЕАГ</Link>
                  </li>
                  <li>
                      <Link to="/mutual-evaluation" className={'subPages'}>Взаимная оценка</Link>
                  </li>
              </ul>
          </div>
          <div className={'menuBox'}>
              <a className={`menu ${props.dark? 'dark' : ''}`}>СФМ</a>
              <ul className={'dropdownSub'}>
                  <li>
                      <Link to="/subjects" className={'subPages'}>Виды субъектов финансового мониторинга</Link>
                  </li>
                  <li>
                      <Link to="/rules" className={'subPages'}>Правила внутреннего контроля</Link>
                  </li>
                  <li>
                      <Link to="/operations" className={'subPages'}>Операции, подлежащие финансовому мониторингу</Link>
                  </li>
              </ul>
          </div>
          <div className={'menuBox'}>
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
          </div>
      </div>
  )
}


export default Header;