import React from 'react';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from "firebase/firestore";
import {db} from '../../../firebase'
import axios from 'axios';
import '../../../styles/Tabs.css';

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";

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
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Tipo de transacción</TableCell>
                                <TableCell>Serial</TableCell>
                                <TableCell>Fuente</TableCell>
                                <TableCell>Destino</TableCell>
                                <TableCell>Fecha</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                        </TableBody>
                    </Table>
                </TableContainer>
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