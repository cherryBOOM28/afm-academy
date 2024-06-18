import React from "react";
import { useTranslation } from "react-i18next";
import basicCourse from "../../../assets/icons/mdi_world-wide-web.svg";
import deepCourse from "../../../assets/icons/simple-icons_progress.svg";
import proCourse from "../../../assets/icons/subway_book.svg";
import backgroundVideoLight from "../../../assets/video/sssssssss.mp4";
import cl from "../Home.module.css";
import povish from '../assets/svg/povyshenyeKvalifikasi.svg';
import CourseBox from "../components/CourseBox";
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
              <CourseBox link="/courses/catalog" imgSrc={basicCourse} text={t('education')} imagesHidden={imagesHidden} />
              <CourseBox link="/ready-made-solutions" imgSrc={proCourse} text={t('ric')} imagesHidden={imagesHidden} />
              <CourseBox link="/#" imgSrc={deepCourse} text={t('it')} imagesHidden={imagesHidden} />
              <CourseBox link="/#" imgSrc={povish} text={"Повышение квалификации"} imagesHidden={imagesHidden} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
