import React from 'react';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from "firebase/firestore";
import {db} from '../../firebase'
import axios from 'axios';
import '../../styles/Tabs.css';

// TODO: Encontrar una manera de poblar la tabla con los datos en tiempo real.
const TraderTransactionList = ({transactionList}) => {
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
        <section className = 'TraderTransactionList'>
            <div>
                <table className = "TraderTransactionTable">
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

export default TraderTransactionList;