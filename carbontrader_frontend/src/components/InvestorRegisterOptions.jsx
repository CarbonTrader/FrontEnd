import React, { useState } from "react";
import "../styles/pages/register/InvestorRegisterOptions.scss";
const InvestorRegisterOptions = () => {
  return (
    <section className="investorRegisterContainer">
      <input id="userInput" type="text" placeholder="Ingrese su correo" />
      <input id="userInput" type="text" placeholder="Ingrese su nombre" />
      <input id="userInput" type="text" placeholder="Ingrese su apellido" />
      <input
        id="userInput"
        type="password"
        placeholder="Ingrese su contraseña"
      />
      <input
        id="userInput"
        type="password"
        placeholder="Confirme su contraseña"
      />
    </section>
  );
};
export default InvestorRegisterOptions;
