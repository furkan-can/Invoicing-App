import React, { useEffect, useState } from 'react';
import './datagrid.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IInvoiceDetail } from '$c/Invoice-Details/InvoiceDetails';

interface DataTableProps {
    data: IInvoiceDetail[];
}

const TAX_RATE = 0.07;




export const DataGrid: React.FC<DataTableProps> = ({ data }) => {
    const [rows, setRows] = useState<IInvoiceDetail[]>([]);
    const [invoiceSubtotal, setInvoiceSubtotal] = useState<number>(0);
    const [invoiceTaxes, setInvoiceTaxes] = useState<number>(0);
    const [invoiceTotal, setInvoiceTotal] = useState<number>(0);

    useEffect(() => {
        const updatedRows = calculatePriceAll(data);
        setRows(updatedRows);
        setInvoiceSubtotal(subtotal(updatedRows));
    }, [data]);

    useEffect(() => {
        setInvoiceTaxes(TAX_RATE * invoiceSubtotal);
        setInvoiceTotal(invoiceTaxes + invoiceSubtotal);
    }, [invoiceSubtotal, invoiceTaxes]);

    function calculatePrice(qty: number, unit: number) {
        return qty * unit;
    }

    function calculatePriceAll(rows: IInvoiceDetail[]) {
        return rows.map((row) => {
            const price = calculatePrice(row.qty, row.unit);
            return { ...row, price };
        });

    }

    function ccyFormat(num: number) {
        return `${num.toFixed(2)}`;
    }

    function subtotal(items: readonly IInvoiceDetail[]) {
        console.log(items);
        return items.map((item) => item.price).reduce((sum, i) => sum + i, 0);
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
                        {rows.map((row) => (
                            <TableRow key={row.desc} className='row'>
                                <TableCell className='text'>{row.desc}</TableCell>
                                <TableCell className='text' align="right">{row.qty}</TableCell>
                                <TableCell className='text' align="right">{row.unit}</TableCell>
                                <TableCell className='text' align="right">{ccyFormat(row.price)}</TableCell>
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
                    <span className='text'>{ccyFormat(invoiceSubtotal)}</span>
                    <span className='text'>{`${(TAX_RATE * 100).toFixed(0)}%`}&nbsp;&nbsp;{ccyFormat(invoiceTaxes)}</span>
                    <span className='text'>{ccyFormat(invoiceTotal)}</span>

                </div>
            </div>

        </>



    );
};
