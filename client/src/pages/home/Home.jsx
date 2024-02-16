import React, { useEffect, useState } from "react";
import cl from "./Home.module.css";

import aboutUsPic from "../../assets/images/main.svg";
import accIcon from "../../assets/icons/pacc.svg";
import bookIcon from "../../assets/icons/book.svg";
import realtionIcon from "../../assets/icons/relation.svg";
import laptopIcon from "../../assets/icons/laptop.svg";
import backgroundVideoLight from "../../assets/video/bgvideo.mov";
import backgroundVideoDark from "../../assets/video/bgvideoDark.mov";
import Button from "../../components/UI/button/Button";
import Header from "../../components/header/Header";
import VideoPlayer from "../../components/player/VideoPlayer";
import Tabs from "../../components/tab/Tabs";
import NewsTab from "../../components/newsTab/NewsTab";
import FirstPartner from "../../assets/images/partner1.png";
import Footer from "../../components/footer/Footer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import basicCourse from "../../assets/icons/mdi_world-wide-web.svg";
import proCourse from "../../assets/icons/subway_book.svg";
import deepCourse from "../../assets/icons/simple-icons_progress.svg";
import upCourse from "../../assets/icons/ep_menu.svg";
import Navigation from "../../components/navigation/Navigation";
import VisualModal from "../../components/VisualModal/VisualModal";
import { useStyle } from "../../components/VisualModal/StyleContext";

import { useTranslation } from "react-i18next";
import { IoMdReturnLeft } from "react-icons/io";

