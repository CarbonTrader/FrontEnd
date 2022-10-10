import React, { useContext, useEffect } from "react";
import "../../styles/pages/home/projectList/MarketCredits.scss";
import MarketRow from "../../components/projects/MarketRow";
import { get_onSale_credits } from "../../services/projectService";

const MarketCredits = () => {
  return (
    <>
      <div class="transactions-container">
        <h1 className="Project-title"> Proyecto template</h1>
        <div class="transactions-container-background">
          <table className="UserMarket">
            <tr className="table-header">
              <th>Dueño</th>
              <th>Serial</th>
              <th>Precio</th>
              <th></th>
            </tr>
            {JSON.parse(localStorage.getItem("market")).map((transaction) => (
              <MarketRow
                user={transaction.owner_email}
                serial={transaction.carbontrader_serial}
                price={JSON.parse(
                  localStorage.getItem("currentProject")
                ).price.toFixed(3)}
              />
            ))}
          </table>
        </div>
      </div>
    </>
  );
};
export default MarketCredits;
