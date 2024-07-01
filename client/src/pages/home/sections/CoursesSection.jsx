import React from "react";
import { useTranslation } from "react-i18next";
import LearningFormatTabs from "../../../components/LearningFormatTab/LearningFormatTabs";
import Tabs from "../../../components/tab/Tabs";
import cl from "../Home.module.css";

const CoursesSection  = ({ styles }) => {
  const { t } = useTranslation();

  return (
    <>
      <section className={cl.coursesWrapper} style={{ background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#9dd1ff" : "#000" }} id="coursesSection">
        <div className={cl.container} style={{ background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#9dd1ff" : "#000" }}>
          <h1 className={`${cl.courses__headline} text-content`} style={{ color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#3A3939" : styles.colorMode === "blue" ? "#063462" : "#000" }}>
            {t("Courses in the field of")}
          </h1>
          <Tabs />
        </div>
      </section>

      <section className={cl.coursesWrapper} style={{ background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#9dd1ff" : "#000" }} id="coursesSection">
        <div className={cl.container} style={{ background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#9dd1ff" : "#000" }}>
          <h1 className={`${cl.courses__headline} text-content`} style={{ color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#3A3939" : styles.colorMode === "blue" ? "#063462" : "#000" }}>
            {t("learning format")}
          </h1>
          <LearningFormatTabs />
        </div>
      </section>
    </>
  );
};

export default CoursesSection;
