import React, { useState, useEffect } from 'react';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"

import './Calendar.scss'

function CalendarPage(props) {
    const [ events, setEvents ] = useState([
        {
            'id': 0,
            'date': '',
            'content': '',
            'title': '',
            'type': ''
        }
    ]);

    const [showEvent, setShowEvent] = useState(false);
    const [currEvent, setCurrEvent] = useState({
        'id': 0,
        'date': '',
        'content': '',
        'title': '',
        'type': ''
    });

    useEffect(() => {
        setEvents([
            {
                'id': 1,
                'date': '2023-09-21',
                '_date': '2023-09-21',
                'content': 'Всеобщее декларирование: Особенности заполнения заполнения заполнения заполнения заполнения заполнения заполнения заполнения заполнения заполнения формы 250.00 и 270.00 за 2023 год',
                'title': 'Вебинаp',
                'type': 'Вебинаp',

            },
            {
                'id': 2,
                'date': '2023-08-24',
                '_date': '2023-08-24',
                'content': 'Всеобщее декларирование: Особенности заполнения заполнения заполнения заполнения заполнения заполнения заполнения заполнения заполнения заполнения формы 250.00 и 270.00 за 2023 год',
                'title': 'Вебинаp',
                'type': 'Вебинаp',

            },
            {
                'id': 3,
                'date': '2023-09-21',
                '_date': '2023-09-21',
                'content': 'Всеобщее декларирование: Особенности заполнения заполнения заполнения заполнения заполнения заполнения заполнения заполнения заполнения заполнения формы 250.00 и 270.00 за 2023 год',
                'title': 'Вебинаp',
                'type': 'Вебинаp'
            }
        ])
    }, [])

    const handleDateClick = (arg) => {
        // console.log(arg, typeof arg)
    }

    const handleEventClick = (arg) => {
        console.log(arg.event.extendedProps);

        let id = arg.event.id - 0

        setCurrEvent(events.filter(item => {
          return item.id === id
        })[0]);

        setShowEvent(true);
    }

    return ( 
        <>
            <div className='calendar-page'>
                <div className="container">
                    <Header />
                </div>
                <main className='page-content container'>
                    <h2>Календарь мероприятий</h2>

                    <div className="calendar-wrapper">
                        {/* <h3>{today}</h3> */}

                        <div className="calendar-body">
                            <FullCalendar
                                locale={'ru-RU'}
                                buttonText={{
                                    today: "Сегодня",
                                    month: "Месяц",
                                    week: "Неделя",
                                    day: "День",
                                    list: "Список"
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
    const monthes = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

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
    console.log("event", eventInfo);

    return (
      <>
        <div style={{cursor: 'pointer', background: '#F9CB36', border: 'none', padding: '8px'}}>
            <i style={{color: 'black'}}>{eventInfo.event.title}</i>
        </div>
      </>
    )
  }

export default CalendarPage;