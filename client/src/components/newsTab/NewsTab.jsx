import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cl from './NewsTab.module.css';
import data from '../data/data.json';
import Button from '../UI/button/Button';
import calendarIcon from '../../assets/icons/calendar.svg';

const NewsTab = () => {
  const [activeTab, setActiveTab] = useState('events');

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
    if (activeTab === 'videos') {
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
          <h3 className={cl.cardTitle}>{item.title}</h3>
        </div>
      );
    } else {
      return (
        <div className={cl.cardContainer}>
          <div className={cl.cardContent}>
            <img src={item.image} alt=""  className={cl.newsImg}/>
              <p className={cl.cardTitle}>{item.title}</p>
              <div className={cl.dateContent}>
                <div className={cl.date}>
                  <img src={calendarIcon} alt="calendar" />
                  <p className={cl.dateTime}>{item.date}</p>
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
        <Slider {...settings}>
          {data[activeTab].map((item) => (
            <div className={cl.cardContainer} key={item.id}>
              {renderCardContent(item)}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewsTab;
