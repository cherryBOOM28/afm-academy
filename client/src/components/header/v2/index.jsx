import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../auth/AuthContext';
import navbar_items from '../navbar_items';
import logo from './logo.svg';
import './style.scss';

function Header({
    handleOpenVisualModal
}) {
    const { t } = useTranslation()
    return (
        <div className="header-v2">
            <div className="row">
                <div className="logo">
                    <img src={logo} alt="" />
                    <span>{t("academy of financial monitoring")}</span>
                </div>
                <div className="navigation">
                    {navbar_items.map((item, index) => {
                        return (
                            <NavItem
                                name={item.name}
                                mainRoute={item.route}
                                subItems={item.subItems}
                                key={index}
                            />
                        );
                    })}
                </div>
                <div className="actions">
                    <div className="eye" onClick={(e) => handleOpenVisualModal()}>
                        <IoMdEye />
                    </div>
                    <LangBtn />
                    {
                        localStorage.getItem('firstname')
                            ? (
                                <UserAvatar />
                            )
                            : (
                                <div className="signIn">
                                    <Link to={'/login'}>Войти</Link>
                                </div>
                            )
                    }
                </div>
            </div>
            <div className="row">
            </div>
        </div>
    );
}

const UserAvatar = () => {
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const userToggleRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const role = localStorage.getItem('role')
    const {
        setIsLoggedIn
    } = useAuth()

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('email');
        localStorage.removeItem('user_id');
        localStorage.removeItem('firstname');
        localStorage.removeItem('lastname');
        console.log("works")
        setIsLoggedIn(false)
        navigate('/login')
    };
    return (
        <>
            <div className='user-actions' onClick={() => toggleMenu()} >
                <div className='user-icon toggle-user-button'>
                    <p className='toggle-user-button'>
                        <span>{[...localStorage.getItem('firstname')][0]}</span>
                        <span>{[...localStorage.getItem('lastname')][0]}</span>
                    </p>
                </div>
                <div className='user-toggle'
                    style={{
                        display: isMenuOpen ? 'flex' : 'none'
                    }}
                    ref={userToggleRef}
                >
                    <div onClick={() => navigate('/profile')} className='person-menu-item menu-item underline-item'>
                        <div className='user-icon'>
                            <a>
                                <span>{[...localStorage.getItem('firstname')][0]}</span>
                                <span>{[...localStorage.getItem('lastname')][0]}</span>
                            </a>
                        </div>
                        <div>
                        </div>
                        <a className='user-toggle-links'>{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</a>
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
        </>
    )
}

const NavItem = ({
    name,
    mainRoute,
    subItems
}) => {
    const [open, setOpen] = useState(false);
    const navItemRef = useRef(null);
    const { i18n, t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navItemRef.current && !navItemRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="nav-item" ref={navItemRef}>
            <div onClick={() => {
                setOpen(!open)
                if (mainRoute) {
                    navigate(mainRoute);
                }
            }}>
                {t(name)}
            </div>
            {
                open && subItems.length > 0 && (
                    <div className="sub-items">
                        {
                            subItems.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        navigate(item.route)
                                    }}
                                >
                                    {t(item.name)}
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}

const LangBtn = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const _Ref = useRef(null);

    const getLanguageLabel = (language) => {
        switch (language) {
            case 'kz':
                return 'ҚАЗ';
            case 'ru':
                return 'РУС';
            case 'eng':
                return 'ENG';
            default:
                return 'РУС';
        }
    };

    const [currentLanguage, setCurrentLanguage] = useState(getLanguageLabel(i18n.language));

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (_Ref.current && !_Ref.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const changeLanguage = (language, label) => {
        setOpen(false);
        setCurrentLanguage(label);
        i18n.changeLanguage(language);
    };

    useEffect(() => {
        setCurrentLanguage(getLanguageLabel(i18n.language));
    }, [i18n.language]);

    return (
        <div className="lang" ref={_Ref}>
            <div className="lang-toggle" onClick={() => setOpen(prev => !prev)}>
                <span>{currentLanguage}</span>
                <FaChevronDown />
            </div>
            {
                open && (
                    <div className="lang-options">
                        <div onClick={() => changeLanguage('kz', 'ҚАЗ')}>ҚАЗ</div>
                        <div onClick={() => changeLanguage('ru', 'РУС')}>РУС</div>
                        <div onClick={() => changeLanguage('eng', 'ENG')}>ENG</div>
                    </div>
                )
            }
        </div>
    );
};


export default Header;
