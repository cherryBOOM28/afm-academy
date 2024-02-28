import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cl from "./NewsTab.module.css";
import data from "../data/data.json";
import Button from "../UI/button/Button";
import calendarIcon from "../../assets/icons/calendar.svg";
import axios from "axios";
import base_url from "../../settings/base_url";
import { unstable_ClassNameGenerator } from "@mui/material";

import { useTranslation } from "react-i18next";
import { useStyle } from "../../components/VisualModal/StyleContext";
import VisualModal from "../../components/VisualModal/VisualModal";
import './NewsTab.scss'
const NewsTab = () => {
  const { styles } = useStyle();
  const [imagesHidden, setImagesHidden] = useState(false);

  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("news");
  const [data, setData] = useState([]);
  const [type, setType] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const jwtToken = localStorage.getItem("jwtToken");
  const [selectedRowBtn, setSelectedRowBtn] = useState(null);

  const handleShowDetailsBtn = (selectedRowBtn) => {
    setSelectedRowBtn(selectedRowBtn);
    console.log(selectedRowBtn);
  };

  const [ settings, setSettings ] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  })

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSettings({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: getSlidesToShow(),
        slidesToScroll: 1,
      })
    })
  }, [])
  // useEffect(() => {
  //   const textContentElement = document.querySelectorAll(".text-content");
  //   const size = styles.fontSize;
  //   if (textContentElement) {
  //     textContentElement.forEach((item) => {
  //       switch (size) {
  //         case "small":
  //           item.style.fontSize = "15px";
  //           break;
  //         case "standard":
  //           item.style.fontSize = "20px";
  //           break;
  //         case "large":
  //           item.style.fontSize = "24px";
  //           break;
  //         default:
  //           break;
  //       }
  //     });
  //   }
  // }, []);

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
        // console.log(response.data)
        setData(response.data);
      } catch (error) {
        setError(error);
        console.error(error);
      }

      setLoading(false);
    };
    fetchData();
  }, [activeTab]);

  useEffect(() => {
    setImagesHidden(!styles.showImage);
  }, [styles.showImage]);

  const getSlidesToShow = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1200) {
      return 3; // Large screens, show 3 slides
    } else if (windowWidth >= 900) {
      return 2; // Medium screens, show 2 slides
    } else if (windowWidth >= 768){
      return 1; // Small screens, show 1 slide
    }
    else {
      return 1;
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Function to render content for each tab item
  const renderCardContent = (item) => {
    const datee = new Date(item.date);
    const type = item.type;
    // console.log(type)
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

    // Get the day, month, and hour from the date
    const day = datee.getDate();
    const monthIndex = datee.getMonth();
    const month = months[monthIndex];
    const hour = datee.getHours();
    const minutes = datee.getMinutes();

    // Format the date and time
    const formattedDate = `${day} ${month} ${hour
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    const handleRemoveImages = () => {
      console.log("Images hidden");

      setImagesHidden(true);
    };

    const handleShowImages = () => {
      setImagesHidden(false);
    };

    if (item.type === "video") {
      return (
        <div className={cl.cardContent}>
          <VisualModal
            onRemoveImages={handleRemoveImages}
            onShowImages={handleShowImages}
          />
          <iframe
            className={cl.video}
            width="256"
            height="115"
            src={item.video}
            title="YouTube video player"
            frameBorder="5"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h3
            className={cl.cardTitle}
            style={{
              color: styles.colorMode === "dark" ? "#fff" : "#3A3939",
            }}
          >
            {item.name}
          </h3>
        </div>
      );
    } else {
      // console.log(item)
      return (
        <div className={cl.cardContainer}>
          <div className={cl.cardContent}>
            {!imagesHidden && (
              <img src={item.image} alt="" className={cl.newsImg} />
            )}
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
              <Button className={cl.cardBtn} onClick={() => handleShowDetailsBtn(item.id)}>{t("read more") } </Button>
            </div>
            {selectedRowBtn !== null && (
            
              <div className="details-modal">
               <div className="details-content">
                  <button className="details-button1" onClick={() => handleShowDetailsBtn(null)}>
                Закрыть
                  </button>
                  <p className='details-info'>{data.find((item) => item.id === selectedRowBtn)?.name}</p>
                  {!imagesHidden && (<img src={data.find((item) => item.id === selectedRowBtn)?.image} alt="" className={cl.newsImg} />)}
                  <p className='details-info'>{data.find((item) => item.id === selectedRowBtn)?.description}</p>

            </div>
          </div>
            
        )}
          </div>
          
        </div>
      );
    }
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
      }}
    >
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

      <div className={cl.sliderContainer}
                    style={{
                      color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#000" : styles.colorMode === "blue" ? "#063462" : "#000",
                    }}
      >
        {data && data.length > 0 ? (
          <Slider {...settings}>
            {data.map((item) => (
              <div className={cl.cardContainer} key={item.id}>
                {renderCardContent(item)}
              </div>
            ))}
          </Slider>
        ) : (
          <div
            style={{ width: "100%", textAlign: "center", paddingTop: "20px" }}
          >
            <a style={{ fontSize: "24px", fontWeight: "600", opacity: "0.3" }}>
              Нет недавних новостей
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default NewsTab;
