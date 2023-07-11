import React from 'react';
import Navbar from '$c/home/Navbar/navbar';
import './home.scss';
import InvoiceBar from '$c/InvoiceBar/invoicebar';

export default function Home() {
    return (
        <div className='home-page'>
            <Navbar />
            <div className='container'>

                <div className='invoice-container scroll'>
                    <InvoiceBar />
                </div>
                <div className='home-container'>
                    asldkalskdlsakld
                </div>
            </div>
        </div>
    );
}
