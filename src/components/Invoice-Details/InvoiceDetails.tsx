import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import './invoicedetails.scss';

export default function InvoiceDetails() {


    return (
        <div className='invoice-details'>
            <h1>INVOICE DETAILS</h1>

            <Card className='card'>

                <CardContent className='content'>
                    <div className='container'>
                        <div className='top'>
                            <div className='top-content'>
                                <span>INVOICE</span>
                                <span>#-0001</span>
                                <span>12/12/2021 16:00</span>
                            </div>
                            <div className='top-content'>
                                <span>CUSTOMER DETAILS</span>
                                <span>Furkan Kaya</span>
                                <span>furkankaya@gmail.com</span>
                            </div>
                            <div className='top-content'>
                                <span>STATUS</span>
                                <span>Paid</span>
                            </div>
                            <Button className='btn-print' variant='contained' size="medium">Print</Button>

                        </div>
                        <div className='divider'></div>
                        <div>
                            {/* Data Tablosu Gelecek Buraya unutma */}
                        </div>
                        <div></div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
