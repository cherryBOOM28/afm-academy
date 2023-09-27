import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './VebinarsPage.scss';

import DefaultHeader from '../../components/defaultHeader/DefaultHeader';
import Footer from '../../components/footer/Footer';

import vebinarImg from './../../assets/images/vebinar-img.png';

function VebinarsPage() {

    const [vebinars, setVebinars] = useState([
        {
            id: '_123',
            img: '',
            title: '',
            auditory: 'MVO',
            format: 'online',
            cost: 'FREE',
            contingent: 'До 30 человек',
            date: '2023-09-01',
            lector: {
                name: 'Vebin',
                text: 'lorem ipsum dolor sit amet, con'
            }
        }
    ])

    useEffect(() => {
        // axios to get vebinars
        // and set vebinars
        setVebinars([
            {
                id: '_123',
                img: vebinarImg,
                title: 'Тема: ПВК',
                auditory: 'МФО',
                format: 'Онлайн',
                cost: 'бесплатно',
                contingent: 'До 30 человек',
                date: '5 августа 15:00',
                lector: {
                    name: 'Николаев Богдан Владимирович',
                    text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
            },
            {
                id: '_123',
                img: vebinarImg,
                title: 'Тема: ПВК',
                auditory: 'МФО',
                format: 'Онлайн',
                cost: 'бесплатно',
                contingent: 'До 30 человек',
                date: '5 августа 15:00',
                lector: {
                    name: 'Николаев Богдан Владимирович',
                    text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
            },
        ])
    }, [])

    return ( 
        <div className={'vebinars-page'}>
            <div>
                <div className="container">
                    <DefaultHeader/>
                </div>
            </div>

            <div className="page-content container">

                <h1>Вебинары</h1>

                <div className="vebinar-list-block">
                {console.log(vebinars)}
                    {
                        vebinars.map(vebinar => {
                            console.log(vebinar.lector)
                            return <VebinarCard vebinar={vebinar}/>
                        }
                            
                        )
                    }
                </div>

            </div>

            <Footer/>
        </div>
    );
}

const VebinarCard = (props) => {
    const { 
        id,
        img,
        title,
        auditory,
        format,
        cost,
        contingent,
        date,
        lector
     } = props.vebinar;
    console.log(title)

    const navigate = useNavigate()

    return (
        <div className="vebinar-card">
            <img src={img} alt="" />
            <div className="info-block">
                <div className='title'>{title}</div>
                <div>
                    <div className="vebinar-info">
                        <p>Аудитория (для кого): {auditory}</p>
                        <p>Формат: {format}</p>
                        <p>Стоимость: {cost}</p>
                        <p>Ограничения: {contingent}</p>

                        <div className="date">{date}</div>
                    </div>
                    <div className="lector-info">
                        <div className='lector-title'>Лектор</div>
                        <div className='lector-name'>{lector.name}</div>
                        <div className='lector-text'>{lector.text}</div>
                        <div 
                            className='action-btn'
                            onClick={() => {
                                navigate(`/vebinars/${id}`)
                            }}
                        >Принять участие</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VebinarsPage;