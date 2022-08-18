import React from "react";
import "../styles/GlobalTransactions.scss";
import Header from '../components/Header'
import TransactionRow from "../components/TransactionsRow";



const GlobalTransactions = () => {
    const transactions = [
        {
            "transaction": "Compra",
            "serial": "qweqwe123",
            "maker": "bcvbcvbdfgdfg",
            "destiny": "asdasdasd",
            "date": "12/12/12"
        },
        {
            "transaction": "Compra",
            "serial": "qweqwe123",
            "maker": "bcvbcvbdfgdfg",
            "destiny": "asdasdasd",
            "date": "12/12/12"
        },
        {
            "transaction": "Compra",
            "serial": "qweqwe123",
            "maker": "bcvbcvbdfgdfg",
            "destiny": "asdasdasd",
            "date": "12/12/12"
        },
        {
            "transaction": "Compra",
            "serial": "qweqwe123",
            "maker": "bcvbcvbdfgdfg",
            "destiny": "asdasdasd",
            "date": "12/12/12"
        },
    ]

    return (
        <>
            <Header />
            <div class="transactions-container">
                <table>
                    <tr className="table-header">
                        <th>Tipo de transacción</th>
                        <th>Serial</th>
                        <th>Fuente</th>
                        <th>Destino</th>
                        <th>Fecha</th>
                    </tr>
                    {transactions.map(transaction => (
                        <TransactionRow typeTransaction={transaction.transaction} serial={transaction.serial} maker={transaction.maker} destiny={transaction.destiny} date={transaction.date} />
                    ))}
                </table>
            </div></>



    )
}
export default GlobalTransactions;