import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navigation from './Components/Navigation';
import Balance  from './Components/Balance';
import Expenses  from './Components/Expenses';
import Invoices  from './Components/Invoices';
import CustomInvoiceDetails  from './Components/CustomInvoiceDetails';
import InvoiceDetails  from './Components/InvoiceDetails';


import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <Navigation />
    <Routes>
    <Route path='/' element ={<App />} />
    <Route path='/balance' element ={<Balance />} />
    <Route path='/expenses' element ={<Expenses />} />
    <Route path='/invoices' element ={<Invoices />} />
    <Route path='/invoice/details/:invoiceID' element ={<CustomInvoiceDetails />} />
    <Route path='/invoice/details' element ={<InvoiceDetails />} />
    </Routes>
    </BrowserRouter>
);

