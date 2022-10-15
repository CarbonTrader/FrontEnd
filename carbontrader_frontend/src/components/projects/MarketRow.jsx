import { React, useContext, useEffectF } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { exchange, getUserKeys } from "../../services/userService";
const MarketRow = (props) => {
  const handleCheckout = () => {
    const transaction = {
      serial: props.serial,
      recipient: localStorage.getItem("email"),
      sender_email: props.user,
      //project_id: props.project,
      private_key_sender: "",
      public_key_sender: "",
    };
    getUserKeys(props.user).then((res) => {
      transaction.private_key_sender = res.data.priv_key.toString();
      transaction.public_key_sender = res.data.pub_key.toString();
      exchange(transaction).then((response) => {
        console.log(transaction);
        alert("compra realizada conexito");
        window.location.reload();
      });
    });
  };
  return (
    <tr>
      <td>{props.user}</td>
      <td>{props.serial}</td>
      <td>${props.price}</td>
      <button onClick={() => handleCheckout()}>Comprar</button>
    </tr>
  );
};
export default MarketRow;
