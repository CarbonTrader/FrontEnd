import { React, useContext, useEffectF } from "react";
import AppContext from "../../context/AppContext";

const UserMarketRow = (props) => {
  const {state,changeCurrentProjectCheckout} = useContext(AppContext);
  const handleCheckout = () => {
    const project = {
      name: props.project,
      bonds: props.availableBonds,
      price: props.price,
    };
    changeCurrentProjectCheckout(project);
  };
  return (
    <tr>
      <td>{props.user}</td>
      <td>{props.project}</td>
      <td>${props.price.toFixed(2)}</td>
      <td>{props.availableBonds}</td>
      <button onClick={() => handleCheckout()}>Comprar</button>
    </tr>
  );
};
export default UserMarketRow;
