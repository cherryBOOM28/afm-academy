import React, { useState, useEffect } from 'react';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import './BasicCourse.scss';
import Collapsable from '../../components/UI/collapsable-block/Collapsable';
import RoadList from '../../components/UI/roadList/RoadList';
import Lectors from '../../components/lectors-block/Lectors';

import lectorImg from './../../assets/images/avatar-img.png';
import FeedBacks from '../../components/feedbackBlock/FeedBacks';

function BasicCourse() {
    return ( 
        <div className="basic-course-page">
            <div>
                <div className="container">
                    <Header />
                </div>
            </div>

            <div className="page-content container">

                <h1>Базовый курс</h1>
                <div className="collapsable-blocks">
                    <Collapsable title={'Что из себя представляет данный курс?'}>
                        <p>Базовый курс включает в себя теоретический минимум, необходимый для всех видов СФМ.</p>
                    </Collapsable>
                    <Collapsable title={'Для кого предназначен курс?'}>
                        <p>
                            Курс предназначен для тех субъектов, кто еще не знаком со сферой ПОД/ФТ и хотел бы ознакомиться с требованиями законодательства в отношении СФМ
                        </p>
                    </Collapsable>
                    <Collapsable title={'Длительность курса'}>
                        <p>
                            Курс состоит из 16 академических часов, которые разделены на два учебных дня.
                        </p>
                    </Collapsable>
                    <Collapsable title={'Стоимость курса'}>
                        <p>
                            1000000 тг
                        </p>
                    </Collapsable>
                    <Collapsable title={'Дата ближайшего курса'}>
                        <p>
                            21.10.2023
                        </p>
                    </Collapsable>
                    <Collapsable title={'Программа курса'}>
                        <p style={{lineHeight: '23px'}}>
                        1. Общая характеристика национальной системы противодействия отмыванию преступных доходов финансированию терроризма <br/>
                        2. Международная система противодействия отмыванию преступных доходов и финансированию терроризма <br/>
                        3. Нормы Закона Республики Казахстан от 28 августа 2009 года «О противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма <br/>
                        4. Государственный контроль/надзор за соблюдением законодательства Республики Казахстан о ПОД/ФТ <br/>
                        5. Подразделение финансовой разведки<br/>
                        6. Требования к внутренним нормативным документам<br/>
                        7. Требования к субъектам финансового мониторинга по подготовке и обучению в сфере ПОД/ФТ<br/>
                        8. Заключительная часть
                        </p>
                    </Collapsable>
                    <Collapsable title={'Дата ближайшего курса'}>
                        <p>
                            Доступ к просмотру записи лекции на 3 месяца, раздаточный материал, а также материалы лекции в личном кабинете
                        </p>
                    </Collapsable>
                </div>

                <h2>Процесс обучения</h2>
                <RoadList items={[
                    'Подача заявки',
                    'Оплата',
                    'Предоставление доступа к Личному кабинету',
                    'Добавление в закрытый чат с лектором',
                    'Обучение',
                    'Выдача сертификатов'
                ]}/>

                <h2>Лекторы</h2>
                <Lectors 
                    lectors={[
                        { img: lectorImg, name: 'Larry W.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                        { img: lectorImg, name: 'Larry W.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                        // { img: lectorImg, name: 'Larry W.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                        // { img: lectorImg, name: 'Larry W.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                    ]}
                />

                <h2>Отзывы</h2>
                <FeedBacks 
                    feedBacks={[
                        { img: lectorImg, name: 'Felipe M.1', text: '"Мне очень понравился гибкий график курсов. Я могу подстроить обучение под свое расписание и настроение."'},
                        { img: lectorImg, name: 'Felipe M.2', text: '"Мне очень понравился гибкий график курсов. Я могу подстроить обучение под свое расписание и настроение."'},
                        { img: lectorImg, name: 'Felipe M.3', text: '"Мне очень понравился гибкий график курсов. Я могу подстроить обучение под свое расписание и настроение."'},
                        { img: lectorImg, name: 'Felipe M.4', text: '"Мне очень понравился гибкий график курсов. Я могу подстроить обучение под свое расписание и настроение."'},
                        { img: lectorImg, name: 'Felipe M.5', text: '"Мне очень понравился гибкий график курсов. Я могу подстроить обучение под свое расписание и настроение."'},
                        // { img: letorImg, name: 'Felipe M.6', text: '"Мне очень понравился гибкий график курсов. Я могу подстроить обучение под свое расписание и настроение."'},
                    ]}
                />

                <div className='blue-btn'>
                    <div>
                        Подать заявку
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}



export default BasicCourse;