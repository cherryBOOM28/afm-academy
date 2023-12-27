import React, { useState, useEffect } from 'react';

import PaginableTable from './../paginableTable/PaginableTable';
import {BiSolidFilePdf} from 'react-icons/bi';

import {AiFillStar} from 'react-icons/ai';
import { FaStar } from "react-icons/fa";

import './style.scss'
import axios from 'axios';
import base_url from '../../settings/base_url';
import { Box, Modal } from '@mui/material';

function ProfileEducation({ handleOpenModal }) {

    const eduColumns = ['Курс', 'Вид курса', 'Начало курса', 'Конец курса', 'Actions'];
    const [eduRows, setEduRows] = useState([
        { org_name: 'загрузка...', position: 'загрузка...', start_date: 'загрузка...', end_date: 'загрузка...' },
        // Add more data as needed
    ]);
    const eduRowsPerPage = 5;

    

    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const [open, setOpen] = useState(false)

    const jwtToken = localStorage.getItem('jwtToken');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/api/aml/course/getUserCourses`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });
    
                if (response.status === 200) {
                    // console.log(response.data)
                    setCourses(response.data);
    
                    let _edu = response.data.filter(course => course.status === 'finished').map(course => {
                        return {
                            org_name: course.courseDTO.course_name, 
                            position: course.courseDTO.type_of_study || 'Электронное обучение', 
                            start_date: '2022-01-01', 
                            end_date: '2022-02-01',
                            id: course.id
                        }
                    });
                    // console.log(_edu)
                    setEduRows(_edu);
                } else {
                    // Handle other status codes if needed
                    setError(response.statusText);
                    // console.log(response.statusText);
                }
    
            } catch (error) {
                setError(error);
                console.error(error);
            }
        };
        
        fetchData();
    
    }, []);

    const getFile = async (id) => {
        if (id) {
            try {
                const response = await axios.get(
                    `${base_url}/api/aml/course/getCertificateByCourseId/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,
                        },
                        responseType: 'blob', // Set the responseType to 'blob'
                    }
                );
    
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Сертификат.pdf');
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
    
            } catch (error) {
                console.error(error);
            }
        }
    };

    return ( 
        <>
        <div className="education-info">
            {/* <div className="title">Опыт работы</div> */}
            <div className='table'>
                <PaginableTable columns={eduColumns} rows={eduRows} rowsPerPage={eduRowsPerPage} isExtendable={false}>
                    <div className='edu-action' style={{order: 2}} onClick={() => {handleOpenModal()}}>
                        <span>Отзыв</span>
                        {/* <AiFillStar size={23} style={{color: '#F9CB36'}}/> */}
                    </div>
                    <div className='edu-action' style={{order: 1}} onClick={() => {getFile(1)}}>
                        <span>Сертификат</span>
                        <BiSolidFilePdf size={23} style={{color: '#1F3C88'}}/>
                    </div>
                </PaginableTable>
            </div>
        </div>
        </>
    );
}

export default ProfileEducation;