import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cl from './NewsTab.module.css';
import data from '../data/data.json';
import Button from '../UI/button/Button';
import calendarIcon from '../../assets/icons/calendar.svg';
import axios from "axios";
import base_url from "../../settings/base_url";
import {unstable_ClassNameGenerator} from "@mui/material";

const NewsTab = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [data, setData] = useState([]);
  const [type, setType] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const jwtToken = localStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}/api/aml/course/getAllNews`, {
          params: {
            type: activeTab
          }
        });
        console.log(response.data)
        setData(response.data);
      } catch (error) {
        setError(error);
        console.error(error);
      }

      setLoading(false);
    };
    fetchData();
  }, [activeTab])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


  // Function to render content for each tab item
  const renderCardContent = (item) => {
    const datee = new Date(item.date);
    const type = item.type;
    console.log(type)
    const months = {
      0: 'января',
      1: 'февраля',
      2: 'марта',
      3: 'апреля',
      4: 'мая',
      5: 'июня',
      6: 'июля',
      7: 'августа',
      8: 'сентября',
      9: 'октября',
      10: 'ноября',
      11: 'декабря',
    };

// Get the day, month, and hour from the date
    const day = datee.getDate();
    const monthIndex = datee.getMonth();
    const month = months[monthIndex];
    const hour = datee.getHours();
    const minutes = datee.getMinutes();

// Format the date and time
    const formattedDate = `${day} ${month} ${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    if (item.type === 'video') {
      return (
          <div className={cl.cardContent}>
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
            <h3 className={cl.cardTitle}>{item.name}</h3>
          </div>
      );
    } else {
      console.log(item)
      return (
          <div className={cl.cardContainer}>
            <div className={cl.cardContent}>
              <img src={item.image} alt="" className={cl.newsImg}/>
              <p className={cl.cardTitle}>{item.name}</p>
              <div className={cl.dateContent}>
                <div className={cl.date}>
                  <img src={calendarIcon} alt="calendar"/>
                  <p className={cl.dateTime}>{formattedDate}</p>
                </div>
                <Button className={cl.cardBtn}>Подробнее</Button>
              </div>
            </div>
          </div>
      );
    }
  };

      return (
          <div id="newsSection" className={cl.tabSliderContainer}>
            <div className={cl.tabButtons}>
              <button
                  className={activeTab === 'events' ? cl.active : ''}
                  onClick={() => handleTabChange('events')}
              >
                Мероприятия /
              </button>
              <button
                  className={activeTab === 'news' ? cl.active : ''}
                  onClick={() => handleTabChange('news')}
              >
                Новости /
              </button>
              <button
                  className={activeTab === 'videos' ? cl.active : ''}
                  onClick={() => handleTabChange('videos')}
              >
                Видео
              </button>
            </div>

            <div className={cl.sliderContainer}>
              {data.length > 0 ? 
                <Slider {...settings}>
                  {data.map((item) => (
                    <div className={cl.cardContainer} key={item.id}>
                      {renderCardContent(item)}
                    </div>
                  ))}
                </Slider> 
              :
                <div style={{width: '100%', textAlign: 'center', paddingTop: '20px'}}><a style={{fontSize: '24px', fontWeight: '600', opacity: '0.3'}}>Нет недавних новостей</a></div>
              }
          </div>
        </div>
    );
  }
  ;
export default NewsTab;
