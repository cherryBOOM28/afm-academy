import React, { useState, useEffect } from 'react';

import './style.scss';

import { FaArrowLeft, FaRegNewspaper } from "react-icons/fa6";
import { FaCheckCircle, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { LuTimerReset } from "react-icons/lu";
import levelLogo from './level-logo.png';
import ringImg from './ring-image.png';
import avatarImg from './avatar-image.png';
import { NavbarProfile } from '../navbar';
import { Link, useNavigate } from 'react-router-dom';

function GameProfile() {
    return ( 
        <div className="game-profile">
            <NavbarProfile />
            <div className="container">
                <section className="main">
                    <button className="nav-back-btn">
                        <div><FaArrowLeft /></div>
                        <span>Назад</span>
                    </button>

                    <div className="header">
                        <div className="subject-role">
                            <img src={ringImg} alt="" />
                            <div className="info">
                                <div className="name">Ювелирный магазин</div>
                                <div className="date">12.03.2024 - 12.04.2024</div>
                                <button>Узнать больше</button>
                            </div>
                        </div>

                        <div className="analytic-block">
                            <div className="analytic-container">
                                <div className="title">
                                    <LuTimerReset />
                                    <span>Аналитика игры</span>
                                </div>

                                <div className="levels">
                                    <div className="all">
                                        <div className="logo">
                                            <FaRegNewspaper />
                                        </div>
                                        <div>Уровни</div>
                                        <div>6</div>
                                    </div>
                                    <div className="finished">
                                        <div className="logo">
                                            <FaCheckCircle />
                                        </div>
                                        <div>Завершенные</div>
                                        <div>6</div>
                                    </div>
                                </div>

                                <div className="finish-progress">
                                    <span>Уровень завершения</span>
                                    <div>33%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="levels-block">
                        <div className="title">
                            <span>Уровни</span>
                            <div className="show-all">Показать все</div>
                        </div>

                        <div className="levels">
                            <LevelCard 
                                color="#80D473" 
                                progress={20}
                                name={'Организация внутреннего контроля'}
                                level={1}
                                logo={levelLogo}
                            />
                            <LevelCard 
                                color="#1F3C88" 
                                progress={100}
                                name={'Риск-ориентированный подход'}
                                level={2}
                                logo={levelLogo}
                            />
                            <LevelCard 
                                color="#E16666" 
                                progress={50}
                                name={'Надлежащая проверка клиента'}
                                level={3}
                                logo={levelLogo}
                            />
                        </div>

                        <div className="recomendations-block">
                            <div className="title">Рекомендации</div>
                            <div className="recomendations">
                                <RecomendationCard />
                                <RecomendationCard />
                                <RecomendationCard />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="right-bar">
                    <div className="info-block">
                        <div className="avatar">
                            <img src={avatarImg} alt="" />
                        </div>
                        <div className="info">
                            <div className="name">
                                Индира
                            </div>

                            <div className="fio">
                                <div>Фамилия: <span>Саматова</span></div>
                                <div>Имя: <span>Индира</span></div>
                                <div>Отчество: <span>Куандыковна</span></div>
                                <div>Дата: <span>06.07.1990г.</span></div>
                                <div>ИИН: <span>900706650435</span></div>
                            </div>

                            <div className='adv-info'>
                                <div>
                                    <div className="title">Период осуществления деятельности</div>
                                    <div>
                                        <div>Дата начала осуществления деятельности: <span>01.05.2024</span></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="title">Адрес</div>
                                    <div>
                                        <div>Почтовый индекс: <span>01.05.2024</span></div>
                                        <div>Место положение: <span>Республика Казахстан, Астана</span></div>
                                        <div>Название улицы: <span>Мангилик Ел</span></div>
                                        <div>Номер дома: <span>53/1</span></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="title">Вид субъекта финансового мониторинга</div>
                                    <div>
                                        <div>индивидуальные предприниматели и юридические лица, осуществляющие операции с драгоценными металлами и драгоценными камнями, ювелирными изделиями из них</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="calendar">
                        <div className="title">
                            <div className="date">Май 2024</div>
                            <div className="actions">
                                <div className="prev"><FaAngleLeft /></div>
                                <div className="next"><FaAngleRight /></div>
                            </div>
                        </div>
                        <div className='week'>
                            <div className='active'>
                                <div>Пн</div>
                                <div>27</div>
                            </div>
                            <div>
                                <div>Вт</div>
                                <div>28</div>
                            </div>
                            <div>
                                <div>Ср</div>
                                <div>29</div>
                            </div>
                            <div>
                                <div>Чт</div>
                                <div>30</div>
                            </div>
                            <div>
                                <div>Пт</div>
                                <div>31</div>
                            </div>
                            <div>
                                <div>Сб</div>
                                <div>1</div>
                            </div>
                            <div>
                                <div>Вс</div>
                                <div>2</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

const LevelCard = ({
    color,
    progress,
    name,
    level,
    logo
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/courses/aml-games/game/read/${1}/${level}/1/`);
    }

    return (
        <div className="level-card" onClick={(e) => handleClick()}>
            <div className="left">
                <img src={logo} alt="" />
                <div className="info">
                    <div className="name">{name}</div>
                    <div className="step">Уровень {level}</div>
                </div>
            </div>
            <div className="progress-bar-container">
                <div className="progress" style={{borderColor: color}}>
                    <div className="fill" style={{width: `${progress}%`, backgroundColor: color}}></div>
                </div>
                <div className="percentage">{progress}%</div>
            </div>
        </div>
    )
}

const RecomendationCard = ({

}) => {

    return (
        <div className="recomendation">
            <div className="logo">
                <img src={levelLogo} alt="" />
            </div>
            <div className="name">Обменные пункты</div>
        </div>
    )
}

export default GameProfile;