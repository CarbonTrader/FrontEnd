import React from "react";
import "../../../styles/pages/register/InvestorRegisterOptions.scss";

const InvestorRegisterOptions = (props) => {
  return (
    <section className="investorRegisterContainer">
      <input
        id="userInput"
        name="investor_name"
        type="text"
        placeholder="Nombre"
        onChange={(e) => props.setName(e.target.value)}
      />
      <input
        id="userInput"
        name="email"
        type="text"
        placeholder="Correo electrónico"
        onChange={(e) => props.setEmail(e.target.value)}
      />
      <input
        id="userInput"
        name="password"
        type="password"
        placeholder="Contraseña"
        onChange={(e) => props.setPassword(e.target.value)}
      />
    </section>
  );
};
export default InvestorRegisterOptions;
