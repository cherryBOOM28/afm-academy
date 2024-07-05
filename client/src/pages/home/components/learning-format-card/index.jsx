import React from 'react'
import { useNavigate } from 'react-router'
import { useCategoryFormat } from '../../../Context/Context'
import './style.css'


const LearningFormatCard = ({ header, text, type_name }) => {
    const navigate = useNavigate()
    const { handleChangeCategoryFormat } = useCategoryFormat();
    function handleNavigate() {
        if (type_name === 'Онлайн') {
            handleChangeCategoryFormat('Онлайн');
        } else {
            handleChangeCategoryFormat('Дистанционно');
        }
        navigate('/courses/catalog#top')
    }

    return (
        <div className='learning-format-card'>
            <div className='header-wrapper'>
                <div className='header'>
                    {header}
                </div>
            </div>
            <div className='learning-format-main-body'>
                <div className='text'>
                    {text}
                </div>
                <div className='button-div'>
                    <button alt={type_name} onClick={handleNavigate}>
                        Перейти к каталогу
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LearningFormatCard
