import React, { useState, useEffect, useRef  } from 'react';
// import cl from './Header.module.css';
import './Header.scss'
import './Navigation.scss'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import logo from '../../assets/images/logo.svg';
import language from '../../assets/icons/lang.svg';
import igIcon from '../../assets/icons/ig.svg';
import waIcon from '../../assets/icons/waIcon.svg';
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

import VisualModal from '../../components/VisualModal/VisualModal';
import { useStyle } from '../VisualModal/StyleContext';



function Header(props) {

  const { t } = useTranslation();

  const navigate = useNavigate();
  const [selectedVoiceName, setSelectedVoiceName] = useState(""); 
  const [letterInterval, setLetterInterval] = useState("standard");
  const role = localStorage.getItem('role')



  const jwtToken = localStorage.getItem('jwtToken');
  const speak = (text, voiceName) => {
    const synthesis = window.speechSynthesis;
    setTimeout(() => {
      synthesis.cancel();
      const voices = synthesis.getVoices();
      const selectedVoice = voices.find((voice) => voice.name === voiceName);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = selectedVoice;
      synthesis.speak(utterance);
    }, 100);
  };

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
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('email');
    localStorage.removeItem('user_id');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
      console.log("works")

    setIsLoggedIn(false)
    setUsername('')

    navigate('/login')
  }; 

  const profilePageLink = () => {
    navigate('/profile')
  }

  const openVisualModal = () => {
    props.handleOpenVisualModal();
  }

  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const darkModeStyles = {
    filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(100%) contrast(100%)', 
  };
  
  const lightModeStyles = {
    filter: 'invert(0%)', 
    
  };
  
  const blueModeStyles = {
    filter: 'invert(0%)',

  };
  const { styles, open, setOpen } = useStyle();

  const getLetterSpacing = (interval) => {
    interval = styles.letterInterval;

    switch (interval) {
      case "medium":
        return "2px";
      case "large":
        return "4px";
      default:
        return "1px";
    }
  };


  return (
    <div className="interval" style={{ letterSpacing: getLetterSpacing(letterInterval) }}>
    <div className={`navbar ${props.dark? 'dark' : ''} text-content`}>
      <Link to="/" className='logo'>
    <img
      src={logo}
      alt="logo"
      style={{
        pointerEvents: 'none',
        userSelect: 'none',
        borderRadius: '50%',
        ...(styles.colorMode === 'dark' ? darkModeStyles : (styles.colorMode === 'light' ? lightModeStyles : blueModeStyles)),
      }}
    />
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
            <a href='#' className='soc-icon blue-button' onClick={openVisualModal}>
              <img src={language} alt="language" className='icon' />
            </a>
            <a target='_blank' href='https://www.instagram.com/aml_academy/' className='soc-icon blue-button'>
              <img src={igIcon} alt="instagram" className='icon' />
            </a>
            <a target='_blank' href='https://t.me/s/afm_rk?before=1811' className='soc-icon blue-button'>
              <img src={tgIcon} alt="telegram" className='icon' />
            </a>
            <a target='_blank' href='https://wa.me/77087168416' className='soc-icon blue-button'>
              <img src={waIcon} style={{width: '20px'}} alt="telegram" className='icon' />
            </a>
          </div>
          <div className='search-box'>
            <SearchIcon sx={{ color: 'white' }}/>
            <input type='search' className={`search-input ${props.dark? 'dark' : ''}`} />
          </div>
          {jwtToken ? 
            <div className='user-actions'>
              <div onClick={() => toggleMenu()} className='user-icon toggle-user-button'>
                <a className='toggle-user-button'>{pfp.toUpperCase()}</a>
              </div>
              <div className='user-toggle' 
                style={{
                  display: isMenuOpen ? 'flex' : 'none'
                }}
                ref={userToggleRef}
              >
                <div onClick={profilePageLink} className='person-menu-item menu-item underline-item'>
                  <div className='user-icon'>
                    <a>{pfp.toUpperCase()}</a>
                  </div>
                  <div>
                  </div>
                  <a className='user-toggle-links'>{name}</a>
                </div>
                {role == 'ROLE_ADMIN' ? 
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
              <a href='/registration' className='text-button text-content'>{t('regestration')}</a>
              <a href='/login' className={`contained-button blue-button ${props.dark? 'dark' : ''}`}>{t('signin')}</a>
            </div>
          }
          <div className="hamburger-navigation-wrapper">
            <div className='hamburger-navigation'>
              <div className='bar'></div>
              <div className='bar'></div>
              <div className='bar'></div>
            </div>
            {/* <div className='hamburger-navigation-body'>
                {
                  [
                    {
                      name: 'О нас',
                      route: null,
                      subItems: [
                        {
                          name: 'Об академии',
                          route: '/about'
                        },
                        {
                          name: 'Совет директоров',
                          route: '/management'
                        }
                      ]
                    },
                    {
                      name: 'Обучение',
                      route: null,
                      subItems: [
                        {
                          name: 'Виды курсов',
                          route: '/#coursesSection'
                        },
                        {
                          name: 'Каталог курсов',
                          route: '/courses/catalog'
                        },
                        {
                          name: 'Мои курсы',
                          route: '/courses/myCourses'
                        },
                      ]
                    },
                  ].map((item, index) => {

                    return <div className="navigation-item-wrapper" key={index}>
                      <div 
                        className="navigation-item"
                      >
                        { item.name }
                      </div>
                      <div className="navigation-sub-items">
                        {
                          item.subItems.map((subItem, index) => {
                            return <div 
                              className="navigation-sub-item"
                              key={index}
                            >
                              {
                                subItem.name
                              }
                            </div>
                          })
                        }
                      </div>
                    </div>
                  })
                }     
                <div className="navigation-socials">
                  <a href='#' className='soc-icon blue-button' onClick={openVisualModal}>
                    <img src={language} alt="language" className='icon' />
                  </a>
                  <a target='_blank' href='https://www.instagram.com/aml_academy/' className='soc-icon blue-button'>
                    <img src={igIcon} alt="instagram" className='icon' />
                  </a>
                  <a target='_blank' href='https://t.me/s/afm_rk?before=1811' className='soc-icon blue-button'>
                    <img src={tgIcon} alt="telegram" className='icon' />
                  </a>
                  <a target='_blank' href='https://wa.me/77087168416' className='soc-icon blue-button'>
                    <img src={waIcon} style={{width: '20px'}} alt="telegram" className='icon' />
                  </a>
                </div>
              </div> */}
          </div>
        </div>
        <div className={`navigation-container ${isMenuOpen ? 'menu-open' : ''}`}>
          <NavigationBar dark={props.dark}/>
        </div>
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

  const { styles } = useStyle(); 
  useEffect(() => {
    
  }, [])

  const getLetterSpacing = (interval) => {
    switch (interval) {
      case "medium":
        return "2px";
      case "large":
        return "4px";
      default:
        return "1px";
    }
  };

  const getFontSize = (size) => {
    switch (size) {
      case "small":
        return "15px";
        break;
      case "standard":
        return "20px";
        break;
      case "large":
        return "24px";
        break;
      default:
        return "20px";
        break;
    }
  }




  return (
      <div className={`navbarBoxes text-content`}
      
      >
             
          <div className={`menuBox text-content`}>
              <a className={`menu ${props.dark? 'dark' : ''} text-content`}>{t('about us')}</a>
              <ul className={'dropdownSub text-content'}>
                  <li style={{letterSpacing: getLetterSpacing(styles.letterInterval), fontSize: getFontSize(styles.fontSize)}}>
                      <Link to="/about" className={'subPages text-content'}>{t('about the academy')} </Link>
                  </li>
                  <li style={{letterSpacing: getLetterSpacing(styles.letterInterval), fontSize: getFontSize(styles.fontSize)}}>
                      <Link to="/management" className={'subPages text-content'}>{t('board of directors')}</Link>
                  </li>
                  <li style={{letterSpacing: getLetterSpacing(styles.letterInterval), fontSize: getFontSize(styles.fontSize)}}>
                      <Link to="/structure" className={'subPages text-content'}>{t('structure')}</Link>
                  </li>
                  <li style={{letterSpacing: getLetterSpacing(styles.letterInterval), fontSize: getFontSize(styles.fontSize)}}>
                      <Link to="/charter" className={'subPages text-content'}>{t('regulation')}</Link>
                  </li>
                  <li style={{letterSpacing: getLetterSpacing(styles.letterInterval), fontSize: getFontSize(styles.fontSize)}}>
                      <Link to="/roadmap" className={'subPages text-content'}>{t('development plan')}</Link>
                  </li>
              </ul>
          </div>
          <div className={'menuBox'}>
              <a className={`menu ${props.dark ? 'dark' : ''} text-content`}>{t('training')}</a>
              <ul className={'dropdownSub text-content'}>
                  <li style={{letterSpacing: getLetterSpacing(styles.letterInterval), fontSize: getFontSize(styles.fontSize)}}>
                      <a onClick={scrollToCourses} className={'subPages text-content'}>{t('types of courses')}</a>
                  </li>  
                  <li style={{letterSpacing: getLetterSpacing(styles.letterInterval), fontSize: getFontSize(styles.fontSize)}}>
                      <Link to="/courses/catalog" className={'subPages text-content'}>{t('course catalog')}</Link>
                  </li>
                  {isLoggedIn ? <li style={{letterSpacing: getLetterSpacing(styles.letterInterval), fontSize: getFontSize(styles.fontSize)}}>
                      <Link to="/courses/myCourses" className={'subPages text-content'}>{t('my courses')}</Link>
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
              <a className={`menu ${props.dark? 'dark' : ''} text-content`}>{t('webinars')}</a>
              <ul className={'dropdownSub'}>
                  <li>
                      <Link to="/vebinars" className={'subPages text-content'}>{t('all webinars')}</Link>
                  </li>
                  <li>
                      <Link to="/vebinars/calendar" className={'subPages text-content'}>{t('calendar of events')}</Link>
                  </li>
                  <li>
                      <Link to="/vebinars/surveys" className={'subPages text-content'}>{t('surveys')}</Link>
                  </li>
              </ul>
          </div>
          <div className={'menuBox'}>
              <a className={`menu ${props.dark? 'dark' : ''} text-content`} onClick={() => scrollToNews()}>{t('news')}</a>
          </div>
          <div className={'menuBox'}>
              <a className={`menu ${props.dark? 'dark' : ''} text-content`}>{t('aml/ft')}</a>
              <ul className={'dropdownSub'}>
                  <li>
                      <Link to="/anti-laundering" className={'subPages text-content'}>{t('anti-washing system of the RK')}</Link>
                  </li>
                  <li>
                      <Link to="/fatf" className={'subPages text-content'}>{t('fatf')}</Link>
                  </li>
                  <li>
                      <Link to="/eag" className={'subPages text-content'}>{t('eag')}</Link>
                  </li>
                  <li>
                      <Link to="/mutual-evaluation" className={'subPages text-content'}>{t('mutual assessment')}</Link>
                  </li>
              </ul>
          </div>
          <div className={'menuBox'}>
              <a className={`menu ${props.dark? 'dark' : ''} text-content`}>{t('sfm')}</a>
              <ul className={'dropdownSub'}>
                  <li>
                      <Link to="/subjects" className={'subPages text-content'}>{t('types of subjects of financial monitoring')}</Link>
                  </li>
                  <li>
                      <Link to="/rules" className={'subPages text-content'}>{t('internal control rules')}</Link>
                  </li>
                  <li>
                      <Link to="/operations" className={'subPages text-content'}>{t('transactions subject to financial monitoring')}</Link>
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