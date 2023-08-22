import React, { useState, useEffect } from 'react';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import './Calendar.scss'

function CalendarPage(props) {

    const today = '';
    const year = 2023;
    const monthes = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    
    const [ events, setEvents ] = useState([
        {
            'day': 0,
            'month': 1,
            'year': 2023,
            'content': '',
            'type': ''
        }
    ]);

    useEffect(() => {
        setEvents([
            {
                'day': 21,
                'month': 9,
                'year': 2023,
                'content': 'Всеобщее декларирование: Особенности заполнения заполнения заполнения заполнения заполнения заполнения заполнения заполнения заполнения заполнения формы 250.00 и 270.00 за 2023 год',
                'type': 'Вебинаp'
            },
            {
                'day': 21,
                'month': 9,
                'year': 2023,
                'content': 'Всеобщее декларирование: Особенности заполнения формы 250.00 и 270.00 за 2023 год',
                'type': 'Вебинаp'
            }
        ])
    }, [])

    console.log(today);

    return ( 
        <>
            <div className='calendar-page'>
                <div className="container">
                    <Header />
                </div>
                <main className='page-content container'>
                    <h2>Календарь мероприятий</h2>

                    <div className="calendar-wrapper">
                        <h3>{today}</h3>

                        <div className="calendar-body">
                        </div>

                        <div className="calendar-events">
                            {
                                events.map((event) => (
                                    <div className='event-card'>
                                        <div>
                                            <p>{event.day} {monthes[event.month]}</p>
                                            <p>{event.year}</p>
                                        </div>
                                        <div>
                                            <p>{event.content}</p>
                                            <div className={'event-type'}>{event.type}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </main>
                <Footer />
            </div>
        </>
    );
}

export default CalendarPage;