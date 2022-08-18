import React, { useContext, useState } from "react";
import "../../styles/pages/home/proyectList/Checkout.scss";
const Checkout = () => {
  const goToNextScene = () => {
    window.location.assign("/Home");
  };

  return (
    <section className="InfoCheckoutContainer">
      <p className="firstText">¿Cuántos créditos?</p>
      <div className="Checkout-CreditsOptions">
        <div>10</div>
        <div>50</div>
        <div>100</div>
      </div>
      <p>O ingrese un monto</p>
      <div className="Checkout-valueContainer">
        <input type="number" />
      </div>
      <div className="Checkout-amoutContainer">
        <div className="Checkout-price">
          <p>Precio Unitario</p>
          <p>$50.00</p>
        </div>
        <hr />
        <div className="Checkout-total total-color">
          <p className="total-color">Total</p>
          <p className="total-color">$500.00</p>
        </div>
      </div>
      <div className="Checkout-Button">
        <button onClick={() => goToNextScene()}> Comprar créditos</button>
      </div>
    </section>
  );
};
export default Checkout;
