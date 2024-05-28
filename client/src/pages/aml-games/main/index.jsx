import React, { useState, useEffect } from 'react';

import './style.scss';
import ringImage from './../assets/ring-image.png';
import { NavbarProfile } from '../navbar';
import { FaChevronRight  } from "react-icons/fa6";

import { levels } from './mockDatas';
import { MdOutlineAlternateEmail } from 'react-icons/md';

function GameMain() {
    const [tabIndex, setTabIndex] = useState(1);
    const tabNames = ['Материал курса', 'Отметки', 'Информация о курсе'];

    return ( 
        <div className="game-main">
            <NavbarProfile />
            <div className="container">

                <div className="header">
                    <img src={ringImage} alt="" />
                    <h1>Добро пожаловать в симулятор компании в сфере ПОД/ФТ!</h1>
                    <div className="desc">
                        <div className="title">Описание компании и задачи игры</div>
                        <div>Желаем успехов в освоении новых знаний в области противодействия отмыванию денег и финансированию терроризма.</div>
                        <div><span>Ваша главная задача</span> - внедрить внутреннюю политику в сфере ПОД/ФТ.</div>

                    </div>
                </div>

                <section>
                    <div className="left">
                        <div className="role-name">Ювелирный магазин</div>
                        <div className="navigation">
                            <div 
                                className={`${tabIndex === 1 ? 'active' : ''}`}
                                onClick={(e) => setTabIndex(1)}
                            >
                                <FaChevronRight />
                                <div>Материал курса</div>
                            </div>
                            <div 
                                className={`${tabIndex === 2 ? 'active' : ''}`}
                                onClick={(e) => setTabIndex(2)}
                            >
                                <FaChevronRight />
                                <div>Отметки</div>
                            </div>
                            <div 
                                className={`${tabIndex === 3 ? 'active' : ''}`}
                                onClick={(e) => setTabIndex(3)}
                            >
                                <FaChevronRight />
                                <div>Информация о курсе</div>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <h3>Описание</h3>
                        <p>Вы открыли ювелирный салон, осуществляющий деятельность в сфере купли-продажи ювелирных изделий, и, следовательно, являетесь одним из субъектов финансового мониторинга. Ваш магазин пока еще не открылся и не проводил операций, но планируется запустить свою деятельность в ближайшее время.</p>
                        <p>Важно понимать, что ваша организация еще не настроила политику в сфере противодействия легализации доходов, полученных преступным путем, и финансированию терроризма (ПОД/ФТ). Ваши задачи включают разработку и внедрение всех необходимых мер для соблюдения требований законодательства о ПОД/ФТ.</p>

                        <div className="tab">
                            <div className="title">
                                <div className="inner">{tabNames[tabIndex-1]}</div>
                            </div>

                            {
                                tabIndex === 1 
                                    ? (
                                        <div className="levels">
                                            {
                                                levels.map((level, index) => {

                                                    return <LevelCard level={level} index={index} />;
                                                })
                                            }
                                            
                                        </div>
                                    )
                                : tabIndex === 2 
                                    ? (
                                        <div></div>
                                    )
                                : tabIndex === 3
                                    ? (
                                        <div></div>
                                    )
                                : null
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

const LevelCard = ({
    index,
    level
}) => {
    const [open, setOpen] = useState(false);
    
    return (
        <div className={`level ${open ? 'open' : ''}`} key={index}>
            <div className="name-row">
                <FaChevronRight onClick={(e) => setOpen(prev => !prev)}/>
                <div className='num'>{index + 1} уровень</div>
                <div className="name">{level.name}</div>
            </div>
            {
                open ? (
                    <div className="sublevels">
                        {
                            level.subLevels.map((subLevel, idx) => {

                                return <div>
                                    <MdOutlineAlternateEmail />
                                    <div className="sublevel-name">Уровень {index + 1}.{idx + 1} : {subLevel.name}</div>
                                </div>
                            })
                        }
                    </div>
                ) : null

            }
        </div>
    )
}

export default GameMain;