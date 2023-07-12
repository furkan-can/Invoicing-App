import React, { useState } from 'react';
import './createinvoice.scss';
import Button from '@mui/material/Button';
import InvoiceTable from '$c/Table/InvoiceTable';

interface ComponentProps {
    onClose: () => void;
}

const CreateInvoice: React.FC<ComponentProps> = ({ onClose }) => {

    const [fatura, setFatura] = useState({
        musteriAdi: '',
        musteriEmail: '',
        faturaTutari: '',
    });

    const handleChange = (e: any) => {
        setFatura({ ...fatura, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Fatura kaydını gönderme veya işleme kodu buraya gelebilir
        console.log(fatura);
        // ... Diğer işlemler
    };

    return (
        <div className='create-invoice' >
            <h1>Create New Invoice</h1>
            <div className='divider'></div>
            <form className='form-container' onSubmit={handleSubmit}>
                <div className='content'>
                    <div className='left'>
                        <span>Bill From</span>

                        <div>
                            <label>Street Address</label>
                            <input
                                type="text"
                                name="musteriAdi"
                                value={fatura.musteriAdi}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>City</label>
                            <input
                                type="email"
                                name="musteriEmail"
                                value={fatura.musteriEmail}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='right'>
                        <span>Bill To</span>

                        <div>
                            <label>Customer Name</label>
                            <input
                                type="text"
                                name="musteriAdi"
                                value={fatura.musteriAdi}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Customer E-mail</label>
                            <input
                                type="email"
                                name="musteriEmail"
                                value={fatura.musteriEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Street Address</label>
                            <input
                                type="number"
                                name="faturaTutari"
                                value={fatura.faturaTutari}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>City</label>
                            <input
                                type="email"
                                name="musteriEmail"
                                value={fatura.musteriEmail}
                                onChange={handleChange}
                            />
                        </div>
                        
                    </div>
                </div>
                <div className='content'>
                    <div className='left'>
                        <span>Bill Description</span>

                        <div>
                            <label>Invoice Date</label>
                            <input
                                type="text"
                                name="musteriAdi"
                                value={fatura.musteriAdi}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Payment Type</label>
                            <input
                                type="email"
                                name="musteriEmail"
                                value={fatura.musteriEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Payment Terms</label>
                            <input
                                type="number"
                                name="faturaTutari"
                                value={fatura.faturaTutari}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Bill Title</label>
                            <input
                                type="number"
                                name="faturaTutari"
                                value={fatura.faturaTutari}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='right'>
                        <span>List</span>

                        <div>
                            <label>Product/Service Description</label>
                            <input
                                type="text"
                                name="musteriAdi"
                                value={fatura.musteriAdi}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Amount <span>(Hours Of Work, Amount Of Material)</span></label>
                            <input
                                type="email"
                                name="musteriEmail"
                                value={fatura.musteriEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Unit Price</label>
                            <input
                                type="number"
                                name="faturaTutari"
                                value={fatura.faturaTutari}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Total Price</label>
                            <input
                                type="email"
                                name="musteriEmail"
                                value={fatura.musteriEmail}
                                onChange={handleChange}
                            />
                        </div>

                        <Button className='btn-line' variant='contained' size="medium">Add Item</Button>


                    </div>
                </div>
                <div className='content'>
                    <div className='left'>
                        <button className='btn-submit' type="submit" onClick={onClose}>Save Invoice</button>
                    </div>
                    <div className='table'>
                        <InvoiceTable />
                    </div>
                </div>

            </form>

        </div>
    );
}

export default CreateInvoice;
