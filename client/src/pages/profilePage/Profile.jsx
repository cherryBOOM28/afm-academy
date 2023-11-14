import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import DefaultHeader from '../../components/defaultHeader/DefaultHeader';

import './profile.scss'

import {IoIosArrowBack} from 'react-icons/io';
import {BiSolidVideo} from 'react-icons/bi';
import {BsFillPersonFill} from 'react-icons/bs';


import axios from 'axios';
import Vebinar from './vebinar';
import ProfileHeader from '../../components/profile-header';
import ProfileGeneral from '../../components/profile-generalInfo';
import ProfileJob from '../../components/profile-job';
import ProfileEducation from '../../components/profile-education';
import ProfilePassword from '../../components/profile-password';

function Profile(props) {

    const [currentTab, setCurrentTab] = useState(1);
    const [isEdit, setIsEdit] = useState(false);
    
    const [editedGeneralInfo, setEditedGeneralInfo] = useState({});

    const handleTabClick = (tab) => {
        setCurrentTab(tab);
    }

    const handleRedact = () => {
        setIsEdit(prev => !prev);
    }
    
    const getSection = () => {
        if (currentTab === 1) {
            return <ProfileGeneral isEdit={isEdit} />
        }

        if (currentTab === 2) {
            return <Vebinar/>
        }
        
        if (currentTab === 3) {
            return <ProfileJob isEdit={isEdit} />                  
        }
        
        if (currentTab === 4) {
            return <ProfileEducation />
        }

        if (currentTab === 5) {
            return <ProfilePassword />
        }

        return null;
    }

    return (
        <div className="profile-page"> 
            <div className="container">
                <DefaultHeader/>
            </div>
            <div className="profile-page-wrapper">
                <div className="container">
                    <Link to='/courses/catalog' className='nav-back'>
                        <IoIosArrowBack/>
                        <div>Назад к главной</div>
                    </Link>

                    {/* <ProfileHeader handleRedact={handleRedact}/> */}

                    <div className="profile-page-body">
                        <div className="side-bar">
                            <div className={`${currentTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
                                <p>Личные данные</p>
                            </div>
                            <div className={`${currentTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
                                <p>Вебинары</p>
                            </div>
                            <div className={`${currentTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>
                                <p>Опыт работы</p>
                            </div>
                            <div className={`${currentTab === 4 ? 'active' : ''}`} onClick={() => handleTabClick(4)}>
                                <p>Сертификаты</p>
                            </div>
                            <div className={`${currentTab === 5 ? 'active' : ''}`} onClick={() => handleTabClick(5)}>
                                <p>Сменить пароль</p>
                            </div>
                        </div>
                        <div className="main-section">
                            {
                                getSection()
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}





export default Profile;