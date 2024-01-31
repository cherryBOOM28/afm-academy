import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cl from "./Structure.module.css";
import data_ru from "./structureData ru.json";
import data_kz from "./structureData kz.json";
import data_eng from "./structureData eng.json";
import DefaultHeader from "../../../components/defaultHeader/DefaultHeader";
import lineL from "../../../assets/icons/lineL.svg";
import lineR from "../../../assets/icons/lineR.svg";
import Footer from "../../../components/footer/Footer";
import Dropdown from "../../../components/dropdown/Dropdown";
import Header from "../../../components/header/Header";
import { useTranslation } from "react-i18next";

import { useStyle } from "../../../components/VisualModal/StyleContext";
import VisualModal from "../../../components/VisualModal/VisualModal";

function Structure() {
  const { styles, open, setOpen, userEntry, checkStyle } = useStyle();
  const [imagesHidden, setImagesHidden] = useState(false);
  const [letterInterval, setLetterInterval] = useState("standard");
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    console.log(checkStyle)
    if(!checkStyle) return;
    console.log(userEntry)
    if (userEntry) return; 
    const textContentElement = document.querySelectorAll(".text-content");
    const size = styles.fontSize;
    setImagesHidden(!styles.showImage);

    if (textContentElement) {
      textContentElement.forEach((item) => {
        switch (size) {
          case "small":
            item.style.fontSize = "15px";
            item.style.lineHeight = "17px";
            break;
          case "standard":
            item.style.fontSize = "20px";
            item.style.lineHeight = "22px";
            break;
          case "large":
            item.style.fontSize = "24px";
            item.style.lineHeight = "26px";
            break;
          default:
            break;
        }
      });
    }

    handleColorModeChange();
  }, []);
  const handleColorModeChange = (mode) => {
    // Remove previous color mode classes
    const containerElement = document.querySelector(".text-content");
    if (containerElement) {
      containerElement.classList.remove(
        "light-mode",
        "dark-mode",
        "inverted-mode"
      );
    }

    const { colorMode } = styles;

    if (containerElement) {
      containerElement.classList.add(colorMode + "-mode");
    }
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const handleOpenVisualModal = () => {
    console.log("OPEN");
    setOpenVisualModal((prev) => !prev);
    setOpen((prev) => !prev);
  };
  const [openVisualModal, setOpenVisualModal] = useState(open);

  const handleRemoveImages = () => {
    console.log("Images hidden");

    setImagesHidden(true);
  };

  const handleShowImages = () => {
    setImagesHidden(false);
  };

  const handleIntervalChange = (interval) => {
    console.log("Interval changed");
    setLetterInterval(interval);
  };

  const getShowImage = () => {
    return imagesHidden;
  };

  const getLetterSpacing = (interval) => {
    interval = styles.letterInterval;

    switch (interval) {
      case "medium":
        return "2px";
      case "large":
        return "4px";
      default:
        return "1px";
    }
  };
  useEffect(() => {
    const textContentElement = document.querySelectorAll(".text-content");
    const family = styles.fontFamily;

    if (textContentElement) {
      textContentElement.forEach((item) => {
        if (family) {
          item.style.fontFamily = family;
        }
      });
    }
  }, [styles.fontFamily]);

  const cardsData = (
    currentLanguage === "ru"
      ? data_ru
      : currentLanguage === "kz"
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
                    content={
                    <div>
                           <a> {t('contentThirdDiv')} </a> 
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
