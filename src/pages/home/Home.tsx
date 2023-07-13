import React, { useState } from 'react';
import Navbar from '$c/home/Navbar/navbar';
import './home.scss';
import InvoiceBar from '$c/InvoiceBar/invoicebar';
import NotSelectedInvoice from '$c/Warning/NotSelectedInvoice';
import InvoiceDetails from '$c/Invoice-Details/InvoiceDetails';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CreateInvoice from '$c/CreateInvoice/CreateInvoice';

interface HomeProps {
    status: boolean;
}

const Home: React.FC<HomeProps> = ({ status }) => {
    console.log(status);
    const [isComponentOpen, setComponentOpen] = useState(false);

    const openComponent = () => {
        setComponentOpen(true);
    };

    const closeComponent = () => {
        setComponentOpen(false);
    };

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
                            <Fab color="primary" aria-label="add" onClick={openComponent}>
                                <AddIcon />
                            </Fab>
                        </Box>
                    </div>{isComponentOpen ? (
                        <CreateInvoice onClose={closeComponent} />
                    ) : (
                        status ? <NotSelectedInvoice /> : <InvoiceDetails />
                    )}

                </div>

            </div>

        </div>
    );
}

export default Home;
