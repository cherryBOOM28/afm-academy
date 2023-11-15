import React, { useState, useEffect } from 'react';

import PaginableTable from './../paginableTable/PaginableTable';
import {BiSolidFilePdf} from 'react-icons/bi';

import {AiFillStar} from 'react-icons/ai';
import { FaStar } from "react-icons/fa";

import './style.scss'
import axios from 'axios';
import base_url from '../../settings/base_url';
import { Box, Modal } from '@mui/material';

function ProfileEducation() {

    const eduColumns = ['Курс', 'Вид курса', 'Начало курса', 'Конец курса', 'Actions'];
    const [eduRows, setEduRows] = useState([
        { org_name: 'Org1', position: 'Position1', start_date: '2022-01-01', end_date: '2022-02-01' },
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
                    console.log(response.data)
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
                    console.log(_edu)
                    setEduRows(_edu);
                } else {
                    // Handle other status codes if needed
                    setError(response.statusText);
                    console.log(response.statusText);
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
                link.setAttribute('download', 'your_pdf_file.pdf');
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
    
            } catch (error) {
                console.error(error);
            }
        }
    };
    
    const [color1, setColor1] = useState('#F3F3F3');
    const [color2, setColor2] = useState('#F3F3F3');
    const [color3, setColor3] = useState('#F3F3F3');
    const [color4, setColor4] = useState('#F3F3F3');
    const [color5, setColor5] = useState('#F3F3F3');

    return ( 
        <>
        <div className="education-info">
            {/* <div className="title">Опыт работы</div> */}
            <div className='table'>
                <PaginableTable columns={eduColumns} rows={eduRows} rowsPerPage={eduRowsPerPage} isExtendable={false}>
                    <div className='edu-action' style={{order: 2}} onClick={() => {setOpen(true)}}>
                        <span>Оценить</span>
                        <AiFillStar size={23} style={{color: '#F9CB36'}}/>
                    </div>
                    <div className='edu-action' style={{order: 1}} onClick={() => {getFile(1)}}>
                        <span>Сертификат</span>
                        <BiSolidFilePdf size={23} style={{color: '#1F3C88'}}/>
                    </div>
                </PaginableTable>
            </div>
        </div>
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={{
                // top: '50px',
                // left: '',
                transform: 'translate(700px, 50%)',
                width: '600px',
                height: '500px',
                backgroundColor: 'white',
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", /* Increased shadow spread */
                border: 'none',
                outline: 'none',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                padding: '0px 50px 50px 50px',
            }}>
                <p style={{textAlign: 'center', fontFamily: 'ubuntu', lineHeight: '140%'}}>Для нас важно ваше мнение! 
                    Мы стремимся предоставить вам наилучший опыт обучения, и ваша обратная связь помогает нам постоянно улучшать наши курсы.</p>
                <div className="star-row" 
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '10px',
                        color: '#F3F3F3',

                        cursor: 'pointer'
                    }}
                >
                    <FaStar size={50} color={color1} onClick={() => setColor1('#1F3C88')}/>
                    <FaStar size={50} color={color2} onClick={() => setColor2('#1F3C88')}/>
                    <FaStar size={50} color={color3} onClick={() => setColor3('#1F3C88')}/>
                    <FaStar size={50} color={color4} onClick={() => setColor4('#1F3C88')}/>
                    <FaStar size={50} color={color5} onClick={() => setColor5('#1F3C88')}/>
                </div>
            </Box>
        </Modal>
        </>
    );
}

export default ProfileEducation;