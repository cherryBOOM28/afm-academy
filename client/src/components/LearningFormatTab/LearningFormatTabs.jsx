import React, { useState, useRef, useEffect } from "react";
import cl from "./Tabs.module.css";
import Button from "../UI/button/Button";
// import courseImg from '../../assets/images/course.png';
import courseImg from "../../assets/icons/remote.svg";
import courseImg2 from "../../assets/icons/online-education.svg";
import courseImg3 from "../../assets/icons/offline.svg";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { useStyle } from "../../components/VisualModal/StyleContext";
import VisualModal from "../../components/VisualModal/VisualModal";
import './LearningFormat.scss';
import { useCategoryFormat  } from '../../pages/Context/Context';


function LearningFormatTabs({ text }) {
  const { styles } = useStyle();
  const { categoryFormat, handleChangeCategoryFormat } = useCategoryFormat();

  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState(1);
  const [imagesHidden, setImagesHidden] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const content = container.querySelector(".content");
    const maxLines = 3;

    if (container.scrollHeight > container.clientHeight) {
      while (
        container.scrollHeight > container.clientHeight &&
        content.clientHeight > maxLines * content.offsetHeight
      ) {
        content.textContent = content.textContent.replace(/\W*\s(\S)*$/, "...");
      }
    }
  }, [text]);

  const handleRemoveImages = () => {
    console.log("Images hidden");

    setImagesHidden(true);
  };

  const handleShowImages = () => {
    setImagesHidden(false);
  };

  useEffect(() => {
    setImagesHidden(!styles.showImage);
  }, [styles.showImage]);

  return (
    <div
      className={cl.coursesContent}
      style={{
        background:
          styles.colorMode === "dark"
            ? "#000"
            : styles.colorMode === "light"
            ? "#fff"
            : styles.colorMode === "blue"
            ? "#9dd1ff"
            : "#000",
      }}
    >
      <VisualModal
        onRemoveImages={handleRemoveImages}
        onShowImages={handleShowImages}
      />
      <div
        className={cl.tabHeader}
        style={{
          background:
            styles.colorMode === "dark"
              ? "#000"
              : styles.colorMode === "light"
              ? "#fff"
              : styles.colorMode === "blue"
              ? "#9dd1ff"
              : "#000",
        }}
      >
        <div
          className={
            activeTab === 1 ? cl.btnTab + " " + cl.activeTab : cl.btnTab
          }
          style={{
            color: activeTab === 1 ? "#03094e" : "",
            width: activeTab === 1 ? "100%" : "",
            boxShadow: activeTab === 1 ? "4px 4px 4px 4px rgba(1, 1, 0.25, 0.25)" : "",
            fontWeight: activeTab === 1 ? "600" : "",
            background:
              styles.colorMode === "dark"
                ? "#000"
                : styles.colorMode === "light"
                ? "#fff"
                : styles.colorMode === "blue"
                ? "#9dd1ff"
                : "#000",
          }}
          onClick={() => handleTabClick(1)}
        >
          {!imagesHidden && <img style={{width:'18%',}} src={courseImg} alt="" />}
          <div className="nameTab">
          {t("remote")}
          </div>
        </div>
        <div
          className={
            activeTab === 2 ? cl.btnTab + " " + cl.activeTab : cl.btnTab
          }
          style={{
            color: activeTab === 2 ? "#03094e" : "",
            width: activeTab === 2 ? "100%" : "",
            boxShadow: activeTab === 2 ? "4px 4px 4px 4px rgba(1, 1, 0.25, 0.25)" : "",
            fontWeight: activeTab === 2 ? "600" : "",
            background:
              styles.colorMode === "dark"
                ? "#000"
                : styles.colorMode === "light"
                ? "#fff"
                : styles.colorMode === "blue"
                ? "#9dd1ff"
                : "#000",
          }}
          onClick={() => handleTabClick(2)}
        >
          {!imagesHidden && <img style={{width:'18%',}} src={courseImg2} alt="" />}
          <div className="nameTab">
            {t("online")}
          </div>
        </div>
        <div
          className={
            activeTab === 3 ? cl.btnTab + " " + cl.activeTab : cl.btnTab
          }
          style={{
            color: activeTab === 3 ? "#03094e" : "",
            width: activeTab === 3 ? "100%" : "",
            boxShadow: activeTab === 3 ? "4px 4px 4px 4px rgba(1, 1, 0.25, 0.25)" : "",
            fontWeight: activeTab === 3 ? "600" : "",
            background:
              styles.colorMode === "dark"
                ? "#000"
                : styles.colorMode === "light"
                ? "#fff"
                : styles.colorMode === "blue"
                ? "#9dd1ff"
                : "#000",
          }}
          onClick={() => handleTabClick(3)}
        >
          {!imagesHidden && <img style={{width:'18%',}} src={courseImg3} alt="" />}
          <div className="nameTab">
            {t("offline")}
          </div>
        </div>
        
      </div>
      <div
        className={cl.tabContent}
        style={{
          background:
            styles.colorMode === "dark"
              ? "#000"
              : styles.colorMode === "light"
              ? "#fff"
              : styles.colorMode === "blue"
              ? "#9dd1ff"
              : "#000",
          color: styles.colorMode == "dark" ? "#FFF" : "#000",
        }}
      >
        {activeTab === 1 && (
          <div
            className={cl.courses__info}
            ref={containerRef}
            style={{ maxHeight: "fit-content" }}
          >
            <p
              className={cl.course__headline}
              style={{
                background:
                  styles.colorMode === "dark"
                    ? "#000"
                    : styles.colorMode === "light"
                    ? "#fff"
                    : styles.colorMode === "blue"
                    ? "#9dd1ff"
                    : "#000",
                color:
                  styles.colorMode === "dark"
                    ? "#fff"
                    : styles.colorMode === "light"
                    ? "#343434"
                    : styles.colorMode === "blue"
                    ? "#063462"
                    : "#000",
              }}
            >
              {t("description of the remote")}
            </p>
            <p
              className={cl.course__text}
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 6,
                WebkitBoxOrient: "vertical",
                color:
                  styles.colorMode === "dark"
                    ? "#fff"
                    : styles.colorMode === "light"
                    ? "#343434"
                    : styles.colorMode === "blue"
                    ? "#063462"
                    : "#000",
              }}
            >
              {" "}
              {t("descRemote")}
            </p>
            <Link to="/courses/catalog#top" style={{ textDecoration: "none" }}>
              <Button onClick={handleChangeCategoryFormat('Дистанционно')} className={cl.more}>{t("go to catalog")}</Button>
            </Link>
          </div>
        )}
        {activeTab === 2 && (
          <div className={cl.courses__info}>
            <p
              className={cl.course__headline}
              style={{
                background:
                  styles.colorMode === "dark"
                    ? "#000"
                    : styles.colorMode === "light"
                    ? "#fff"
                    : styles.colorMode === "blue"
                    ? "#9dd1ff"
                    : "#000",
                color:
                  styles.colorMode === "dark"
                    ? "#fff"
                    : styles.colorMode === "light"
                    ? "#343434"
                    : styles.colorMode === "blue"
                    ? "#063462"
                    : "#000",
              }}
            >
              {t("description of the online")}
            </p>
            <p
              className={cl.course__text}
              style={{
                color:
                  styles.colorMode === "dark"
                    ? "#fff"
                    : styles.colorMode === "light"
                    ? "#343434"
                    : styles.colorMode === "blue"
                    ? "#063462"
                    : "#000",
              }}
            >
              {t("descOnline")}
            </p>
            <Link to="/courses/catalog#top" style={{ textDecoration: "none" }}>
              <Button onClick={handleChangeCategoryFormat('Онлайн')} className={cl.more}>{t("go to catalog")}</Button>
            </Link>
          </div>
        )}
        {activeTab === 3 && (
          <div className={cl.courses__info}>
            <p
              className={cl.course__headline}
              style={{
                background:
                  styles.colorMode === "dark"
                    ? "#000"
                    : styles.colorMode === "light"
                    ? "#fff"
                    : styles.colorMode === "blue"
                    ? "#9dd1ff"
                    : "#000",
                color:
                  styles.colorMode === "dark"
                    ? "#fff"
                    : styles.colorMode === "light"
                    ? "#343434"
                    : styles.colorMode === "blue"
                    ? "#063462"
                    : "#000",
              }}
            >
              {t("description of the offline")}
            </p>
            <p
              className={cl.course__text}
              style={{
                color:
                  styles.colorMode === "dark"
                    ? "#fff"
                    : styles.colorMode === "light"
                    ? "#343434"
                    : styles.colorMode === "blue"
                    ? "#063462"
                    : "#000",
              }}
            >
              {t("descOffline")}
            </p>
            <Link to="/courses/catalog#top" style={{ textDecoration: "none" }}>
              <Button className={cl.more}>{t("go to catalog")}</Button>
            </Link>
          </div>
        )}
       </div>
    </div>
  );
}

export default LearningFormatTabs;
