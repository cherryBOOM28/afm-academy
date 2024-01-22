import React, { useEffect, useState } from "react";
import cl from "./Management.module.css";
import DefaultHeader from "../../../components/defaultHeader/DefaultHeader";
import firstDirector from "../../../assets/images/1.svg";
import secondDirector from "../../../assets/images/2.svg";
import thirdDirector from "../../../assets/images/3.svg";
import forthDirector from "../../../assets/images/4.svg";
import fifthDirector from "../../../assets/images/5.svg";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";

import { useTranslation } from "react-i18next";

import { useStyle } from "../../../components/VisualModal/StyleContext";
import VisualModal from "../../../components/VisualModal/VisualModal";

function Management() {
  const { styles, open, setOpen } = useStyle();
  const [imagesHidden, setImagesHidden] = useState(false);
  const [letterInterval, setLetterInterval] = useState("standard");
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const textContentElement = document.querySelectorAll(".text-content");
    const size = styles.fontSize;
    setImagesHidden(!styles.showImage);

    if (textContentElement) {
      textContentElement.forEach((item) => {
        switch (size) {
          case "small":
            item.style.fontSize = "15px";
            item.style.lineHeight="17px";
            break;
          case "standard":
            item.style.fontSize = "20px";
            item.style.lineHeight="22px";
            break;
          case "large":
            item.style.fontSize = "24px";
            item.style.lineHeight="26px";
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
      containerElement.classList.remove("light-mode", "dark-mode", "inverted-mode");
    }

    const {colorMode} = styles;

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

  return (
    <div className={`${cl.managementWrapper} text-content`}>
      <VisualModal
        open={openVisualModal}
        onRemoveImages={handleRemoveImages}
        onShowImages={handleShowImages}
        onFontFamily={() => {}}
        onIntervalChange={() => {}}
        styles={styles}
      />
      <Header dark={true} handleOpenVisualModal={handleOpenVisualModal} />
      <div className={cl.container}>
        <div
          className="interval"
          style={{ letterSpacing: getLetterSpacing(letterInterval) }}
        >
          <h1 className={`${cl.headline} text-content`}>
            {t("board of directors")}
          </h1>
          <div className={cl.boardOfDirectors}>
            <div className={cl.director}>
              {!imagesHidden && <img src={firstDirector} alt="" />}
              <p className={`${cl.name} text-content`}>{t("firstDirector")}</p>
              <p className={`${cl.post} text-content`}>{t("descFirstDir")}</p>
            </div>
            {/* <div className={cl.director}>
                        <img src={secondDirector} alt="" />
                        <p className={cl.name}>Садырбеков Габит Амангельдиевич</p>
                        <p className={cl.post}>Первый заместитель Председателя Агентства Республики Казахстан по финансовому мониторингу, член Совета директоров</p>
                    </div> */}
            <div className={cl.director}>
              {!imagesHidden && <img src={thirdDirector} alt="" />}
              <p className={`${cl.name} text-content`}>{t("secondDirector")}</p>
              <p className={`${cl.post} text-content`}>{t("descSecondDir")}</p>
            </div>
            <div className={cl.director}>
              {!imagesHidden && <img src={forthDirector} alt="" />}
              <p className={`${cl.name} text-content`}>{t("therdDirector")}</p>
              <p className={`${cl.post} text-content`}>{t("descTherdDir")}</p>
            </div>
            <div className={cl.director}>
              {!imagesHidden && <img src={fifthDirector} alt="" />}
              <p className={`${cl.name} text-content`}>{t("fourthDirector")}</p>
              <p className={`${cl.post} text-content`}>{t("descFourthDir")}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Management;
