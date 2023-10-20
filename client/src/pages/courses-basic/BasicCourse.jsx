import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Footer from '../../components/footer/Footer';
import DefaultHeader from '../../components/defaultHeader/DefaultHeader';

import './BasicCourse.scss';
import Collapsable from '../../components/UI/collapsable-block/Collapsable';
import RoadList from '../../components/UI/roadList/RoadList';
import Lectors from '../../components/lectors-block/Lectors';

import lectorImg from './../../assets/images/avatar-img.png';
import FeedBacks from '../../components/feedbackBlock/FeedBacks';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import axios from 'axios';
import base_url from '../../settings/base_url';

function BasicCourse() {
    const jwtToken = localStorage.getItem('jwtToken');

    const {id} = useParams();

    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const [request, setRequest] = useState({
        email: '',
        name: '',
        phone: ''
    })

    const requestOnchange = (key, value) => {
        setRequest(
            {...request, [key]: value}
        )
    }

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/api/aml/course/getCourseById/${id}`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });

                console.log(response.data);

                if (response.status === 200) {
                    setData(response.data);
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

    return ( 
        <div className={`basic-course-page`}>
            <div>
                <div className="container">
                    <DefaultHeader />
                </div>
            </div>

            <div className="page-content container">

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <h1 style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>{data ? data.course_name : ''}</h1>
                    <div style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        background: 'rgb(31, 60, 136)',
                        color: 'white',
                        borderRadius: '5px',

                    }}
                    onClick={() => {
                        navigate('/courses/testCourse')
                    }}
                    >
                        Начать курс
                    </div>
                </div>
                <div className="collapsable-blocks">
                    <Collapsable title={'Что из себя представляет данный курс?'}>
                        <p>Базовый курс включает в себя теоретический минимум, необходимый для всех видов СФМ.</p>
                    </Collapsable>
                    <Collapsable title={'Для кого предназначен курс?'}>
                        <p>
                            Курс предназначен для тех субъектов, кто еще не знаком со сферой ПОД/ФТ и хотел бы ознакомиться с требованиями законодательства в отношении СФМ
                        </p>
                    </Collapsable>
                    <Collapsable title={'Длительность курса'}>
                        <p>
                            Курс состоит из 16 академических часов, которые разделены на два учебных дня.
                        </p>
                    </Collapsable>
                    <Collapsable title={'Стоимость курса'}>
                        <p>
                            {data ? data.course_price : ''}
                        </p>
                    </Collapsable>
                    <Collapsable title={'Дата ближайшего курса'}>
                        <p>
                            21.10.2023
                        </p>
                    </Collapsable>
                    <Collapsable title={'Программа курса'}>
                        <p style={{lineHeight: '23px'}}>
                        {
                            data ? data.chapters.map((chapter, index) => {

                                console.log(chapter)
                                return <>{index+1}. {chapter.chapter_description}<br /></>

                            }) : null
                        }
                        </p>
                    </Collapsable>
                    <Collapsable title={'Дата ближайшего курса'}>
                        <p>
                            Доступ к просмотру записи лекции на 3 месяца, раздаточный материал, а также материалы лекции в личном кабинете
                        </p>
                    </Collapsable>
                </div>

                <h2>Процесс обучения</h2>
                <RoadList items={[
                    'Подача заявки',
                    'Оплата',
                    'Предоставление доступа к Личному кабинету',
                    'Добавление в закрытый чат с лектором',
                    'Обучение',
                    'Выдача сертификатов'
                ]}/>

                <h2>Лекторы</h2>
                <Lectors 
                    lectors={[
                        { img: lectorImg, name: 'Larry W.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                        { img: lectorImg, name: 'Larry W.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                        // { img: lectorImg, name: 'Larry W.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                        // { img: lectorImg, name: 'Larry W.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                    ]}
                />

                {data !== null && data.courseComments !== null 
                    ? (
                        <>
                            <h2>Отзывы</h2>
                            <FeedBacks 
                                feedBacks={data !== null ? data.courseComments : []}
                            />

                            <div className='blue-btn'>
                                <div onClick={() => setShowModal(true)}>
                                    Подать заявку
                                </div>
                            </div>
                        </>
                    ) : null
                }
                
            </div>
  
            <Footer />
            {
                showModal ? 
                    <ModalWindow title={'Подать заявку'} setShowModal={setShowModal}>
                        <FormInput title={'Почта'} field={'email'} onChange={requestOnchange}/>
                        <FormInput title={'ФИО'} field={'name'} onChange={requestOnchange}/>
                        <FormInput title={'Номер телефона'} field={'phone'} onChange={requestOnchange}/>
                        <div style={{display: 'flex', justifyContent: 'end', padding: '0px 20px'}}>
                            <div 
                                style={{background: '#1F3C88', padding: '10px 20px', color: 'white', fontSize: '16px', borderRadius: '5px', outline: 'none', cursor: 'pointer'}}
                                onClick={() => {
                                    setShowModal(false);
                                }}
                            >
                                Отправить
                            </div>
                        </div>
                    </ModalWindow>
                :
                    <></>
            }
            
        </div>
    );
}

const FormInput = ({title, field, onChange}) => {
    const labelStyle = {
        'fontFamily': 'Roboto',
        'fontSize': '1.2rem',
        paddingLeft: '10px',
    }

    const inputStyle = {
        color: 'black',
        // width: '500px',
        border: '1px solid black',
        borderRadius: '5px',
        fontSize: '1.2rem',
        padding: '10px'
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '20px', padding: '0px 20px'}}>

            <label style={labelStyle} htmlFor={field}>{title}</label>
            <input style={inputStyle} placeholder={field} type="text" name={field} onChange={(e) => {
                let value = e.target.value;
                onChange(field, value)
            }}/>


        </div>
    )

}

export default BasicCourse;