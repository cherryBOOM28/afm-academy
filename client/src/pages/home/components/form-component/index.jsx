import axios from 'axios';
import React, { useState } from 'react';
import './style.css';

const FormComponent= () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handlePhoneChange = (e) => {
        const phoneValue = e.target.value;
        const formattedPhone = phoneValue.replace(/[^0-9]/g, ''); // Удаляем все символы, кроме цифр
        setPhone(`+7 ${formattedPhone.slice(1)}`);
    };
    

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async () => {
        if (isAgreed) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Введите корректный адрес электронной почты.');
                return;
            }

            try {
                await axios.post('YOUR_BACKEND_URL', {
                    name,
                    phone,
                    email,
                    comment,
                    isSubscribed,
                });
                alert('Заявка отправлена!');
            } catch (error) {
                alert('Произошла ошибка при отправке заявки.');
            }
        }
    };

    return (
        <div className='form-container-wrapper'>
            <div className="form-container">
                <div className="form-left">
                    <div>
                        <div>Остались вопросы ? <br /> <strong className='aml-academy-name'>AML ACADEMY</strong></div>
                    </div>
                    <div className='phone-number'>
                        <p>
                            Пишите нам на <a href="https://wa.me/77087168416" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                        </p>
                        <p>Один телефон на все вопросы<br />+7 708 716 8416</p>
                    </div>
                </div>
                <div className="form-right">
                    <input
                        type="text"
                        placeholder="Введите ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="+7 (__) ___-__-__"
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                    <input
                        type="email"
                        placeholder="Введите вашу почту"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <textarea
                        placeholder="Ваш комментарий"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <div className="checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                checked={isAgreed}
                                onChange={(e) => setIsAgreed(e.target.checked)}
                            />
                            Я согласен(а) на обработку персональных данных и с политикой обработки персональных данных
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={isSubscribed}
                                onChange={(e) => setIsSubscribed(e.target.checked)}
                            />
                            Я согласен(а) на получение новостных рассылок
                        </label>
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={!isAgreed}
                        className={`submit-button ${isAgreed ? '' : 'disabled'}`}
                    >
                        Оставить заявку
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FormComponent;
