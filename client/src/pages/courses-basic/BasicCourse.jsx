import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Footer from '../../components/footer/Footer';
import DefaultHeader from '../../components/defaultHeader/DefaultHeader';

import './BasicCourse.scss';
import Collapsable from '../../components/UI/collapsable-block/Collapsable';
import RoadList from '../../components/UI/roadList/RoadList';
import Lectors from '../../components/lectors-block/Lectors';

import lectorImg from './../../assets/images/avatar-img.png';
import lector1 from './../../assets/images/Lector_1_cropped.png';
import lector2 from './../../assets/images/Lector_2_cropped.png';
import lector3 from './../../assets/images/Lector_3_cropped.png';

import FeedBacks from '../../components/feedbackBlock/FeedBacks';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import axios from 'axios';
import base_url from '../../settings/base_url';
import Sizebox from '../../components/courseTemplates/common/Sizebox';
import Header from '../../components/header/Header';

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
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/api/aml/course/getCourseById/${id}`);

                // console.log(response.data);

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
            <Header dark={true}  />
            <div>
                <div className="container">
                </div>
            </div>

            <div className="page-content container">

                <Sizebox height={40}/>
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
                            {data ? data.course_price : ''} тенге
                        </p>
                    </Collapsable>
                    <Collapsable title={'Дата ближайшего курса'}>
                        <p>
                            21.10.2023
                        </p>
                    </Collapsable>
                    { data && data.modules && data.modules.length != 0 ? <Collapsable title={'Программа курса'}>
                        <p style={{lineHeight: '23px'}}>
                        {
                            data.modules.map((module, index) => {

                                console.log(module)
                                return <>{index+1}. {module.chapter_description}<br /></>

                            })
                        }
                        </p>
                    </Collapsable> : null }
                    <Collapsable title={'Дата ближайшего курса'}>
                        <p>
                            Доступ к просмотру записи лекции на 3 месяца, раздаточный материал, а также материалы лекции в личном кабинете
                        </p>
                    </Collapsable>
                </div>

                <h2 className='section-header'>Процесс обучения</h2>
                <RoadList items={[
                    'Подача заявки',
                    'Оплата',
                    'Предоставление доступа к Личному кабинету',
                    'Добавление в закрытый чат с лектором',
                    'Обучение',
                    'Выдача сертификатов'
                ]}/>

                <h2 className='section-header'>Лекторы</h2>
                <Lectors 
                    lectors={[
                        { img: lector1, name: 'Махметов Муратбек', text: 'Лектор по обучению и повышению квалификации по финансовому мониторингу.'},
                        { img: lector2, name: 'Махашева Асем', text: 'Лектор по обучению и повышению квалификации по финансовому мониторингу.'},
                        { img: lector3, name: 'Шагатаев Даурен', text: 'Лектор по обучению и повышению квалификации по финансовому мониторингу.'},
                        // { img: lectorImg, name: 'Larry W.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                        // { img: lectorImg, name: 'Larry W.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                    ]}
                />

                {!isLoading 
                    ? (
                        <>
                            <h2 className='section-header'>Отзывы</h2>
                            <FeedBacks 
                                feedBacks={data !== null ? data.courseComments : []}
                            />
                        </> ) 
                    : <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                        <div>
                            Загрузка...
                        </div>
                    </div>
                    }
                    <div className='blue-btn'>
                        {/* <div onClick={() => setShowModal(true)}>
                            Подать заявку
                        </div> */}
                    
                        <div>
                            {
                                jwtToken != null
                                ? (
                                    <Link to={`/payment/${id}`} style={{ color: 'white', textDecoration: 'none' }}>
                                        Приобрести курс
                                    </Link>
                                ) : (
                                    <Link to={`/login`} style={{ color: 'white', textDecoration: 'none' }}>
                                        Приобрести курс
                                    </Link>
                                )
                            }
                        </div>
                
                    </div>
                
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