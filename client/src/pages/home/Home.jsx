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


function Home() {
    const imageList = [
        { src: FirstPartner, alt: 'Image 1' },
        { src: FirstPartner, alt: 'Image 2' },
        { src: FirstPartner, alt: 'Image 3' },
        { src: FirstPartner, alt: 'Image 4' },
        { src: FirstPartner, alt: 'Image 5' },
        { src: FirstPartner, alt: 'Image 6' }
      ];
    return (
        <div className={cl.homeWrapper}>
            <Header />
                <section className={cl.aboutUs}>
                    <div className={cl.container}>
                        <div className={cl.aboutUs__section}>
                            <img src={aboutUsPic} alt="About us" />
                            <div className={cl.aboutUs__content}> 
                                <p className={cl.aboutUs__headline}>AML ACADEMY</p>
                                <p className={cl.aboutUs__text}>Целью Академии является предоставление качественного обучения в сфере противодействия легализации (отмыванию) доходов, добытых преступным путем, и финансированию терроризма. Пройти обучение в Академии могут как субъекты частного предпринимательства (субъекты финансового мониторинга), так и сотрудники государственных органов. Задача, поставленная перед Академией – обеспечить подготовку высококвалифицированных кадров и субъектов финансового мониторинга для успешного функционирования национальной антиотмывочной системы</p>
                                <Button className={cl.button}>Подробнее</Button>
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