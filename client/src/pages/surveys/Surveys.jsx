import React, { useState, useEffect } from 'react';

import DefaultHeader from '../../components/defaultHeader/DefaultHeader';
import Footer from '../../components/footer/Footer';

import './Surveys.scss'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';

function SurveysPage() {
    const [isSurvey, setSurvey] = useState(true);

    const [surveyList, setSurveyList] = useState([]);
    const [testList, setTestList] = useState([]);

    const navigate = useNavigate();

    const {
        isLoggedIn
      } = useAuth()
    

    useEffect(() => {
        setSurveyList([
            {
                id: '_123',
                date_open: '2023-08-24',
                date_close: '2023-08-24',
                name: 'Анкета',
                status: 'active',
            },
            {
                id: '_123',
                date_open: '2023-08-24',
                date_close: '2023-08-24',
                name: 'Анкета',
                status: '-',
            },
            {
                id: '_123',
                date_open: '2023-08-24',
                date_close: '2023-08-24',
                name: 'Анкета',
                status: 'active',
            },
        ]);
    })

    return ( 
        <div className='surveys-page'>
            <div>
                <div className="container">
                    <DefaultHeader />
                </div>
            </div>

            <main className='page-content container'>
                <h1>Опрос по темам для обучения</h1>
                <div className="surveys-list-block">
                    <div className='toggles'>
                        <div 
                            onClick={() => {
                                setSurvey(true);
                            }} 
                            className={`${isSurvey ? 'active' : ''}`}>
                                Опросы
                        </div>
                        <div
                            onClick={() => {
                                setSurvey(false);
                            }}
                            className={`${!isSurvey ? 'active' : ''}`}>
                            Тестирование
                        </div>
                    </div>

                    <div className="survey-list">
                        <table>

                            <thead>
                                <tr>
                                    <td>№</td>
                                    <td>Дата публикации</td>
                                    <td>Название</td>
                                    <td>Статус</td>
                                </tr>
                            </thead>
                            <div style={{height: '20px'}}></div>
                            <tbody>
                                {
                                    (isSurvey ? surveyList : testList).length !== 0 ? 
                                        (isSurvey ? surveyList : testList).map(({ date_open, date_close, name, status, id }, index) => {
                                            
                                            let _status = status === 'active' ? 'Открыто' : 'Закрыто';

                                            return (
                                                <tr onClick={() => {
                                                    if (status === 'active' && isLoggedIn) { 
                                                        navigate(`/survey/${id}`)
                                                    }

                                                    if (!isLoggedIn) navigate('/login')
                                                }}>
                                                    <td>{index + 1}</td>
                                                    <td>{date_open}</td>
                                                    <td>{name}</td>
                                                    <td><div className={`${status === 'active' ? 'active' : 'closed'}`}>{_status}</div></td>
                                                </tr>
                                            )
                                        })
                                    : (
                                        <tr>
                                            <td colspan="4" style={{textAlign: 'center'}}>Нет доступных {isSurvey ? 'опросов' : 'тестов'}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                            

                        </table>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}

export default SurveysPage;