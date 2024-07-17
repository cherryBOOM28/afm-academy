// src/components/NewsComponent.tsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectNews } from '../../../../redux/slices/newsSlice';
import base_url from '../../../../settings/base_url';
import NewsModal from '../news-modal';
import './style.css';

const NewsComponent = ({ news }) => {
    const [newsData, setNewsData] = useState(news);
    const [newsModalData, setNewsModalData] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const {t} = useTranslation()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/api/aml/course/getAllNews?type=news`);
                setNewsData(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const truncateName = (name) => {
        return  name.length > 60 ? name.slice(0, 60) + '...' : name;
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setNewsModalData(null);
    };

    const handleSelectNews = (index) => {
        dispatch(selectNews(newsData[index]));
        navigate('/news-page');
    };

    if (loading) return <div>Loading...</div>;
    
    if (news.length < 6) return <div>Loading...</div>;

    return (
        <div className="news-container">
            <h1 className="news-title">{ t('news') }</h1>
            <div className="news-grid">
                <div className="column column-1">
                    <div className="news-item text-item" onClick={() => handleSelectNews(4)}>
                        <div className="news-badge">{ t('news') }</div>
                        <p className='news-description'>{truncateName(newsData[4].name)}</p>
                        <p className="news-date">{new Date(newsData[4].date).toLocaleDateString()}</p>
                    </div>
                    <div className="news-item image-item" onClick={() => handleSelectNews(2)}>
                        <div className='side-img-wrapper'>
                            <img className="side-img" src={newsData[2].image} alt={newsData[2].title} />
                        </div>
                        <p className='news-description'>{truncateName(newsData[2].name)}</p>
                        <p className="news-date">{new Date(newsData[2].date).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="column column-2">
                    <div className="news-item image-item large-item" onClick={() => handleSelectNews(0)}>
                        <div className='main-img-wrapper'>
                            <img className="main-img" src={newsData[0].image} alt={newsData[0].title} />
                        </div>
                        <p className='news-description'>{truncateName(newsData[0].name)}</p>
                        <p className="news-date">{new Date(newsData[0].date).toLocaleDateString()}</p>
                    </div>
                    <div className="news-item text-item large-item" onClick={() => handleSelectNews(5)}>
                        <p className='news-description'>{truncateName(newsData[5].name)}</p>
                        <p className="news-date">{new Date(newsData[5].date).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="column column-3">
                    <div className="news-item text-item" onClick={() => handleSelectNews(1)}>
                        <div className="news-badge">{ t('news') }</div>
                        <p className='news-description'>{truncateName(newsData[1].name)}</p>
                        <p className="news-date">{new Date(newsData[1].date).toLocaleDateString()}</p>
                    </div>
                    <div className="news-item image-item" onClick={() => handleSelectNews(3)}>
                        <div className='side-img-wrapper'>
                            <img className="side-img" src={newsData[3].image} alt={newsData[3].title} />
                        </div>
                        <p className='news-description'>{truncateName(newsData[3].name)}</p>
                        <p className="news-date">{new Date(newsData[3].date).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
            <div className='button-wrapper'>
                <button className="all-news-button" onClick={() => navigate("/all-news")}>
                    {t('all news')}
                </button>
            </div>
            {newsModalData && (
                <NewsModal
                    name={newsModalData.name}
                    image={newsModalData.image}
                    description={newsModalData.description}
                    handleClose={handleCloseModal}
                    open={isModalOpen}
                />
            )}
        </div>
    );
};

export default NewsComponent;
