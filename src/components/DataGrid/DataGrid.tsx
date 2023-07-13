import React, { useEffect, useState } from 'react';
import './datagrid.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IInvoice } from '../../Interfaces/interface';

interface DataTableProps {
    data: IInvoice;
}

const TAX_RATE = 0.07;




export const DataGrid: React.FC<DataTableProps> = ({ data }) => {

    function calculatePriceAll() {
        let price = 0;
        data.items.reduce((acc, item) => {
            price += item.listtotalPrice;

            return acc;
        }, 0);
        return price;
    }

    function calculateTax() {
        return TAX_RATE * calculatePriceAll();
    }

    function calculateTaxPrice() {
        return calculatePriceAll() + calculateTax();
    }

    

    function ccyFormat(num: number) {
        return `${num.toFixed(2)}`;
    }

    

    return (
        <>
            <TableContainer className='table-container' component={Paper}>
                <Table className='table' aria-label="spanning table">
                    <TableHead className='table-head'>
                        <TableRow>
                            <TableCell className='header' align="center" colSpan={3}>
                                Details
                            </TableCell>
                            <TableCell className='header' align="right">Price</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='subheader'>Desc</TableCell>
                            <TableCell className='subheader' align="right">Qty.</TableCell>
                            <TableCell className='subheader' align="right">Unit</TableCell>
                            <TableCell className='subheader' align="right">Sum</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className='tbody'>
                        {data.items.map((row) => (
                            <TableRow key={row.listProductServiceDescription} className='row'>
                                <TableCell className='text'>{row.listProductServiceDescription}</TableCell>
                                <TableCell className='text' align="right">{row.listAmount}</TableCell>
                                <TableCell className='text' align="right">{row.listUnitPrice}</TableCell>
                                <TableCell className='text' align="right">{ccyFormat(row.listtotalPrice)}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>

                </Table>
            </TableContainer>
            <div className='amount'>

                <div>
                    <span className='subheader'>Subtotal</span>
                    <span className='subheader'>Tax</span>
                    <span className='subheader'>Total</span>
                </div>
                <div>
                    <span className='text'>{ccyFormat(calculatePriceAll())}</span>
                    <span className='text'>{`${(TAX_RATE * 100).toFixed(0)}%`}&nbsp;&nbsp;{ccyFormat(calculateTax())}</span>
                    <span className='text'>{ccyFormat(calculateTaxPrice())}</span>

                </div>
            </div>

        </>



    );
};
