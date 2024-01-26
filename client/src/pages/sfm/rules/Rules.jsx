import React, { useEffect, useState } from "react";
import cl from "./Rules.module.css";
import DefaultHeader from "../../../components/defaultHeader/DefaultHeader";
import Footer from "../../../components/footer/Footer";
import customerImg from "../../../assets/images/customer.svg";
import circleFirst from "../../../assets/images/r1.svg";
import circleSecond from "../../../assets/images/r2.svg";
import circleThird from "../../../assets/images/r3.svg";
import Header from "../../../components/header/Header";
import { useTranslation } from "react-i18next";
import { useStyle } from "../../../components/VisualModal/StyleContext";
import VisualModal from "../../../components/VisualModal/VisualModal";

import { t } from "i18next";

function Rules() {
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
    const textContentElement = document.querySelector(".text-content");
    const family = styles.fontFamily;

    if (family) {
      textContentElement.style.fontFamily = family;
    }
  }, []);

  return (
    <div className={`${cl.rulesWrapper} text-content`}
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
      <div className={`${cl.container} text-content`}>
        <div
          className="interval"
          style={{ letterSpacing: getLetterSpacing(letterInterval) }}
        >
          <h1
            className={`${cl.headline} text-content`}
            style={{
              color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",
            }}
          >
            {t("internal control rules")}
          </h1>
          <p
            className={`${cl.text} text-content`}
            style={{
              color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#343434" : styles.colorMode === "blue" ? "#063462" : "#000",
            }}
          >
            {t("descRules1")}
          </p>
          <div
            className={cl.rule}
            style={{
              background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
            }}
          >
            <div className={cl.line}></div>
            <p
              className={`${cl.ruleText} text-content`}
              style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",
              }}
            >
              {t("descRules2")}
            </p>
          </div>
          <p
            className={`${cl.text} text-content`}
            style={{
              color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",
            }}
          >
            {t("descRules3")}
          </p>
          <p
            className={`${cl.text} text-content`}
            style={{
              color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",
            }}
          >
            {t("descRules4")}
          </p>
          <div className={cl.ruleBlocks}>
            <div className={cl.block}>
              <p className={`${cl.blockText} text-content`}>
                {t("descRules5")}
              </p>
            </div>
            <div className={cl.block}>
              <p className={`${cl.blockText} text-content`}>
                {t("descRules6")}
              </p>
            </div>
            <div className={cl.block}>
              <p className={`${cl.blockText} text-content`}>
                {t("descRules7")}
              </p>
            </div>
            <div className={cl.block}>
              <p className={`${cl.blockText} text-content`}>
                {t("descRules8")}
              </p>
            </div>
            <div className={cl.block}>
              <p className={`${cl.blockText} text-content`}>
                {t("descRules9")}
              </p>
            </div>
          </div>
          <h1 className={`${cl.subtitle} text-content`}
          style={{
            color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#343434" : styles.colorMode === "blue" ? "#063462" : "#000",
          }}
          >{t("descRules10")}</h1>
          <div
            className={cl.customer}
            style={{
              background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f9f9f9" : styles.colorMode === "blue" ? "#9dd1ff91" : "#000"
            }}
          >
            <div className={cl.customerBlock}>
            {!imagesHidden &&(<img
                src={customerImg}
                alt="customerImg"
                style={{ height: "160px" }}
              />)}
              <p
                className={`${cl.customerText} text-content`}
                style={{
                  color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",
                }}
              >
                {t("descRules11")}
              </p>
            </div>
            <p
              className={`${cl.text} text-content`}
              style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",
              }}
            >
              {t("descRules12")}
            </p>
            <div className={cl.customerNumbersContent}>
              <div className={cl.customerBlock}>
                <div className={cl.customerNumber}
                style={{
                  background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
                }}
                >
                  <img
                    src={circleFirst}
                    alt="circleFirst"
                    className={cl.circleImg}
                  />
                  <p
                    className={`${cl.numberText} text-content`}
                    style={{
                      color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",
                    }}
                  >
                    {t("descRules13")}
                  </p>
                </div>
                <div className={cl.customerNumber}
                 style={{
                  background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
                }}
                >
                  <img src={circleSecond} alt="circleSecond" />
                  <p
                    className={`${cl.numberText} text-content`}
                    style={{
                      color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",
                    }}
                  >
                    {t("descRules14")}
                  </p>
                </div>
              </div>
              <div className={cl.customerNumberThird}
               style={{
                background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
              }}
              >
                <img src={circleThird} alt="circleThird" />
                <p
                  className={`${cl.numberText} text-content`}
                  style={{
                    color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",
                  }}
                >
                  {t("descRules15")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Rules;
