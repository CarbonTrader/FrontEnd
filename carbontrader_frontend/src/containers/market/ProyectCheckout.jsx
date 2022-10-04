import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import "../../styles/pages/home/market/ProyectCheckout.scss";
const ProyectCheckout = () => {
  const { state } = useContext(AppContext);
  const goToNextScene = () => {
    window.location.assign("/Home");
  };
  return (
    <section className="InfoProjectCheckoutContainer">
      <h1>Proyecto {state.currentProyectCheckout.name}</h1>
      <p>Créditos disponibles</p>
      <span>{state.currentProyectCheckout.bonds}</span>
      <p>Ingrese un monto</p>
      <div className="Checkout-valueContainer">
        <input type="number" />
      </div>
      <div className="Checkout-amoutContainer">
        <div className="Checkout-price">
          <p className="left">Precio Unitario</p>
          <p className="right">${state.currentProyectCheckout.price.toFixed(2)}</p>
        </div>
        <hr />
        <div className="Checkout-total total-color">
          <p className="total-color left">Total</p>
          <p className="total-color right">$500.00</p>
        </div>
      </div>
      <div className="Checkout-Button">
        <button onClick={() => goToNextScene()}> Comprar créditos</button>
      </div>
    </section>
  );
};
export default ProyectCheckout;
