import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button } from '@mui/material';
import React, { useState, useEffect, Children } from 'react';

import {BiPlus} from 'react-icons/bi';

const PaginableTable = ({columns, rows, rowsPerPage, children, isExtendable}) => {
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
                                                ? <BiPlus style={{color: headCellColor}} size={23}/> 
                                                : ''
                                            : column
                                        }
                                    </TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((row, index) => (
                        <TableRow key={index}>
                            <TableCell style={{ minWidth: '200px', padding: cellPadding, font: cellFont, color: cellColor }}>{row.organization}</TableCell>
                            <TableCell style={{ padding: cellPadding, font: cellFont, color: cellColor }}>{row.position}</TableCell>
                            <TableCell style={{ padding: cellPadding, font: cellFont, color: cellColor }}>{row.start}</TableCell>
                            <TableCell style={{ padding: cellPadding, font: cellFont, color: cellColor }}>{row.end}</TableCell>
                            <TableCell style={{ padding: cellPadding, font: cellFont, color: cellColor, display: 'flex', flexDirection: 'row-reverse', gap: '10px' }} align='right'>
                                {children}
                            </TableCell>
                        </TableRow>
                    ))}
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