import React, { useState, useEffect } from "react";

import DefaultHeader from "../../components/defaultHeader/DefaultHeader";
import Footer from "../../components/footer/Footer";

import "./Surveys.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import Header from "../../components/header/Header";
import { useTranslation } from "react-i18next";
import VisualModal from "../../components/VisualModal/VisualModal";

import { useStyle } from "../../components/VisualModal/StyleContext";

function SurveysPage() {
  const { styles, open, setOpen, userEntry, checkStyle } = useStyle();
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
            item.style.lineHeight = "17px";
            break;
          case "standard":
            item.style.fontSize = "20px";
            item.style.lineHeight = "22px";
            break;
          case "large":
            item.style.fontSize = "24px";
            item.style.lineHeight = "26px";
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
        "inverted-mode"
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

  const [isSurvey, setSurvey] = useState(true);

  const [surveyList, setSurveyList] = useState([]);
  const [testList, setTestList] = useState([]);

  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!checkStyle) return;
    console.log(userEntry);
    if (userEntry) return;
    setSurveyList([
      {
        id: "_123",
        date_open: "2023-08-24",
        date_close: "2023-08-24",
        name: t("anketa"),
        status: "active",
      },
      {
        id: "_123",
        date_open: "2023-08-24",
        date_close: "2023-08-24",
        name: t("anketa"),
        status: "-",
      },
      {
        id: "_123",
        date_open: "2023-08-24",
        date_close: "2023-08-24",
        name: t("anketa"),
        status: "active",
      },
    ]);
  });


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
    <div
      className="surveys-page"
      style={{
        background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
      }}
    >
      <div
        className="text-context"
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
        <Header
          dark={styles.colorMode == "dark" ? false : true}
          handleOpenVisualModal={handleOpenVisualModal}
        />
        <div>
          <div className="container"></div>
        </div>
        <div
          className="interval"
          style={{ letterSpacing: getLetterSpacing(letterInterval) }}
        >
          <main className="page-content container">
            <h1
              className="text-content"
              style={{
                color: styles.colorMode == "dark" ? "#fff" : "#343434",
              }}
            >
              {t("survey on topics for training")}
            </h1>
            <div
              className="surveys-list-block"
              style={{
                color: styles.colorMode == "dark" ? "#fff" : "#000",
                background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
              }}
            >
              <div className="toggles"
              style={{
                background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
              }}
              >
                <div
                  onClick={() => {
                    setSurvey(true);
                  }}
                  className={`${isSurvey ? "active" : ""} text-content`}
                  style={{
                    color: styles.colorMode == "dark" ? "#fff" : "#000",
                    background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#d9d9d9" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
                  }}
                >
                  {t("surveys")}
                </div>
                <div
                  onClick={() => {
                    setSurvey(false);
                  }}
                  className={`${!isSurvey ? "active" : ""} text-content`}
                  style={{
                    color: styles.colorMode == "dark" ? "#fff" : "#000",
                    background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#d9d9d9" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
                  }}
                >
                  {t("testing")}
                </div>
              </div>

              <div
                className="survey-list"
                style={{
                  color: styles.colorMode == "dark" ? "#fff" : "#000",
                  background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
                }}
              >
                <table
                  style={{
                    letterSpacing: `${getLetterSpacing(
                      letterInterval
                    )} !important`,
                    background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
                  }}
                >
                  <thead
                    className="text-content"
                    style={{
                      background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
                    }}
                  >
                    <tr>
                      <td
                        className="text-content !important"
                        style={{
                          color: styles.colorMode == "dark" ? "#fff" : "#000",
                        }}
                      >
                        №
                      </td>
                      <td
                        className="text-content !important"
                        style={{
                          color: styles.colorMode == "dark" ? "#fff" : "#000",
                          background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"


                        }}
                      >
                        {t("date of publication")}
                      </td>
                      <td
                        className="text-content !important"
                        style={{
                          color: styles.colorMode == "dark" ? "#fff" : "#000",
                        }}
                      >
                        {t("title")}
                      </td>
                      <td
                        className="text-content !important"
                        style={{
                          color: styles.colorMode == "dark" ? "#fff" : "#000",
                        }}
                      >
                        {t("status")}
                      </td>
                    </tr>
                  </thead>

                  <div style={{ height: "20px" }}></div>

                  <tbody
                    className="text-content"
                    style={{
                      background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#9dd1ff" : "#000"
                    }}
                  >
                    {(isSurvey ? surveyList : testList).length !== 0 ? (
                      (isSurvey ? surveyList : testList).map(
                        (
                          { date_open, date_close, name, status, id },
                          index
                        ) => {
                          let _status =
                            status === "active" ? t("open") : t("closed");

                          return (
                            <tr
                              style={{
                                hover:
                                  styles.colorMode == "dark" ? "#fff" : "#fff",
                              }}
                              onClick={() => {
                                if (status === "active" && isLoggedIn) {
                                  navigate(`/survey/${id}`);
                                }

                                if (!isLoggedIn) navigate("/login");
                              }}
                            >
                              <td
                                className="text-content !important"
                                style={{
                                  letterSpacing: `${getLetterSpacing(
                                    letterInterval
                                  )} !important`,
                                }}
                              >
                                {index + 1}
                              </td>
                              <td
                                className="text-content !important"
                                style={{
                                  letterSpacing: `${getLetterSpacing(
                                    letterInterval
                                  )} !important`,
                                }}
                              >
                                {date_open}
                              </td>
                              <td
                                className="text-content !important"
                                style={{
                                  letterSpacing: `${getLetterSpacing(
                                    letterInterval
                                  )} !important`,
                                }}
                              >
                                {name}
                              </td>
                              <td
                                className="text-content !important"
                                style={{
                                  letterSpacing: `${getLetterSpacing(
                                    letterInterval
                                  )} !important`,
                                }}
                              >
                                <div
                                  className={`${
                                    status === "active" ? "active" : "closed"
                                  } text-content`}
                                >
                                  {_status}
                                </div>
                              </td>
                            </tr>
                          );
                        }
                      )
                    ) : (
                      <tr>
                        <td
                          className="text-content !important"
                          colspan="4"
                          style={{ textAlign: "center" }}
                        >
                          {t("no available")}{" "}
                          {isSurvey ? t("survey") : t("tests")}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default SurveysPage;
