import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cl from './Structure.module.css';
import data_ru from './structureData ru.json';
import data_kz from './structureData kz.json';
import data_eng from './structureData eng.json';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import lineL from '../../../assets/icons/lineL.svg';
import lineR from '../../../assets/icons/lineR.svg';
import Footer from '../../../components/footer/Footer';
import Dropdown from '../../../components/dropdown/Dropdown';
import Header from '../../../components/header/Header';
import { useTranslation } from 'react-i18next';



function Structure() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const cardsData = (
        currentLanguage === 'ru'
          ? data_ru
          : currentLanguage === 'kz'
          ? data_kz
          : data_eng
      ).cards;

   if (!cardsData || cardsData.length === 0) {
    return <p>No cards data available.</p>;
  }

  // Check if the first card exists and has the 'id' property
  const firstCard = cardsData[0];
  if (!firstCard || !firstCard.id) {
    return <p>First card data is missing 'id' property.</p>;
  }

  const handleClick = (cardData) => {
    // console.log("User Information:", cardData);
  };
  

  return (
    <div className={cl.charterWrapper}>
        <Header dark={true}  />
    
        <div className={cl.container}>
            <h1 className={cl.headline}>{t('leadership of the Academy')}</h1>
            <div className={cl.charterContent}>
                <div className={cl.charterGrid}>
                    {/* Display the first card */}
                    <Link
                    className={`${cl.card__link} ${cl.firstCardContainer}`}
                    // to={{
                    //     pathname: `/structure/${firstCard.id}`,
                    //     state: { cardData: firstCard },
                    // }}
                    to={`/structure/${firstCard.id}`}
                    onClick={() => handleClick(firstCard)}
                    >
                        
                    <div className={cl.card}>
                        <p className={cl.card__title}>{firstCard.title}</p>
                        <img src={firstCard.photo} alt={firstCard.caption} className={cl.card__img} />
                        <p className={cl.card__text}>{firstCard.name}</p>
                    </div>
                    </Link>
                    <img src={lineL} alt="line" />
                    <img src={lineR} alt="line" />        
                    <div className={cl.bottomCardsGrid}>
                        {cardsData.slice(1).map((card, index) => (
                            // Check if the card exists and has the 'id' property
                            card && card.id ? (
                                <Link
                                    key={index}
                                    className={cl.card__link}
                                    // to={{
                                    // pathname: `/structure/${card.id}`,
                                    // state: { cardData: card },
                                    // }}
                                    to={`/structure/${card.id}`}
                                    onClick={() => handleClick(card)}
                                >
                                    <div className={cl.card}>
                                        <p className={cl.card__title}>{card.title}</p>
                                        <img src={card.photo} alt={card.caption} className={cl.card__img} />
                                        <p className={cl.card__text}>{card.name}</p>
                                    </div>
                                </Link>
                            ) : null
                        ))}
                    </div>
                </div>
            </div>
            <h1 className={cl.headline}>{t('divisions')}</h1>
            <div className={cl.accordion}>
                <Dropdown
                    title={t('titleFirstDiv')}
                    content={<div>
                        {t('contentFirstDiv')}
                        <div className={cl.accordionContent}>
                            <ul style={{listStyleType: 'disc'}}>
                                <li>
                                {t('contentFirstPointOneDiv')}
                                </li>
                                <li>
                                {t('contentFirstPointTwoDiv')}
                                </li>
                                <li>
                                {t('contentFirstPointThreeDiv')}
                                </li>
                            </ul>
                        </div>
                    </div>}
                />
                <Dropdown
                    title={t('titleSecondDiv')}
                    content={<div>
                       {t('contentSecondDiv')}  
                        <div className={cl.accordionContent}>
                            <ul style={{listStyleType: 'disc'}}>
                                <li>{t('contentSecondPointOneDiv')}</li>
                                <li>{t('contentSecondPointTwoDiv')}</li>
                                <li>{t('contentSecondPointThreeDiv')}</li>
                                <li>{t('contentsecondPointFourDiv')}</li>
                                <li>{t('contentSecondPointFiveDiv')}</li>
                            </ul>
                        </div>
                    </div>}
                />
                <Dropdown
                    title={t('titleThirdDiv')}
                    content={<div>
                            {t('contentThirdDiv')}  
                        <div className={cl.accordionContent}>
                            <ul className={cl.marked}>
                                <li>{t('contentThirdPointOneDiv')}</li>
                                <li>{t('contentThirdPointTwoDiv')}</li>
                                <li>{t('contentThirdPointThreeDiv')}</li>
                                <li>{t('contentThirdPointFourDiv')}</li>
                                <li>{t('contentThirdPointFiveDiv')}</li>
                            </ul> 
                        </div>                      
                    </div>}
                />
                </div>
                
        </div>
        <Footer />
    </div>
  );
}


export default Structure;
