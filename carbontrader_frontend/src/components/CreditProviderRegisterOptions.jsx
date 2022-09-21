import React, { useState } from "react";
const CreditProviderRegisterOptions = () => {
  return (
    <section className="investorRegisterContainer">
      <input id="userInput" name="provider_name" type="text" placeholder="Nombre del proveedor" />
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
export default CreditProviderRegisterOptions;
