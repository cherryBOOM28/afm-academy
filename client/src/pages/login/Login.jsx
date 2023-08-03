import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cl from './Login.module.css';
import logo from '../../assets/images/logo.svg';
import Button from '../../components/UI/button/Button';
import axios from 'axios';
import Cookies from 'js-cookie';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    
    const navigate = useNavigate();
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login successful:', formData);
        // axios
        //     .post('http://localhost:1415/auth/signin', {username: formData.email, password: formData.password})
        //     .then(res => {
        //         console.log(res.data)
        //         Cookies.set('token', res.data)
        //         Cookies.set('email', formData.email)
        //         navigate('/')
        //     })
        navigate('/');
    };

    const handleRegisterClick = () => {
        navigate('/registration');
    };

    
    return (
        <div className={cl.loginWrapper}>
            <div className={cl.container}>
                <form className={cl.loginForm}>
                    <div className={cl.logo}>
                        <img src={logo} alt="logo" className={cl.logoImg} />
                        <p className={cl.logoText}>Академия финансового мониторинга</p>
                    </div>
                    <p className={cl.login}>Вход</p>
                    <input 
                        className={cl.loginInput} 
                        value={formData.email} 
                        onChange={handleChange} 
                        type="email" 
                        name="email"
                        required={true} 
                        placeholder="E-mail" 
                    />
                    <input 
                        className={cl.loginInput} 
                        value={formData.password}
                        onChange={handleChange}
                        type="password" 
                        name="password"
                        required={true} 
                        placeholder="Пароль" 
                    />
                    <p className={cl.passw}>Забыли пароль?</p>
                    <Button className={cl.button} onClick={handleSubmit}>Войти</Button>
                    <Button 
                        onClick={handleRegisterClick} 
                        className={cl.signInButton}>
                            Зарегистрироваться
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
