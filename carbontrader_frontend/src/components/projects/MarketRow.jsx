import { React, useContext, useEffectF } from "react";
import AppContext from "../../context/AppContext";
const MarketRow = (props) => {
  const { state, changeCurrentProjectCheckout } = useContext(AppContext);
  const handleCheckout = () => {
    const request = {
      name: props.serial,
      recipient: props.recipient,
      sender: localStorage.getItem("email"),
    };
  };
  return (
    <tr>
      <td>{props.user}</td>
      <td>{props.serial}</td>
      <td>
        ${JSON.parse(localStorage.getItem("currentProject")).price.toFixed(3)}
      </td>
      <button onClick={() => handleCheckout()}>Comprar</button>
    </tr>
  );
};
export default MarketRow;
