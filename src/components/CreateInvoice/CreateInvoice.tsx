import React, { useEffect, useState } from 'react';
import './createinvoice.scss';
import Button from '@mui/material/Button';
import InvoiceTable from '$c/Table/InvoiceTable';
import { IInvoice, IInvoiceList, IInvoicePartial } from './../../Interfaces/interface';

interface ComponentProps {
    onClose: () => void;
}

const initialInvoiceState: IInvoice = {
    invoiceID: 0,
    billFrom: {
        billFromStreetAddress: '',
        billFromCity: '',
    },
    billTo: {
        billToName: '',
        billToEmail: '',
        billToStreetAddress: '',
        billToCity: '',
    },
    billDescription: {
        descriptionDate: '',
        descriptionPaymentType: '',
        descriptionPaymentTerms: '',
        descriptionBillTitle: '',
    },
    items: [
        {
            listProductServiceDescription: '',
            listAmount: 0,
            listUnitPrice: 0,
            listtotalPrice: 0,
        },
    ],
};


const CreateInvoice: React.FC<ComponentProps> = ({ onClose }) => {
    const [isDisabled, setIsDisabled] = useState(true);

    const [productServiceDescription, setProductServiceDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [unitPrice, setUnitPrice] = useState(0);

    const [invoiceList, setInvoiceList] = useState<IInvoiceList[]>([]);

    const [descriptionPaymentTerms, setDescriptionPaymentTerms] = useState('1 Day');
    const [descriptionPaymentType, setDescriptionPaymentType] = useState('CreditCard');
    const [invoicePartial, setInvoicePartial] = useState<IInvoicePartial>({} as IInvoicePartial);
    const [invoiceListArr, setInvoiceListArr] = useState<IInvoiceList[]>([] as IInvoiceList[]);

    const [invoice, setInvoice] = useState<IInvoice>(initialInvoiceState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInvoicePartial({
            ...invoicePartial,
            [e.target.name]: e.target.value,
            descriptionPaymentTerms,
            descriptionPaymentType,
        });
    };

    useEffect(() => {
        setInvoicePartial(prevInvoice => ({
            ...prevInvoice,
            descriptionPaymentTerms,
            descriptionPaymentType,
        }));
    }, [descriptionPaymentTerms, descriptionPaymentType]);

    function prepareInvoice() {
        const localInvoiceList = localStorage.getItem('invoiceList') ? JSON.parse(localStorage.getItem('invoiceList')) : [];

        setInvoice({
            ...invoice,
            invoiceID: Math.floor(Math.random() * 100000),
            billFrom: {
                billFromStreetAddress: invoicePartial.billFromStreetAddress,
                billFromCity: invoicePartial.billFromCity,
            },
            billTo: {
                billToName: invoicePartial.billToName,
                billToEmail: invoicePartial.billToEmail,
                billToStreetAddress: invoicePartial.billToStreetAddress,
                billToCity: invoicePartial.billToCity,
            },
            billDescription: {
                descriptionDate: invoicePartial.descriptionDate,
                descriptionPaymentType: invoicePartial.descriptionPaymentType,
                descriptionPaymentTerms: invoicePartial.descriptionPaymentTerms,
                descriptionBillTitle: invoicePartial.descriptionBillTitle,
            },
            items: localInvoiceList,
        });
    }

    useEffect(() => {
        localStorage.setItem('invoiceList', JSON.stringify(invoiceList));
        setInvoiceListArr(localStorage.getItem('invoiceList') ? JSON.parse(localStorage.getItem('invoiceList')) : []);
    }, [invoiceList]);

    useEffect(() => {
        const getInvoiceList = localStorage.getItem('invoiceList') ? JSON.parse(localStorage.getItem('invoiceList')) : [];
        if (getInvoiceList && getInvoiceList.length > 0) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [invoiceList]);

    function addItem() {
        const getInvoiceList = localStorage.getItem('invoiceList') ? JSON.parse(localStorage.getItem('invoiceList')) : [];
        setInvoiceList(getInvoiceList);

        const data: IInvoiceList = {
            listProductServiceDescription: productServiceDescription,
            listAmount: amount,
            listUnitPrice: unitPrice,
            listtotalPrice: amount * unitPrice,
        };

        setInvoiceList([...invoiceList, data]);
        setProductServiceDescription('');
        setAmount(0);
        setUnitPrice(0);

    }

    useEffect(() => {
        prepareInvoice();
    }, [invoicePartial]);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const invoiceT = localStorage.getItem('invoice') ? JSON.parse(localStorage.getItem('invoice')) : [];
        invoiceT.push(invoice);
        localStorage.setItem('invoice', JSON.stringify(invoiceT));
        localStorage.removeItem('invoiceList');
        setIsDisabled(true);
        onClose();
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
                                required
                                type="text"
                                name="billFromStreetAddress"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>City</label>
                            <input
                                required
                                type="text"
                                name="billFromCity"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='right'>
                        <span>Bill To</span>

                        <div>
                            <label>Customer Name</label>
                            <input
                                required
                                type="text"
                                name="billToName"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Customer E-mail</label>
                            <input
                                required
                                type="email"
                                name="billToEmail"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Street Address</label>
                            <input
                                required
                                type="text"
                                name="billToStreetAddress"
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>City</label>
                            <input
                                required
                                type="text"
                                name="billToCity"
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
                                required
                                type="date"
                                name="descriptionDate"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Payment Type</label>
                            <select id="options1" name="descriptionPaymentType"

                                onChange={(e) => setDescriptionPaymentType(e.target.value)} required>
                                <option value="CreditCard">Credit Card</option>
                                <option value="Check">Check</option>
                            </select>
                        </div>
                        <div>
                            <label>Payment Terms</label>
                            <select id="options2" name="descriptionPaymentTerms" required
                                onChange={(e) => setDescriptionPaymentTerms(e.target.value)} >
                                <option value="1 Day">1 Day</option>
                                <option value="7 Day">7 Day</option>
                                <option value="14 Day">14 Day</option>
                                <option value="30 Day">30 Day</option>
                            </select>
                        </div>

                        <div>
                            <label>Bill Title</label>
                            <input
                                required
                                type="text"
                                name="descriptionBillTitle"
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
                                name="listProductServiceDescription"
                                onChange={(e) => setProductServiceDescription(e.target.value)}
                                value={productServiceDescription}
                            />
                        </div>
                        <div>
                            <label>Amount <span>(Hours Of Work, Amount Of Material)</span></label>
                            <input
                                type="number"
                                name="listAmount"
                                onChange={(e) => setAmount(parseInt(e.target.value))}
                                value={amount}
                            />
                        </div>
                        <div>
                            <label>Unit Price</label>
                            <input
                                type="number"
                                name="listUnitPrice"
                                onChange={(e) => setUnitPrice(parseInt(e.target.value))}
                                value={unitPrice}
                            />
                        </div>

                        <Button onClick={addItem} className='btn-line' variant='contained' size="medium">Add Item</Button>
                    </div>
                </div>
                <div className='content'>
                    <div className='left'>
                        <button disabled={isDisabled} className='btn-submit' type="submit">Save Invoice</button>
                        <button className='btn-back' onClick={onClose}>Back</button>

                    </div>
                    <div className='table'>
                        <InvoiceTable invoices={invoiceListArr} />
                    </div>
                </div>

            </form>

        </div>
    );
}

export default CreateInvoice;
