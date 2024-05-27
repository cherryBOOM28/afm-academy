import React, { useState, useEffect } from 'react';

import './style.scss';
import NavbarGame from '../../GamePage/NavbarGame';

import { FaArrowLeft } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import amlLogo from './aml-logo.svg';

function GameProfile() {
    return ( 
        <div className="game-profile">
            <div className="nav-bar">
                <div className="logo">
                    <img src={amlLogo} alt="" />
                    <div>Академия финансового мониторинга</div>
                </div>
                <div className="navigation">
                    <div className="lang">RU</div>
                    <div className="profile">
                        <div className="icon">
                            <FiUser />
                        </div>
                        <span>Профиль</span>
                    </div>
                </div>
            </div>
            <div className="container">
                <section className="main">
                    <button className="nav-back-btn">
                        <div><FaArrowLeft /></div>
                        <span>Назад</span>
                    </button>

                    <div className="header">
                        <div className="subject-role"></div>
                        <div className="analytic-block"></div>
                    </div>

                    <div className="levels-block">
                        <div className="title">
                            <span>Уровни</span>
                            <div className="show-all">Показать все</div>
                        </div>

                        <div className="levels">
                            <div className="level-card">
                                <div className="logo"></div>
                                <div className="info">
                                    <div className="name">Организация внутреннего контроля</div>
                                    <div className="step">Уровень 1</div>
                                </div>
                                <div className="progress-bar">

                                </div>
                            </div>
                        </div>

                        <div className="recomendations">
                            <div className="recomendation">
                                <div className="logo"></div>
                                <div className="name">Обменные пункты</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="right-bar"></section>
            </div>
        </div>
    );
}

export default GameProfile;