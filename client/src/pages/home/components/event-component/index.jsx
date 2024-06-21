import React from 'react';
import eventImg from '../../assets/jpg/test.jpg';
import EventCard from '../event-card';
import './style.css';

export const mockEvents = [
    {
        id: 1,
        title: 'Презентация проекта AML Game',
        date: '22-23 июня 2024',
        image: eventImg, // Replace with actual paths to your images
    },
    {
        id: 2,
        title: 'Презентация проекта AML Game',
        date: '22-23 июня 2024',
        image: eventImg,
    },
    {
        id: 3,
        title: 'Презентация проекта AML Game',
        date: '22-23 июня 2024',
        image: eventImg,
    },
];


const EventsComponent = () => {
    // const [events, setEvents] = useState([]);

    // useEffect(() => {
    //     axios.get('/api/events')
    //         .then(response => {
    //             setEvents(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching events:', error);
    //         });
    // }, []);
    const events = mockEvents;

    if (events.length < 3) return <div>Loading...</div>;

    return (
        <div className='events-page-container'>
            <div className="events-page">
                <h2 className="page-title">Будущие мероприятия</h2>
                <div className="cards-container">
                    <EventCard event={events[0]} type="main" />
                    <div className="secondary-cards">
                        <EventCard event={events[1]} type="secondary" />
                        <EventCard event={events[2]} type="secondary" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventsComponent;
