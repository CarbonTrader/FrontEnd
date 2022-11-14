import React from "react";
import "../../styles/pages/home/userProfile/userTransactions.scss";

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
          {JSON.parse(localStorage.getItem("transactions")).map(
            (transaction) => (
              <tr>
                <td>{transaction.transaction_type}</td>
                <td>{transaction.carbon_trader_serial}</td>
                <td>{transaction.sender_address}</td>
                <td>{transaction.recipient_address}</td>
                <td>
                  {new Date(
                    transaction.timestamp / 1000000
                  ).toLocaleDateString()}
                </td>
              </tr>
            )
          )}
        </table>
      </div>
    </section>
  );
};
export default UserTransactions;
