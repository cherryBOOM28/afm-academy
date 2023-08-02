import React from 'react';
import cl from './DirectorPage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import jsonData from '../structure/structureData.json'
import Header from '../../../components/header/Header';
import Button from '../../../components/UI/button/Button';
import Footer from '../../../components/footer/Footer';
import Comments from '../../../components/commentSection/Comments';

const findCardDataById = (id) => {
    // Replace this with your logic to find the card data based on its ID
    return jsonData.cards.find((card) => card.id === id);
};

const DirectorPage = () => {    
    const navigate = useNavigate();
    const { id } = useParams();
    const cardData = findCardDataById(id);
    
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
                    <Button onClick={handleGoBack} className={cl.btn}>Назад</Button>
                </div>
            </div>
            <Comments commentsUrl="http://localhost:3000/structure" currentUserId="1" />
        </div>
        <Footer />
    </div>
  );
};

export default DirectorPage;
