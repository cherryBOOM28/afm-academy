import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import './style.scss';

const QuizCard = ({ logo, text }) => {
    const [flipped, setFlipped] = useState(false);
    const [displayContent, setDisplayContent] = useState({ logo, text });

    const handleFlip = () => {
        // Поворот карты
        setFlipped(!flipped);

        // Задержка для обновления контента, чтобы он не менялся во время видимой части анимации
        setTimeout(() => {
            if (flipped) {
                // Обновление когда карта снова будет в исходном положении
                setDisplayContent({ logo, text });
            }
        }, 400); // Время должно соответствовать продолжительности анимации
    };

    return (
        <div className='QuizCard-container'>
            <div className="QuizCard-wrapper" onClick={handleFlip}>
                <div className={`QuizCard ${flipped ? 'flipped' : ''}`}>
                    <div className="QuizCard-face front">
                        <img src={logo} alt="logo" className="logo large" />
                    </div>
                    <div className="QuizCard-face back">
                        <img src={displayContent.logo} alt="logo" className="logo small" />
                        <p>{displayContent.text}</p>
                        <div className="buttons">
                            <Button startIcon={<CloseIcon />} variant="contained" color="error" className="icon-button" />
                            <Button startIcon={<CheckIcon />} variant="contained" color="success" className="icon-button" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizCard;
