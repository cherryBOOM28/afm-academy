import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cl from "./NewsTab.module.css";
import Button from "../UI/button/Button";
import calendarIcon from "../../assets/icons/calendar.svg";
import axios from "axios";
import base_url from "../../settings/base_url";
import { useTranslation } from "react-i18next";
import { useStyle } from "../../components/VisualModal/StyleContext";
import './NewsTab.scss'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",borderRadius:"1000px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",borderRadius:"1000px" }}
      onClick={onClick}
    />
  );
}
const NewsTab = ({Width}) => {
  const { styles } = useStyle();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("news");
  const [newsData, setNewsData] = useState([]);
  const [imagesHidden, setImagesHidden] = useState(false);
  const [selectedRowBtn, setSelectedRowBtn] = useState(null);
  const modalRef = useRef();
  const [settings, setSettings] = useState({
    dots: true,
    focusOnSelect: true,
    infinite: true,
    adaptiveHeight: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  });
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setSelectedRowBtn(null); // Закрытие модального окна
    }
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      handleClickOutside(event);
    };
  
    document.addEventListener('mousedown', handleOutsideClick);
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  const selectedItem = newsData.find((item) => item.id === selectedRowBtn);
  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.getElementById('Modal');
      const buttons = document.getElementsByTagName('button');// Получаем ссылку на элемент модального окна
      if ((modal && !modal.contains(event.target)) && (!Array.from(buttons).some(button => button === event.target))) {
        // Проверяем, был ли клик выполнен вне модального окна
        handleShowDetailsBtn(null)
      }
    };

    // Добавляем обработчик события клика на документе
    document.addEventListener('click', handleClickOutside);

    return () => {
      // Удаляем обработчик события клика при размонтировании компонента
      document.removeEventListener('click', handleClickOutside);
    };
  }, [selectedItem]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${base_url}/api/aml/course/getAllNews`,
          {
            params: {
              type: activeTab,
            },
          }
        );
        setNewsData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [activeTab]);

  useEffect(() => {
    setImagesHidden(!styles.showImage);
  }, [styles.showImage]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleShowDetailsBtn = (selectedRowBtn) => {
    setSelectedRowBtn(selectedRowBtn);
  };

  const renderCardContent = (item) => {
    const datee = new Date(item.date);
    const months = {
      0: "января",
      1: "февраля",
      2: "марта",
      3: "апреля",
      4: "мая",
      5: "июня",
      6: "июля",
      7: "августа",
      8: "сентября",
      9: "октября",
      10: "ноября",
      11: "декабря",
    };
    const day = datee.getDate();
    const monthIndex = datee.getMonth();
    const month = months[monthIndex];
    const hour = datee.getHours();
    const minutes = datee.getMinutes();
    const formattedDate = `${day} ${month} ${hour
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

    return (
      <div className={cl.cardContainer} key={item.id}>
        <div className={cl.cardContent}>
          {!imagesHidden && <img src={item.image} alt="" className={cl.newsImg} />}
          <p
            className={cl.cardTitle}
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
            {item.name}
          </p>
          <div className={cl.dateContent}>
            <div className={cl.date}>
              {!imagesHidden && <img src={calendarIcon} alt="calendar" />}
              <p className={cl.dateTime}>{formattedDate}</p>
            </div>
            <Button className={cl.cardBtn} onClick={() => handleShowDetailsBtn(item.id)}>
              {t("read more")}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  

  return (
    <div
      id="newsSection"
      className={cl.tabSliderContainer}
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
        width: Width
      }}
    >
        {selectedRowBtn !== null && selectedItem && (
        <div id="Modal">
          <div className="details-modal1">
          <div className="details-content1">
          
              <div style={{ textAlign: 'center' }}>
                <div style={{ display:'flex', textAlign:'left',marginTop:'25px',justifyContent:"space-between" }}>
                <p className='details-info1'>{selectedItem.name}</p>
                <span style={{textAlign:'right',justifyContent:'center'}}> 
          <button className="details-button11" onClick={() => handleShowDetailsBtn(null)}>X</button>
          </span>
              </div>
            {!imagesHidden && (<img src={selectedItem.image} alt="" className={'NewsModalImg'} />)}
            <p className='details-description1'>{selectedItem.description}</p>
            </div>
          </div>
        </div>
       </div>
      )}
      
      <div className={cl.tabButtons}>
        <button
          className={activeTab === "events" ? cl.active : ""}
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
          onClick={() => handleTabChange("events")}
        >
          {t("events")} /
        </button>
        <button
          className={activeTab === "news" ? cl.active : ""}
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
          onClick={() => handleTabChange("news")}
        >
          {t("news")} /
        </button>
      
        <button
          className={activeTab === "videos" ? cl.active : ""}
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
          onClick={() => handleTabChange("videos")}
        >
          {t("video")}
        </button>
      </div>

      <div
        className={cl.sliderContainer}
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
        {newsData && newsData.length > 0 ? (
          <Slider {...settings}>
            {newsData.map((item) => renderCardContent(item))}
          </Slider>
        ) : (
          <div style={{ width: "100%", textAlign: "center", paddingTop: "20px" }}>
            <p style={{ fontSize: "24px", fontWeight: "600", opacity: "0.3" }}>Нет недавних новостей</p>
          </div> 
        )}
      </div>

     
    </div>
  );
};

export default NewsTab;
