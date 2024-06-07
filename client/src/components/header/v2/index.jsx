import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import navbar_items from '../navbar_items';
import './style.scss';
import { IoMdEye } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Header({
    handleOpenVisualModal
}) {
    return ( 
        <div className="header-v2">
            <div className="row">
                <div className="logo">
                    <img src={logo} alt="" />
                    <span>Академия финансового мониторинга</span>
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

    return (
        <div 
            className="user-avatar" 
            onClick={() => {
                navigate('/profile');
            }}
        >
            <span>{[...localStorage.getItem('firstname')][0]}</span>
            <span>{[...localStorage.getItem('lastname')][0]}</span>
        </div>
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

const LangBtn = ({

}) => {
    const [open, setOpen] = useState(false);
    const _Ref = useRef(null);

    const { i18n } = useTranslation();

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

    const changeLanguage = (language) => {
        setOpen(false);
        i18n.changeLanguage(language);
    };
    
    return (
        <div className="lang" ref={_Ref}>
            <div onClick={() => setOpen(prev => !prev)}>
                <span>Рус</span>
                <FaChevronDown />
            </div>
            {
                open ? (
                    <div>
                        <div onClick={() => changeLanguage('kz')}>ҚАЗ</div>
                        <div onClick={() => changeLanguage('ru')}>РУС</div>
                        <div onClick={() => changeLanguage('eng')}>ENG</div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default Header;
