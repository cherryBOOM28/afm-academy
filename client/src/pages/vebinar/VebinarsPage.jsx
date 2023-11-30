import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './VebinarsPage.scss';

import DefaultHeader from '../../components/defaultHeader/DefaultHeader';
import Footer from '../../components/footer/Footer';

import vebinarImg from './../../assets/images/vebinar-img.png';
import axios from "axios";
import base_url from "../../settings/base_url";

function VebinarsPage() {

    const navigate = useNavigate();

    const [vebinars, setVebinars] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/api/aml/webinar/getWebinars`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });

                if (response.status === 200) {
                    console.log(response.data)
                    setVebinars(response.data);
                } else {
                    // Handle other status codes if needed
                    setError(response.statusText);
                    console.log(response.statusText);
                }


            } catch (error) {
                setError(error);
                console.error(error);
            }

            setLoading(false);
        };

        fetchData();
    }, []);

    const jwtToken = localStorage.getItem('jwtToken');

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
        image,
        name,
        webinar_for_member_of_the_system,
        type,
        cost,
        contingent,
        date,
     } = props.vebinar;
    console.log(webinar_for_member_of_the_system)

    const datee = new Date(date);

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

    const navigate = useNavigate()

    const handleVebinarEnter = () => {

    }

    return (
        <div className="vebinar-card">
            <img src={image} alt="" />
            <div className="info-block">
                <div className='title'>{name}</div>
                <div>
                    <div className="vebinar-info">
                        <p>Аудитория (для кого): {webinar_for_member_of_the_system}</p>
                        <p>Формат: {type}</p>
                        <p>Стоимость: бесплатно</p>
                        <p>Ограничения: До 30 человек</p>

                        <div className="date">{formattedDate}</div>
                    </div>
                    <div className="lector-info">
                        <div className='lector-title'>Лектор</div>
                        <div className='lector-name'>Шагатаев Даурен</div>
                        <div className='lector-text'>Лектор по обучению и повышению квалификации по финансовому мониторингу</div>
                        <div 
                            className='action-btn'
                            onClick={() => {
                                handleVebinarEnter()
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