import React from "react";
import "../../styles/pages/home/market/UserMarket.scss";
import UserMarketRow from "../../components/market/UserMarketRow";

const UserMarket = () => {
  const transactions = [
    {
      user: "Juan Pérez",
      project: "Alfa",
      price: 200.0,
      bonds: 17,
    },
    {
      user: "Juan Pérez",
      project: "Beta",
      price: 200.0,
      bonds: 17,
    },
    {
      user: "Juan Pérez",
      project: "Delta",
      price: 200.0,
      bonds: 17,
    },
    {
      user: "Juan Pérez",
      project: "Omega",
      price: 200.0,
      bonds: 17,
    },
    {
      user: "Juan Pérez",
      project: "Gamma",
      price: 200.0,
      bonds: 17,
    },
    {
      user: "Juan Pérez",
      project: "Alfa",
      price: 200.0,
      bonds: 17,
    },
    {
      user: "Juan Pérez",
      project: "Alfa",
      price: 200.0,
      bonds: 17,
    },
    {
      user: "Juan Pérez",
      project: "Theta",
      price: 200.0,
      bonds: 17,
    },
    {
      user: "Juan Pérez",
      project: "Epsilon",
      price: 200.0,
      bonds: 17,
    },
    {
      user: "Juan Pérez",
      project: "Rio",
      price: 200.0,
      bonds: 17,
    },
    {
      user: "Juan Pérez",
      project: "Rio",
      price: 200.0,
      bonds: 17,
    },
    {
      user: "Juan Pérez",
      project: "Rio",
      price: 200.0,
      bonds: 17,
    },
  ];

  return (
    <>
      <div class="transactions-container">
        <div class="transactions-container-background">
          <table className="UserMarket">
            <tr className="table-header">
              <th>Usuario</th>
              <th>Proyecto</th>
              <th>Precio</th>
              <th>Bonos disponibles</th>
              <th></th>
            </tr>
            {transactions.map((transaction) => (
              <UserMarketRow
                user={transaction.user}
                project={transaction.project}
                price={transaction.price}
                availableBonds={transaction.bonds}
              />
            ))}
          </table>
        </div>
      </div>
    </>
  );
};
export default UserMarket;
