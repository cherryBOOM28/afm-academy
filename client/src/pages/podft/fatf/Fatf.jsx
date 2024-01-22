import React, { useEffect, useState } from 'react';
import cl from "./Fatf.module.css";
import fatfImg from "../../../assets/images/fatf.svg";
import DefaultHeader from "../../../components/defaultHeader/DefaultHeader";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import { useTranslation } from "react-i18next";
import VisualModal from "../../../components/VisualModal/VisualModal";
import {
  StyleProvider,
  useStyle,
} from "../../../components/VisualModal/StyleContext";

function Fatf() {
  const { styles, open, setOpen } = useStyle();
  const [imagesHidden, setImagesHidden] = useState(false);
  const { t } = useTranslation();
  const [letterInterval, setLetterInterval] = useState("standard");

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

  useEffect(() => {
    const textContentElement = document.querySelectorAll(".text-content");
    const size = styles.fontSize;
    console.log(styles.showImage)
    setImagesHidden(!styles.showImage)
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

}, [])



  const handleCloseVisualModal = () => {
    setOpenVisualModal(false);
  };

  const handleIntervalChange = (interval) => {
    console.log("Interval changed");
    setLetterInterval(interval);
  };
  const handleShowImages = () => {
    setImagesHidden(false);
};

  const getLetterSpacing = (interval) => {
    interval = styles.letterInterval;

    switch (interval) {
        case 'medium':
            return '2px'; 
        case 'large':
            return '4px'; 
        default:
            return '1px'; 
    }
};

  return (
    <div className={`${cl.fatfWrapper} text-content`}>
      <VisualModal
        open={openVisualModal}
        onRemoveImages={handleRemoveImages} 
        onShowImages={handleShowImages} 
        onFontFamily={() => {}}
        onIntervalChange={() => {}}
        styles = {styles}
        />
                <Header dark={true} handleOpenVisualModal={handleOpenVisualModal} />            
      <div className={`${cl.container} text-content`}>
      <div className="interval" style={{ letterSpacing: getLetterSpacing(letterInterval) }}>
          <h1 className={`${cl.headline} text-content`}>{t("fatf")}</h1>
          <div className={`${cl.fatfContent} text-content`}>
          {!imagesHidden && (
            <img src={fatfImg} alt="fatfImg" style={{ height: "220px" }} />
            )}
            <div className={`${cl.fatfContentInner} text-content`}>
              <div className={`${cl.fatfBlock} text-content`}>
                <p className={`${cl.fatfBlockText} text-content`}>{t("descFatf1")}</p>
              </div>
              <div className={`${cl.fatfBlock} text-content`}>
                <p className={`${cl.fatfBlockText} text-content`}>{t("descFatf2")}</p>
              </div>
            </div>
          </div>
          <div className={`${cl.fatfText} text-content`}>
            <p className={`${cl.text} text-content`}>{t("descFatf3")}</p>
            <ul className={`${cl.list} text-content`}>
              <li>{t("descFatf4")}</li>
              <li>{t("descFatf5")}</li>
              <li>{t("descFatf6")}</li>
              <li>{t("descFatf7")}</li>
              <li>{t("descFatf8")}</li>
            </ul>
          </div>
          <div className={`${cl.block} text-content`}>
            <p className={`${cl.text} text-content`}>{t("descFatf9")}</p>
          </div>
          <div style={{ marginBottom: "100px" }}>
            <a
              href="https://www.fatf-gafi.org/en/home.html"
              style={{ color: "black" }}
            >
              {t("linkFatf")}
            </a>
          </div>
        </div>
        </div>

        <Footer />
      </div>
  );
}

export default Fatf;
