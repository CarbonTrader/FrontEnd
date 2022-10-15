import React, { useContext, useState, useEffect } from "react";
import "../../styles/pages/home/projectList/Checkout.scss";
import AppContext from "../../context/AppContext";
import {
  getUserKeys,
  many_exchange,
  getUser,
} from "../../services/userService";
import { get_onSale_credits } from "../../services/projectService";

const Checkout = () => {
  const { state, changeCurrentHomeTab } = useContext(AppContext);
  const [total, setTotal] = useState(0);
  const [priv_key, set_priv] = useState();
  const [pub_key, set_pub] = useState();

  let transaction = {
    cont: 3,
    carbon_trader_serial: " ",
    recipient_email: localStorage.getItem("email"),
    sender_email: localStorage.getItem("cp_email"),
    private_key_sender: "",
    public_key_sender: "",
  };
  const changePrice = (a) => {
    localStorage.setItem("quantity", parseInt(a));
    const price = JSON.parse(
      localStorage.getItem("currentProject")
    ).price.toFixed(3);
    setTotal(price * a);
  };
  const goToNextScene = () => {
    const numa = parseInt(localStorage.getItem("quantity"));
    const numb = JSON.parse(localStorage.getItem("provider_credits")).length;
    if (numa <= numb) {
      transaction.cont = numa
      getUser(localStorage.getItem("cp_email")).then((res) => {
        set_pub(res.data.wallet.public_key);
        set_priv(res.data.wallet.private_key);
        many_exchange(transaction, priv_key, pub_key).then((response) => {
          console.log(response);
        });
      });
    } else {
      alert("cantidad de bonos insuficiente");
    }
  };
  useEffect(() => {
    get_onSale_credits(
      JSON.parse(localStorage.getItem("currentProject")).id
    ).then((res) => {
      localStorage.setItem("market", JSON.stringify(res.data));
    });
  }, []);
  return (
    <section className="InfoCheckoutContainer">
      <p className="firstText">¿Cuántos créditos?</p>
      <div className="Checkout-CreditsOptions">
        <div onClick={() => changePrice(2)}>2</div>
        <div onClick={() => changePrice(4)}>4</div>
        <div onClick={() => changePrice(6)}>6</div>
      </div>
      <div className="Checkout-amoutContainer">
        <div className="Checkout-price">
          <p>Precio Unitario</p>
          <p>${JSON.parse(localStorage.getItem("currentProject")).price}</p>
        </div>
        <hr />
        <div className="Checkout-total total-color">
          <p className="total-color">Total</p>
          <p className="total-color">${total}</p>
        </div>
      </div>
      <div className="Checkout-Button">
        <button onClick={() => goToNextScene()}> Comprar créditos</button>
      </div>
      <div className="Checkout-Button">
        <button onClick={() => changeCurrentHomeTab("market")}>
          {" "}
          Seleccionar seriales
        </button>
      </div>
    </section>
  );
};
export default Checkout;
