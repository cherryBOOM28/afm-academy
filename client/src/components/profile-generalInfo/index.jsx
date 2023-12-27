import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

import sfm_types from '../../components/data/sfm_types';
import go_types from '../../components/data/go_types';
import po_types from '../../components/data/po_types';

import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';

import base_url from '../../settings/base_url';

import './style.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const getItems = (entity_type) => {

    // console.log(entity_type)
    if (entity_type === 'Субъект финансового мониторнга') return sfm_types;
    if (entity_type === 'Государственные органы-регуляторы') return go_types;
    if (entity_type === 'Правоохранительные органы') return po_types;
    else return ['Выберите']
}

function ProfileGeneral() {
    const navigate = useNavigate();
    // const [generalInfo, setGeneralInfo] = useState(null);
    const jwtToken = localStorage.getItem('jwtToken');
    // const {data, isLoading, error} = useFetch('http://localhost:8080/api/aml/auth/userInfo', {
    //     headers: {
    //         Authorization: `Bearer ${jwtToken}`,
    //     },
    // })

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isEdit, setEdit] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/api/aml/auth/userInfo`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });
                
                if (response.status === 200) {
                    setData(response.data);
                    setJob(response.data.job_name);
                    // console.log(response.data);
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
      }, [isEdit]);

    const [localData, setLocalData] = useState({});
    const [changedData, setChangedData] = useState({});

    const [job, setJob] = useState('');
    const [localJob, setLocalJob] = useState('');

    const handleInfoChange = (name, value) => {
        // console.log(name, value);

        setChangedData({ ...changedData, [name]: value });
        setLocalData({ ...localData, [name]: value })
    }

    const handleSaveChanges = async () => {
        // console.log('changed data', changedData)

        const params = {
            "user_id": localData.user_id,
            "lastname": localData.lastname,
            "firstname": localData.firstname,
            "patronymic": localData.patronymic,
            "email": localData.email,
            "password": localData.password,
            "job_name": localJob,
            ...changedData,
        };

        // console.log(params)

        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        };

        try {
            const res = await axios.patch(`${base_url}/api/aml/auth/change_user`, params, options );
    
            // console.log('changed password response ', res);
        } catch (error) {
            console.error(error);
        }

        setJob(localJob)
        setEdit(false);
    }

    const handleCancelChanges = () => {
        updateLocalData();
        setEdit(false);
    }

    const updateLocalData = () => {
        setLocalJob(job)
        setLocalData(data);
    }

    useEffect(() => {
        updateLocalData()
    }, [isLoading]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error.message} {console.log(error)}</div>;
    }
    
    return ( 
        <div className="general-info">
            <div className="profile-img">
                <span>{(localData ? localData['firstname'] : '*****').substring(0, 1)}</span>
                <span>{(localData ? localData['lastname'] : '*****').substring(0, 1)}</span>
            </div>
            <div className="fields">
                <InputField
                    value={localData ? localData['firstname'] : '*****'}
                    isEdit={isEdit}
                    name={'firstname'}
                    label={'Имя'}
                    hint={'Имя'}
                    handleChange={handleInfoChange}/>
                <InputField
                    value={localData ? localData['phone_number'] : '*****'}
                    isEdit={isEdit}
                    name={'phone_number'}
                    label={'Номер телефона'}
                    hint={'+7 (777) 777 77 77'}
                    handleChange={handleInfoChange}/>
                <InputField
                    value={localData ? localData['lastname'] : '*****'}
                    isEdit={isEdit}
                    name={'lastname'}
                    label={'Фамилия'}
                    hint={'Фамилия'}
                    handleChange={handleInfoChange}/>
                <InputField
                    value={localData ? localData['email'] : '*****'}
                    isEdit={isEdit}
                    name={'email'}
                    label={'Почта'}
                    hint={'Почта'}
                    handleChange={handleInfoChange}/>
                <InputField
                    value={localData ? localData['patronymic'] : '*****'}
                    isEdit={isEdit}
                    name={'patronymic'}
                    label={'Отчество'}
                    hint={'Отчество'}
                    handleChange={handleInfoChange}/>
                <SelectField
                    isEdit={isEdit}
                    value={localData ? localData['member_of_the_system'] : ''}
                    name={'member_of_the_system'}
                    selectItems={[
                        'Государственные органы-регуляторы',
                        'Субъект финансового мониторнга',
                        'Правоохранительные органы',
                        'Общественное объединение'
                    ]}
                    label={'Участник системы'}
                    hint={'Участник системы'}
                    handleChange={handleInfoChange}/>
                {
                    localData && localData['member_of_the_system'] !== 'Общественное объединение'
                    ? (
                        <SelectField
                            isEdit={isEdit}
                            name={'type_of_member'}
                            value={localData ? localData['type_of_member'] : ''}
                            selectItems={getItems(localData ? localData['member_of_the_system'] : '')}
                            label={'Вид СФМ'}
                            hint={'Участник системы'}
                            handleChange={handleInfoChange}/>
                    ) 
                    : (
                        <InputField
                            value={localData ? localData['type_of_member'] : '*****'}
                            isEdit={isEdit}
                            name={'type_of_member'}
                            label={'Вид'}
                            hint={'Введите вид'}
                            handleChange={handleInfoChange}/>
                    )
                }
                {
                    localData && localData['member_of_the_system'] === 'Субъект финансового мониторнга'
                    ? (
                        <InputField
                            value={localJob ? localJob : ''}
                            isEdit={isEdit}
                            name={'jobName'}
                            label={'Занимаемая должность'}
                            hint={'Введите занимаемую должность'}
                            handleChange={(_, job) => {
                                setLocalJob(job)
                        }}/>
                    ) : null
                }
            </div>
            <div className="actions">
                {
                    !isEdit 
                        ? (
                            <div 
                                className={`redact`} 
                                onClick={() => setEdit(true)}
                            >
                                Изменить
                            </div>
                        )
                        : (
                            <>
                            <div 
                                className={`save`} 
                                onClick={() => handleSaveChanges()}
                            >
                                Сохранить
                            </div>
                            <div 
                                className={`cancel`} 
                                onClick={() => handleCancelChanges()}
                            >
                                Отменить
                            </div>
                            </>
                        )
                }
            </div>
        </div>
    );
}

const SelectField = ({
    name,
    label,
    value,
    selectItems,
    handleChange,
    isEdit
}) => {
    let _value = value;

    return (
        <div className='field'>
            <label htmlFor={name}>{label}</label>
            <div className="custom-select">
                <select disabled={!isEdit} id={name} value={_value} onChange={(e) => {
                    // console.log(e.target.value);
                    _value = e.target.value;
                    handleChange(name, e.target.value)
                }}>
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
}

const InputField = ({
    name,
    label,
    value,
    hint,
    isPassword,
    handleChange,
    isEdit
}) => {

    const [showPassword, setShowPassword] = useState(
        isPassword
    );

    let _value = value;

    return (
        <div className='field'>
            <label htmlFor={name}>{label}</label>
            <div>
                <input
                    disabled={!isEdit}
                    placeholder={hint}
                    value={_value}
                    type={showPassword
                        ? 'password'
                        : 'text'}
                    name={name}
                    onChange={(e) => {
                        value = e.target.value;
                        handleChange(name, e.target.value)
                    }}/>
                
                {isPassword 
                    ? (
                        <div className='show-password'> 
                            {
                                !showPassword ?
                                    <AiFillEye style={{cursor: 'pointer'}} size={23} onClick={() => {
                                        setShowPassword(prev => !prev)
                                    }}/>
                                :
                                    <AiFillEyeInvisible style={{cursor: 'pointer'}} size={23} onClick={() => {
                                        setShowPassword(prev => !prev)
                                    }}/>
                            } 
                        </div> 
                    ) : null
                }
            </div>
        </div>
    )
}

export default ProfileGeneral;