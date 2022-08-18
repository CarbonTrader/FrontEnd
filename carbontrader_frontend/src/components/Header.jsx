import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/Header.scss";
import logo from "../assets/icons/CARBONTRADER-logo.svg";

const Header = (props) => {
  let currentItem = props.currentItem;
  const animateItem = (addId) => {
    const elementToRemoveClass = document.getElementById(currentItem);
    elementToRemoveClass.classList.remove("underline");
    const elementToAddClass = document.getElementById(addId);
    elementToAddClass.classList.add("underline");
    currentItem = addId;
  };

  return (
    <nav className="menu">
      <div className="menu__firstSection">
        <img src={logo} alt="" />
      </div>
      <div className="menu__secondSection">
        <ul className="menu__items">
          <li className="menu__item">
            <a onClick={() => animateItem("projectListItem")} href="/">
              Listado de Proyectos
            </a>
            <div id="projectListItem" className="underline"></div>
          </li>
          <li className="menu__item">
            <a onClick={() => animateItem("globalTransactionsItem")}>
              Transacciones globales
            </a>
            <div id="globalTransactionsItem"></div>
          </li>
          <li className="menu__item">
            <a onClick={() => animateItem("profileItem")}>Mi perfil</a>
            <div id="profileItem"></div>
          </li>
        </ul>
      </div>
    </nav>
  );

};

export default Header;
