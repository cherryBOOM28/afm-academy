import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import DefaultHeader from "../../components/defaultHeader/DefaultHeader";

import "./profile.scss";

import { IoIosArrowBack } from "react-icons/io";
import { BiSolidVideo } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import axios from "axios";
import Vebinar from "./vebinar";
import ProfileHeader from "../../components/profile-header";
import ProfileGeneral from "../../components/profile-generalInfo";
import ProfileJob from "../../components/profile-job";
import ProfileEducation from "../../components/profile-education";
import ProfilePassword from "../../components/profile-password";
import base_url from "../../settings/base_url";
import Header from "../../components/header/Header";
import { useStyle } from "../../components/VisualModal/StyleContext";
import VisualModal from "../../components/VisualModal/VisualModal";

import { useTranslation } from "react-i18next";

function Profile(props) {
  const { styles, open, setOpen, checkStyle, userEntry } = useStyle();
  const [imagesHidden, setImagesHidden] = useState(false);
  const [letterInterval, setLetterInterval] = useState("standard");
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

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
    const textContentElement = document.querySelector(".text-content");
    const family = styles.fontFamily;

    if (family) {
      textContentElement.style.fontFamily = family;
    }
  }, []);

  const jwtToken = localStorage.getItem("jwtToken");

  const { tabname } = useParams();
  const [currentTab, setCurrentTab] = useState(1);
  const [isEdit, setIsEdit] = useState(false);

  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const handleOpenFeedbackModal = () => {
    setOpenFeedbackModal(true);
  };
  const handleCloseFeedbackModal = () => {
    setOpenFeedbackModal(false);
    // handleOpenModal();
  };

  const handleSendFeedback = (courseId) => {
    const fetchData = async () => {
      try {
        const data = {
          comment: feedbackText,
          courseId: courseId// Предполагается, что feedbackText содержит текст комментария
          // Здесь можно добавить другие поля, если они есть в courseComments
        };
        const config = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        };

        console.log(`${base_url}/api/aml/course/createCourseComments/${courseId}`, data, config)
        const response = await axios.post(
          `${base_url}/api/aml/course/createCourseComments/${courseId}`,
          data,
          config
        );
  

        if (response.status === 200) {
          console.log('posted successfully'+response.status)
        } else {
          // console.log(response.statusText)
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    handleCloseFeedbackModal();
  };

  const [feedbackText, setFeedbackText] = useState("");

  const [stars, setStars] = useState(0);

  const [editedGeneralInfo, setEditedGeneralInfo] = useState({});

  const [openingModals, setOpeningModals] = useState(false);
  const handleOpenModal = () => {
    setOpeningModals(true);
  };

  const handleCloseModal = () => {
    setOpeningModals(false);
  };

  const HandleTabClickProfile = (tab) => {
    setCurrentTab(tab);
  };

  const handleRedact = () => {
    setIsEdit((prev) => !prev);
  };

  useEffect(() => {
    if (tabname) {
      // console.log(tabname === 'vebinars')

      if (tabname === "sertificates") {
        setCurrentTab(4);
      }

      if (tabname === "vebinars") {
        setCurrentTab(2);
      }
    }
  }, []);

  const getSection = () => {
    if (currentTab === 1) {
      return <ProfileGeneral isEdit={isEdit} />;
    }

    if (currentTab === 2) {
      return <Vebinar />;
    }

    if (currentTab === 4) {
      return <ProfileEducation handleOpenModal={handleOpenFeedbackModal} />;
    }

    if (currentTab === 5) {
      return <ProfilePassword />;
    }

    return null;
  };

  return (
    <div className="profile-page text-content">
      {openFeedbackModal ? (
        <div className="modal text-content">
          <div
            className="wrapper text-content"
            onClick={(e) => {
              if (e.target.classList.contains("wrapper text-content")) {
                handleCloseFeedbackModal();
              }
            }}
          >
            <div className="body text-content">
              <div className="title text-content">
                <h1>Обратная связь</h1>
                <MdClose
                  className="close text-content"
                  size={30}
                  onClick={() => {
                    handleCloseFeedbackModal();
                  }}
                />
              </div>

              <p>
                Для нас важно Ваше мнение! <br />
                Мы стремимся предоставить наилучший опыт обучения. <br />
                Обратная связь помогает постоянно улучшать наши курсы.
              </p>

              <div className="feedback text-content">
                <textarea
                  name="feedback-text"
                  id="feedback-text"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                ></textarea>
              </div>

              <div
                className="send-btn text-content"
                onClick={() => {
                  handleSendFeedback(8);
                }}
              >
                Отправить
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <VisualModal
        open={openVisualModal}
        onRemoveImages={handleRemoveImages}
        onShowImages={handleShowImages}
        onFontFamily={() => {}}
        onIntervalChange={() => {}}
        styles={styles}
      />
      <Header
        dark={styles.colorMode == "dark" ? false : true}
        handleOpenVisualModal={handleOpenVisualModal}
      />
      <div className="container text-content"></div>
      <div className="profile-page-wrapper text-content">
        <div className="container text-content">
          <Link to="/courses/catalog" className="nav-back text-content">
            <IoIosArrowBack />
            <div>
              <a 
                className="text-content"
                style={{
                  letterSpacing: getLetterSpacing(styles.interval)
                }}
              >Назад к главной</a>
            </div>
          </Link>

          {/* <ProfileHeader handleRedact={handleRedact}/> */}

          <div className="profile-page-body text-content">
            <div
              className="side-bar text-content"
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
                className={`${currentTab === 1 ? "active" : ""}`}
                onClick={() => HandleTabClickProfile(1)}
              >
                <p
                  className="text-content"
                  style={{
                    letterSpacing: getLetterSpacing(styles.interval)
                  }}
                >
                  Личные данные
                </p>
              </div>
              <div
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
                className={`${currentTab === 2 ? "active" : ""}`}
                onClick={() => HandleTabClickProfile(2)}
              >
                <p
                  className="text-content"
                  style={{
                    letterSpacing: getLetterSpacing(styles.interval)
                  }}
                >
                  Вебинары
                </p>
              </div>
              {/* <div className={`${currentTab === 3 ? 'active' : ''}`} onClick={() => HandleTabClickProfile(3)}>
                                <p>Опыт работы</p>
                            </div> */}
              <div
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
                className={`${currentTab === 4 ? "active" : ""}`}
                onClick={() => HandleTabClickProfile(4)}
              >
                <p
                  className="text-content"
                  style={{
                    letterSpacing: getLetterSpacing(styles.interval)
                  }}
                >
                  Сертификаты
                </p>
              </div>
              <div
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
                className={`${currentTab === 5 ? "active" : ""}`}
                onClick={() => HandleTabClickProfile(5)}
              >
                <p 
                  className="text-content"
                  style={{
                    letterSpacing: getLetterSpacing(styles.interval)
                  }}
                >Сменить пароль</p>
              </div>
            </div>
            <div className="main-section text-content">{getSection()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
