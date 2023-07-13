import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './invoicecard.scss';
import { IInvoiceList } from '../../Interfaces/interface';

interface InvoiceCardProps {
    invoice: IInvoiceList;
    status: boolean;

}


const InvoiceCard: React.FC<InvoiceCardProps> = ({ invoice, status }) => {
    {
        if (status) {
            return (
                <Card className='invoice-card'>
                    <CardContent className='content'>
                        <div className='invoice-card-header'>
                            <Typography className='text'>
                                <span>Product/Service Description :</span> {invoice.listProductServiceDescription}
                            </Typography>
                        </div>
                        <div className='invoice-card-body'>
                            <Typography className='text'>
                                <span>Unit Price :</span> {invoice.listUnitPrice}
                            </Typography>
                            <Typography className='text'>
                                <span>Total Price:</span> {invoice.listtotalPrice}
                            </Typography>
                            <Typography className='text'>
                                <span>Amount :</span> {invoice.listAmount}
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            );
        } else {
            return (
                <Card className='invoice-card'>
                    <CardContent className='content'>
                        <div className='invoice-card-header'>
                            <Typography className='text'>
                                <span>INV. ID:</span> #-0001
                            </Typography>
                            <Typography className='text'>
                                <span>Status:</span> Unpaid
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
                                <span>Title:</span> 16:00
                            </Typography>
                            <Typography className='text'>
                                <span>Price:</span> $ 1000
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            );
        }
    };
}

export default InvoiceCard;
