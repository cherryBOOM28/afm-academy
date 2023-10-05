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

    const [errorMessage,
        setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e, name) => {
        e.preventDefault();
        setFormData({...formData, [name]: e.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData['password'], formData['confirm_password'])

        if (formData['password'] === formData['confirm_password']) {
            axios
                .post('http://localhost:8080/api/aml/auth/register', 
                {
                    "firstname": formData['firstname'],
                    "lastname": formData['lastname'],
                    "patronymic": formData['patronymic'],
                    "email": formData['email'],
                    "phone_number": formData['phone_number'],
                    "password": formData['password'],
                    "system_entity_type": formData['system_entity_type'],
                    "sfm_type": formData['sfm_type'],
                }
            )
                .then(res => {
                    console.log(res.data)
                    navigate('/login');
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
      

    return (
        <div className='register-page'>
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
                        <Field formData={formData} handleChange={handleChange} name={'firstname'} label={'Имя'} hint={'Введите имя'}/>
                        <Field formData={formData} handleChange={handleChange} name={'lastname'} label={'Фамилия'} hint={'Введите фамилию'}/>
                        <Field formData={formData} handleChange={handleChange} name={'patronymic'} label={'Отчество'} hint={'Введите отчество'}/>
                        <Field formData={formData} handleChange={handleChange} isPassword={true} name={'password'} label={'Пароль'} hint={'Придумайте пароль'}/>
                        <Field formData={formData} handleChange={handleChange} isPassword={true} name={'confirm_password'} label={'Подтверждение пароля'} hint={'Подтвердите пароль'}/>
                        <Field formData={formData} handleChange={handleChange} name={'email'} label={'Почта'} hint={'Введите почту'}/>
                        <Field formData={formData} handleChange={handleChange} name={'phone_number'} label={'Номер телефона'} hint={'Введите номер телефона'}/>
                        <Field 
                            formData={formData} 
                            handleChange={handleChange} 
                            isSelect={true} 
                            selectItems={[
                                'Госудраственное учереждение',
                                'Субъект финансового мониторнга',
                                'Провохранные органы',
                                'Общественное объединение'
                            ]} 
                            name={'system_entity_type'} 
                            label={'Участник системы'} 
                            hint={'Введите имя'}
                            />
                        {formData['system_entity_type'] === 'Субъект финансового мониторнга' ? <Field 
                            formData={formData} 
                            handleChange={handleChange} 
                            isSelect={true} 
                            selectItems={sfm_types} 
                            name={'sfm_type'} 
                            label={'Вид СФМ'} 
                            hint={'Введите имя'}
                            /> : null}
                    </div>
                    <div className='actions'>
                        <div className='policy'>
                            <input type="checkbox" name="" id="" />
                            <p>Даю согласие на обработку <a href="#politics">персональных данных</a></p>
                        </div>
                        <div className='reg-btn' onClick={handleSubmit}>Регистрация</div>
                        <div className='have-account'>Уже есть аккаунт? <Link to={'/login'}><span>Войдите</span></Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Field = ({ name, label, hint, isPassword, isSelect, selectItems, formData, handleChange }) => {
    if (isSelect) {
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
    } else {
      return (
        <div className='field'>
          <label htmlFor={name}>{label}</label>
          <input
            placeholder={hint}
            value={formData[name]}
            type={isPassword ? 'password' : 'text'}
            name={name}
            onChange={(e) => handleChange(e, name)}
          />
        </div>
      )
    }
  }

export default Registration;
