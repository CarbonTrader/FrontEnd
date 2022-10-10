import React from "react";
import { useEffect, useState, useContext } from "react";
import AppContext from "../../context/AppContext";
import UserContext from "../../context/UserContext";
import "../../styles/pages/home/userProfile/UserProfile.scss";
import UserInfo from "./UserInfo";
import UserTransactions from "./userTransactions";
import UserWallet from "./userWallet";
import Img from "../../assets/img/perfil.jpg";
import {
  getUserCredits,
  getUserTransactions,
  getUser,
} from "../../services/userService";

const UserProfile = () => {
  const { state, changeCurrentItem } = useContext(AppContext);
  const { user, changeUser } = useContext(UserContext);
  const { amount, setAmount } = useState(0);
  let arrayOfTransactions = [];
  let auxCredits = [];
  let u = {};
  useEffect(() => {
    changeUser();
    getUser(localStorage.getItem("email")).then((res) => {
      u = res.data;
      console.log(u);
    });
     getUserTransactions(localStorage.getItem("email")).then((res) => {
      arrayOfTransactions = res.data;
      localStorage.setItem("transactions",arrayOfTransactions );

    });

    /*getUserCredits(localStorage.getItem("email")).then((res) => {
      auxCredits = res.data;
      localStorage.setItem("amount", auxCredits.length);
    });*/
  }, []);

  const addSelectionItemClass = (id) => {
    const currentTab = state.currentItem;
    const itemToRemoveClass = document.getElementById(currentTab);
    itemToRemoveClass.classList.remove("selection");

    const itemToAddClass = document.getElementById(id);
    itemToAddClass.classList.add("selection");
    changeCurrentItem(id);
  };

  return (
    <>
      <section className="mainWalletContainer">
        <div className="wallet-headerSection">
          <div className="wallet-headerSection-userHederSection">
            <img src={Img} alt="" />
            <div className="wallet-headerSection-userHederSection-DataContainer">
              <h1>{user.name}</h1>
              <p>{user.role === "INVESTOR" && "Comerciante"}</p>
            </div>
          </div>
          <div className="wallet-optionsSection">
            <div
              id="profile"
              className="wallet-optionsSection-options selection"
              onClick={() => addSelectionItemClass("profile")}
            >
              <a>Perfil</a>
            </div>
            <div
              id="transactions"
              className="wallet-optionsSection-options"
              onClick={() => addSelectionItemClass("transactions")}
            >
              <a>Transacciones</a>
            </div>
            <div
              id="wallet"
              className="wallet-optionsSection-options"
              onClick={() => addSelectionItemClass("wallet")}
            >
              <a>Mi billetera</a>
            </div>
          </div>
        </div>
        <div className="wallet-contentSection">
          {state.currentItem === "profile" ? (
            <UserInfo name={user.name} email={user.email} />
          ) : state.currentItem === "transactions" ? (
            <UserTransactions transactions={arrayOfTransactions} />
          ) : (
            <UserWallet
              credits={localStorage.getItem("transactions")}
              total={localStorage.getItem("amount")}
            />
          )}
        </div>
      </section>
    </>
  );
};
export default UserProfile;
