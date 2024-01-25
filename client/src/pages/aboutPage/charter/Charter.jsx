import React, { useEffect, useState } from "react";
import cl from "./Charter.module.css";
import DefaultHeader from "../../../components/defaultHeader/DefaultHeader";
import Footer from "../../../components/footer/Footer";
import pdf from "../../../assets/images/pdf.svg";
import DownloadPDF from "../../../components/pdfSaver/DownloadPDF";
import Header from "../../../components/header/Header";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

import { useStyle } from "../../../components/VisualModal/StyleContext";
import VisualModal from "../../../components/VisualModal/VisualModal";

function Charter() {
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
    <div className={`${cl.charterWrapper} text-content`}
    style={{
      background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
    }}
    >
      <VisualModal
        open={openVisualModal}
        onRemoveImages={handleRemoveImages}
        onShowImages={handleShowImages}
        onFontFamily={() => {}}
        onIntervalChange={() => {}}
        styles={styles}
      />
      <Header dark={styles.colorMode == "dark" ? false : true} handleOpenVisualModal={handleOpenVisualModal} />
      <div className={cl.container}>
      <div
          className="interval"
          style={{ letterSpacing: getLetterSpacing(letterInterval) }}
        >
        <h1 className={`${cl.headline} text-content`}
        style={{
          color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#343434" : styles.colorMode === "blue" ? "#063462" : "#000",
        }}
        >{t("regulation")}</h1>
        <DownloadPDF />
        <div className={cl.charterContent}>
        {!imagesHidden && (
          <img src={pdf} alt="" />
        )}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Charter;
