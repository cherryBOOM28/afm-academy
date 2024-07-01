import React from "react";
import { useTranslation } from "react-i18next";
import NewsTab from "../../../components/newsTab/NewsTab";
import cl from "../Home.module.css";

const NewsSection = ({ styles }) => {
  const { t } = useTranslation();

  return (
    <section className={`${cl.newsWrapper} text-content`} style={{ background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#9dd1ff" : "#000" }} id="news">
      <div className={cl.container}>
        <p className={`${cl.news__headline} text-content`} style={{ color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000" }}>
          {t("news")}
        </p>
      </div>
      <NewsTab className={"newsTab"} style={{ color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#3A3939" : styles.colorMode === "blue" ? "#063462" : "#000", background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#9dd1ff" : "#000" }} />
    </section>
  );
};

export default NewsSection;
