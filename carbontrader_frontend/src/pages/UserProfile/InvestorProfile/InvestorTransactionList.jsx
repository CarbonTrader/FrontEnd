import React from 'react';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from "firebase/firestore";
import {db} from '../../../firebase'
import axios from 'axios';
import { TableContainer, Table, TableBody, TableRow, Paper, TableHead, TableCell, makeStyles } from "@material-ui/core";
import '../../../styles/Tabs.css';
import useTable from "../../../components/useTable"

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    }
}))

const InvestorTransactionList = ({transactionList}) => {

    const headCells = [
        { id: 'transaction_type', label: 'Tipo de transacción' },
        { id: 'carbontrader_serial', label: 'Serial' },
        { id: 'seller_pk', label: 'Fuente' },
        { id: 'buyer_pk', label: 'Destino' },
        { id: 'timestamp', label: 'Fecha' },
    ]
    const classes = useStyles();
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(transactionList, headCells, filterFn);

    // TODO: La siguiente función debe ser modificada de acuerdo al modelo de los créditos del Inversionista.
    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.project_name.toLowerCase().includes(target.value))
            }
        })
    }

    return (  
        <section className = 'InvestorTransactionList'>
            <div>
                <Paper className={classes.pageContent}>
                    <TblContainer>
                        <Table>
                            <TblHead/>
                            <TableBody>
                                {transactionList.map( (transaction) => (
                                    <TableRow>
                                        <TableCell>{transaction.transaction_type}</TableCell>
                                        <TableCell>{transaction.carbontrader_serial}</TableCell>
                                        <TableCell>{transaction.seller_pk}</TableCell>
                                        <TableCell>{transaction.buyer_pk}</TableCell>
                                        <TableCell>{transaction.timestamp}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TblContainer>
                    <TblPagination/>
                </Paper>
            </div>
        </section>
    );
}

export default InvestorTransactionList;