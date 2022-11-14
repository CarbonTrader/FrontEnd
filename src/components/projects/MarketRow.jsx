const MarketRow = (props) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (props.price === "") {
      getProject(props.serial).then((res) => {
        setPrice(res.price);
      });
    }
  }, []);

  const handleCheckout = () => {
    const transaction = {
      serial: props.serial,
      recipient: localStorage.getItem("email"),
      sender_email: props.user,
      private_key_sender: "",
      public_key_sender: "",
    };
    getUserKeys(props.user).then((res) => {
      transaction.private_key_sender = res.data.priv_key.toString();
      transaction.public_key_sender = res.data.pub_key.toString();
      exchange(transaction).then((response) => {
        alert("compra realizada conexito");
        window.location.reload();
      });
    });
  };
  return (
      <table>
      <tbody>
      <tr>
        <td>{props.user}</td>
        <td>{props.serial}</td>
        <td>${props.price === "" ? price.toFixed(3) : props.price.toFixed(3)}</td>
        <td><button onClick={() => handleCheckout()}>Comprar</button></td>

      </tr>
      </tbody>
      </table>

);
};
import { useState } from "react";
import { React, useEffect } from "react";
import { getProject } from "../../services/CreditService";

import { exchange, getUserKeys } from "../../services/userService";
export default MarketRow;
