import React, { useState } from 'react';
import Button from '@mui/material/Button';
import halyk from "./halyk"
import axios from "axios";
import base_url from '../../settings/base_url';

const PaymentHalyk = () => {
    const [accessToken, setAccessToken] = useState('');
    const token = localStorage.getItem('jwtToken');
    const [dataBack, setDataBack] = useState('');
    const [paymentData, setPaymentData] = useState('');
    const [invoiceID, setInvoiceID] = useState('');

   

       

    // Функция для получения токена доступа
    const fetchToken = async () => {
        try {
            const responseData = await axios.get(`${base_url}/api/aml/course/invoiceID`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            });
            setDataBack(responseData.data)
            const auth = new FormData();
            auth.append('grant_type', 'client_credentials');
            auth.append('scope', 'webapi usermanagement email_send verification statement statistics payment');
            auth.append('client_id', 'AMLACADEMY.KZ');
            auth.append('client_secret', 'JYbXA8cJt(L24ffo');
            auth.append('invoiceID', responseData.data.invoice_id);
            auth.append('amount', 100);
            auth.append('currency', 'KZT');
            auth.append('terminal', 'a5e958ad-b799-41ff-9be9-f6d20ddc61a6');
            auth.append('postLink', `${base_url}/api/aml/course/createPostLink`);
            auth.append('failurePostLink', '');

            const response = await fetch('https://epay-oauth.homebank.kz/oauth2/token', {
                method: 'POST',
                body: auth,
            });

            const data = await response.json();
            console.log(data);
            console.log(responseData.data);
            setAccessToken(data.access_token);
            setInvoiceID(responseData.data.invoice_id)
            const paymentObject = createPaymentObject(data, responseData.data.invoice_id, 100, responseData.data.email);
            halyk.showPaymentWidget(paymentObject, (result) => {
                // В этом колбэке обработайте результат показа виджета оплаты
            
                // Сначала вызовите ваш обработчик handlePaymentResult
                handlePaymentResult(result);
            
                // Затем, если условие подходит (например, если оплата прошла успешно), вызовите handlePaymentResultFromBack
                if (result.code === undefined) {
                    handlePaymentResultFromBack(responseData.data.invoice_id,8,responseData.data.user_id,token);
                }
            });

            setPaymentData(paymentObject);
            console.log(paymentObject);
        } catch (error) {
            console.error('Error fetching token:', error);
        }
    };
    

    const createPaymentObject = (auth, invoiceId, amount, email) => {
        return {
            invoiceId: invoiceId,
            invoiceIdAlt: 43790622,
            backLink: "http://localhost:3000/courses/myCourses",
            failureBackLink: "http://localhost:3000/courses/myCourses",
            postLink: `${base_url}/api/aml/course/createPostLink`,
            failurePostLink: `${base_url}/api/aml/course/createPostLink`,
            language: "rus",
            description: "Оплата в интернет магазине",
            accountId: email,
            terminal: 'a5e958ad-b799-41ff-9be9-f6d20ddc61a6',
            amount: amount,
            name:email,
            data: "{\"statement\":{\"name\":\"\",\"invoiceID\":\"\"}}",
            currency: "KZT",
            cardSave: true,
            auth: auth
        };
    };
    const addUserToCourse = async (courseId, userId, token) => {
        try {
            const data = {
                paymentType: 'HALYK',
                course_id: courseId,
                user_id: userId
            };
    
            // Выполняем PUT-запрос с помощью axios.put
            const response = await axios.put(`${base_url}/api/aml/course/saveUser/${userId}/course/${courseId}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            // Обрабатываем успешный ответ от сервера
            console.log("Пользователь успешно добавлен курс:", response);
        } catch (error) {
            // Обрабатываем ошибку
            console.error("Ошибка при добавлении пользователя курсу:", error);
        }
    };


    const handlePaymentResultFromBack = (invoice_id, course_id, user_id) => {
        console.log(invoice_id);
        const fetchPostLink = async () => {
            try {
                const responseData = await axios.get(`https://amlacademy.kz/api/aml/course/getPostLink/${invoice_id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(responseData.data);
                if (responseData.data.code === "ok") {
                    addUserToCourse(course_id, user_id, token)
                }
            } catch (error) {
                
                console.error('Error fetching post link:', error);
            }
        };
        fetchPostLink()
    }
 
    // Функция для обработки результатов платежа
    const handlePaymentResult = (result) => {
    
        
        if (result.code === "ok") {
            console.log('Оплата прошла успешно');
            
            //addUserToCourse(8,dataBack.user_id,token)
        } else {
            console.error("Проверка..........");
           
        }
    };

    // Функция для проведения платежа
    const makePayment = async () => {
        await fetchToken()
    };

    return (
        <div>
            <Button onClick={makePayment}>Halyk Bank</Button>
        </div>
    );
};

export default PaymentHalyk;
