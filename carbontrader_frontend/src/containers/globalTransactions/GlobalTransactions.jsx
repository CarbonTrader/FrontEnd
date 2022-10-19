import React from "react";
import "../../styles/pages/home/globalTransactions/GlobalTransactions.scss";
import TransactionRow from "../../components/globalTransactions/TransactionsRow";

const GlobalTransactions = () => {
  const transactions = JSON.parse(localStorage.getItem("global"));

  return (
    <>
      <div className="transactions-container">
        <div className="transactions-container-background">
          <table>
            <tr className="table-header">
              <th>Hash</th>
              <th>Tipo de transacción</th>
              <th>Serial</th>
              <th>Fuentes</th>
              <th>Destino</th>
              <th>Fecha</th>
            </tr>
            {transactions.map((transaction) => (
              <TransactionRow
                hash={transaction.hash}
                typeTransaction={transaction.transaction_type}
                serial={transaction.carbon_trader_serial}
                maker={transaction.sender_address}
                destiny={transaction.recipient_address}
                date={transaction.timestamp}
              />
            ))}
          </table>
        </div>
      </div>
    </>
  );
};
export default GlobalTransactions;
