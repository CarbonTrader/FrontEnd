import React, { useState } from "react";
const CreditProviderSignUpOptions = () => {
  return (
    <section className="investorSignUpContainer">
      <input id="userInput" type="text" placeholder="Correo" />
      <input id="userInput" type="text" placeholder="Nombre" />
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
export default CreditProviderSignUpOptions;
