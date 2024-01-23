import React, { useState, useEffect } from 'react';

import DefaultHeader from '../../components/defaultHeader/DefaultHeader';
import Footer from '../../components/footer/Footer';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"

import axios from 'axios';

import './Calendar.scss'
import Header from '../../components/header/Header';

import { t } from 'i18next';
import { useTranslation } from 'react-i18next';


const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split('T')[0]; // Extract date part
    return formattedDate;
};


function CalendarPage(props) {

    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const [ events, setEvents ] = useState([
        {
            '_id': 0,
            'date': '',
            'content': '',
            'title': '',
            'type': ''
        }
    ]);

    const [showEvent, setShowEvent] = useState(false);
    const [currEvent, setCurrEvent] = useState({
        '_id': 0,
        'date': '',
        'content': '',
        'title': '',
        'type': ''
    });

    useEffect(() => {
        // console.log('Fetching events...');
        axios.get('http://localhost:1415/events/all')
            .then(res => {
                // console.log('Events response:', res.data);

                const formattedEvents = res.data.map(event => ({
                    ...event,
                    date: formatDate(event.date), 
                    _date: formatDate(event._date)// Format the date here
                    // You can format other date-related fields in a similar way
                }));

                setEvents(formattedEvents);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
                setEvents([])
            });
    }, []);

    const handleDateClick = (arg) => {
        // console.log(arg, typeof arg)
    }

    const handleEventClick = (arg) => {
        // console.log(arg)
        // console.log(arg.event.extendedProps);

        // let id = arg.event.id - 0

        setCurrEvent(events.filter(item => {
          return item._id === arg.event.extendedProps._id
        })[0]);

        setShowEvent(true);
    }

    return ( 
        <>
            <div className='calendar-page'>
                <Header dark={true}  />
                <div className="container">
                </div>
                <main className='page-content container'>
                    <h2>{t('calendar of events')}</h2>

                    <div className="calendar-wrapper">
                        {/* <h3>{today}</h3> */}

                        <div className="calendar-body">
                            <FullCalendar
                               locale={
                                i18n.language === 'ru'
                                    ? 'ru-RU'
                                    : i18n.language === 'kz'
                                    ? 'ru-RU'
                                    : 'en-EN'
                            }
                                // locale={'ru-RU'}
                                buttonText={{
                                    today: t('today'),
                                    month: t('month'),
                                    week: t('week'),
                                    day: t('day'),
                                    list: t('list')
                                }}
                                headerToolbar={{
                                    left: "title",
                                    center: "",
                                    right: "prev,today,next"
                                }}
                                plugins={[ dayGridPlugin, interactionPlugin ]}
                                initialView="dayGridMonth"
                                selectable={true}
                                events={events}
                                dateClick={handleDateClick}
                                eventContent={renderEventContent}
                                eventClick={handleEventClick}

                            />
                        </div>

                        <div className="calendar-events">
                            {
                                !showEvent ? 
                                    events.map((event) => {
                                        <EventCard event={event}/>
                                    })
                                :
                                    <EventCard event={currEvent}/>
                            }
                        </div>
                    </div>

                </main>
                <Footer />
            </div>
        </>
    );
}

const EventCard = ({event}) => {
    const monthes = [t('month1'), t('month2'), t('month3'), t('month4'), t('month5'), t('month6'), t('month7'), t('month8'), t('month9'), t('month10'), t('month11'), t('month12')];

    let day = event.date.substring(8);
    let month = event.date.substring(5, 7);
    month = monthes[parseInt(month) - 1];
    let year = event.date.substring(0, 4)

    return (
        <div className='event-card'>
            <div>
                <p>{day} {month}</p>
                <p>{year}</p>
            </div>
            <div>
                <p>{event.content}</p>
                <div className={'event-type'}>{event.title}</div>
            </div>
        </div>
    )
}

const renderEventContent = (eventInfo) => {
    // console.log("event", eventInfo);

    return ( 
      <>
        <div style={{cursor: 'pointer', background: '#F9CB36', border: 'none', padding: '8px'}}>
            <i style={{color: 'black'}}>{eventInfo.event.title}</i>
        </div>
      </>
    )
  }

export default CalendarPage;