import React from 'react';
import cl from './AboutUs.module.css';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Header from '../../../components/header/Header';
import aboutUsImg from '../../../assets/images/aboutus.png';
import aboutFounderImg from '../../../assets/images/afm.png';
import Footer from '../../../components/footer/Footer';
import { useTranslation } from 'react-i18next';

function AboutUs() {
        const { t } = useTranslation();
    return (
        <div className={cl.AboutUsWrapper}>
            <Header dark={true} />

            {/* <div className={cl.container}>
                <DefaultHeader />
            </div> */}
            <div className={cl.aboutUsContent}>
                <div className={cl.academyWrapper}>
                    <div className={cl.container}>
                        <div className={cl.academy}>
                            <div className={cl.academy__text}>
                                <p className={cl.headline}>{t('about academy')}</p>
                                <p className={cl.academy__p}>{t('descAbout')}</p>
                            </div>
                            <img src={aboutUsImg} alt="aboutUsImg" style={{ height: '' }} />
                        </div>
                    </div>
                </div>
                <div className={cl.container}>
                    <div className={cl.aboutTheFounder}>
                        <img src={aboutFounderImg} alt="aboutTheFoubder" style={{height: '210px'}} />
                        <div className={cl.aboutTheFounder__text}>
                            <p className={cl.headline}>{t('about shareholder')}</p>
                            <p className={cl.aboutTheFounder__p}>{t('descShareholder')}</p>
                        </div>
                    </div>
                    <div className={cl.purposeOfAcademy}>
                        <p className={cl.headline}>{t('purpose and objectives of the AML ACADEMY')}</p>
                        <p className={cl.purposeOfAcademy__text}>{t('descPurpose')}
                        </p>
                        <p className={cl.subtitle}>{t('main Task')}</p>
                        <div className={cl.mainTasks}>
                            <div className={cl.MainTask}>
                                <p className={cl.number}>1</p>
                                <p className={cl.tasks__text}>{t('firstTask')}
                                </p>
                            </div>
                            <div className={cl.tasks}>
                                <div className={cl.MainTask}>
                                    <p className={cl.number}>2</p>
                                    <p className={cl.tasks__text__small}>{t('secondTask')}
                                    </p>
                                </div>
                                <div className={cl.MainTask}>
                                    <p className={cl.number}>3</p>
                                    <p className={cl.tasks__text__middle}>{t('therdTask')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;