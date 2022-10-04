import React, { useState } from "react";
import "../styles/pages/register/InvestorRegisterOptions.scss";
const InvestorRegisterOptions = () => {
  return (
    <section className="investorRegisterContainer">
      <input id="userInput" type="text" placeholder="Correo" />
      <input id="userInput" type="text" placeholder="Nombre" />
      <input id="userInput" type="text" placeholder="Apellidos" />
      <input
        id="userInput"
        type="password"
        placeholder="Contraseña"
      />
      <input
        className="lastInputItem"
        id="userInput"
        type="password"
        placeholder="Confirme su contraseña"
      />
    </section>
  );
};
export default InvestorRegisterOptions;
