import React from "react";
import { useEffect, useState, useContext } from "react";
import AppContext from "../../context/AppContext";
import "../../styles/pages/home/userProfile/UserProfile.scss";
import UserInfo from "./UserInfo";
import UserTransactions from "./userTransactions";
import UserWallet from "./userWallet";
import useGetUser from "../../hooks/useUserState";
import Img from "../../assets/img/perfil.jpg";

const UserProfile = () => {
  const { state, changeCurrentItem } = useContext(AppContext);
  let sectionToShow;
  const user = useGetUser();
  const arrayOfTransactions = [
    {
      buyer_pk: "64f6796080e9d292...",
      carbontrader_serial: "1",
      hash: "1",
      seller_pk: "b99bb445c1721382...",
      timestamp: "111",
      transaction_type: "Compra",
    },
    {
      buyer_pk: "64f6796080e9d292...",
      carbontrader_serial: "1",
      hash: "1",
      seller_pk: "0592b0b489e78ba1...",
      timestamp: "222",
      transaction_type: "Compra",
    },
    {
      buyer_pk: "ecf80ad14629dba8...",
      carbontrader_serial: "1",
      hash: "1",
      seller_pk: "64f6796080e9d292...",
      timestamp: "333",
      transaction_type: "Venta",
    },
  ];
  const arrayOfCredtis = [
    {
      proyect_name: "Proyecto Delta",
      credits: 20,
    },
    {
      proyect_name: "Proyecto Alfa",
      credits: 40,
    },
    {
      proyect_name: "Proyecto Omega",
      credits: 40,
    },
    {
      proyect_name: "Proyecto Azul",
      credits: 20,
    },
  ];

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
              <h1>Enrique Gutiérrez</h1>
              <p>Comercializador</p>
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
              <a>Mi Billetera</a>
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
              credits={arrayOfCredtis}
              total={arrayOfCredtis.reduce(
                (a, b) => a + (b["credits"] || 0),
                0
              )}
            />
          )}
        </div>
      </section>
    </>
  );
};
export default UserProfile;
