import React, { useState, useEffect } from 'react';

import PaginableTable from './../paginableTable/PaginableTable';
import {BiSolidFilePdf} from 'react-icons/bi';

import {AiFillStar} from 'react-icons/ai';

import './style.scss'

function ProfileEducation() {

    const eduColumns = ['Курс', 'Вид курса', 'Начало курса', 'Конец курса', 'Actions'];
    const [eduRows, setEduRows] = useState([
        { organization: 'Org1', position: 'Position1', start_date: '2022-01-01', end_date: '2022-02-01' },
        { organization: 'Org2', position: 'Position2', start_date: '2022-03-01', end_date: '2022-04-01' },
        { organization: 'Org3', position: 'Position3', start_date: '2022-05-01', end_date: '2022-06-01' },
        { organization: 'Org4', position: 'Position4', start_date: '2022-07-01', end_date: '2022-08-01' },
        { organization: 'Org5', position: 'Position5', start_date: '2022-09-01', end_date: '2022-10-01' },
        { organization: 'Org5', position: 'Position5', start_date: '2022-09-01', end_date: '2022-10-01' },
        { organization: 'Org5', position: 'Position5', start_date: '2022-09-01', end_date: '2022-10-01' },
        // Add more data as needed
    ]);
    const eduRowsPerPage = 5;

    return ( 
        <div className="education-info">
            {/* <div className="title">Опыт работы</div> */}
            <div className='table'>
                <PaginableTable columns={eduColumns} rows={eduRows} rowsPerPage={eduRowsPerPage} isExtendable={false}>
                    <div className='edu-action'>
                        <span>Оценить</span>
                        <AiFillStar size={23}/>
                    </div>
                    <div className='edu-action'>
                        <span>Сертификат</span>
                        <BiSolidFilePdf size={23}/>
                    </div>
                </PaginableTable>
            </div>
        </div>
    );
}

export default ProfileEducation;