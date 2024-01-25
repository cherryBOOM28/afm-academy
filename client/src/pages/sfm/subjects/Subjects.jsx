import React, { useEffect, useState } from "react";
import cl from "./Subjects.module.css";
import DefaultHeader from "../../../components/defaultHeader/DefaultHeader";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";

import data_ru from "../../../components/data/subjectsData ru.json";
import data_kz from "../../../components/data/subjectsData kz.json";
import data_eng from "../../../components/data/subjectsData eng.json";

import { useTranslation } from "react-i18next";
import VisualModal from "../../../components/VisualModal/VisualModal";
import { useStyle } from "../../../components/VisualModal/StyleContext";

function Subjects() {
  const [imagesHidden, setImagesHidden] = useState(false);
  const { styles, open, setOpen } = useStyle();
  const [letterInterval, setLetterInterval] = useState("standard");
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    console.log(currentLanguage);

    const textContentElement = document.querySelectorAll(".text-content");
    const size = styles.fontSize;
    if (textContentElement) {
      textContentElement.forEach((item) => {
        switch (size) {
          case "small":
            item.style.fontSize = "15px";
            break;
          case "standard":
            item.style.fontSize = "20px";
            break;
          case "large":
            item.style.fontSize = "24px";
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
        "inverted-mode",
        "blue-mode"
      );
    }

    const { colorMode } = styles;

    if (containerElement) {
      containerElement.classList.add(colorMode + "-mode");
    }
  };
  useEffect(() => {
    const textContentElement = document.querySelector(".text-content");
    const family = styles.fontFamily;

    if (family) {
      textContentElement.style.fontFamily = family;
    }
  }, []);
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

  return (
    <div className={`${cl.subjectsWrapper} text-content`}
    style={{
      background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
    }}
    >
      <VisualModal
        open={openVisualModal}
        onRemoveImages={handleRemoveImages}
        onShowImages={handleShowImages}
        onIntervalChange={handleIntervalChange}
        styles={styles}
      />
      <Header
        dark={styles.colorMode == "dark" ? false : true}
        handleOpenVisualModal={handleOpenVisualModal}
      />
      <div className={cl.container}>
        <div
          className="interval"
          style={{ letterSpacing: getLetterSpacing(letterInterval) }}
        >
          <h1 className={`${cl.headline} text-content`}
          style={{
            color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#343434" : styles.colorMode === "blue" ? "#063462" : "#000",          }}
          >
            {t("types of subjects of financial monitoring")}
          </h1>
          <p className={`${cl.subjectsText} text-content`}
           style={{
            color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",          }}

          >{t("descSub1")}</p>
          <div className={`${cl.cardContent} text-content`}
          style={{
            background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f9f9f9" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
          }}
          >
            {(i18n.language === "ru"
              ? data_ru
              : i18n.language === "kz"
              ? data_kz
              : data_eng
            ).subjects.map((item) => (
              <div className={`${cl.card} text-content`} key={item.id}
              style={{
                background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f9f9f9" : styles.colorMode === "blue" ? "#9dd1ff" : "#000",
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",
              }}
              >
                <p className={`${cl.number} text-content`}
                
                style={{
                  background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f9f9f9" : styles.colorMode === "blue" ? "#9dd1ff" : "#000",
                  color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",
                }}
                >{item.number}</p>
                <p className={`${cl.text} text-content`}
                style={{
                  background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f9f9f9" : styles.colorMode === "blue" ? "#9dd1ff" : "#000",
                  color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",
                }}
                >{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Subjects;
