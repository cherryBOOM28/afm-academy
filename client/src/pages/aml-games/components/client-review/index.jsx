import React, { useState } from 'react';
import NameList from '../name-list';
import './style.css';

const ClientReview = ({ clients }) => {
    const [currentClientIndex, setCurrentClientIndex] = useState(0);
    const [riskStatus, setRiskStatus] = useState(Array(clients.length).fill(null));

    const handleRiskChange = (index, status) => {
        const newRiskStatus = [...riskStatus];
        newRiskStatus[index] = status;
        setRiskStatus(newRiskStatus);
    };

    const nextClient = () => {
        if (currentClientIndex < clients?.length - 1) {
            setCurrentClientIndex(currentClientIndex + 1);
        }
    };

    const prevClient = () => {
        if (currentClientIndex > 0) {
            setCurrentClientIndex(currentClientIndex - 1);
        }
    };

    const { description, img, fullName } = clients[currentClientIndex];

    return (
        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
            <div className="client-review-container">
                <div className="client-review-res">
                    <div className='client-review-description-container'>
                        <p className='client-review-description'>{description}</p>
                        <div className="client-review-buttons">
                            <NameList peopleData={[{
                                name: fullName,
                                id: ''
                            }]} />
                        </div>
                    </div>
                    <div className='fullInfo-client'>
                        <h3>Клиент {currentClientIndex + 1}:</h3>
                        <div className='img-container-review'>
                            <img src={img} alt={fullName} />
                        </div>
                        <p>{fullName}</p>
                    </div>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="client-review-stepper">
                        {clients.map((_, index) => (
                            <span
                                key={index}
                                className={index === currentClientIndex ? 'active' : ''}
                            ></span>
                        ))}
                    </div>
                    <div className="client-review-navigation">
                        <button className='client-review-navigation-previous' onClick={prevClient} disabled={currentClientIndex === 0}>Назад</button>
                        <button className='client-review-navigation-next' onClick={nextClient} disabled={currentClientIndex === clients.length - 1}>Далее</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;
