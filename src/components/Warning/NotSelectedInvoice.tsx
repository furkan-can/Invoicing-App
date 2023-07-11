import React from 'react';
import './notselectedinvoice.scss';

export default function NotSelectedInvoice() {
    return (
        <div className='notselectedinvoice-page'>
            <div className='container'>
                <span>
                    Please select an invoice to view the document here.
                </span>
            </div>
        </div>
    );
}
