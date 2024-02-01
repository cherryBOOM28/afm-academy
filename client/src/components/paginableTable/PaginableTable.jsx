import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect, Children } from 'react';

import {BiPlus, BiSave} from 'react-icons/bi';
import {ImCancelCircle} from 'react-icons/im';
import base_url from '../../settings/base_url';
import { useStyle } from '../VisualModal/StyleContext';


const PaginableTable = ({columns, rows, rowsPerPage, children, isExtendable, handleOnAdd}) => {
    const [page,
        setPage] = useState(0);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const { styles } = useStyle();

    const jwtToken = localStorage.getItem('jwtToken');

    const [isAdding, setIsAdding] = useState(false);

    const cellPadding = '20px 0px';
    const cellFont = `400 16px/normal 'Inter', sans-serif`;
    const headCellFont = `500 16px/normal 'Inter', sans-serif`;
    const cellColor = '#3A3939'
    const headCellColor = '#20102B'

    const addInputStyle = {
        height: '35px',
        width: '80%',

        fontFamily: 'Inter',
        fontSize: '1.2rem',

        border: '1px solid black',
        borderRadius: '2px',

        padding: '10px',
        boxSizing: 'border-box'
    }

    const [addData, setAddData] = useState({
        name: '' , 
        subname: '', 
        start_date: '', 
        end_date: '',
    });

    const handleAddDataChange = (name, value) => {
        setAddData({ ...addData, [name]: value })
    }

    const _handleAdd = () => {
        setIsAdding(true)
    }

    const _handleSave = () => {
        // console.log(addData)
        handleOnAdd({
            ...addData,
            start_date: new Date(addData.start_date),
            end_date: new Date(addData.end_date)
        })

        setIsAdding(false)
    }

    const _handleCancel = () => {
        setAddData({
            name: '' , 
            subname: '', 
            start_date: '', 
            end_date: '',
        })
        setIsAdding(false)
    }

    useEffect(() => {
        // console.log(rows);
    }, [rows])

    const numberToDate = (number) => {
        const timestamp = number;
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 to month because it's zero-indexed
        const day = String(date.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }

    return (
        <TableContainer component={Paper} style={{backgroundColor: 'transparent', border: 'none', boxShadow: 'none', padding: '0', boxSizing: 'border-box'}}>
            <Table>
                <TableHead > 
                    <TableRow style={{border: 'none'}}>
                        {columns.map((column, index) => {
                            return <TableCell 
                                        style={{ padding: cellPadding, font: headCellFont, color: headCellColor }} 
                                        align={index === columns.length - 1 ? 'right' : 'left'} 
                                        key={index}
                                    >
                                        {index === columns.length - 1 
                                            ? isExtendable
                                                ? <BiPlus style={{color: headCellColor, cursor: 'pointer'}} size={23} onClick={() => _handleAdd()}/> 
                                                : ''
                                            : <div 
                                                className='text-content' 
                                                style={{
                                                    color: styles.colorMode === 'light' 
                                                        ? 'black'
                                                        : styles.colorMode === 'dark'
                                                            ? 'white'
                                                            : 'rgb(6, 52, 98)'
                                                }}
                                            >
                                                {column}</div>
                                        }
                                    </TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {isAdding ? <TableRow>
                        <TableCell style={{ minWidth: '200px', padding: cellPadding, font: cellFont, color: cellColor }}>
                            <input type="text" style={addInputStyle} value={addData['name']} onChange={(e) => handleAddDataChange('name', e.target.value)}/>
                        </TableCell>
                        <TableCell style={{ padding: cellPadding, font: cellFont, color: cellColor }}>
                            <input type="text" style={addInputStyle} value={addData['subname']} onChange={(e) => handleAddDataChange('subname', e.target.value)}/>
                        </TableCell>
                        <TableCell style={{ padding: cellPadding, font: cellFont, color: cellColor }}>
                            <input type="date" style={addInputStyle} value={addData['start_date']} onChange={(e) => handleAddDataChange('start_date', e.target.value)}/>
                        </TableCell>
                        <TableCell style={{ padding: cellPadding, font: cellFont, color: cellColor }}>
                            <input type="date" style={addInputStyle} value={addData['end_date']} onChange={(e) => handleAddDataChange('end_date', e.target.value)}/>
                        </TableCell>
                        <TableCell 
                            style={{ padding: cellPadding, font: cellFont, color: cellColor, display: 'flex', flexDirection: 'row', alignItems: 'center',gap: '10px'}} 
                            align='right'

                            >
                                <BiSave style={{color: headCellColor, cursor: 'pointer'}} size={23} onClick={() => _handleSave()}/> 
                                <ImCancelCircle style={{color: headCellColor, cursor: 'pointer'}} size={23} onClick={() => _handleCancel()}/> 
                        </TableCell>
                    </TableRow> : null}
                    {Array.isArray(rows) ? rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((row, index) => (
                        <TableRow key={index} id={row.job_ex_id}>
                            <TableCell style={{ minWidth: '200px', padding: cellPadding, font: cellFont, color: cellColor }}>
                                <div 
                                    className='text-content'
                                    style={{
                                        color: styles.colorMode === 'light' 
                                            ? 'black'
                                            : styles.colorMode === 'dark'
                                                ? 'white'
                                                : 'rgb(6, 52, 98)'
                                    }}
                                >
                                    {row.org_name}
                                </div>
                            </TableCell>
                            <TableCell style={{ padding: cellPadding, font: cellFont, color: cellColor }}>
                                <div 
                                    className='text-content'
                                    style={{
                                        color: styles.colorMode === 'light' 
                                            ? 'black'
                                            : styles.colorMode === 'dark'
                                                ? 'white'
                                                : 'rgb(6, 52, 98)'
                                    }}
                                >
                                    {row.position}
                                </div>
                            </TableCell>
                            <TableCell style={{ padding: cellPadding, font: cellFont, color: cellColor }}>
                                <div 
                                    className='text-content'
                                    style={{
                                        color: styles.colorMode === 'light' 
                                            ? 'black'
                                            : styles.colorMode === 'dark'
                                                ? 'white'
                                                : 'rgb(6, 52, 98)'
                                    }}
                                >
                                    {row.start_date ? typeof row.start_date === 'number' ? numberToDate(row.start_date) : row.start_date : ''}
                                </div>
                            </TableCell>
                            <TableCell style={{ padding: cellPadding, font: cellFont, color: cellColor }}>
                                <div 
                                    className='text-content'
                                    style={{
                                        color: styles.colorMode === 'light' 
                                            ? 'black'
                                            : styles.colorMode === 'dark'
                                                ? 'white'
                                                : 'rgb(6, 52, 98)'
                                    }}
                                >
                                    {row.end_date ? typeof row.end_date === 'number' ? numberToDate(row.start_date) : row.end_date : ''}
                                </div>
                            </TableCell>
                            <TableCell 
                                style={{ padding: cellPadding, font: cellFont, color: cellColor, display: 'flex', flexDirection: 'row-reverse', gap: '10px'}} 
                                align='right'
                                
                                >

                                {children}
                            </TableCell>
                        </TableRow>
                    )) : null}
                </TableBody>
            </Table>
            <TablePagination
                component="div"
                count={rows.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[rowsPerPage]}/>
        </TableContainer>
    );
};

export default PaginableTable;