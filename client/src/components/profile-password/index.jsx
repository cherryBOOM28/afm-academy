import React, { useState, useEffect } from 'react';

import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';

import './style.scss';

function ProfilePassword(props) {
    const [isEdit, setEdit] = useState(false);

    return ( 
        <div className="profile-password">
            <div className="title">Сменить пароль</div>
            <div className="fields">
                <InputField
                    // value={''}
                    isPassword={true}
                    isEdit={isEdit}
                    name={'password'}
                    label={'Новый пароль'}
                    hint={'Введите новый пароль'}
                    handleChange={() => {}}/>
                <InputField
                    // value={''}
                    isPassword={true}
                    isEdit={isEdit}
                    name={'password-confirmation'}
                    label={'Повторите пароль'}
                    hint={'Введите повторно пароль'}
                    handleChange={() => {}}/>
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
                                onClick={() => setEdit(false)}
                            >
                                Сохранить
                            </div>
                            <div 
                                className={`cancel`} 
                                onClick={() => setEdit(false)}
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
                        value = e.target.value;
                        handleChange(name, e.target.value)
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