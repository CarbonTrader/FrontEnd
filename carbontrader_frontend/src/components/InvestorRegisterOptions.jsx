import React, { useState } from "react";
import "../styles/pages/register/InvestorRegisterOptions.scss";
const InvestorRegisterOptions = () => {
  return (
    <section className="investorRegisterContainer">
      <input id="userInput" name="investor_name" type="text" placeholder="Nombre" />
      <input id="userInput" name="last_name" type="text" placeholder="Apellidos" />
      <input id="userInput" name="email" type="text" placeholder="Correo electrónico" />
      <input
        id="userInput"
        name="password"
        type="password"
        placeholder="Contraseña"
      />
      <input
        id="userInput"
        name="password_confirmation"
        type="password"
        placeholder="Confirme su contraseña"
      />
    </section>
  );
};
export default InvestorRegisterOptions;
