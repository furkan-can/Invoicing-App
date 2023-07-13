import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import './invoicedetails.scss';
import { DataGrid } from '$c/DataGrid/DataGrid';
import { useLocation } from 'react-router-dom';
import { IInvoice } from '../../Interfaces/interface';


const InvoiceDetails = () => {
    const invoice = useLocation().state;
    const [selectedInvoice, setSelectedInvoice] = React.useState<IInvoice>(invoice);
    const [invoiceList, setInvoiceList] = React.useState<IInvoice[]>(localStorage.getItem('invoice') ? JSON.parse(localStorage.getItem('invoice')) : []);

    React.useEffect(() => {
        setSelectedInvoice(invoice);
    }, [invoice]);

    function paid() {
        const updatedInvoice = { ...invoice, status: 'Paid' };
        setSelectedInvoice(updatedInvoice);
        invoiceList.map((item: any, index: number) => {
            if (item.invoiceID === invoice.invoiceID) {
                invoiceList[index] = updatedInvoice;
            }
        });
        localStorage.setItem('invoice', JSON.stringify(invoiceList));
        (window as Window).location.reload();
    }

    function mail() {
        alert('Post successfully sent to invoice owners email address');
    }


    return (
        <div className='invoice-details'>
            <h1>INVOICE DETAILS</h1>

            <Card className='card'>

                <CardContent className='content'>
                    <div className='container'>
                        <div className='top'>
                            <div className='top-content'>
                                <span>INVOICE</span>
                                <span>{selectedInvoice.invoiceID}</span>
                                <span>{selectedInvoice.billDescription.descriptionDate}</span>
                            </div>
                            <div className='top-content'>
                                <span>CUSTOMER DETAILS</span>
                                <span>{selectedInvoice.billTo.billToName}</span>
                                <span>{selectedInvoice.billTo.billToEmail}</span>
                            </div>
                            <div className='top-content'>
                                <span>STATUS</span>
                                <span>{selectedInvoice.status}</span>
                            </div>
                            <Button onClick={paid} disabled={selectedInvoice.status.includes("Paid")} className='btn-print' variant='contained' size="medium">Payment Received</Button>
                            <Button onClick={mail} className='btn-print' color='success' variant='contained' size="medium">EMail</Button>


                        </div>
                        <div className='divider'></div>
                        <div>
                            <DataGrid data={selectedInvoice} />
                        </div>
                        <div></div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default InvoiceDetails;
