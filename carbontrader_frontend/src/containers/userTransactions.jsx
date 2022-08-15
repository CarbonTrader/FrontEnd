import React, { useState } from "react";
import "../styles/userTransactions.scss";
const UserTransactions = (props) => {
  return (
    <section className="userTransactionsContainer">
      <div className="userTransactions-tableContainer">
        <table>
          <tr>
            <th>Tipo de transacción</th>
            <th>Serial</th>
            <th>Fuente</th>
            <th>Destino</th>
            <th>Fecha</th>
          </tr>
        {props.transactions.map((transaction) => (
           <tr>
           <td>{transaction.transaction_type}</td>
           <td>{transaction.carbontrader_serial}</td>
           <td>{transaction.seller_pk}</td>
           <td>{transaction.buyer_pk}</td>
           <td>{transaction.timestamp}</td>
         </tr>
        ))}

         
        </table>
      </div>
    </section>
  );
};
export default UserTransactions;
