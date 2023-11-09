import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import logo from '../../assets/images/logo.svg';
import Button from '../../components/UI/button/Button';
import axios from 'axios';

import backgroundVideo from '../../assets/video/bg.mp4'
import logo from '../../assets/images/logo.svg'
import './registration.scss'
import sfm_types from './../../components/data/sfm_types'
import go_types from './../../components/data/go_types'
import po_types from '../../components/data/po_types';

import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';

import base_url from '../../settings/base_url';
import { Box, Modal } from '@mui/material';

const Registration = () => {
    const [formData, setFormData] = useState({
        email: '', 
        password: '', 
        confirm_password: '',
        firstname: '', 
        lastname: '',
        patronymic: '', 
        phone_number: '',
        system_entity_type: '-1',
        sfm_type: '-1',
    });

    useEffect(() => {
        
    }, [formData])

    const [errorMessage, setErrorMessage] = useState('');
    const [policyChecked, setPolicyChecked] = useState(false);
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);

    const handleChange = (e, name) => {
        e.preventDefault();
        setFormData({...formData, [name]: e.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData['password'], formData['confirm_password'])

        if (formData['password'] === formData['confirm_password']) {
            axios
                .post(`${base_url}/api/aml/auth/register`, 
                {
                    "firstname": formData['firstname'],
                    "lastname": formData['lastname'],
                    "patronymic": formData['patronymic'],
                    "email": formData['email'],
                    "phone_number": formData['phone_number'],
                    "password": formData['password'],
                    "member_of_the_system": formData['member_of_the_system'],
                    "type_of_member": formData['type_of_member'] === 'Выберите' ? '' : formData['type_of_member'],
                }
            )
                .then(res => {
                    console.log(res.data)
                    setOpenModal(true);
                    // navigate('/login');
                })
                .catch(error => {
                    // console.error('Registration failed:', error);
                    if (error.response) {
                        setErrorMessage(error.response.data.error)
                        // console.log('Server Error:', error.response.data);
                    } else if (error.request) {
                        setErrorMessage(error.request.error)
                        // console.log('Request Error:', error.request);
                    } else {
                        setErrorMessage(error.message.error)
                        // console.log('Error:', error.message);
                    }
                })
        } else {
            alert('Passwords do not match.');
        }
    };

    const getItems = (entity_type) => {
        if (entity_type === 'Субъект финансового мониторнга') return sfm_types;
        if (entity_type === 'Государственные органы-регуляторы') return go_types;
        if (entity_type === 'Правоохранительные органы') return po_types;
        else return ['Выберите']

    }

    return (
        <div className='register-page'>
            <RegistationModal onClose={() => {
                setOpenModal(false);
                navigate('/login')
            }} open={openModal}/>
            <div className='backgroundVideo'>
                <video autoPlay loop muted className='bg-video'>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>
            <div className='form-container'>

                <img className='logo' src={logo} alt="academy logo"/>
                <h1>Добро пожаловать!</h1>

                <div className="form-body">
                    <div className='fields'>
                        <InputField formData={formData} handleChange={handleChange} name={'firstname'} label={'Имя'} hint={'Введите имя'}/>
                        <InputField formData={formData} handleChange={handleChange} name={'lastname'} label={'Фамилия'} hint={'Введите фамилию'}/>
                        <InputField formData={formData} handleChange={handleChange} name={'patronymic'} label={'Отчество'} hint={'Введите отчество'}/>
                        <InputField formData={formData} handleChange={handleChange} isPassword={true} name={'password'} label={'Пароль'} hint={'Придумайте пароль'}/>
                        <InputField formData={formData} handleChange={handleChange} isPassword={true} name={'confirm_password'} label={'Подтверждение пароля'} hint={'Подтвердите пароль'}/>
                        <InputField formData={formData} handleChange={handleChange} name={'email'} label={'Почта'} hint={'Введите почту'}/>
                        <InputField formData={formData} handleChange={handleChange} name={'phone_number'} label={'Номер телефона'} hint={'Введите номер телефона'}/>
                        <SelectField 
                            formData={formData} 
                            handleChange={handleChange} 
                            selectItems={[
                                'Государственные органы-регуляторы',
                                'Субъект финансового мониторнга',
                                'Правоохранительные органы',
                                'Общественное объединение'
                            ]} 
                            name={'member_of_the_system'} 
                            label={'Участник системы'} 
                            />

                        <SelectField 
                            formData={formData} 
                            handleChange={handleChange} 
                            selectItems={getItems(formData['member_of_the_system'])} 
                            name={'type_of_member'} 
                            label={'Вид СФМ'} 
                            />

                    </div>
                    <div className='actions'>
                        <div className='policy'>
                            <div>
                                <input type="checkbox" onChange={(e) => {
                                    setPolicyChecked(e.target.checked);
                                }}/>
                                <p>Даю согласие на обработку <a href="#politics">персональных данных</a></p> 
                            </div>
                            {false ? <p className='policy-error'>Даю согласие на обработку</p>: null}
                        </div>
                        <div className='reg-btn' onClick={handleSubmit}>Регистрация</div>
                        <div className='have-account'>Уже есть аккаунт? <Link to={'/login'}><span>Войдите</span></Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SelectField = ({ name, label, selectItems, formData, handleChange }) => {
    return (
        <div className='field'>
            <label htmlFor={name}>{label}</label>
            <div className="custom-select">
                <select id={name} value={formData[name]} onChange={(e) => handleChange(e, name)}>
                {selectItems.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
                </select>
                <div className="dropdown-icon" onClick={() => {
                    document.getElementById(name).click();
                }}></div>
            </div>
        </div>
    )
}

const InputField = ({ name, label, hint, isPassword, formData, handleChange }) => {
    const [showPassword, setShowPassword] = useState(
        isPassword
    );

    return (
        <div className='field'>
            <label htmlFor={name}>{label}</label>
            <div>
                <input
                    placeholder={hint}
                    value={formData[name]}
                    type={showPassword
                                ? 'password'
                                : 'text'}
                    name={name}
                    onChange={(e) => handleChange(e, name)}
                />
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

const RegistationModal = ({ open, handleClose }) => {
    return <Modal
        open={open}
        onClose={() => {
            handleClose();
        }}
    >
        <Box sx={{ 
            width: '590px', 
            padding: '30px 55px', 
            boxSizing: 'border-box',
            background: '#FFFFFF', 
            borderRadius: '10px',
            outline: 'none',
            border: 'none',

            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <h1
                style={{
                    color: '#3A3939',
                    textAlign: 'center',
                    fontFamily: 'Ubuntu',
                    fontSize: '22px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '26px',

                    marginBottom: '15px'
                }}
            >Поздравляем с успешной регистрацией на нашем сайте</h1>
            <p style={{
                color: '#3A3939',
                textAlign: 'center',
                fontFeatureSettings: `'clig' off, 'liga' off`,
                fontFamily: 'Ubuntu',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '26px',

                marginBottom: '15px'
            }}>
                Для завершения процесса активации вашей учетной записи и получения дополнительной информации, <strong style={{fontWeight: '700'}}>перейдите в свою почту</strong>.
            </p>
            <p style={{
                color: '#4D4D4D',
                textAlign: 'center',
                fontFeatureSettings: `'clig' off, 'liga' off`,
                fontFamily: 'Ubuntu',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '26px', /* 162.5% */

                marginBottom: '15px'
            }}>
                Если вы не видите наше сообщение в папке "Входящие", проверьте папку "Спам". Иногда письма могут туда попадать.
            </p>
            <div 
            onClick={() => handleClose()}
            style={{
                width: 'max-content',
                margin: '0 auto',
                borderRadius: '8px',
                background: '#1F3C88',
                borderRadius: '8px',
                padding: '12px 96px',
                color: '#FFF',
                fontFeatureSettings: `'clig' off, 'liga' off`,
                fontFamily: 'Manrope',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '24px', /* 150% */
                letterSpacing: '0.2px',
                cursor: 'pointer',
            }}>
                Перейти на почту
            </div>
        </Box>
    </Modal>
}

export default Registration;
