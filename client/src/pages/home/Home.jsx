import React, { useEffect } from 'react';
import cl from './Home.module.css';

import aboutUsPic from '../../assets/images/main.svg'
import accIcon from '../../assets/icons/pacc.svg';
import bookIcon from '../../assets/icons/book.svg';
import realtionIcon from '../../assets/icons/relation.svg';
import laptopIcon from '../../assets/icons/laptop.svg';
import backgroundVideo from '../../assets/video/bgvideo.mov';

import Button from '../../components/UI/button/Button';
import Header from '../../components/header/Header';
import VideoPlayer from '../../components/player/VideoPlayer';
import Tabs from '../../components/tab/Tabs';
import NewsTab from '../../components/newsTab/NewsTab';
import FirstPartner from '../../assets/images/partner1.png';
import Footer from '../../components/footer/Footer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

import basicCourse from '../../assets/icons/mdi_world-wide-web.svg';
import proCourse from '../../assets/icons/subway_book.svg';
import deepCourse from '../../assets/icons/simple-icons_progress.svg';
import upCourse from '../../assets/icons/ep_menu.svg';
import Navigation from '../../components/navigation/Navigation';

import { useTranslation } from 'react-i18next';

function Home() {

    const { t } = useTranslation();

    const navigate = useNavigate()
    const imageList = [
        { src: FirstPartner, alt: 'Image 1' },
        { src: FirstPartner, alt: 'Image 2' },
        { src: FirstPartner, alt: 'Image 3' },
        { src: FirstPartner, alt: 'Image 4' },
        { src: FirstPartner, alt: 'Image 5' },
        { src: FirstPartner, alt: 'Image 6' }
      ];
      
    const scrollToCourses = () => {
        const coursesSection = document.getElementById('coursesSection');
        if (coursesSection) {
            coursesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToNews = () => {
        const newsSection = document.getElementById('newsSection');
        if (newsSection) {
          newsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const params = useParams();
    const location = useLocation();
    useEffect(() => {
        // console.log(params);
        if (location.hash === '#coursesSection') {
            scrollToCourses();
        } else if (location.hash === '#newsSection') {
            scrollToNews();
        }

        console.log(t)
    }, [])

    const toAbout = () => {
        navigate('/about')
    }

    return (
        <div className={cl.homeWrapper}>
            <Header dark={false}/>
            <section className={cl.aboutUs}>
                <div className={cl.container}>
                    <div className={cl.aboutUs__section}>
                        <video autoPlay loop muted className={cl.videoBackground}>
                            <source src={backgroundVideo} type="video/mp4" />
                        </video>
                        {/* <img src={aboutUsPic} alt="About us" /> */}
                        <div className={cl.aboutUs__content}> 
                            <p className={cl.aboutUs__headline}>AML ACADEMY</p>
                            {/* <p className={cl.aboutUs__text}>Обучение для безопасности финансов</p> */}
                            <p className={cl.aboutUs__text_small}>{t('our courses')}</p>
                            <div className={cl.courses_boxes}>
                                <Link to="/courses/8" style={{ textDecoration: 'none' }}>
                                    <div className={cl.aml_box}>
                                        <img src={basicCourse} alt="" />
                                        <p className={cl.course_box_name}>{t('core')}</p>
                                    </div>
                                </Link>
                                <Link to="/#" style={{ textDecoration: 'none' }}>
                                    <div className={cl.aml_box}>
                                        <img src={proCourse} alt="" />
                                        <p className={cl.course_box_name}>{t('specialized')}</p>
                                    </div>
                                </Link>
                                <Link to="/#" style={{ textDecoration: 'none' }}>
                                    <div className={cl.aml_box}>
                                        <img src={deepCourse} alt="" />
                                        <p className={cl.course_box_name}>{t('advanced')}</p>
                                    </div>
                                </Link>
                                <Link to="/3" style={{ textDecoration: 'none' }}>
                                    <div className={cl.aml_box}>
                                        <img src={upCourse} alt="" />
                                        <p className={cl.course_box_name}>{t('thematic')}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cl.educationWrappwer}>
                <div className={cl.container}>
                    <p className={cl.headline}>{t('quality')}</p>
                    <p className={cl.subtitle}>{t('advantages of academy')}</p>
                    <div className={cl.education}>
                        <div className={cl.advantages}>
                            <div className={cl.advantages_box}>
                                <img src={accIcon} alt="acc" />
                                <p className={cl.advantages__text}>{t('qualified experts')}</p>
                            </div>
                            <div className={cl.advantages_box}>
                                <img src={bookIcon} alt="acc" />
                                <p className={cl.advantages__text}>{t('convenient learning format')}</p>
                            </div>
                            <div className={cl.advantages_box}>
                                <img src={realtionIcon} alt="acc" />
                                <p className={cl.advantages__text}>{t('close cooperation with AFM')}</p>
                            </div>
                            <div className={cl.advantages_box}>
                                <img src={laptopIcon} alt="acc" />
                                <p className={cl.advantages__text__last}>{t('programs')}</p>
                            </div>
                        </div>
                        <VideoPlayer />
                    </div>
                </div>
            </section>
            
            <section className={cl.coursesWrapper} id='coursesSection'>
                <div className={cl.container}>
                    <h1 className={cl.courses__headline}>{t('Courses in the field of')}</h1>
                    <Tabs />                       
                </div>    
            </section>

            <section className={cl.newsWrapper} id='news'>
                <div className={cl.container}>
                    <p className={cl.news__headline}>{t('news')}</p>
                </div>
                <NewsTab />
            </section>
            {/* <section className={cl.partnersWrapper}>
                <div className={cl.container}>
                    <h1 className={cl.courses__headline}>Партнеры</h1>
                    <div className={cl.partners}>
                        {imageList.map((image, index) => (
                            <img key={index} src={image.src} alt={image.alt} />
                        ))}
                    </div>
                </div>
            </section> */}
            {/* <Dropdown /> */}
            <Footer />
        </div>
        
    );
}

export default Home;