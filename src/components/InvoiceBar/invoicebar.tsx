import SearchBar from '$c/SearchBar/searchbar';
import React from 'react';
import './invoicebar.scss';
import InvoiceCard from '$c/invoice-card/InvoiceCard';

export default function InvoiceBar() {
    return (
        <div className='invoice-bar'>
            <SearchBar />
            <div className='divider'></div>

            <InvoiceCard />
            <InvoiceCard />
            <InvoiceCard />
            <InvoiceCard />
            <InvoiceCard />
            <InvoiceCard />
            <InvoiceCard />
        </div>
    );
}