function Home() {
  const navigate = useNavigate();
  const imageList = [
    { src: FirstPartner, alt: "Image 1" },
    { src: FirstPartner, alt: "Image 2" },
    { src: FirstPartner, alt: "Image 3" },
    { src: FirstPartner, alt: "Image 4" },
    { src: FirstPartner, alt: "Image 5" },
    { src: FirstPartner, alt: "Image 6" },
  ];
  const [removeBackground, setRemoveBackground] = useState(false);
  const toggleRemoveBackground = () => {
    setRemoveBackground((prevValue) => !prevValue);
  };

  const scrollToCourses = () => {
    const coursesSection = document.getElementById("coursesSection");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNews = () => {
    const newsSection = document.getElementById("newsSection");
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    // console.log(params);
    if (location.hash === "#coursesSection") {
      scrollToCourses();
    } else if (location.hash === "#newsSection") {
      scrollToNews();
    }

  }, []);

  const toAbout = () => {
    navigate("/about");
  };
  const { styles, open, setOpen, userEntry, checkStyle } = useStyle();
  const [imagesHidden, setImagesHidden] = useState(false);
  const [letterInterval, setLetterInterval] = useState("standard");
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [openVisualModal, setOpenVisualModal] = useState(open);
  const [activeTab, setActiveTab] = useState(1);

  const fontSizes = {
    small: {
      fontSize: "15px",
      lineHeight: "17px",
      caption: { fontSize: "18px", lineHeight: "20px" },
      subtitle: { fontSize: "14px", lineHeight: "16px" },
    },
    standard: {
      fontSize: "16px",
      lineHeight: "18px",
      caption: { fontSize: "26px", lineHeight: "28px" },
      subtitle: { fontSize: "18px", lineHeight: "20px" },
    },
    large: {
      fontSize: "24px",
      lineHeight: "26px",
      caption: { fontSize: "32px", lineHeight: "34px" },
      subtitle: { fontSize: "22px", lineHeight: "24px" },
    },
  };
  useEffect(() => {
    if (!checkStyle) return;
    console.log(userEntry);
    if (userEntry) return;

    const textContentElement = document.querySelectorAll(".text-content");
    const size = styles.fontSize;
    setImagesHidden(!styles.showImage);

    if (textContentElement) {
      textContentElement.forEach((item) => {
        switch (size) {
          case "small":
          case "large":
            // Use specified size for small and large modes
            item.style.fontSize = fontSizes[size].fontSize;
            item.style.lineHeight = fontSizes[size].lineHeight;

            // Adjust size for caption and subtitle in small and large modes
            if (item.classList.contains("caption")) {
              item.style.fontSize = fontSizes[size].caption.fontSize;
              item.style.lineHeight = fontSizes[size].caption.lineHeight;
            } else if (item.classList.contains("subtitle")) {
              item.style.fontSize = fontSizes[size].subtitle.fontSize;
              item.style.lineHeight = fontSizes[size].subtitle.lineHeight;
            }
            break;

          case "standard":
            // Use different sizes for different elements in standard mode
            if (item.classList.contains("caption")) {
              item.style.fontSize = fontSizes[size].caption.fontSize;
              item.style.lineHeight = fontSizes[size].caption.lineHeight;
            } else if (item.classList.contains("subtitle")) {
              item.style.fontSize = fontSizes[size].subtitle.fontSize;
              item.style.lineHeight = fontSizes[size].subtitle.lineHeight;
            } else {
              // Default size for other elements
              item.style.fontSize = fontSizes[size].fontSize;
              item.style.lineHeight = fontSizes[size].lineHeight;
            }
            break;

          default:
            break;
        }
      });
    }
    handleColorModeChange();
  }, [checkStyle, userEntry, styles, setImagesHidden, fontSizes]);
//handleColorModeChange();
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const handleOpenVisualModal = () => {
    console.log("OPEN");
    setOpenVisualModal((prev) => !prev);
    setOpen((prev) => !prev);
  };

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

  return (
    <div className={`${cl.homeWrapper} text-content`}
    // style={{
    //   background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f9f9f9" : styles.colorMode === "blue" ? "#9dd1ff" : "#000",
    //   zIndex: 0,
    // }}
    
    >
      <div
        className="interval"
        style={{ letterSpacing: getLetterSpacing(letterInterval) }}
      >
        <VisualModal
          open={openVisualModal}
          onRemoveImages={handleRemoveImages}
          onShowImages={handleShowImages}
          onFontFamily={() => {}}
          onIntervalChange={() => {}}
          styles={styles}
          dark={removeBackground}
        />
        <Header
          dark={false}
          handleOpenVisualModal={handleOpenVisualModal}
          style={{ letterSpacing: getLetterSpacing(letterInterval) }}
        />{" "}
        <section className={`${cl.aboutUs} text-content`}>
          <div className={cl.container}>
            
            <div
              className={`${cl.aboutUs__section} ${
                imagesHidden ? cl.darkBlueBackground : ""
              }`}
            >
              {!imagesHidden ? (
                <div className={cl.videoContainer}>
                  <video
                    autoPlay
                    loop
                    muted
                    className={`videoBackground ${cl.videoBackground}`}
                  >
                    {!styles.colorMode === "dark" ? (
                      <source src={backgroundVideoDark} type="video/mp4" />
                    ) : (
                      <source src={backgroundVideoLight} type="video/mp4" />
                    )}
                  </video>
                </div>
              ) : (
                <div className={cl.darkBackground}></div>
              )}
              {/* <img src={aboutUsPic} alt="About us" /> */}
              <div className={cl.aboutUs__content}>
                <p className={`${cl.aboutUs__headline} text-contnet`}
                >
                  AML ACADEMY
                </p>
                {/* <p className={cl.aboutUs__text}>Обучение для безопасности финансов</p> */}
                <p className={`${cl.aboutUs__text_small} text-content`}>
                  {t("our courses")}
                </p>
                <div className={`${cl.courses_boxes} text-content`}>
                  <Link to="/courses/catalog" style={{ textDecoration: "none" }}>
                    <div className={cl.aml_box}>
                      {!imagesHidden && <img src={basicCourse} alt="" />}
                      <p className={`${cl.course_box_name} text-content`}>
                        {t("education")}
                      </p>
                    </div>
                  </Link>
                  <Link to="/#" style={{ textDecoration: "none" }}>
                    <div className={cl.aml_box}>
                      {!imagesHidden && <img src={proCourse} alt="" />}
                      <p className={`${cl.course_box_name} text-content`}>
                        {t("ric")}
                      </p>
                    </div>
                  </Link>
                  <Link to="/#" style={{ textDecoration: "none" }}>
                    <div className={cl.aml_box}>
                      {!imagesHidden && <img src={deepCourse} alt="" />}
                      <p className={`${cl.course_box_name} text-content`}>
                        {t("it")}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={cl.educationWrappwer}
          style={{
            background:
              styles.colorMode === "dark"
                ? "#000"
                : styles.colorMode === "light"
                ? "#1A2751"
                : styles.colorMode === "blue"
                ? "#9dd1ff"
                : "#000",
          }}
        >
          <div className={cl.container}>
            <p
              className={`${cl.headline} text-content`}
              style={{
                color:
                  styles.colorMode === "dark"
                    ? "#fff"
                    : styles.colorMode === "light"
                    ? "#fff"
                    : styles.colorMode === "blue"
                    ? "#063462"
                    : "#000",
              }}
            >
              {t("quality")}
            </p>
            <p className={`${cl.subtitle} text-content`}
            style={{
              color:
                styles.colorMode === "dark"
                  ? "#fff"
                  : styles.colorMode === "light"
                  ? "#fff"
                  : styles.colorMode === "blue"
                  ? "#063462"
                  : "#000",
            }}
            >
              {t("advantages of academy")}
            </p>
            <div className={cl.education}>
              <div className={cl.advantages}>
                <div className={cl.advantages_box}>
                  {!imagesHidden && <img src={accIcon} alt="acc" />}
                  <p className={`${cl.advantages__text} text-content`}
                  style={{
                    color:
                      styles.colorMode === "dark"
                        ? "#fff"
                        : styles.colorMode === "light"
                        ? "#fff"
                        : styles.colorMode === "blue"
                        ? "#063462"
                        : "#000",
                  }}
                  >
                    {t("qualified experts")}
                  </p>
                </div>
                <div className={cl.advantages_box}>
                  {!imagesHidden && <img src={bookIcon} alt="acc" />}
                  <p className={`${cl.advantages__text} text-content`}
                  style={{
                    color:
                      styles.colorMode === "dark"
                        ? "#fff"
                        : styles.colorMode === "light"
                        ? "#fff"
                        : styles.colorMode === "blue"
                        ? "#063462"
                        : "#000",
                  }}
                  >
                    {t("convenient learning format")}
                  </p>
                </div>
                <div className={cl.advantages_box}>
                  {!imagesHidden && <img src={realtionIcon} alt="acc" />}
                  <p className={`${cl.advantages__text} text-content`}
                  style={{
                    color:
                      styles.colorMode === "dark"
                        ? "#fff"
                        : styles.colorMode === "light"
                        ? "#fff"
                        : styles.colorMode === "blue"
                        ? "#063462"
                        : "#000",
                  }}
                  >
                    {t("close cooperation with AFM")}
                  </p>
                </div>
                <div className={cl.advantages_box}>
                  {!imagesHidden && <img src={laptopIcon} alt="acc" />}
                  <p className={`${cl.advantages__text__last} text-content`}
                  style={{
                    color:
                      styles.colorMode === "dark"
                        ? "#fff"
                        : styles.colorMode === "light"
                        ? "#fff"
                        : styles.colorMode === "blue"
                        ? "#063462"
                        : "#000",
                  }}
                  >
                    {t("programs")}
                  </p>
                </div>
              </div>
              {!imagesHidden && <VideoPlayer />}
            </div>
          </div>
        </section>
        <section
          className={cl.coursesWrapper}
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
          id="coursesSection"
        >
          <div
            className={cl.container}
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
            <h1
              className={`${cl.courses__headline} text-content`}
              style={{
                color:
                  styles.colorMode === "dark"
                    ? "#fff"
                    : styles.colorMode === "light"
                    ? "#3A3939"
                    : styles.colorMode === "blue"
                    ? "#063462"
                    : "#000",
              }}
            >
              {t("Courses in the field of")}
            </h1>
            <Tabs />
          </div>
        </section>
        <section
          className={`${cl.newsWrapper} text-content`}
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
          id="news"
        >
          <div className={cl.container}>
            <p
              className={`${cl.news__headline} text-content`}
              style={{
                color:
                  styles.colorMode === "dark"
                    ? "#fff"
                    : styles.colorMode === "light"
                    ? "#000"
                    : styles.colorMode === "blue"
                    ? "#063462"
                    : "#000",
              }}
            >
              {t("news")}
            </p>
          </div>

          <NewsTab
            style={{
              color:
                styles.colorMode === "dark"
                  ? "#fff"
                  : styles.colorMode === "light"
                  ? "#3A3939"
                  : styles.colorMode === "blue"
                  ? "#063462"
                  : "#000",
              background:
                styles.colorMode === "dark"
                  ? "#000"
                  : styles.colorMode === "light"
                  ? "#fff"
                  : styles.colorMode === "blue"
                  ? "#9dd1ff"
                  : "#000",
            }}
          />
        </section>
        {/* <section className={cl.partnersWrapper}>
                <div className={cl.container}>
                    <h1 className={cl.courses__headline}>Партнеры</h1>
                    <div className={cl.partners}>
                        {imageList.map((image, index) => (
                            <img key={index} src={image.src} alt={image.alt} />
                        ))}
                    </div>
                </div>
            </section> */}
        {/* <Dropdown /> */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
