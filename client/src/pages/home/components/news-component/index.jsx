import React from 'react';
import './style.css';

const NewsComponent = ({ news }) => {
    if (news.length < 6) return <div>Loading...</div>;

    return (
        <div className="news-container">
            <h1 className="news-title">Новости AML Academy</h1>
            <div className="news-grid">
                <div className="column column-1">
                    <div className="news-item text-item">
                        <div className="news-badge">Новости</div>
                        <p className='news-description'>{news[4].description}</p>
                        <p className="news-date">{news[4].date}</p>
                    </div>
                    <div className="news-item image-item">
                        <div className='side-img-wrapper'>
                            <img className="side-img" src={news[2].imageUrl} alt={news[2].title} />
                        </div>
                        <p className='news-description'>{news[2].description}</p>
                        <p className="news-date">{news[2].date}</p>
                    </div>
                </div>
                <div className="column column-2">
                    <div className="news-item image-item large-item">
                        <img className="main-img" src={news[0].imageUrl} alt={news[0].title} />
                        <p className='news-description'>{news[0].description}</p>
                        <p className="news-date">{news[0].date}</p>
                    </div>
                    <div className="news-item text-item large-item">
                        <p className='news-description'>{news[5].description}</p>
                        <p className="news-date">{news[5].date}</p>
                    </div>
                </div>
                <div className="column column-3">
                    <div className="news-item text-item">
                        <div className="news-badge">Новости</div>
                        <p className='news-description'>{news[1].description}</p>
                        <p className="news-date">{news[1].date}</p>
                    </div>
                    <div className="news-item image-item">
                        <div className='side-img-wrapper'>
                            <img className="side-img" src={news[3].imageUrl} alt={news[3].title} />
                        </div>
                        <p className='news-description'>{news[3].description}</p>
                        <p className="news-date">{news[3].date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsComponent;
