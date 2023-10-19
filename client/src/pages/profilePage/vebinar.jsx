import React, { useState, useEffect } from 'react';

import VebinarTable from '../../components/vebinarTable/VebinarTable';

import {BiFilter} from 'react-icons/bi';

import './vebinar.scss'

function Vebinar(props) {
    const [filterValue, setFilterValue] = useState('Сначала новые')
    const handleFilterChange = (option) => {
        setFilterValue(option);
    }

    return ( 
        <>
            <div className='vebinar-filter'>
                <div>Календарь выбранных вебинаров:</div>
                <div>
                    <BiFilter />
                    <Select 
                        options={['Сначала новые', 'Сначала старые']} 
                        value={filterValue}
                        handleChange={handleFilterChange}
                        />
                </div>
            </div>
            <div className='vebinar-table-block'>
                <VebinarTable data={[]}/>
            </div>
        </>
    );
}

const Select = ({ value, options, handleChange }) => {

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        handleChange(selectedValue);
    };

    return (
        <select value={value} onChange={handleSelectChange}>

            {
                options.map((option) => {

                    return <option value={option} key={option}>{option}</option>

                })
            }

        </select>
    )
}

export default Vebinar;