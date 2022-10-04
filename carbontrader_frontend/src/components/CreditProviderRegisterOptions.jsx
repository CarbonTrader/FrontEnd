import React, { useState } from "react";
const CreditProviderRegisterOptions = (props) => {
  return (
    <section className="investorRegisterContainer">
      <input id="userInput" name="provider_name" type="text" placeholder="Nombre del proveedor" onChange={(e) => props.setName(e.target.value)} />
      <input id="userInput" name="email" type="text" placeholder="Correo electrónico" onChange={(e) => props.setEmail(e.target.value)} />
      <input
        id="userInput"
        name="password"
        type="password"
        placeholder="Contraseña"
        onChange={(e) => props.setPassword(e.target.value)}
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
export default CreditProviderRegisterOptions;
