import React from 'react';
import cl from './Home.module.css';
import Header from '../../components/header/Header';
import aboutUsPic from '../../assets/images/main.svg'
import Button from '../../components/UI/button/Button';
import accIcon from '../../assets/icons/pacc.svg';
import bookIcon from '../../assets/icons/book.svg';
import realtionIcon from '../../assets/icons/relation.svg';
import laptopIcon from '../../assets/icons/laptop.svg';
import VideoPlayer from '../../components/player/VideoPlayer';
import Tabs from '../../components/tab/Tabs';
import NewsTab from '../../components/newsTab/NewsTab';
import FirstPartner from '../../assets/images/partner1.png';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../../assets/video/global.mp4';
import { Link } from 'react-router-dom';

import basicCourse from '../../assets/icons/mdi_world-wide-web.svg';
import proCourse from '../../assets/icons/subway_book.svg';
import deepCourse from '../../assets/icons/simple-icons_progress.svg';
import upCourse from '../../assets/icons/ep_menu.svg';
import Navigation from '../../components/navigation/Navigation';



function Home() {
    const navigate = useNavigate()
    const imageList = [
        { src: FirstPartner, alt: 'Image 1' },
        { src: FirstPartner, alt: 'Image 2' },
        { src: FirstPartner, alt: 'Image 3' },
        { src: FirstPartner, alt: 'Image 4' },
        { src: FirstPartner, alt: 'Image 5' },
        { src: FirstPartner, alt: 'Image 6' }
      ];
      
    const toAbout = () => {
        navigate('/about')
    }

    return (
        <div className={cl.homeWrapper}>
            <Header />
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
                                <p className={cl.aboutUs__text_small}>Наши курсы</p>
                                <div className={cl.courses_boxes}>
                                    <Link to="/courses/basic" style={{ textDecoration: 'none' }}>
                                        <div className={cl.aml_box}>
                                            <img src={basicCourse} alt="" />
                                            <p className={cl.course_box_name}>Базовый</p>
                                        </div>
                                    </Link>
                                    <Link to="/courses/specialized" style={{ textDecoration: 'none' }}>
                                        <div className={cl.aml_box}>
                                            <img src={proCourse} alt="" />
                                            <p className={cl.course_box_name}>Профильный</p>
                                        </div>
                                    </Link>
                                    <Link to="/courses/specialized" style={{ textDecoration: 'none' }}>
                                        <div className={cl.aml_box}>
                                            <img src={deepCourse} alt="" />
                                            <p className={cl.course_box_name}>Углубленный</p>
                                        </div>
                                    </Link>
                                    <Link to="/courses/specialized" style={{ textDecoration: 'none' }}>
                                        <div className={cl.aml_box}>
                                            <img src={upCourse} alt="" />
                                            <p className={cl.course_box_name}>Повышение квалификации</p>
                                        </div>
                                    </Link>
                                </div>
                                {/* <Button className={cl.button} onClick={toAbout}>Подробнее</Button> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className={cl.educationWrappwer}>
                    <div className={cl.container}>
                        <p className={cl.headline}>Качество обучения</p>
                        <p className={cl.subtitle}>Преимущества Академии</p>
                        <div className={cl.education}>
                            <div className={cl.advantages}>
                                <div className={cl.advantages_box}>
                                    <img src={accIcon} alt="acc" />
                                    <p className={cl.advantages__text}>Квалифицированные эксперты с опытом работы в сфере ПОД/ФТ</p>
                                </div>
                                <div className={cl.advantages_box}>
                                    <img src={bookIcon} alt="acc" />
                                    <p className={cl.advantages__text}>Удобный формат обучения</p>
                                </div>
                                <div className={cl.advantages_box}>
                                    <img src={realtionIcon} alt="acc" />
                                    <p className={cl.advantages__text}>Тесное взаимодействие с АФМ</p>
                                </div>
                                <div className={cl.advantages_box}>
                                    <img src={laptopIcon} alt="acc" />
                                    <p className={cl.advantages__text__last}>Программы, разработанные
                                    в соответствии с требованиями
                                    законодательства о ПОД/ФТ</p>
                                </div>
                            </div>
                            <VideoPlayer />
                        </div>
                    </div>
                </section>
                <section className={cl.coursesWrapper}>
                    <div className={cl.container}>
                        <h1 className={cl.courses__headline}>Курсы в сфере ПОД/ФТ</h1>
                        <Tabs />                       
                    </div>    
                </section>

                <section className={cl.newsWrapper}>
                    <div className={cl.container}>
                        <p className={cl.news__headline}>Новости</p>
                    </div>
                    <NewsTab />
                </section>
                <section className={cl.partnersWrapper}>
                    <div className={cl.container}>
                        <h1 className={cl.courses__headline}>Партнеры</h1>
                        <div className={cl.partners}>
                            {imageList.map((image, index) => (
                                <img key={index} src={image.src} alt={image.alt} />
                            ))}
                        </div>
                    </div>
                </section>
                {/* <Dropdown /> */}
                <Footer />
        </div>
        
    );
}

export default Home;