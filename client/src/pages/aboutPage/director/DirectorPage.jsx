import React, { useState } from 'react';
import cl from './DirectorPage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import jsonData from '../structure/structureData.json'
import Header from '../../../components/header/Header';
import Button from '../../../components/UI/button/Button';
import Footer from '../../../components/footer/Footer';
import Comments from '../../../components/commentSection/Comments';

import ModalWindow from '../../../components/ModalWindow/ModalWindow';

const findCardDataById = (id) => {
    // Replace this with your logic to find the card data based on its ID
    return jsonData.cards.find((card) => card.id === id);
};

const DirectorPage = () => {    
    const navigate = useNavigate();
    const { id } = useParams();
    const cardData = findCardDataById(id);

    const [showModal, setShowModal] = useState(false)
    const [request, setRequest] = useState({
        email: '',
        name: '',
        phone: ''
    })

    const requestOnchange = (key, value) => {
        setRequest(
            {...request, [key]: value}
        )
    }

    const handleRequestSend = () => {
        setShowModal(false);
    }
    
    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    if (!cardData) {
        // Handle the case when the cardData is not available
        return <p>Data not found.</p>;
    }

  return (
    <div className={cl.directorPageWrapper}>
        <Header />
        <div className={cl.container}>
            <div className={cl.card}>
                <img src={cardData.photo} alt="Director profile" className={cl.card__img} />
                <div className={cl.card__block}>
                    <div className={cl.cardContent}>
                        <h2 className={cl.card__title}>{cardData.title}</h2>
                        <p className={cl.card__name}>{cardData.name}</p>
                        <p className={cl.card__text}>{cardData.text}</p>
                    </div>
                    <div style={{display: 'flex', gap: '10px'}}>
                        <Button onClick={() => setShowModal(true)} className={cl.btn}>Обратиться</Button>
                        <Button onClick={handleGoBack} className={cl.btn}>Назад</Button>
                    </div>
                </div>
            </div>
            {/* <Comments commentsUrl="http://localhost:3000/structure" currentUserId="1" postId={id} /> */}
        </div>
        <Footer />
        {
                showModal ? 
                    <ModalWindow title={'Обратиться'} setShowModal={setShowModal}>
                        <FormInput title={'Почта'} field={'email'} onChange={requestOnchange}/>
                        <FormInput title={'ФИО'} field={'name'} onChange={requestOnchange}/>
                        <FormInput title={'Номер телефона'} field={'phone'} onChange={requestOnchange}/>
                        <div style={{display: 'flex', justifyContent: 'end', padding: '0px 20px'}}>
                            <div 
                                style={{background: '#1F3C88', padding: '10px 20px', color: 'white', fontSize: '16px', borderRadius: '5px', outline: 'none', cursor: 'pointer'}}
                                onClick={handleRequestSend}
                            >
                                Отправить
                            </div>
                        </div>
                    </ModalWindow>
                :
                    <></>
            }
    </div>
  );
};

const FormInput = ({title, field, onChange}) => {
    const labelStyle = {
        'fontFamily': 'Roboto',
        'fontSize': '1.2rem',
        paddingLeft: '10px',
    }

    const inputStyle = {
        color: 'black',
        // width: '500px',
        border: '1px solid black',
        borderRadius: '5px',
        fontSize: '1.2rem',
        padding: '10px'
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '20px', padding: '0px 20px'}}>

            <label style={labelStyle} htmlFor={field}>{title}</label>
            <input style={inputStyle} placeholder={field} type="text" name={field} onChange={(e) => {
                let value = e.target.value;
                onChange(field, value)
                // console.log(onChange)
            }}/>


        </div>
    )

}

export default DirectorPage;
