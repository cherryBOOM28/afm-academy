import React from 'react';
import cl from './Footer.module.css';
import { Link } from 'react-router-dom';
import igIcon from '../../assets/icons/ig.svg';
import fbIcon from '../../assets/icons/fb.svg';
import tgIcon from '../../assets/icons/tg.svg';
import Map from '../UI/map/Map';

import { useTranslation } from 'react-i18next';

function Footer({ email, phoneNumber }) {

    const { t } = useTranslation();

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
                        <p className={cl.footer__headline}>{t('contacts')}</p>
                        <nav className={cl.footer__content}>
                            <ul>
                                <li>
                                    <p className={cl.footer__text}>{t('city')}</p>
                                </li>
                                <li>
                                    <p className={cl.footer__text}>{t('address')}</p>
                                </li>
                                <li>
                                    <a className={cl.footer__text} href={`tel:${phoneNumber}`} onClick={handlePhoneClick}>тел. +7 708 716 8416</a>
                                </li>
                                <li>
                                    <a className={cl.footer__text} href={`mailto:${email}`} onClick={handleEmailClick}>aml.academy2023@gmail.com</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={cl.footer__block}>
                        <p className={cl.footer__headline}>{t('about us')}</p>
                        <nav className={cl.footer__content}>
                            <ul>
                                <li>
                                    <Link to="/about" className={cl.footer__text}>{t('about the academy')}</Link>
                                </li>
                                <li>
                                    <Link to="/management" className={cl.footer__text}>{t('board of directors')}</Link>
                                </li>
                                <li>
                                    <Link to="/structure" className={cl.footer__text}>{t('structure')}</Link>
                                </li>
                                <li>
                                    <Link to="/charter" className={cl.footer__text}>{t('regulation')}</Link>
                                </li>
                                <li>
                                    <Link to="/roadmap" className={cl.footer__text}>{t('development plan')}</Link>
                                </li>
                            </ul>
                        </nav>
                        
                    </div>
                    <div className={cl.footer__block}>
                        <p className={cl.footer__headline}>{t('aml/ft')}</p>
                        <nav className={cl.footer__content}>
                            <ul>
                                <li>
                                    <Link to="/anti-laundering" className={cl.footer__text}>{t('anti-washing system of the RK')}</Link>
                                </li>
                                <li>
                                    <Link to="/fatf" className={cl.footer__text}>{t('fatf')}</Link>
                                </li>
                                <li>
                                    <Link to="/eag" className={cl.footer__text}>{t('eag')}</Link>
                                </li>
                                <li>
                                    <Link to="/mutual-evaluation" className={cl.footer__text}>{t('mutual assessment')}</Link>
                                </li>
                            </ul>
                        </nav>
                        
                    </div>
                    <div className={cl.footer__block}>
                        <p className={cl.footer__headline}>{t('training')}</p>
                        <nav className={cl.footer__content}>
                            <ul>
                                <li>
                                    <Link to="/courses" className={cl.footer__text}>{t('types of courses')}</Link>
                                </li>
                                <li>
                                    <Link to="/courses/catalog" className={cl.footer__text}>{t('course catalog')}</Link>
                                </li>
                                <li>
                                    <Link to="/courses/myCourses" className={cl.footer__text}>{t('my courses')}</Link>
                                </li>
                            </ul>
                        </nav>
                        
                    </div>
                    {/* <div className={cl.footer__block}>
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
                        
                    </div> */}
                    <div className={cl.socials}>
                        <a href='https://www.instagram.com/aml_academy/' className={cl.rounde}>
                            <img src={igIcon} alt="instagram" className={cl.icon} />
                        </a>
                        <a href='https://www.facebook.com/' className={cl.rounde}>
                            <img src={fbIcon} alt="facebook" className={cl.icon} />
                        </a>
                        <a href='https://www.instagram.com/aml_academy/' className={cl.rounde}>
                            <img src={tgIcon} alt="telegram" className={cl.icon} />
                        </a>
                    </div>
                    <div className={cl.footer__block__big}>
                        <p className={cl.footer__headline}>{t('sfm')}</p>
                        <nav className={cl.footer__content}>
                            <ul>
                                <li>
                                    <Link to="/subjects" className={cl.footer__text}>{t('types of subjects of financial monitoring')}</Link>
                                </li>
                                <li>
                                    <Link to="/rules" className={cl.footer__text}>{t('internal control rules')}</Link>
                                </li>
                                <li>
                                    <Link to="/operations" className={cl.footer__text}>{t('transactions subject to financial monitoring')}</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* <div className={cl.footer__block__middle}>
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
                                    <Link to="" className={cl.footer__text}>Заявка на позицию <br></br> эксперта в Академии</Link>
                                </li>
                                <li>
                                    <Link to="/jobs" className={cl.footer__text}>Вакансии</Link>
                                </li>
                            </ul>
                        </nav>
                    </div> */}
                    <Map />
                    


                    
                </div>
            
            </div>
        </div>
    );
}

export default Footer;