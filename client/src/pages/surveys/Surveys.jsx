import React, { useState, useEffect } from 'react';

import DefaultHeader from '../../components/defaultHeader/DefaultHeader';
import Footer from '../../components/footer/Footer';

import './Surveys.scss'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import Header from '../../components/header/Header';
import { useTranslation } from 'react-i18next';


function SurveysPage() {

        const { t } = useTranslation();

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
                name: t('anketa'),
                status: 'active',
            },
            {
                id: '_123',
                date_open: '2023-08-24',
                date_close: '2023-08-24',
                name: t('anketa'),
                status: '-',
            },
            {
                id: '_123',
                date_open: '2023-08-24',
                date_close: '2023-08-24',
                name: t('anketa'),
                status: 'active',
            },
        ]);
    })

    return ( 
        <div className='surveys-page'>
            <Header dark={true}  />
            <div>
                <div className="container">
                </div>
            </div>

            <main className='page-content container'>
                <h1>{t('survey on topics for training')}</h1>
                <div className="surveys-list-block">
                    <div className='toggles'>
                        <div 
                            onClick={() => {
                                setSurvey(true);
                            }} 
                            className={`${isSurvey ? 'active' : ''}`}>
                                {t('surveys')}
                        </div>
                        <div
                            onClick={() => {
                                setSurvey(false);
                            }}
                            className={`${!isSurvey ? 'active' : ''}`}>
                                {t('testing')}
                        </div>
                    </div>

                    <div className="survey-list">
                        <table>

                            <thead>
                                <tr>
                                    <td>№</td>
                                    <td>{t('date of publication')}</td>
                                    <td>{t('title')}</td>
                                    <td>{t('status')}</td>
                                </tr>
                            </thead>
                            <div style={{height: '20px'}}></div>
                            <tbody>
                                {
                                    (isSurvey ? surveyList : testList).length !== 0 ? 
                                        (isSurvey ? surveyList : testList).map(({ date_open, date_close, name, status, id }, index) => {
                                            
                                            let _status = status === 'active' ? t('open') : t('closed');

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
                                            <td colspan="4" style={{textAlign: 'center'}}>{t('no available')} {isSurvey ? t('survey') : t('tests')}</td>
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