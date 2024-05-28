import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import { useTranslation } from "react-i18next";
import Footer from '../../components/footer/Footer';

import { t } from "i18next";
import Collapsable from '../../components/UI/collapsable-block/Collapsable';
import RoadList from '../../components/UI/roadList/RoadList';
import Lectors from '../../components/lectors-block/Lectors';
import './BasicCourse.scss';

import qr from './../../assets/icons/cashless-payment.png';
import lector1 from './../../assets/images/Lector_1_cropped.png';
import lector2 from './../../assets/images/Lector_2_cropped.png';
import lector3 from './../../assets/images/Lector_3_cropped.png';


import axios from 'axios';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import Sizebox from '../../components/courseTemplates/common/Sizebox';
import FeedBacks from '../../components/feedbackBlock/FeedBacks';
import Header from '../../components/header/Header';
import base_url from '../../settings/base_url';
import PaymentHalyk from '../paymentPage/PaymentHalyk';

console.log(t);

function BasicCourse() {
    const jwtToken = localStorage.getItem('jwtToken');
    let user_id = localStorage.getItem("user_id");
    const { t } = useTranslation();
    console.log(t);
    const {id} = useParams();
    let user_idd = parseInt(user_id,10)

    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);
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
        const [isAgreementChecked, setIsAgreementChecked] = useState(false);

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
                Каким способом хотели оплатить {data != null && [41, 47].includes(data.course_id) ? 'модуль' : 'курс'}?
                </DialogContentText>

                <div className='offer-contract-wrapper'>
                    <input 
                        onChange={(e) => {
                            setIsAgreementChecked(e.target.checked);
                        }}
                        checked={isAgreementChecked}
                        type="checkbox" 
                        name='offer-contract' 
                        id='offer-contract'
                    />
                    <label htmlFor="offer-contract">Прочитал, и согласен с <Link to={'/offer-agreement'}>публичным договором-оферта</Link></label>
                </div>
              </DialogContent>

              <DialogActions style={{ position: 'relative', overflow: 'hidden' }}>

                {
                    !isAgreementChecked 
                        ? (
                            <div 
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    zIndex: '10',
                                    cursor: 'not-allowed'
                                }}
                            >
                            </div>
                        ) : null
                }

                <Link to={`/payment/${id}`} style={{ colortextDecoration: 'none' }}>
                    <Button onClick={handleClose}>
                        <img 
                            src={qr} 
                            style={{
                                width: '225px',
                                height: '225px',
                                filter: isHovered ? 'brightness(60%)' : 'none', // Применяем эффект затемнения при наведении
                                transition: 'filter 0.3s ease', // Добавляем плавное изменение стиля при наведении
                            }} 
                            onMouseEnter={() => setIsHovered(true)} 
                            onMouseLeave={() => setIsHovered(false)} 
                            alt="QR Code" />
                    </Button>
                </Link>

                <Divider orientation="vertical" flexItem sx={{ height: '225px', borderWidth:'3px' }}/>
                
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
                const responseUserCourse = await axios.get(`${base_url}/api/aml/course/getUserBazovii`);
                console.log(jwtToken)
                if (response.status === 200) {
                    setData(response.data);
                    setData2(responseUserCourse.data)
                    console.log(response.data)
                    // console.log(parseInt(user_id,10))
                    console.log('user_id:', user_id); // Should log: 30
                    console.log('responseList:', data2); // Should log the entire array
                    console.log('responseList.includes(user_id):', data2.includes(user_idd)); // Should log: true if 30 is in the list

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


            {
                isLoading ? <div className="page-content container" style={{
                    padding: '80px 0px'
                }}>Загрузка...</div>
                : (
                <div className="page-content container">
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <h1>{data ? data.course_name : "Загрузка..."}</h1>
                        <div className='blue-btn2'>
                            {/* <div onClick={() => setShowModal(true)}>
                                Подать заявку
                            </div> */}
                        
                            <div>
                                {
                                    jwtToken !== null
                                        ? (
                                            data !== null && [41, 47, 79].includes(data.course_id) && !data2.includes(user_idd)
                                                ? (
                                                    <Link onClick={handleClickOpen} style={{ color: 'white', textDecoration: 'none' }}>
                                                        {t("buy a module")}
                                                    </Link>
                                                ) :
                                                    data !== null && data2.includes(user_idd)
                                                    ? (
                                                        <Link to={`/courses/8/read`} style={{ color: 'white', textDecoration: 'none' }}>
                                                            Пройти урок
                                                        </Link>
                                                    )
                                                : (
                                                    data !== null && data.course_id === 86
                                                        ? (
                                                            <Link to={`/courses/86/read`} style={{ color: 'white', textDecoration: 'none' }}>
                                                                Пройти урок
                                                            </Link>
                                                        ): <Link onClick={handleClickOpen} style={{ color: 'white', textDecoration: 'none' }}>
                                                            {t("buy a course")}
                                                        </Link>
                                                )

                                        )
                                        : (
                                            data != null && data.course_id === 86
                                        ? (

                                                <Link to={`/login`} style={{ color: 'white', textDecoration: 'none' }}>
                                                    Пройти урок
                                                </Link>
                                        ) :
                                    (
                                        <Link to={`/login`} style={{ color: 'white', textDecoration: 'none' }}>
                                            {t("buy a course")}
                                        </Link>
                            ))
                                }
                            </div>
                            <AlertDialog/>
                        </div>
                    
                    </div>

                    <Sizebox height={20}/>
                    <div className="collapsable-blocks">
                        <Collapsable title={`${data != null && [41, 47, 79].includes(data.course_id) ? t("what is this module about?") : data.course_id === 86 ? t("what is this lesson about?"): t("what is this course about?")}`}>
                            <p>{data ? data.what_course_represents : "Загрузка..."}</p>
                        </Collapsable>
                        <Collapsable title={`${data != null && [41, 47, 79].includes(data.course_id) ? t("who is the module intended for?") : data.course_id === 86 ? t("who is the lesson intended for?") : t("who is the course intended for?")}`}>
                            <p>
                                {data ? data.who_course_intended_for : "Загрузка..."}
                            </p>
                        </Collapsable>
                        <Collapsable title={`${data != null && [41, 47, 79].includes(data.course_id) ? t("module duration"): data.course_id === 86 ? t("lesson duration") : t("course duration")}`}>
                            <p>
                                {data ? data.what_is_duration : "Загрузка..."}
                            </p>
                        </Collapsable>
                        {data != null && data.course_id !==  86 ?
                        <Collapsable title={`${data != null && [41, 47, 79].includes(data.course_id) ? t("module fee"): data.course_id === 86 ? t("lesson fee") : t("course fee")}`}>
                            <p>
                                {data ? data.course_price : ''} тенге
                            </p>
                        </Collapsable>
                        : ''}
                        <Collapsable title={`${data != null && [41, 47, 79].includes(data.course_id) ? t("accessibility of the module") : data.course_id === 86 ? t("accessibility of the lesson") : t("accessibility of the course")}`}>
                            <p>
                                {data ? data.what_is_availability : "Загрузка..."}
                            </p>
                        </Collapsable>
                        {data.course_id !== 86 ?
                        <Collapsable title={`${data != null && [41, 47, 79].includes(data.course_id) ? t("module program")  : t("course program")}`}>
                            {data ? (
                                <div dangerouslySetInnerHTML={{ __html: data.what_is_agenda_of_course }} />
                            ) : (
                                "Загрузка..."
                            )}
                        </Collapsable>
                            :
                            ''
                        }
                        <Collapsable title={t("What do you get?")}>
                            <p>
                                {data ? data.what_you_will_get : "Загрузка..."}
                            </p>
                        </Collapsable>
                    </div>
                    {data != null && data.course_id !== 86 ?
                        <div>
                            <h2 className='section-header'>{ t("learning process")}</h2>
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
                                        {data != null && [41, 47, 79].includes(data.course_id) ? t("buy a module") : t("buy a course")}
                                    </Link>
                                ) : (
                                    <Link to={`/login`} style={{ color: 'white', textDecoration: 'none' }}>
                                        {data != null && [41, 47, 79].includes(data.course_id) ? t("buy a module") : t("buy a course")}
                                    </Link>
                                )
                            }
                        </div>

                    </div>

                </div>,
                        t("payment"),
                        t("providing access to the personal account"),
                        // 'Добавление в закрытый чат с лектором',
                        t("training"),
                        data != null && [41, 47, 79].includes(data.course_id) ? t("test") : t("issuance of certificates")
                        ]}/> </div>
                        :
                        ""
                    }

                            <h2 className='section-header'>{ t("lectors")}</h2>
                    <Lectors
                        lectors={[
                            { img: lector1, name: 'Махметов Муратбек', text: t("makhmetov")},
                            { img: lector2, name: 'Махашева Асем', text: t("makhmetov")},
                            { img: lector3, name: 'Шагатаев Даурен', text: t("makhmetov")},
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
                                jwtToken !== null
                                    ? (
                                        data !== null && [41, 47, 79].includes(data.course_id)
                                            ? (
                                                <Link onClick={handleClickOpen} style={{ color: 'white', textDecoration: 'none' }}>
                                                    {t("buy a module")}
                                                </Link>
                                            )
                                            : (
                                                data !== null && data.course_id === 86
                                                    ? (
                                                        <Link to={`/courses/86/read`} style={{ color: 'white', textDecoration: 'none' }}>
                                                            Пройти урок
                                                        </Link>
                                                    ): <Link onClick={handleClickOpen} style={{ color: 'white', textDecoration: 'none' }}>
                                                        {t("buy a course")}
                                                    </Link>
                                            )
                                    )
                                    : (
                                        data != null && data.course_id === 86
                                            ? (

                                                <Link to={`/login`} style={{ color: 'white', textDecoration: 'none' }}>
                                                    Пройти модуль
                                                </Link>
                                            ) :
                                            (
                                                <Link to={`/login`} style={{ color: 'white', textDecoration: 'none' }}>
                                                    {t("buy a course")}
                                                </Link>
                                            ))
                            }
                        </div>
                
                    </div>
                    
                </div>
                )
            }
  
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