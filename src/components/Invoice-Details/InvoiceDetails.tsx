import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import './invoicedetails.scss';
import { DataGrid } from '$c/DataGrid/DataGrid';
import { useLocation } from 'react-router-dom';


const InvoiceDetails = () => {
    const invoiceList = useLocation().state;


    return (
        <div className='invoice-details'>
            <h1>INVOICE DETAILS</h1>

            <Card className='card'>

                <CardContent className='content'>
                    <div className='container'>
                        <div className='top'>
                            <div className='top-content'>
                                <span>INVOICE</span>
                                <span>{invoiceList.invoiceID}</span>
                                <span>{invoiceList.billDescription.descriptionDate}</span>
                            </div>
                            <div className='top-content'>
                                <span>CUSTOMER DETAILS</span>
                                <span>{invoiceList.billTo.billToName}</span>
                                <span>{invoiceList.billTo.billToEmail}</span>
                            </div>
                            <div className='top-content'>
                                <span>STATUS</span>
                                <span>Paid</span>
                            </div>
                            <Button className='btn-print' variant='contained' size="medium">Payment Received</Button>
                            <Button className='btn-print' color='success' variant='contained' size="medium">Print</Button>


                        </div>
                        <div className='divider'></div>
                        <div>
                            <DataGrid data={invoiceList} />
                        </div>
                        <div></div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default InvoiceDetails;
