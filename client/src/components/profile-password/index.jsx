import React, { useState, useEffect } from 'react';

import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';

import './style.scss';
import base_url from '../../settings/base_url';
import axios from 'axios';

function ProfilePassword(props) {
    const [isEdit, setEdit] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const jwtToken = localStorage.getItem('jwtToken');

    const [data, setData] = useState(null);

    const [passwordMismatchError, setPasswordMismatchError] = useState(false);

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
                } else {
                    // console.log(response.statusText);
                }
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchData();
      }, [isEdit]);

    const handleSaveChanges = async () => {
        if (password !== confirmPassword) {
            setPasswordMismatchError(true);
            return;
        };

        setPasswordMismatchError(false);

        const params = {
            "user_id": data.user_id,
            "lastname": data.lastname,
            "firstname": data.firstname,
            "patronymic": data.patronymic,
            "email": data.email,
            "password": password,
        };

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

        setPassword('');
        setConfirmPassword('');
        setEdit(false)
    }

    const handleCancelChanges = () => {
        setEdit(false);
        setPassword('');
        setConfirmPassword('');
    }

    const handlePasswordChange = (password) => {
        setPassword(password);
    }

    const handlePasswordConfirmChange = (password) => {
        setConfirmPassword(password)
    }

    return ( 
        <div className="profile-password">
            <div className="title">Сменить пароль</div>
            <div className="fields">
                <InputField
                    value={password}
                    isPassword={true}
                    isEdit={isEdit}
                    name={'password'}
                    label={'Новый пароль'}
                    hint={'Введите новый пароль'}
                    handleChange={handlePasswordChange}/>
                <InputField
                    value={confirmPassword}
                    isPassword={true}
                    isEdit={isEdit}
                    name={'confirmPassword'}
                    label={'Повторите пароль'}
                    hint={'Введите повторно пароль'}
                    handleChange={handlePasswordConfirmChange}/>
            </div>

            {
                passwordMismatchError 
                ? (
                    <div className="error">
                        <h3>* Пароли не совпадают</h3>
                    </div>
                ) : null
            }

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
                        handleChange(e.target.value)
                    }}/>
                
                {isPassword 
                    ? (
                        <div className='show-password'> 
                            {
                                showPassword ?
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

export default ProfilePassword;