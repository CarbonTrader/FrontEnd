import React from "react";
import "../../styles/pages/home/market/UserMarket.scss";
import UserMarketRow from "../../components/market/UserMarketRow";

const UserMarket = () => {
  const transactions = [
    {
      usuario: "ba7816bf8f01cfea414",
      bonos: "Compra",
    },
    {
      usuario: "ba7816bf8f01cfea414",
      bonos: "Compra",
    },
    {
      usuario: "ba7816bf8f01cfea414",
      bonos: "Compra",
    },
    {
      usuario: "ba7816bf8f01cfea414",
      bonos: "Compra",
    },
    {
      usuario: "ba7816bf8f01cfea414",
      bonos: "Compra",
    },
    {
      usuario: "ba7816bf8f01cfea414",
      bonos: "Compra",
    },
    {
      usuario: "ba7816bf8f01cfea414",
      bonos: "Compra",
    },
    {
      usuario: "ba7816bf8f01cfea414",
      bonos: "Compra",
    },
  ];

  return (
    <>
      <div class="transactions-container">
        <div class="transactions-container-background">
          <table>
            <tr className="table-header">
              <th>Correo de Usuario</th>
              <th>Cantidad de bonos</th>
            </tr>
            {transactions.map((transaction) => (
              <UserMarketRow
                email={transaction.usuario}
                amount={transaction.bonos}
              />
            ))}
          </table>
        </div>
      </div>
    </>
  );
};
export default UserMarket;
