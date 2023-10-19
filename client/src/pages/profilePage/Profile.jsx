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

                    <ProfileHeader handleRedact={handleRedact}/>

                    <div className="profile-page-body">
                        <div className="side-bar">
                            <div className={`${currentTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
                                <BsFillPersonFill/>
                                <p>Мои данные</p>
                            </div>
                            <div className={`${currentTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
                                <BiSolidVideo/>
                                <p>Участие в вебинаре</p>
                            </div>
                        </div>
                        <div className="main-section">
                            {
                                currentTab === 1 
                                    ? 
                                        <>
                                            <ProfileGeneral isEdit={isEdit} />
                                            <ProfileJob isEdit={isEdit} />                  
                                            <ProfileEducation />
                                        </>
                                    : 
                                        <Vebinar/>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}





export default Profile;