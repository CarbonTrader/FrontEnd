import React, { useState } from "react";
const CreditProviderRegisterOptions = () => {
  return (
    <section className="investorRegisterContainer">
      <input id="userInput" type="text" placeholder="Ingrese su correo" />
      <input id="userInput" type="text" placeholder="Ingrese su nombre" />
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
export default CreditProviderRegisterOptions;
