import React, { useState } from "react";
import "../styles/pages/register/InvestorRegisterOptions.scss";
const InvestorRegisterOptions = (props) => {
  return (
    <section className="investorRegisterContainer">
      <input id="userInput" type="text" placeholder="Correo" onChange={(e) => props.setEmail(e.target.value)} />
      <input id="userInput" type="text" placeholder="Nombre" onChange={(e) => props.setName(e.target.value)} />
      <input
        id="userInput"
        name="password"
        type="password"
        placeholder="Contraseña"
        onChange={(e) => props.setPassword(e.target.value)}
      />
      <input
        className="lastInputItem"
        id="userInput"
        name="password_confirmation"
        type="password"
        placeholder="Confirme su contraseña"
      />
    </section>
  );
};
export default InvestorRegisterOptions;
