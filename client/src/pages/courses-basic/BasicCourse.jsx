import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';

import Footer from '../../components/footer/Footer';

import './BasicCourse.scss';
import Collapsable from '../../components/UI/collapsable-block/Collapsable';
import RoadList from '../../components/UI/roadList/RoadList';
import Lectors from '../../components/lectors-block/Lectors';

import lector1 from './../../assets/images/Lector_1_cropped.png';
import lector2 from './../../assets/images/Lector_2_cropped.png';
import lector3 from './../../assets/images/Lector_3_cropped.png';
import qr from './../../assets/icons/cashless-payment.png';


import FeedBacks from '../../components/feedbackBlock/FeedBacks';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import axios from 'axios';
import base_url from '../../settings/base_url';
import Sizebox from '../../components/courseTemplates/common/Sizebox';
import Header from '../../components/header/Header';
import PaymentHalyk from '../paymentPage/PaymentHalyk';


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
    const [open, setOpen] = useState(false);
      
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    function AlertDialog() {
        const [isHovered, setIsHovered] = useState(false);
        return (
          <React.Fragment>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Способ оплаты"}
              </DialogTitle>

              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                Каким способом хотели оплатить курс?
                </DialogContentText>
              </DialogContent>

              <DialogActions>
              <Link to={`/payment/${id}`} style={{ colortextDecoration: 'none' }}><Button onClick={handleClose}><img src={qr} style={{
                    width: '225px',
                    height: '225px',
                    filter: isHovered ? 'brightness(60%)' : 'none', // Применяем эффект затемнения при наведении
                    transition: 'filter 0.3s ease', // Добавляем плавное изменение стиля при наведении
                        }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} alt="QR Code" /></Button></Link>
                         <Divider orientation="vertical" flexItem sx={{ height: '225px',borderWidth:'3px' }}/>
                <Button onClick={handleClose}>
                    <PaymentHalyk id={id} />
                </Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        );
      }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/api/aml/course/justGetCourseById/${id}`);


                if (response.status === 200) {
                    setData(response.data);
                    console.log(response.data)
                } else {
                    // Handle other status codes if needed
                    setError(response.statusText);
                    // console.log(response.statusText);
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
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <h1>{data ? data.course_name : "Загрузка..."}</h1>
                    <div className='blue-btn2'>
                        {/* <div onClick={() => setShowModal(true)}>
                            Подать заявку
                        </div> */}
                    
                        <div>
                            {
                                jwtToken != null
                                ? (
                                    <Link onClick={handleClickOpen} style={{ color: 'white', textDecoration: 'none' }}>
                                        Приобрести курс
                                    </Link>
                                ) : (
                                    <Link to={`/login`} style={{ color: 'white', textDecoration: 'none' }}>
                                        Приобрести курс
                                    </Link>
                                )
                            }
                        </div>
                        <AlertDialog/>
                
                    </div>
                
                </div>

                <Sizebox height={20}/>
                <div className="collapsable-blocks">
                    <Collapsable title={'Что из себя представляет данный курс?'}>
                        <p>{data ? data.what_course_represents : "Загрузка..."}</p>
                    </Collapsable>
                    <Collapsable title={'Для кого предназначен курс?'}>
                        <p>
                            {data ? data.who_course_intended_for : "Загрузка..."}
                        </p>
                    </Collapsable>
                    <Collapsable title={'Длительность курса'}>
                        <p>
                            {data ? data.what_is_duration : "Загрузка..."}
                        </p>
                    </Collapsable>
                    <Collapsable title={'Стоимость курса'}>
                        <p>
                            {data ? data.course_price : ''} тенге
                        </p>
                    </Collapsable>
                    <Collapsable title={'Доступность курса'}>
                        <p>
                            {data ? data.what_is_availability : "Загрузка..."}
                        </p>
                    </Collapsable>
                    <Collapsable title={'Программа курса'}>
                        {data ? (
                            <div dangerouslySetInnerHTML={{ __html: data.what_is_agenda_of_course }} />
                        ) : (
                            "Загрузка..."
                        )}
                    </Collapsable>
                    <Collapsable title={'Что вы получите?'}>
                        <p>
                            {data ? data.what_you_will_get : "Загрузка..."}
                        </p>
                    </Collapsable>
                </div>

                <h2 className='section-header'>Процесс обучения</h2>
                <RoadList items={[
                    <div>  <div className='blue-btn1'>
                    {/* <div onClick={() => setShowModal(true)}>
                        Подать заявку
                    </div> */}
                
                    <div>
                        {
                            jwtToken != null
                            ? (
                                <Link onClick={handleClickOpen} style={{ color: 'white', textDecoration: 'none' }}>
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
            
               </div>,
                    'Оплата',
                    'Предоставление доступа к Личному кабинету',
                    // 'Добавление в закрытый чат с лектором',
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
                                    <Link onClick={handleClickOpen} style={{ color: 'white', textDecoration: 'none' }}>
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
        'fontFamily': 'Inter',
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