import React, { useState } from "react";
import "../styles/pages/signup/InvestorSignUpOptions.scss";
const InvestorSignUpOptions = () => {
  return (
    <section className="investorSignUpContainer">
      <input id="userInput" type="text" placeholder="Correo" />
      <input id="userInput" type="text" placeholder="Nombre" />
      <input id="userInput" type="text" placeholder="Apellidos" />
      <input
        id="userInput"
        type="password"
        placeholder="Contraseña"
      />
      <input
        id="userInput"
        type="password"
        placeholder="Confirme su contraseña"
      />
    </section>
  );
};
export default InvestorSignUpOptions;
