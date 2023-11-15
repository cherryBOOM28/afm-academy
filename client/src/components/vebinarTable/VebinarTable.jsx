import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button } from '@mui/material';
import React, { useState, useEffect, Children } from 'react';

import {BiPlus} from 'react-icons/bi';
import img from './../../assets/images/vebinar-img.png'

import './vebinarTable.scss'

const VebinarTable = () => {

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
                    {rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((row, index) => (
                        <TableRow key={index} className='table-row'>
                            <TableCell className='title'>
                                <div>
                                    <img src={row.img} alt={row.title} />
                                    <span>{row.title}</span>
                                </div>
                            </TableCell>
                            <TableCell className={'time'} >
                                <div>{row.time}</div>
                            </TableCell>
                            <TableCell className={'auditory'} >
                                <div>{row.auditory}</div>
                            </TableCell>
                            <TableCell className={'lector'} >
                                <div>{row.lector}</div>
                            </TableCell>
                            <TableCell className={'format'} >
                                <div>{row.format}</div>
                            </TableCell>
                            <TableCell className={'contingent'} >
                                <div>{row.contingent}</div>
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
                    ))}
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