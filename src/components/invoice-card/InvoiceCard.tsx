import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './invoicecard.scss';
import { IInvoice, IInvoiceList } from '../../Interfaces/interface';

interface InvoiceCardProps {
    invoice: IInvoiceList;
    status: boolean;
    invoiceList: IInvoice;
}


const InvoiceCard: React.FC<InvoiceCardProps> = ({ invoice, status, invoiceList }) => {

    function calculatebillPrice() {
        let price = 0;
        invoiceList.items.reduce((acc, item) => {
            price += item.listtotalPrice;

            return acc;
        }, 0);
        return price;
    }
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
                                <span>INV. ID:</span> {invoiceList.invoiceID}
                            </Typography>
                            <Typography className='text'>
                                <span>Status:</span> Waiting
                            </Typography>
                            <Typography className='text'>
                                <span>Customer:</span> {invoiceList.billTo.billToName}
                            </Typography>
                        </div>
                        <div className='invoice-card-body'>
                            <Typography className='text'>
                                <span>Date:</span> {invoiceList.billDescription.descriptionDate}
                            </Typography>
                            <Typography className='text'>
                                <span>Title:</span> {invoiceList.billDescription.descriptionBillTitle}
                            </Typography>
                            <Typography className='text'>
                                <span>Price:</span> {calculatebillPrice()}
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            );
        }
    };
}

export default InvoiceCard;
