import React, { useState, useEffect } from 'react';
import Elements_level_2 from '../../../AdminPage_v2/constructor/Elements_level_2';

import './style.scss';

const AdvancedInput = ({
    handleSave
}) => {

    const [componentHistory, setComponentHistory] = useState([]);

    const handleChoseComponent = (chosenComponent) => {

    } 

    return (
        <div className='advancedInput'>
        {
            componentHistory.map((component, index) => {
            return (
                <div 
                key={index}
                >

                </div>
            )
            })
        }
        <AdvancedInputComponentPallete handleChoseComponent={handleChoseComponent} />
        </div>
    )
}

const AdvancedInputComponentPallete = ({
    handleChoseComponent
}) => {

    const [category, setCategory] = useState('');

    return (
        <div className='pallete'>
            
        </div>
    )
}

export default AdvancedInput;