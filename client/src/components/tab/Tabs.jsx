import React, { useState, useRef, useEffect } from "react";
import cl from "./Tabs.module.css";
import Button from "../UI/button/Button";
// import courseImg from '../../assets/images/course.png';
import courseImg from "../../assets/icons/course.svg";
import courseImg2 from "../../assets/icons/image 27.svg";
import courseImg3 from "../../assets/icons/image 28.svg";
import courseImg4 from "../../assets/icons/image 29.svg";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { useStyle } from "../../components/VisualModal/StyleContext";
import VisualModal from "../../components/VisualModal/VisualModal";

function Tabs({ text }) {
  const { styles } = useStyle();

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
            width: activeTab === 1 ? "104%" : "",
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
          {!imagesHidden && <img src={courseImg} alt="" />}
          {t("core")}
        </div>
        <div
          className={
            activeTab === 2 ? cl.btnTab + " " + cl.activeTab : cl.btnTab
          }
          style={{
            color: activeTab === 2 ? "#03094e" : "",
            width: activeTab === 2 ? "104%" : "",
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
          {!imagesHidden && <img src={courseImg2} alt="" />}
          {t("specialized")}
        </div>
        <div
          className={
            activeTab === 3 ? cl.btnTab + " " + cl.activeTab : cl.btnTab
          }
          style={{
            color: activeTab === 3 ? "#03094e" : "",
            width: activeTab === 3 ? "104%" : "",
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
          {!imagesHidden && <img src={courseImg3} alt="" />}
          {t("advanced")}
        </div>
        <div
          className={
            activeTab === 4 ? cl.btnTab + " " + cl.activeTab : cl.btnTab
          }
          style={{
            color: activeTab === 4 ? "#03094e" : "",
            width: activeTab === 4 ? "104%" : "",
            fontWeight: activeTab === 4 ? "600" : "",
            background:
              styles.colorMode === "dark"
                ? "#000"
                : styles.colorMode === "light"
                ? "#fff"
                : styles.colorMode === "blue"
                ? "#9dd1ff"
                : "#000",
          }}
          onClick={() => handleTabClick(4)}
        >
          {!imagesHidden && <img src={courseImg4} alt="" />}
          {t("thematic")}
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
              {t("description of the basic course")}
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
              {t("descBasic")}
            </p>
            <Link to="/courses/8" style={{ textDecoration: "none" }}>
              <Button className={cl.more}>{t("read more")}</Button>
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
              {t("description of the specialized course")}
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
              {t("descSpec")}
            </p>
            <Link to="/courses/catalog#top" style={{ textDecoration: "none" }}>
              <Button className={cl.more}>{t("read more")}</Button>
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
              {t("description of the advanced course")}
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
              {t("descAdv")}
            </p>
            <Link to="/courses/catalog#top" style={{ textDecoration: "none" }}>
              <Button className={cl.more}>{t("read more")}</Button>
            </Link>
          </div>
        )}
        {activeTab === 4 && (
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
              {t("description of the thematic course")}
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
              {t("descThe")}
            </p>
            <Link to="/courses/catalog#top" style={{ textDecoration: "none" }}>
              <Button className={cl.more}>{t("read more")}</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
