import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Footer from '../../components/footer/Footer';

import './BasicCourse.scss';
import Collapsable from '../../components/UI/collapsable-block/Collapsable';
import RoadList from '../../components/UI/roadList/RoadList';
import Lectors from '../../components/lectors-block/Lectors';

import lector1 from './../../assets/images/Lector_1_cropped.png';
import lector2 from './../../assets/images/Lector_2_cropped.png';
import lector3 from './../../assets/images/Lector_3_cropped.png';

import FeedBacks from '../../components/feedbackBlock/FeedBacks';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import axios from 'axios';
import base_url from '../../settings/base_url';
import Sizebox from '../../components/courseTemplates/common/Sizebox';
import Header from '../../components/header/Header';
import halyk from '../paymentPage/halyk';



const PaymentHalyk = () => {
    const [accessToken, setAccessToken] = useState('');
    const token = localStorage.getItem('jwtToken');
    const [dataBack, setDataBack] = useState('');
    const [paymentData, setPaymentData] = useState('');
    const [invoiceID, setInvoiceID] = useState('');
    
    const { id } = useParams();
    
       

    // Функция для получения токена доступа
    const fetchToken = async () => {
        try {
            const responseData = await axios.get(`${base_url}/api/aml/course/invoiceID`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            });
            setDataBack(responseData.data)
            const auth = new FormData();
            auth.append('grant_type', 'client_credentials');
            auth.append('scope', 'webapi usermanagement email_send verification statement statistics payment');
            auth.append('client_id', 'AMLACADEMY.KZ');
            auth.append('client_secret', 'JYbXA8cJt(L24ffo');
            auth.append('invoiceID', responseData.data.invoice_id);
            auth.append('amount', 50);
            auth.append('currency', 'KZT');
            auth.append('terminal', 'a5e958ad-b799-41ff-9be9-f6d20ddc61a6');
            auth.append('postLink', `${base_url}/api/aml/course/createPostLink`);
            auth.append('failurePostLink', '');

            const response = await fetch('https://epay-oauth.homebank.kz/oauth2/token', {
                method: 'POST',
                body: auth,
            });

            const data = await response.json();
            console.log(data);
            console.log(responseData.data);
            setAccessToken(data.access_token);
            setInvoiceID(responseData.data.invoice_id)
            const paymentObject = createPaymentObject(data, responseData.data.invoice_id, 50, responseData.data.email);
            halyk.showPaymentWidget(paymentObject, (result) => {
                // В этом колбэке обработайте результат показа виджета оплаты
            
                // Сначала вызовите ваш обработчик handlePaymentResult
                handlePaymentResult(result);
            
                // Затем, если условие подходит (например, если оплата прошла успешно), вызовите handlePaymentResultFromBack
                if (result.code === undefined) {
                    handlePaymentResultFromBack(responseData.data.invoice_id,id,responseData.data.user_id,token);
                }
            });

            setPaymentData(paymentObject);
            console.log(paymentObject);
        } catch (error) {
            console.error('Error fetching token:', error);
        }
    };
    

    const createPaymentObject = (auth, invoiceId, amount, email) => {
        return {
            invoiceId: invoiceId,
            invoiceIdAlt: 43790622,
            backLink: "http://localhost:3000/courses/myCourses",
            failureBackLink: "http://localhost:3000/courses/myCourses",
            postLink: `${base_url}/api/aml/course/createPostLink`,
            failurePostLink: `${base_url}/api/aml/course/createPostLink`,
            language: "rus",
            description: "Оплата в интернет магазине",
            accountId: email,
            terminal: 'a5e958ad-b799-41ff-9be9-f6d20ddc61a6',
            amount: amount,
            name:email,
            data: "{\"statement\":{\"name\":\"\",\"invoiceID\":\"\"}}",
            currency: "KZT",
            cardSave: true,
            auth: auth
        };
    };
    const addUserToCourse = async (courseId, userId, token) => {
        try {
            const data = {
                paymentType: 'HALYK',
                course_id: courseId,
                user_id: userId
            };
    
            // Выполняем PUT-запрос с помощью axios.put
            const response = await axios.put(`${base_url}/api/aml/course/saveUser/${userId}/course/${courseId}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            // Обрабатываем успешный ответ от сервера
            console.log("Пользователь успешно добавлен курс:", response);
        } catch (error) {
            // Обрабатываем ошибку
            console.error("Ошибка при добавлении пользователя курсу:", error);
        }
    };


    const handlePaymentResultFromBack = (invoice_id, course_id, user_id) => {
        console.log(invoice_id);
        const fetchPostLink = async () => {
            try {
                const responseData = await axios.get(`https://amlacademy.kz/api/aml/course/getPostLink/${invoice_id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(responseData.data);
                if (responseData.data.code === "ok") {
                    addUserToCourse(course_id, user_id, token)
                }
            } catch (error) {
                
                console.error('Error fetching post link:', error);
            }
        };
        fetchPostLink()
    }
 
    // Функция для обработки результатов платежа
    const handlePaymentResult = (result) => {
    
        
        if (result.code === "ok") {
            console.log('Оплата прошла успешно');
            
            //addUserToCourse(8,dataBack.user_id,token)
        } else {
            console.error("Проверка..........");
           
        }
    };

    // Функция для проведения платежа
    const makePayment = async () => {
        await fetchToken()
    };

    return (
        <div>
            <Button onClick={makePayment}>Halyk Bank</Button>
        </div>
    );
};


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
              <Link to={`/payment/${id}`} style={{ colortextDecoration: 'none' }}><Button onClick={handleClose}>Kaspi Bank</Button></Link>
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