
import { useParams } from 'react-router-dom'; 


export default function CustomInvoiceDetails() {


const { invoiceID } =useParams(); 



    return (
            <div>
            <h1>CustomInvoiceDetails</h1> 
            <h2>Invoice #{invoiceID} Details.</h2>
            </div>
); 
}