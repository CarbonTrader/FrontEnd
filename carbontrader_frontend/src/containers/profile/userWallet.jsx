import React from "react";
import { useContext, useEffect } from "react";
import "../../styles/pages/home/userProfile/userWallet.scss";
import CreditItem from "../../components/profile/creditItem";
import { useNavigate } from "react-router-dom";
import { sendTransaction, getUserKeys } from "../../services/userService";

const UserWallet = (props) => {
  return (
    <section className="userWallet-mainContainer">
      <div className="userWallet-totalContainer">
        <div className="userWallet-totalContainer-circle">
          <h1>Total</h1>
          <p>{props.total}</p>
        </div>
        <p className="publicKeyTitle">Creditos actuales</p>
      </div>
      <div className="userWallet-creditsContainer">
        <div className="userWallet-creditsContainer-creditsList">
          {JSON.parse(localStorage.getItem("credits")).map((credit) => (
            <div className="CreditItemsContainer">
              <CreditItem name={credit} project={credit.project_id} public_key={props.pub_key} private_key = {props.priv_key} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserWallet;
