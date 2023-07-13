import React, { useEffect, useState } from 'react';
import './invoicebar.scss';
import InvoiceCard from '$c/invoice-card/InvoiceCard';
import { IInvoice, IInvoiceList } from '../../Interfaces/interface';
import TextField from "@mui/material/TextField";


export default function InvoiceBar() {
    const [invoices, setInvoices] = useState<IInvoice[]>([]);

    useEffect(() => {
        try {
            let invoicesList: IInvoice[] = localStorage.getItem('invoice')
                ? JSON.parse(localStorage.getItem('invoice'))
                : [];
            const today = new Date();
            const date = today.getDate();

            const filteredItems = invoicesList.filter((item: IInvoice) => {
                return new Date(item.billDescription.descriptionDate).getDate() < date && item.status === 'outstanding';
            });

            filteredItems.forEach((item: IInvoice) => {
                item.status = 'late';
            });


            const mergedItems = invoicesList.map((item: IInvoice) => {
                const filteredItem = filteredItems.find((filteredItem) => filteredItem.invoiceID === item.invoiceID);
                if (filteredItem) {
                    return { ...item, status: filteredItem.status };
                }
                return item;
            });

            console.log(mergedItems);

            localStorage.setItem('invoice', JSON.stringify(mergedItems));

            invoicesList = localStorage.getItem('invoice')
                ? JSON.parse(localStorage.getItem('invoice'))
                : [];



            const parsedInvoices: IInvoice[] = invoicesList;



            if (Array.isArray(parsedInvoices)) {
                return setInvoices(parsedInvoices); // Return the updated state
            } else {
                console.error('The data retrieved from localStorage is not an array:', parsedInvoices);
            }
        } catch (error) {
            console.error('Error parsing JSON from localStorage:', error);
        }
    }, [localStorage.getItem('invoice')]);

    return (
        <div className='invoice-bar'>
            <div className='search-bar'>
                <TextField
                    id="search-bar"
                    className="search-input"
                    onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        const value = target.value;
                        if (value === '') {
                            return setInvoices(JSON.parse(localStorage.getItem('invoice') || '[]'));
                        }
                        const filteredInvoices = invoices.filter(invoice => invoice.invoiceID.toString().includes(value));
                        setInvoices(filteredInvoices);
                    }}
                    label="Search by Invoice Id"
                    variant="outlined"
                    placeholder="Search..."
                />
            </div>
            <div className='divider'></div>
            {invoices.map((invoice) => (
                <InvoiceCard
                    key={invoice.invoiceID}
                    invoiceList={invoice}
                    invoice={{} as IInvoiceList}
                    status={false}
                />
            ))}
        </div>
    );
}