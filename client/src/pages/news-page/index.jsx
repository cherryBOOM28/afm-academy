// src/pages/NewsPage.tsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { useStyle } from "../../components/VisualModal/StyleContext";
import VisualModal from "../../components/VisualModal/VisualModal";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { selectNews } from '../../redux/slices/newsSlice';
import base_url from "../../settings/base_url";
import "./style.css";

function NewsPage() {
  const { t } = useTranslation();
  const { styles, open, setOpen, checkStyle, userEntry } = useStyle();
  const [imagesHidden, setImagesHidden] = useState(false);
  const { i18n } = useTranslation();
  const [newsData, setNewsData] = useState([]);
  const currentLanguage = i18n.language;
  const [selectedRowBtn, setSelectedRowBtn] = useState(null);
  const [activeTab, setActiveTab] = useState("news");
  const dispatch = useDispatch();
  const selectedNews = useSelector((state) => state.news.selectedNews);

  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  useEffect(() => {
    if (!checkStyle) return;
    if (userEntry) return;
    const textContentElement = document.querySelectorAll(".text-content");
    const size = styles.fontSize;
    setImagesHidden(!styles.showImage);

    if (textContentElement) {
      textContentElement.forEach((item) => {
        switch (size) {
          case "small":
            item.style.fontSize = "15px";
            break;
          case "standard":
            item.style.fontSize = "20px";
            break;
          case "large":
            item.style.fontSize = "24px";
            break;
          default:
            break;
        }
      });
    }
    handleColorModeChange();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleColorModeChange = (mode) => {
    const containerElement = document.querySelector(".text-content");
    if (containerElement) {
      containerElement.classList.remove("light-mode", "dark-mode", "inverted-mode");
    }
    const { colorMode } = styles;
    if (containerElement) {
      containerElement.classList.add(colorMode + "-mode");
    }
  };

  const handleShowDetailsBtn = (selectedRowBtn) => {
    setSelectedRowBtn(selectedRowBtn);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.getElementById("Modal");
      const buttons = document.getElementsByTagName("button");
      if (modal && !modal.contains(event.target) && !Array.from(buttons).some(button => button === event.target)) {
        handleShowDetailsBtn(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectedRowBtn]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}/api/aml/course/getAllNews`, {
          params: {
            type: activeTab,
          },
        });
        setNewsData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [activeTab]);

  const handleRemoveImages = () => {
    setImagesHidden(true);
  };

  const handleShowImages = () => {
    setImagesHidden(false);
  };

  const handleOpenVisualModal = () => {
    setOpenVisualModal(prev => !prev);
    setOpen(prev => !prev);
  };
  const [openVisualModal, setOpenVisualModal] = useState(open);

  const renderCardContent = (item) => {
    const datee = new Date(item.date);
    const day = datee.getDate();
    const monthIndex = datee.getMonth();
    const month = months[monthIndex];
    const hour = datee.getHours();
    const minutes = datee.getMinutes();
    const formattedDate = `${day} ${month} ${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

    return (
      <div className="cardContainer" key={item.id} onClick={() => dispatch(selectNews(item))}>
        <div className="cardContent">
          <p className="cardTitle">{item.name}</p>
          <div className="dateContent">
            <div className="date">
              <p className="dateTime">{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const displayedNews = selectedNews || (newsData.length > 0 ? newsData.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0] : null);

  return (
    <div className="vebinars-page text-content" style={{ background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#f2f2f2" : styles.colorMode === "blue" ? "#9dd1ff" : "#000" }}>
      <VisualModal
        open={openVisualModal}
        onRemoveImages={handleRemoveImages}
        onShowImages={handleShowImages}
        styles={styles}
      />
      <Header dark={styles.colorMode === "dark" ? false : true} handleOpenVisualModal={handleOpenVisualModal} />
      <div className="page-content container">
        <div className="news-layout">
          {displayedNews && (
            <div className="latestNews">
              <br />
              <h2 className="latestNewsTitle">{displayedNews.name}</h2>
              <br />
              {!imagesHidden && displayedNews.image && <img src={displayedNews.image} alt="" className="latestNewsImg" />}
              <p className="latestNewsText" dangerouslySetInnerHTML={{ __html: displayedNews.description.replace(/\n/g, "<br />") }} ></p>
            </div>
          )}
          <div className="otherNews">
            <br /><br /><br />
            {newsData.filter((item) => item.id !== displayedNews.id).slice(0, 6).map((item) => renderCardContent(item))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewsPage;
