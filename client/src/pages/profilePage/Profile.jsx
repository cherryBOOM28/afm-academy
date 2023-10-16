import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import DefaultHeader from '../../components/defaultHeader/DefaultHeader';
import PaginableTable from '../../components/paginableTable/PaginableTable';

import './profile.scss'
import ProfileImg from './profile-img.png'

import {IoIosArrowBack} from 'react-icons/io';
import {BiSolidMessageDetail, BiSolidVideo, BiSolidFilePdf} from 'react-icons/bi';
import {BsFillPersonFill} from 'react-icons/bs';
import {BiPlus, BiSolidEditAlt, BiFilter} from 'react-icons/bi';
import {GiCancel} from 'react-icons/gi';
import {AiFillStar} from 'react-icons/ai';
import VebinarTable from '../../components/vebinarTable/VebinarTable';




function Profile(props) {

    const [currentTab, setCurrentTab] = useState(1);

    const handleGeneralInfoChange = () => {} 

    const jobColumns = ['Наименование организации', 'Должность', 'Начало работы', 'Конец работы', 'Actions'];
    const [jobRows, setJobRows] = useState([
        { organization: 'Org1', position: 'Position1', start: '2022-01-01', end: '2022-02-01' },
        { organization: 'Org2', position: 'Position2', start: '2022-03-01', end: '2022-04-01' },
        { organization: 'Org3', position: 'Position3', start: '2022-05-01', end: '2022-06-01' },
        { organization: 'Org4', position: 'Position4', start: '2022-07-01', end: '2022-08-01' },
        { organization: 'Org5', position: 'Position5', start: '2022-09-01', end: '2022-10-01' },
        { organization: 'Org5', position: 'Position5', start: '2022-09-01', end: '2022-10-01' },
        { organization: 'Org5', position: 'Position5', start: '2022-09-01', end: '2022-10-01' },
        // Add more data as needed
    ]);
    const jobRowsPerPage = 5;


    const eduColumns = ['Курс', 'Вид курса', 'Начало курса', 'Конец курса', 'Actions'];
    const [eduRows, setEduRows] = useState([
        { organization: 'Org1', position: 'Position1', start: '2022-01-01', end: '2022-02-01' },
        { organization: 'Org2', position: 'Position2', start: '2022-03-01', end: '2022-04-01' },
        { organization: 'Org3', position: 'Position3', start: '2022-05-01', end: '2022-06-01' },
        { organization: 'Org4', position: 'Position4', start: '2022-07-01', end: '2022-08-01' },
        { organization: 'Org5', position: 'Position5', start: '2022-09-01', end: '2022-10-01' },
        { organization: 'Org5', position: 'Position5', start: '2022-09-01', end: '2022-10-01' },
        { organization: 'Org5', position: 'Position5', start: '2022-09-01', end: '2022-10-01' },
        // Add more data as needed
    ]);
    const eduRowsPerPage = 5;


    const [filterValue, setFilterValue] = useState('Сначала новые')
    const handleFilterChange = (option) => {
        setFilterValue(option);
    }

    const handleTabClick = (tab) => {
        setCurrentTab(tab);
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

                    <div className="profile-header">
                        <div className="profile-img">
                            <div className="gradient"></div>
                            <img src={ProfileImg} alt=""/>
                        </div>
                        <div className="profile-header-info">
                            <div>
                                <div className="name">
                                    Бекжан Амиров
                                </div>
                                <div className="subject-org">
                                    СФМ
                                </div>
                            </div>
                            <div className="actions">
                                <div className="message">
                                    <BiSolidMessageDetail/>
                                </div>
                                <div className="redact">
                                    Редактировать
                                </div>
                                <div className="upload-img">
                                    Загрузить фото
                                </div>
                            </div>
                        </div>
                    </div>
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
                                            <div className="general-info">
                                                <div className="fields">
                                                    <Field
                                                        name={'name'}
                                                        label={'Имя'}
                                                        hint={'Имя'}
                                                        handleChange={handleGeneralInfoChange}/>
                                                    <Field
                                                        name={'phone_number'}
                                                        label={'Номер телефона'}
                                                        hint={'+7 (777) 777 77 77'}
                                                        handleChange={handleGeneralInfoChange}/>
                                                    <Field
                                                        name={'surname'}
                                                        label={'Фамилия'}
                                                        hint={'Фамилия'}
                                                        handleChange={handleGeneralInfoChange}/>
                                                    <Field
                                                        name={'email'}
                                                        label={'Почта'}
                                                        hint={'Почта'}
                                                        handleChange={handleGeneralInfoChange}/>
                                                    <Field
                                                        name={'patronymic'}
                                                        label={'Отчество'}
                                                        hint={'Отчество'}
                                                        handleChange={handleGeneralInfoChange}/>
                                                    <Field
                                                        name={'login'}
                                                        label={'Логин'}
                                                        hint={'Логин'}
                                                        handleChange={handleGeneralInfoChange}/>
                                                    <Field
                                                        name={'system_entity_type'}
                                                        label={'Участник системы'}
                                                        hint={'Участник системы'}
                                                        handleChange={handleGeneralInfoChange}/>
                                                    <Field
                                                        name={'change_password'}
                                                        label={'Изменить пароль'}
                                                        hint={'Введите новый пароль'}
                                                        handleChange={handleGeneralInfoChange}/>
                                                    <Field
                                                        name={'sfm_type'}
                                                        label={'Вид СФМ'}
                                                        hint={'Участник системы'}
                                                        handleChange={handleGeneralInfoChange}/>
                                                </div>
                                            </div>
                                            <div className="job-info">
                                                <div className="title">Опыт работы</div>
                                                <div className='table'>
                                                    <PaginableTable columns={jobColumns} rows={jobRows} rowsPerPage={jobRowsPerPage} isExtendable={true}>
                                                        <BiSolidEditAlt size={23} color='#858C94' style={{order: 1, cursor: 'pointer'}}/>
                                                        <GiCancel size={23} color='#858C94' style={{order: 0, cursor: 'pointer'}}/>
                                                    </PaginableTable>
                                                </div>
                                            </div>                      
                                            <div className="education-info">
                                                {/* <div className="title">Опыт работы</div> */}
                                                <div className='table'>
                                                    <PaginableTable columns={eduColumns} rows={eduRows} rowsPerPage={jobRowsPerPage} isExtendable={true}>
                                                        <div className='edu-action'>
                                                            <span>Оценить</span>
                                                            <AiFillStar size={23}/>
                                                        </div>
                                                        <div className='edu-action'>
                                                            <span>Сертификат</span>
                                                            <BiSolidFilePdf size={23}/>
                                                        </div>
                                                    </PaginableTable>
                                                </div>
                                            </div>
                                        </>
                                    : 
                                        <>
                                            <div className='vebinar-filter'>
                                                <div>Календарь выбранных вебинаров:</div>
                                                <div>
                                                    <BiFilter />
                                                    <Select 
                                                        options={['Сначала новые', 'Сначала старые']} 
                                                        value={filterValue}
                                                        handleChange={handleFilterChange}
                                                        />
                                                </div>
                                            </div>
                                            <div className='vebinar-table-block'>
                                                <VebinarTable data={[]}/>
                                            </div>
                                        </>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Select = ({ value, options, handleChange }) => {

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        handleChange(selectedValue);
    };

    return (
        <select value={value} onChange={handleSelectChange}>

            {
                options.map((option) => {

                    return <option value={option} key={option}>{option}</option>

                })
            }

        </select>
    )
}

const Field = ({
    name,
    label,
    hint,
    isPassword,
    isSelect,
    selectItems,
    handleChange
}) => {
    if (isSelect) {
        return (
            <div className='field'>
                <label htmlFor={name}>{label}</label>
                <div className="custom-select">
                    <select id={name} value={''} onChange={(e) => handleChange(e, name)}>
                        {selectItems.map(item => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                    <div
                        className="dropdown-icon"
                        onClick={() => {
                        document
                            .getElementById(name)
                            .click();
                    }}></div>
                </div>
            </div>

        )
    } else {
        return (
            <div className='field'>
                <label htmlFor={name}>{label}</label>
                <input
                    placeholder={hint}
                    value={''}
                    type={isPassword
                    ? 'password'
                    : 'text'}
                    name={name}
                    onChange={(e) => handleChange(e, name)}/>
            </div>
        )
    }
}

export default Profile;