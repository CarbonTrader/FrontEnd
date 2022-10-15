import React, { useState } from "react";
import "../../styles/pages/home/userProfile/creditItem.scss";
import { useNavigate } from "react-router-dom";
import {
  sendTransaction,
  getUserKeys,
  retire,
  sale_credits,
} from "../../services/userService";
import {
  get_credit_provider_email,
  get_project,
} from "../../services/CreditService";

const CreditItem = (props) => {
  let transaction = {
    serial: props.name,
    recipient: " ",
    sender_email: localStorage.getItem("email"),
    private_key_sender: props.private_key,
    public_key_sender: props.public_key,
  };
  const sale_currentCredit = () => {
    get_project(props.name).then((response) => {
      console.log(response);
      sale_credits(
        localStorage.getItem("email"),
        props.name,
        response.project_id
      ).then((res) => {
        alert("Credito puesto en venta con éxito")
        window.location.reload();
      });
    });
  };
  const handleClick = () => {
    get_credit_provider_email(props.name).then((res) => {
      //transaction.sender_email = res;
      //console.log(transaction);
      retire(transaction).then((response) => {
        alert("credito retirado con exito");
        window.location.reload();
      });
    });
  };
  return (
    <section className="creditContainer">
      <div className="infoCreditContainer">
        <h1>{props.name}</h1>
        <p>{props.amount} </p>
      </div>
      <div className="buttonsContainer">
        <button onClick={() => handleClick()}> Retirar</button>
        <button onClick={() => sale_currentCredit()}> Vender</button>
      </div>
    </section>
  );
};
export default CreditItem;
