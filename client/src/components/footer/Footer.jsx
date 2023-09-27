import React from 'react';
import cl from './Footer.module.css';
import { Link } from 'react-router-dom';
import igIcon from '../../assets/icons/ig.svg';
import fbIcon from '../../assets/icons/fb.svg';
import tgIcon from '../../assets/icons/tg.svg';
import Map from '../UI/map/Map';


function Footer({ email, phoneNumber }) {
    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
      };

    return (
        <div className={cl.footerWrapper}>
            <div className={cl.container}>
                <div className={cl.footer}>
                    <div className={cl.footer__block}>
                        <p className={cl.footer__headline}>Контакты</p>
                        <nav className={cl.footer__content}>
                            <ul>
                                <li>
                                    <p className={cl.footer__text}>Астана, Казахстан</p>
                                </li>
                                <li>
                                    <p className={cl.footer__text}>Ул. Мангилик Ел C1.4</p>
                                </li>
                                <li>
                                    <a className={cl.footer__text} href={`tel:${phoneNumber}`} onClick={handlePhoneClick}>7777 777 77 77</a>
                                </li>
                                <li>
                                    <a className={cl.footer__text} href={`mailto:${email}`} onClick={handleEmailClick}>afm@gmail.com</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={cl.footer__block}>
                        <p className={cl.footer__headline}>О нас</p>
                        <nav className={cl.footer__content}>
                            <ul>
                                <li>
                                    <Link to="/about" className={cl.footer__text}>Об Академии</Link>
                                </li>
                                <li>
                                    <Link to="/management" className={cl.footer__text}>Совет директоров</Link>
                                </li>
                                <li>
                                    <Link to="/structure" className={cl.footer__text}>Структура</Link>
                                </li>
                                <li>
                                    <Link to="/charter" className={cl.footer__text}>Устав</Link>
                                </li>
                                <li>
                                    <Link to="/roadmap" className={cl.footer__text}>План развития</Link>
                                </li>
                            </ul>
                        </nav>
                        
                    </div>
                    <div className={cl.footer__block}>
                        <p className={cl.footer__headline}>ПОД/ФТ</p>
                        <nav className={cl.footer__content}>
                            <ul>
                                <li>
                                    <Link to="/anti-laundering" className={cl.footer__text}>Антиотмывочная система РК</Link>
                                </li>
                                <li>
                                    <Link to="/fatf" className={cl.footer__text}>ФАТФ</Link>
                                </li>
                                <li>
                                    <Link to="/eag" className={cl.footer__text}>ЕАГ</Link>
                                </li>
                                <li>
                                    <Link to="/mutual-evaluation" className={cl.footer__text}>Взаимная оценка</Link>
                                </li>
                            </ul>
                        </nav>
                        
                    </div>
                    <div className={cl.footer__block}>
                        <p className={cl.footer__headline}>Обучение</p>
                        <nav className={cl.footer__content}>
                            <ul>
                                <li>
                                    <Link to="/base" className={cl.footer__text}>Базовый</Link>
                                </li>
                                <li>
                                    <Link to="/profile" className={cl.footer__text}>Профильный</Link>
                                </li>
                                <li>
                                    <Link to="/in-depth" className={cl.footer__text}>Продвинутый</Link>
                                </li>
                                <li>
                                    <Link to="/training" className={cl.footer__text}>Повышение квалификации</Link>
                                </li>
                            </ul>
                        </nav>
                        
                    </div>
                    <div className={cl.footer__block}>
                        <p className={cl.footer__headline}>Библиотека</p>
                        <nav className={cl.footer__content}>
                            <ul>
                                <li>
                                    <Link to="/npa" className={cl.footer__text}>НПА</Link>
                                </li>
                                <li>
                                    <Link to="/documents" className={cl.footer__text}>Документы международных организаций</Link>
                                </li>
                                <li>
                                    <Link to="/other" className={cl.footer__text}>Иное</Link>
                                </li>
                            </ul>
                        </nav>
                        
                    </div>
                    <div className={cl.socials}>
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
                    <div className={cl.footer__block__big}>
                        <p className={cl.footer__headline}>СФМ</p>
                        <nav className={cl.footer__content}>
                            <ul>
                                <li>
                                    <Link to="/subjects" className={cl.footer__text}>Виды субъектов финансового мониторинга</Link>
                                </li>
                                <li>
                                    <Link to="/rules" className={cl.footer__text}>Правила внутреннего контроля</Link>
                                </li>
                                <li>
                                    <Link to="/operations" className={cl.footer__text}>Операции, подлежащие финансовому мониторингу</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={cl.footer__block__middle}>
                        <p className={cl.footer__headline}>Эксперты</p>
                        <nav className={cl.footer__content}>
                            <ul>
                                <li>
                                    <Link to="/experts" className={cl.footer__text}>Эксперты</Link>
                                </li>
                                <li>
                                    <Link to="/rules" className={cl.footer__text}>Пул экспертов Академии</Link>
                                </li>
                                <li>
                                    <Link to="" className={cl.footer__text}>Заявка на позицию эксперта в Академии</Link>
                                </li>
                                <li>
                                    <Link to="/jobs" className={cl.footer__text}>Вакансии</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <Map />
                    


                    
                </div>
            
            </div>
        </div>
    );
}

export default Footer;