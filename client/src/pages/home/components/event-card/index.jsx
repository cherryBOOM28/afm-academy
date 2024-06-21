import React from 'react';
import './style.css';

const EventCard = ({ event, type }) => {
    const cardClass = type === 'main' ? 'cards main-card' : 'cards secondary-card';

    return (
        <div className={`${cardClass} hover-card`}>
            <img className="event-image" src={event.image} alt={event.title} />
            <div className="overlay">
                <div className="text-container">
                    <p className="event-date">{event.date}</p>
                    <h3 className="event-title">{event.title}</h3>
                </div>
                <button className="details-button hover-button">Подробнее</button>
            </div>
        </div>
    );
}

export default EventCard;
