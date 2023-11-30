import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button } from '@mui/material';
import React, { useState, useEffect, Children } from 'react';

import {BiPlus} from 'react-icons/bi';
import img from './../../assets/images/vebinar-img.png'

import './vebinarTable.scss'
import axios from "axios";
import base_url from "../../settings/base_url";

const VebinarTable = () => {

    const [vebinars, setVebinars] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const jwtToken = localStorage.getItem('jwtToken');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/api/aml/webinar/getWebinars`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });

                if (response.status === 200) {
                    console.log(response.data)
                    setVebinars(response.data);
                } else {
                    // Handle other status codes if needed
                    setError(response.statusText);
                    console.log(response.statusText);
                }


            } catch (error) {
                setError(error);
                console.error(error);
            }

            setLoading(false);
        };

        fetchData();
    }, []);

    const columns = [
        'Тема',
        'Время',
        'Аудитория',
        'Лекторы',
        'Формат',
        'Ограничения',
        '', // for actions
    ];

    const [rows, setRows] = useState([
        {
            id: 1,
            title: 'title', 
            img: img,
            time: '2002',
            lector: 'maku',
            format: 'online',
            auditory: '202',
            contingent: '50ppl',
        },
        {
            id: 1,
            title: 'title', 
            img: img,
            time: '2002',
            lector: 'maku',
            format: 'online',
            auditory: '202',
            contingent: '50ppl',
        }
    ]);
    const rowsPerPage = 10;

    const [page,
        setPage] = useState(0);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const cellPadding = '20px 0px';
    const cellFont = `400 16px/normal 'Inter', sans-serif`;
    const headCellFont = `500 16px/normal 'Inter', sans-serif`;
    const cellColor = '#3A3939'
    const headCellColor = '#20102B'

    return (
        <>
        <TableContainer className='vebinar-table-container' component={Paper} style={{backgroundColor: 'transparent', border: 'none', boxShadow: 'none', padding: '0', boxSizing: 'border-box'}}>
            <Table className='vebinar-table' style={{ borderSpacing: '8px' }}>
                <TableHead>
                    <TableRow style={{border: 'none'}} className='table-row'>
                        {columns.map((column, index) => {
                            let last = index === columns.length - 1;

                            return <TableCell 
                                    style={{ minWidth: '100px', padding: cellPadding, font: headCellFont, color: headCellColor, paddingRight: index + 1, paddingLeft: last ? '10px' : '0px'}} 
                                    align={last ? 'right' : 'left'} 
                                    key={index}
                                >
                                    <div style={{padding: '0px 10px'}}>
                                    {column}
                                    </div>
                                </TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>

                    {vebinars.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((row, index) => {
                        const datee = new Date(row.date);

                        const months = {
                            0: 'января',
                            1: 'февраля',
                            2: 'марта',
                            3: 'апреля',
                            4: 'мая',
                            5: 'июня',
                            6: 'июля',
                            7: 'августа',
                            8: 'сентября',
                            9: 'октября',
                            10: 'ноября',
                            11: 'декабря',
                        };

// Get the day, month, and hour from the date
                        const day = datee.getDate();
                        const monthIndex = datee.getMonth();
                        const month = months[monthIndex];
                        const hour = datee.getHours();
                        const minutes = datee.getMinutes();

// Format the date and time
                        const formattedDate = `${day} ${month} ${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                        return (<TableRow key={index} className='table-row'>
                                <TableCell className='title'>
                                    <div>
                                        <img src={row.image} alt={row.title}/>
                                        <span>{row.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell className={'time'}>
                                    <div>{formattedDate}</div>
                                </TableCell>
                                <TableCell className={'auditory'}>
                                    <div>{row.description}</div>
                                </TableCell>
                                <TableCell className={'lector'}>
                                    <div>{row.description}</div>
                                </TableCell>
                                <TableCell className={'format'}>
                                    <div>{row.type}</div>
                                </TableCell>
                                <TableCell className={'contingent'}>
                                    <div>{row.webinar_for_member_of_the_system}</div>
                                </TableCell>
                                <TableCell
                                    align={'right'}
                                    className={'actions'}
                                >
                                    <div>
                                        <div>Ссылка на вебинар</div>
                                        <div>Отменить участие</div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>

        </TableContainer>
        <TablePagination
            component="div"
            count={rows.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[rowsPerPage]}/>
        </>
    );
};

export default VebinarTable;