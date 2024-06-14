import React from "react";
import { useTranslation } from "react-i18next";
import bookIcon from "../../../assets/icons/book.svg";
import laptopIcon from "../../../assets/icons/laptop.svg";
import accIcon from "../../../assets/icons/pacc.svg";
import realtionIcon from "../../../assets/icons/relation.svg";
import VideoPlayer from "../../../components/player/VideoPlayer";
import cl from "../Home.module.css";

const EducationSection = ({ imagesHidden, styles }) => {
  const { t } = useTranslation();
  
  return (
    <section className={cl.educationWrappwer} style={{ background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#1A2751" : styles.colorMode === "blue" ? "#9dd1ff" : "#000" }}>
      <div className={cl.container}>
        <p className={`${cl.headline} text-content`} style={{ color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#063462" : "#000" }}>
          {t("quality")}
        </p>
        <p className={`${cl.subtitle} text-content`} style={{ color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#063462" : "#000" }}>
          {t("advantages of academy")}
        </p>
        <div className={cl.education}>
          <div className={cl.advantages}>
            <div className={cl.groupAdvantages}>
              <div className={cl.advantages_box}>
                {!imagesHidden && <img src={accIcon} alt="acc" />}
                <p className={`${cl.advantages__text} text-content`} style={{ color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#063462" : "#000" }}>
                  {t("qualified experts")}
                </p>
              </div>
              <div className={cl.advantages_box}>
                {!imagesHidden && <img src={bookIcon} alt="acc" />}
                <p className={`${cl.advantages__text} text-content`} style={{ color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#063462" : "#000" }}>
                  {t("convenient learning format")}
                </p>
              </div>
            </div>
            <div className={cl.groupAdvantages}>
              <div className={cl.advantages_box}>
                {!imagesHidden && <img src={realtionIcon} alt="acc" />}
                <p className={`${cl.advantages__text} text-content`} style={{ color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#063462" : "#000" }}>
                  {t("close cooperation with AFM")}
                </p>
              </div>
              <div className={cl.advantages_box}>
                {!imagesHidden && <img src={laptopIcon} alt="acc" />}
                <p className={`${cl.advantages__text__last} text-content`} style={{ color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#063462" : "#000" }}>
                  {t("programs")}
                </p>
              </div>
            </div>
          </div>
          {!imagesHidden && <VideoPlayer className={cl.videoPlayer} />}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
