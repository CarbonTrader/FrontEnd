import React, { useState } from "react";
import "../../styles/pages/home/projectList/MarketCredits.scss";
import MarketRow from "../../components/projects/MarketRow";
import { getUserKeys } from "../../services/userService";

const MarketCredits = () => {
  const [cont, setCont] = useState(0);
  let object = {
    public_key: "",
    private_key: "",
  };
  getUserKeys(localStorage.getItem("cp_email")).then((res) => {
    object.public_key = res.data.pub_key;
    object.private_key = res.data.priv_key;
  });
  return (
    <>
      <div className="transactions-container">
        <h1 className="Project-title">{JSON.parse(localStorage.getItem("currentProject")).name}</h1>
        <div className="transactions-container-background">
          <table className="UserMarket">
            <tr className="table-header">
              <th>Dueño</th>
              <th>Serial</th>
              <th>Precio</th>
              <th></th>
            </tr>
            {JSON.parse(localStorage.getItem("market")).map((transaction) => (
              <MarketRow
                keys={object}
                num={cont}
                project={JSON.parse(localStorage.getItem("currentProject")).id}
                user={
                  transaction.owner !== undefined
                    ? transaction.owner
                    : localStorage.getItem("cp_email")
                }
                serial={
                  transaction.owner !== undefined
                    ? transaction.serial
                    : transaction.carbontrader_serial
                }
                price={transaction.price}
              />
            ))}
          </table>
        </div>
      </div>
    </>
  );
};
export default MarketCredits;
