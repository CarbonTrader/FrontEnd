import React, { useContext, useState, useEffect } from "react";
import "../../styles/pages/home/projectList/Checkout.scss";
import AppContext from "../../context/AppContext";
import { getUserKeys } from "../../services/userService";
import { get_onSale_credits } from "../../services/projectService";
import { get_credit_provider } from "../../services/projectService";

const Checkout = () => {
  const { state, changeCurrentHomeTab } = useContext(AppContext);
  const [total, setTotal] = useState(0);
  let object = {
    trader_public_key: "a",
    trader_private_key: "a",
    recipent_private_key: "a",
    recipent_public_key: "a",
    amount: 0,
  };
  const changePrice = (a) => {
    localStorage.setItem("quantity", a);
    const price = JSON.parse(
      localStorage.getItem("currentProject")
    ).price.toFixed(3);
    setTotal(price * a);
  };
  const goToNextScene = () => {
    getUserKeys(localStorage.getItem("email")).then((res) => {
      object.trader_public_key = res.data.pub_key;
      object.trader_private_key = res.data.priv_key;
    });
    get_credit_provider(
      JSON.parse(localStorage.getItem("currentProject")).id
    ).then((res) => {
      getUserKeys(res).then((response) => {
        object.recipent_public_key = response.data.pub_key;
        object.recipent_private_key = response.data.priv_key;
        object.amount = localStorage.getItem("quantity");
        console.log(object);
      });
    });
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
          <p>
            $
            {JSON.parse(localStorage.getItem("currentProject")).price.toFixed(
              3
            )}
          </p>
        </div>
        <hr />
        <div className="Checkout-total total-color">
          <p className="total-color">Total</p>
          <p className="total-color">${total.toFixed(3)}</p>
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
