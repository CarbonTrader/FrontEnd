import React from "react";
import  { useContext, useEffect } from "react";
import "../../styles/pages/home/userProfile/userWallet.scss";
import CreditItem from "../../components/profile/creditItem";

const UserWallet = (props) => {
  useEffect(() => {
    console.log(props.credits);
  }, []);

  return (
    <section className="userWallet-mainContainer">
      <div className="userWallet-totalContainer">
        <div className="userWallet-totalContainer-circle">
          <h1>Total</h1>
          <p>{props.total}</p>
        </div>
        <p className="publicKeyTitle">Llave Pública</p>
        <p className="publicKeyContent">{props.credits[0]}</p>
      </div>
      <div className="userWallet-creditsContainer">
        <div className="userWallet-creditsContainer-creditsList">
          
        </div>
      </div>
    </section>
  );
};

export default UserWallet;
