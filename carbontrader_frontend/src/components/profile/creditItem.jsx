import React, { useState } from "react";
import "../../styles/pages/home/userProfile/creditItem.scss";
const CreditItem = (props) => {
  return (
    <section className="creditContainer">
      <div className="infoCreditContainer">
        <h1>{props.name}</h1>
        <p>{props.amount} créditos</p>
      </div>
      <div className="buttonsContainer">
        <button> Retirar</button>
        <button> Vender</button>
      </div>
    </section>
  );
};
export default CreditItem;
