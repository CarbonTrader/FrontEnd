import React from 'react';
import { useState } from 'react';
import { Table, TableBody, TableRow, Paper, TableCell, makeStyles } from "@material-ui/core";
import '../../../styles/Tabs.css';
import useTable from "../../../components/useTable"

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
        position: 'relative'
    },
    searchInput: {
        width: '75%'
    }
}))

/* * *
InvestorTransactionList corresponde al módulo de la página de perfil de usuario en que se muestran todas las transacciones registradas en las que ha incurrido un Inversionista.
* * */
const InvestorTransactionList = ({ transactionList }) => {

    const headCells = [
        { id: 'transaction_type', label: 'Tipo de transacción' },
        { id: 'carbontrader_serial', label: 'Serial' },
        { id: 'seller_pk', label: 'Fuente' },
        { id: 'buyer_pk', label: 'Destino' },
        { id: 'timestamp', label: 'Fecha' },
    ]
    const classes = useStyles();
    const [filterFn] = useState({ fn: items => { return items; } })

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(transactionList, headCells, filterFn);

    return (
        <section className='InvestorTransactionList'>
            <div>
                <Paper className={classes.pageContent}>
                    <TblContainer>
                        <Table>
                            <TblHead />
                            <TableBody>
                                {recordsAfterPagingAndSorting().map((transaction) => (
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
                    <TblPagination />
                </Paper>
            </div>
        </section>
    );
}

export default InvestorTransactionList;