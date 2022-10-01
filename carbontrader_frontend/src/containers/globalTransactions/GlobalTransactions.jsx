import React from "react";
import "../../styles/pages/home/globalTransactions/GlobalTransactions.scss";
import TransactionRow from "../../components/globalTransactions/TransactionsRow";

const GlobalTransactions = () => {
  const transactions = [
    {
      hash:"ba7816bf8f01cfea414",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"88d4266fd4e6338df",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"36bbe50ed96841d10",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"bef57ec7f53a6d40be",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"36bbe50ed96841d10",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"bef57ec7f53a6d40be",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"36bbe50ed96841d10",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"bef57ec7f53a6d40be",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"36bbe50ed96841d10",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"bef57ec7f53a6d40be",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"36bbe50ed96841d10",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"bef57ec7f53a6d40be",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"36bbe50ed96841d10",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"bef57ec7f53a6d40be",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"36bbe50ed96841d10",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"bef57ec7f53a6d40be",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"36bbe50ed96841d10",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
    {
      hash:"bef57ec7f53a6d40be",
      transaction: "Compra",
      serial: "qweqwe123",
      maker: "bcvbcvbdfgdfg",
      destiny: "asdasdasd",
      date: "12/12/12",
    },
  ];

  return (
    <>
      <div class="transactions-container">
        <div class="transactions-container-background">
          <table>
            <tr className="table-header">
              <th>Hash</th>
              <th>Tipo de transacción</th>
              <th>Serial</th>
              <th>Fuente</th>
              <th>Destino</th>
              <th>Fecha</th>
            </tr>
            {transactions.map((transaction) => (
              <TransactionRow
                hash={transaction.hash}
                typeTransaction={transaction.transaction}
                serial={transaction.serial}
                maker={transaction.maker}
                destiny={transaction.destiny}
                date={transaction.date}
              />
            ))}
          </table>
        </div>
      </div>
    </>
  );
};
export default GlobalTransactions;
