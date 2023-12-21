import React from 'react';
import cl from './Eag.module.css';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Footer from '../../../components/footer/Footer';
import eagImg from '../../../assets/images/eag.svg';
import eagGroup from '../../../assets/images/eagGroup.svg';
import Header from '../../../components/header/Header';


function Eag() {
    return (
        <div className={cl.eagWrapper}>
  
            <Header dark={true} />
            <div className={cl.container}>
                <h1 className={cl.headline}>ЕАГ</h1>
                <div className={cl.eagImgContent}>
                    <img src={eagImg} alt="eagImg" />
                    <p className={cl.eagImgTextFirst}>
                        Евразийская группа по противодействию легализации преступных доходов и финансированию терроризма (ЕАГ) — региональная группа по типу ФАТФ, государствами-участниками которой являются Беларусь, Индия, Казахстан, Китай, Кыргызстан, Россия, Таджикистан, Туркменистан и Узбекистан. Статус наблюдателя в ЕАГ предоставлен 15 государствам и 22 международным и региональным организациям. ЕАГ является ассоциированным членом ФАТФ.
                    </p>
                </div>
                <div className={cl.block}>
                        <p className={cl.text}>
                        ЕАГ была создана в 2004 году для стран Евразийского региона, не включенных в существующие региональные группы по типу ФАТФ, и призвана играть важную роль в снижении угрозы международного терроризма и обеспечении прозрачности, надежности и безопасности финансовых систем государств и их дальнейшей интеграции в международную инфраструктуру борьбы с ОД/ФТ.
                        </p>
                </div>
            </div>
            <div className={cl.groupWrapper}>
                <div className={cl.container}>
                <div className={cl.eagImgContent}>
                    <img src={eagGroup} alt="eagGroup" />
                    <div className={cl.eagImgText}>
                        <span>Основные задачи ЕАГ:</span>
                        <br></br>
                        <ul className={cl.eagDisc}>
                            <li>
                                оказание помощи государствам-членам в осуществлении 40 Рекомендаций ФАТФ;
                            </li>
                            <li>
                                разработка и проведение совместных мероприятий, направленных на борьбу с отмыванием денег и финансированием терроризма;
                            </li>
                            <li>
                                разработка и проведение совместных мероприятий, направленных на борьбу с отмыванием денег и финансированием терроризма;
                            </li>
                            <li>
                                осуществление программы взаимных оценок государств-членов на основе Рекомендаций ФАТФ 40, включая оценку эффективности законодательных и других мер, принятых в сфере усилий по ПОД / ФТ;
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cl.eagLastText}>
                    <ul className={cl.eagDisc}>
                        <li>
                        координация программ международного сотрудничества и технической помощи со специализированными международными организациями, органами и заинтересованными государствами;
                        </li>
                        <li>анализ тенденций в области отмывания денег и финансирования терроризма (типологии) и обмена передовой практикой борьбы с такими преступлениями с учетом региональных особенностей.</li>
                    </ul>
                </div>
                <div style={{marginBottom: '100px',}}>
                        <a href="https://eurasiangroup.org/ru" style={{color: 'black'}}>Ссылка на сайт ЕАГ</a>
                </div>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}

export default Eag;