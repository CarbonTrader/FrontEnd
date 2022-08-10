import React from 'react';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from "firebase/firestore";
import {db} from '../../../firebase'
import axios from 'axios';
import '../../../styles/Tabs.css';

import Table from '@mui/material/Table';

const InvestorTransactionList = ({transactionList}) => {
    var rows = transactionList.map( (transaction) => (
        <tr>
            <td>{transaction.transaction_type}</td>
            <td>{transaction.carbontrader_serial}</td>
            <td>{transaction.seller_pk}</td>
            <td>{transaction.buyer_pk}</td>
            <td>{transaction.timestamp}</td>
        </tr>
    ))
    return (  
        <section className = 'InvestorTransactionList'>
            <div>
                <table className = "InvestorTransactionTable">
                    <th>
                        <td>Tipo de transacción</td>
                        <td>Serial</td>
                        <td>Fuente</td>
                        <td>Destino</td>
                        <td>Fecha</td> 
                    </th>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default InvestorTransactionList;