import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './invoicecard.scss';


export default function InvoiceCard() {
    return (
        <Card className='invoice-card'>
            <CardContent className='content'>
                <div className='invoice-card-header'>
                    <Typography className='text'  >
                        <span>INV. ID:</span> #-0001
                    </Typography>
                    <Typography className='text' >
                        <span>Status:</span> Paid
                    </Typography>
                    <Typography className='text'>
                        <span>Customer:</span> Furkan Kaya
                    </Typography>
                </div>
                <div className='invoice-card-body'>
                    <Typography className='text'>
                        <span>Date:</span> 12/12/2021
                    </Typography>
                    <Typography className='text'>
                        <span>Time:</span> 16:00
                    </Typography>
                    <Typography className='text'>
                        <span>Price:</span> $ 1000
                    </Typography>
                </div>
            </CardContent>

        </Card>
    );
}
