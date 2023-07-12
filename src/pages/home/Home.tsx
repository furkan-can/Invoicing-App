import React from 'react';
import Navbar from '$c/home/Navbar/navbar';
import './home.scss';
import InvoiceBar from '$c/InvoiceBar/invoicebar';
import NotSelectedInvoice from '$c/Warning/NotSelectedInvoice';
import InvoiceDetails from '$c/Invoice-Details/InvoiceDetails';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function Home() {
    return (
        <div className='home-page'>
            <Navbar />
            <div className='container'>

                <div className='invoice-container scroll'>
                    <InvoiceBar />
                </div>
                <div className='home-container'>
                    <div className='floating-bar'>
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <Fab color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Box>
                    </div>
                    <InvoiceDetails />

                </div>

            </div>

        </div>
    );
}
