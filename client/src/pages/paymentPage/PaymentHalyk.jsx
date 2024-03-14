import React, { useState } from 'react';
import Button from '@mui/material/Button';
import halyk from "./halyk"

const PaymentHalyk = () => {
    const [accessToken, setAccessToken] = useState('');

    // Функция для получения токена доступа
    const fetchToken = async () => {
        try {
            const auth = new FormData();
            auth.append('grant_type', 'client_credentials');
            auth.append('scope', 'webapi usermanagement email_send verification statement statistics payment');
            auth.append('client_id', 'AMLACADEMY.KZ');
            auth.append('client_secret', 'JYbXA8cJt(L24ffo');
            auth.append('invoiceID', 3517453235);
            auth.append('amount', 100);
            auth.append('currency', 'KZT');
            auth.append('terminal', 'a5e958ad-b799-41ff-9be9-f6d20ddc61a6');
            auth.append('postLink', '');
            auth.append('failurePostLink', '');

            const response = await fetch('https://epay-oauth.homebank.kz/oauth2/token', {
                method: 'POST',
                body: auth,
            });

            const data = await response.json();
            console.log(data);
            setAccessToken(data.access_token);
            const paymentObject = createPaymentObject(data, 3517453235, 100);
            console.log(paymentObject);
            halyk.showPaymentWidget(paymentObject)
            // halyk.pay(paymentObject)
            
        } catch (error) {
            console.error('Error fetching token:', error);
        }
    };
    

    // Функция для создания объекта платежа
    const createPaymentObject = (auth, invoiceId, amount) => {
        return {
            invoiceId: invoiceId,
            invoiceIdAlt: 43790622,
            backLink: "http://localhost:3000/courses/8",
            failureBackLink: "http://localhost:3000/courses/8",
            postLink: "https://example.kz/",
            failurePostLink: "https://example.kz/order/1123/fail",
            language: "rus",
            description: "Оплата в интернет магазине",
            terminal: 'a5e958ad-b799-41ff-9be9-f6d20ddc61a6',
            amount: amount,
            currency: "KZT",
            cardSave: false,
            auth: auth
        };
    };

    // Функция для обработки результатов платежа
    const handlePaymentResult = (result) => {
        if (result.code === "ok") {
            console.log('Оплата прошла успешно');
        } else {
            console.error('Ошибка при оплате:', result.reason);
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
