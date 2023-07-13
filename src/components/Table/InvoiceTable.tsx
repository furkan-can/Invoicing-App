import React, { useState } from 'react';
import "./invoicetable.scss";
import InvoiceCard from '$c/invoice-card/InvoiceCard';
import { IInvoiceList } from '../../Interfaces/interface';

interface InvoiceTableProps {
    invoices: IInvoiceList[];
  }

const InvoiceTable: React.FC<InvoiceTableProps> = ({ invoices }) => {

    return (
        <div className='table-container'>
            <div className='scroll'>
                {
                    invoices.map((invoice) => (
                        <InvoiceCard key={invoice.listProductServiceDescription} invoice={invoice} status={true} invoiceList={[]} />
                    ))
                }
            </div>
        </div>
    );
}

export default InvoiceTable;
