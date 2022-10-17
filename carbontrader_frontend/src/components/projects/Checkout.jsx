import React, { useContext, useState, useEffect } from "react";
import "../../styles/pages/home/projectList/Checkout.scss";
import AppContext from "../../context/AppContext";
import {
  getUserKeys,
  many_exchange,
  getUser,
} from "../../services/userService";
import { get_onSale_credits } from "../../services/projectService";
import LoadingSpinner from "../LoadingSpinner";

const Checkout = () => {
  const { state, changeCurrentHomeTab } = useContext(AppContext);
  const [total, setTotal] = useState(0);
  const [priv_key, set_priv] = useState();
  const [pub_key, set_pub] = useState();
  const [quantity, setquantity] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const value = state.project.credits.filter(
    (credit) => credit.retire_date === null
  ).length;

  let transaction = {
    amount: quantity,
    carbon_trader_serial: " ",
    recipient_email: localStorage.getItem("email"),
    sender_email: localStorage.getItem("cp_email"),
    private_key_sender: "",
    public_key_sender: "",
  };

  const changePrice = (a) => {
    localStorage.setItem("quantity", a);
    const price = JSON.parse(
      localStorage.getItem("currentProject")
    ).credits[0].price.toFixed(3);
    setTotal(price * a);
  };

  const goToNextScene = () => {
    setIsLoading(true);
    const numa = parseInt(localStorage.getItem("quantity"));
    const numb = JSON.parse(localStorage.getItem("provider_credits")).length;
    if (localStorage.getItem("quantity") !== null) {
      if (numa <= numb) {
        transaction.cont = numa;
        getUser(localStorage.getItem("cp_email")).then((res) => {
          console.log(res);
          set_pub(res.data.wallet.public_key);
          set_priv(res.data.wallet.private_key);
          many_exchange(
            transaction,
            res.data.wallet.private_key,
            res.data.wallet.public_key
          ).then((response) => {
            alert("Compra realizada correctamente");
            setIsLoading(false);
            window.location.reload();
          });
        });
      } else {
        alert("cantidad de bonos insuficiente");
        setIsLoading(false);
      }
    } else {
      alert("Seleccione una cantidad de créditos");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    get_onSale_credits(
      JSON.parse(localStorage.getItem("currentProject")).id
    ).then((res) => {
      localStorage.setItem("market", JSON.stringify(res.data));
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="InfoCheckoutContainer">
      {isLoading && <LoadingSpinner />}
      <p className="firstText">¿Cuántos créditos?</p>
      <div className="Checkout-CreditsOptions">
        {value >= 3 ? (
          <>
            <div onClick={() => changePrice(2)}>2</div>
            <div onClick={() => changePrice(Math.ceil(value / 2))}>
              {Math.ceil(value / 2)}
            </div>
            <div onClick={() => changePrice(value)}>{value}</div>
          </>
        ) : value === 2 ? (
          <>
            <div onClick={() => changePrice(1)}>1</div>
            <div onClick={() => changePrice(2)}>2</div>
          </>
        ) : (
          <div onClick={() => changePrice(1)}>1</div>
        )}
      </div>
      <div className="Checkout-amoutContainer">
        <div className="Checkout-price">
          <p>Precio Unitario</p>
          <p>
            $
            {JSON.parse(
              localStorage.getItem("currentProject")
            ).credits[0].price.toFixed(3)}
          </p>
        </div>
        <hr />
        <div className="Checkout-total total-color">
          <p className="total-color">Total</p>
          <p className="total-color">${total.toFixed(3)}</p>
        </div>
      </div>
      <div className="Checkout-Button">
        <button onClick={() => goToNextScene()} disabled={isLoading}>
          Comprar créditos
        </button>
      </div>
      <div className="Checkout-Button">
        <button
          onClick={() => changeCurrentHomeTab("market")}
          disabled={isLoading}
        >
          {" "}
          Seleccionar seriales
        </button>
      </div>
    </section>
  );
};
export default Checkout;
