import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import logo from '../../assets/images/logo.svg';
import Button from '../../components/UI/button/Button';
import axios from 'axios';

import backgroundVideo from '../../assets/video/bg.mp4'
import logo from '../../assets/images/logo.svg'
import switcher from '../../assets/icons/Switcher.svg'
import SwitchOff from '../../assets/icons/switch-off.svg';
import SwitchOn from '../../assets/icons/switch-on.svg';

import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';

import './login.scss'
import sfm_types from './../../components/data/sfm_types';

import base_url from '../../settings/base_url';

const Registration = () => {
    const [formData, setFormData] = useState({
        email: '', 
        password: '', 
    });

    const [rememberMe, setRememberMe] = useState(true);

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

        console.log(formData)

        axios
            .post(`${base_url}/api/aml/auth/authenticate`, 
            {
                "email": formData['email'],
                "password": formData['password'],
            }
        ).then(res => {
            console.log(res.data)
            
                localStorage.setItem('jwtToken', res.data.body.token);
                localStorage.setItem('email', res.data.body.user.email);
                localStorage.setItem('user_id', res.data.body.user.user_id);

                console.log(res.data)
                navigate('/');
            })
            .catch(error => {
                console.error('Registration failed:', error);
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

                console.log(error)
            })
    };
      

    return (
        <div className='login-page'>
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
                        <InputField 
                            formData={formData} 
                            handleChange={handleChange} 
                            name={'email'} 
                            label={'Почта'} 
                            hint={'Введите почту'}
                            />
                        <InputField 
                            formData={formData} 
                            handleChange={handleChange} 
                            name={'password'} 
                            label={'Пароль'} 
                            hint={'Введите пароль'}
                            isPassword={true}
                            />
                    </div>
                    <div className='actions'>
                        {/* <div className='remember-me'>
                            <div>
                                <div>
                                    <img src={rememberMe ? SwitchOn : SwitchOff} alt="" />
                                </div>
                                <div>Запомнить меня</div>
                            </div>
                            <div className='forgot-password'>
                                Забыли пароль?
                            </div>
                        </div> */}
                        <div className='reg-btn' onClick={(event) => handleSubmit(event)}>Логин</div>
                        <div className='have-account'>У вас нет аккаунта? <Link to={'/registration'}><span>Зарегистрируйтесь</span></Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

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
                                    <AiFillEyeInvisible style={{cursor: 'pointer'}} size={23} onClick={() => {
                                        setShowPassword(prev => !prev)
                                    }}/>
                                :
                                    <AiFillEye style={{cursor: 'pointer'}} size={23} onClick={() => {
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

export default Registration;
