import React, { useEffect, useState } from "react";
import cl from "./Eag.module.css";
import DefaultHeader from "../../../components/defaultHeader/DefaultHeader";
import Footer from "../../../components/footer/Footer";
import eagImg from "../../../assets/images/eag.svg";
import eagGroup from "../../../assets/images/eagGroup.svg";
import Header from "../../../components/header/Header";
import VisualModal from "../../../components/VisualModal/VisualModal";

import { useTranslation } from "react-i18next";

import {
  StyleProvider,
  useStyle,
} from "../../../components/VisualModal/StyleContext";

function Eag() {
  const { styles, open, setOpen } = useStyle();
  const [imagesHidden, setImagesHidden] = useState(false);

  const handleShowImages = () => {
    setImagesHidden(false);
  };
  const handleRemoveImages = () => {
    console.log("Images hidden");

    setImagesHidden(true);
  };

  useEffect(() => {
    const textContentElement = document.querySelectorAll(".text-content");
    const size = styles.fontSize;
    setImagesHidden(!styles.showImage);

    console.log(styles);

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
      containerElement.classList.remove("light-mode", "dark-mode", "inverted-mode");
    }

    const {colorMode} = styles;

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

  const { t } = useTranslation();
  const [letterInterval, setLetterInterval] = useState("standard");

  const handleOpenVisualModal = () => {
    console.log("OPEN");
    setOpenVisualModal((prev) => !prev);
    setOpen((prev) => !prev);

  };
  const [openVisualModal, setOpenVisualModal] = useState(open);
  const handleCloseVisualModal = () => {
    setOpenVisualModal(false);
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
    <div className={`${cl.eagWrapper} text-content`}>
      <VisualModal
        open={openVisualModal}
        onIntervalChange={() => {}}
        styles={styles}
        onRemoveImages={handleRemoveImages}
        onShowImages={handleShowImages}
      />

<Header dark={true} handleOpenVisualModal={handleOpenVisualModal} />            
      <div className={cl.container}>
        <div
          className="interval"
          style={{ letterSpacing: getLetterSpacing(letterInterval) }}
        >
          <h1 className={`${cl.headline} text-content`}>{t("eag")}</h1>
          <div className={`${cl.eagImgContent} text-content`}>
            {!imagesHidden ? <img src={eagImg} alt="eagImg" /> : null}
            <p className={`${cl.eagImgTextFirst} text-content`}>
              {t("descEag1")}
            </p>
          </div>
          <div className={`${cl.block} text-content`}>
            <p className={`${cl.text} text-content`}>{t("descEag2")}</p>
          </div>
        </div>
        <div className={`${cl.groupWrapper} text-content`}>
          <div className={`${cl.container} text-content`}>
            <div className={`${cl.eagImgContent} text-content`}>
            {!imagesHidden ?<img src={eagGroup} alt="eagGroup" />: null}
              <div className={`${cl.eagImgText} text-content`}>
                <span>{t("descEag3")}</span>
                <br></br>
                <ul className={`${cl.eagDisc} text-content`}>
                  <li className={`text-content`}>{t("descEag4")}</li>
                  <li className={`text-content`}>{t("descEag5")}</li>
                  <li className={`text-content`}>{t("descEag6")}</li>
                </ul>
              </div>
            </div>
            <div className={`${cl.eagLastText} text-content`}>
              <ul className={`${cl.eagDisc} text-content`}>
                <li className={`text-content`}>{t("descEag7")}</li>
                <li className={`text-content`}>{t("descEag4")}</li>
              </ul>
            </div>
            <div style={{ marginBottom: "100px" }}>
              <a href="https://eurasiangroup.org/ru" style={{ color: "black" }}>
                {t("linkEag")}
              </a>
            </div>
          </div>
        </div>
        </div>

        <Footer />
      </div>
  );
}

export default Eag;
