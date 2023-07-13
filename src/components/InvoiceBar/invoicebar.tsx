import SearchBar from '$c/SearchBar/searchbar';
import React, { useEffect, useState } from 'react';
import './invoicebar.scss';
import InvoiceCard from '$c/invoice-card/InvoiceCard';
import { IInvoice, IInvoiceList } from '../../Interfaces/interface';

export default function InvoiceBar() {
    const [invoices, setInvoices] = useState<IInvoice[]>([]);

    useEffect(() => {
        try {
            const invoicesList = localStorage.getItem('invoice') || '[]';
            const parsedInvoices = JSON.parse(invoicesList);
            
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
            <SearchBar />
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