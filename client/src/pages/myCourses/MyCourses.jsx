import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DefaultHeader from "../../components/defaultHeader/DefaultHeader";
import Footer from "../../components/footer/Footer";

import "./myCourses.scss";

import course1 from "./../../assets/images/courses-1.png";
import course2 from "./../../assets/images/courses-2.png";
import course3 from "./../../assets/images/courses-3.png";
import course4 from "./../../assets/images/courses-4.png";

import bookIcon from "./../../assets/icons/book.svg";
import axios from "axios";
import base_url from "../../settings/base_url";

import { AiFillStar } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import Header from "../../components/header/Header";
import base64Course from "../courseCatalog/course-default";
import { useStyle } from "../../components/VisualModal/StyleContext";
import VisualModal from "../../components/VisualModal/VisualModal";
import { useTranslation } from "react-i18next";

function MyCourses() {
  const { styles, open, setOpen, checkStyle, userEntry } = useStyle();
  const [imagesHidden, setImagesHidden] = useState(false);
  const [letterInterval, setLetterInterval] = useState("standard");
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [activeTab, setActiveTab] = useState(1);

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
            item.style.fontSize = "15px";
            item.style.lineHeight = "18px";
            break;
          case "standard":
            item.style.fontSize = "20px";
            item.style.lineHeight = "23px";
            break;
          case "large":
            item.style.fontSize = "24px";
            item.style.lineHeight = "27px";
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
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const jwtToken = localStorage.getItem("jwtToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "/api/aml/course/getUserUsingCourses";
        // const url1 = '/api/aml/course/getUserCoursesNoPr';
        let response = null; // Use let instead of const for response to allow reassignment
        if (jwtToken != null) {
          response = await axios.get(`${base_url}${url}`, {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          });
        }
        // else {
        //     response = await axios.get(`${base_url}${url1}`);
        // }

        if (response.status == 200) {
          // console.log(response.data)
          setCourses([
            ...response.data,
            {
              id: 0,
              courseDTO: {
                course_id: 100,
                course_name:
                  "Учебный курс по навыкам работы с виртуальными активами",
                course_price: 29000,
                course_image: base64Course,
                course_for_member_of_the_system: "СФМ",
                duration: "19ч 45мин",
                rating: 5,
                type_of_study: "Электронное обучение",
                courseCategory: {
                  category_id: 1,
                  category_image: base64Course,
                  minio_image_name: "Screenshot 2023-11-04 at 23.43.20.png",
                  category_name: "AML ACADEMY",
                },
                courseComments: [
                  {
                    course_comment_id: 27,
                    comment: "Очень интересный курс",
                    rate: 5,
                    user: {
                      user_id: 30,
                      firstname: "Дамир",
                      lastname: "Бегенов",
                      patronymic: "Арманович",
                      email: "damir_ps@mail.ru",
                      phone_number: "87707707581",
                      password:
                        "$2a$10$ztyuWcAYW6eMvxDX1AfWU.py/EeNqA2gAWQGjD7zPQ7q1ZblqpSI.",
                      member_of_the_system: null,
                      type_of_member: null,
                      job_name: null,
                      verificationCode: "c25d302b-59fb-4416-aa25-947c9129c7e7",
                      enabled: true,
                      accountNonExpired: true,
                      accountNonLocked: true,
                      credentialsNonExpired: true,
                      username: "damir_ps@mail.ru",
                      authorities: [
                        {
                          authority: "ROLE_STUDENT",
                        },
                      ],
                      _active: true,
                    },
                  },
                ],
              },
              paymentInfo: {
                progress_percentage: 0,
                payment_type: "KASPI.KZ",
                payment_date: null,
                status: "process",
              },
              shortStatus: 0,
            },
          ]);
        } else {
          // Handle other status codes if needed
          setError(response.statusText);
          // console.log(response.statusText);
        }
      } catch (error) {
        setError(error);
        console.error(error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div
      className="my-courses-page text-content"
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
        />
        <Header
          dark={styles.colorMode == "dark" ? false : true}
          handleOpenVisualModal={handleOpenVisualModal}
          style={{ letterSpacing: getLetterSpacing(letterInterval) }}
        />
        <div>
          <div className="container"></div>
        </div>

        <main className="page-content text-content">
          <div
            style={{
              // background: '#F2F2F2',
              // padding: 'px 0px',
              marginTop: "60px",
              marginBottom: "74px",
            }}
          >
            <div
              className="container text-content"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: 'center',
                gap: "15px",
              }}
            >
              {/* <img src={bookIcon} alt="book icon" style={{
                            height: '50px',
                            width: '50px'
                        }} /> */}
              <h3
                style={{
                  fontFamily: "Inter",
                  fontSize: "36px",
                  fontWeight: "700",
                  lineHeight: "50px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  // paddingTop: '8px'
                }}
              >
                Мои курсы
              </h3>
            </div>
          </div>

          <div className="container text-content">
            <h1
              className="text-content"
              style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#343434" : styles.colorMode === "blue" ? "#063462" : "#000",
                fontSize: "20px",
                fontWeight: "500",
                lineHeight: "23px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Обучение
            </h1>
          </div>

          <div className="courses-block text-content">
            <div className="container text-content">
              <div className="courses-wrapper text-content">
                {isLoading ? (
                  <div className="loading text-content">
                    <div>загружаем</div>
                    <div>загружаем</div>
                    <div>загружаем</div>
                  </div>
                ) : (
                  <div className="courses-list text-content">
                    {courses.map((course, index) => {
                      // console.log(course);
                      const courseDTO = course.courseDTO;
                      const { course_image, course_name } = courseDTO;
                      const { paymentInfo } = course;

                      const status =
                        paymentInfo === null ? "available" : paymentInfo.status;

                      return (
                        <div
                          className="course-card text-conten"
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
                          key={index}
                          onClick={() => {
                            if (status === "process" || status === "finished") {
                              navigate(
                                `/courses/${course.courseDTO.course_id}/read`
                              );
                            } else {
                              navigate(
                                `/courses/${course.courseDTO.course_id}`
                              );
                            }
                          }}
                        >
                          {!imagesHidden && (
                            <img src={course_image} alt={course_name} />
                          )}
                          <div className="info text-content">
                            <div
                              className="course-name text-content"
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
                              {course_name}
                            </div>
                            <div
                              className="status text-content"
                              style={{
                                backgroundColor:
                                  status === "available"
                                    ? "#CADEFC"
                                    : status === "process"
                                    ? "#f5fcca"
                                    : "#cafccf",
                              }}
                            >
                              {status === "available"
                                ? "Доступно"
                                : status === "process"
                                ? "В процессе"
                                : "Завершен"}
                            </div>
                            <div className="info-row text-content">
                              <div
                                className="langAndDuration text-content"
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
                                {"РУС"} | {"1ч 45мин"}
                              </div>
                              <div className="rating text-content">
                                <AiFillStar
                                  className="star-icon text-content"
                                  size={23}
                                />
                                <span>5.0</span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="type text-content"
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
                            <MdOndemandVideo size={23} />
                            <span>Электронное обучение</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default MyCourses;
