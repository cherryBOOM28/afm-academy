import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import basicCourse from "../../../assets/icons/mdi_world-wide-web.svg";
import deepCourse from "../../../assets/icons/simple-icons_progress.svg";
import proCourse from "../../../assets/icons/subway_book.svg";
import backgroundVideoLight from "../../../assets/video/sssssssss.mp4";
import cl from "../Home.module.css";

const AboutUsSection = ({ imagesHidden }) => {
  const { t } = useTranslation();
  
  return (
    <section className={`${cl.aboutUs} text-content`}>
      <div className={cl.container}>
        <div className={`${cl.aboutUs__section} ${imagesHidden ? cl.darkBlueBackground : ""}`}>
          <div className={cl.videoContainer} style={{ backgroundColor: "red" }}>
            <video autoPlay loop muted className={`videoBackground ${cl.videoBackground}`}>
              <source src={backgroundVideoLight} type="video/mp4" />
            </video>
          </div>
          <div className={cl.aboutUs__content}>
            <p className={`${cl.aboutUs__headline} text-content`}>AML ACADEMY</p>
            <p className={`${cl.aboutUs__text_small} text-content`}>{t("our courses")}</p>
            <div className={`${cl.courses_boxes} text-content`}>
              <Link to="/courses/catalog" style={{ textDecoration: "none" }}>
                <div className={cl.aml_box}>
                  {!imagesHidden && <img src={basicCourse} alt="" />}
                  <p className={`${cl.course_box_name} text-content`}>{t("education")}</p>
                </div>
              </Link>
              <Link to="/ready-made-solutions" style={{ textDecoration: "none" }}>
                <div className={cl.aml_box}>
                  {!imagesHidden && <img src={proCourse} alt="" />}
                  <p className={`${cl.course_box_name} text-content`}>{t("ric")}</p>
                </div>
              </Link>
              <Link to="/#" style={{ textDecoration: "none" }}>
                <div className={cl.aml_box}>
                  {!imagesHidden && <img src={deepCourse} alt="" />}
                  <p className={`${cl.course_box_name} text-content`}>{t("it")}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
