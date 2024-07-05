import React from 'react';
import { useNavigate } from 'react-router';
import './style.css';

const StartLearning = () => {
    const navigate = useNavigate();
    function handleNavigate() {
        navigate('/courses/86/read')
    }
    return (
        <div className='start-learning'>
            <div className='start-learning-wrapper'>
                <div className='text'>
                    Начни учиться бесплатно
                </div>
                <div className='button'>
                    <button onClick={handleNavigate}>
                        Получить первый урок
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StartLearning
