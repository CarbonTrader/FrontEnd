import React from "react";
import { useAppContext } from "../../../context/AppContext";
import "../../../styles/pages/home/Header.scss";
import hamburger from "../../../assets/icons/hamburger-menu.svg";
import logo from "../../../assets/icons/CARBONTRADER-logo.svg";

const Header = () => {
  const { state, changeCurrentHomeTab,changeHeaderType } = useAppContext();
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="menu">
    <div className="menu__firstSection">
      <a href="/">
        <img src={logo} alt="" />
      </a>
    </div>
    <div className="menu__secondSection">
      <ul className="menu__items">
        <li className="menu__item">
          <a onClick={() => changeCurrentHomeTab("project")} href="/Home">
            Listado de Proyectos
          </a>
          <div
            id="projectListItem"
            className={state.currentHomeTab === "project" ? "underline" : ""}
          ></div>
        </li>
        <li className="menu__item">
          <a onClick={() => changeCurrentHomeTab("transactions")}>
            Transacciones globales
          </a>
          <div
            id="globalTransactionsItem"
            className={
              state.currentHomeTab === "transactions" ? "underline" : ""
            }
          ></div>
        </li>
        <li className="menu__item">
          <a onClick={() => changeCurrentHomeTab("profile")}>Mi perfil</a>
          <div
            id="profileItem"
            className={state.currentHomeTab === "profile" ? "underline" : ""}
          ></div>
        </li>
        <li className="menu__item">
          <a onClick={() => logOut()}>Salir</a>
          <div
            id="profileItem"
            className={state.currentHomeTab === "profile" ? "underline" : ""}
          ></div>
        </li>
      </ul>
    </div>
    <div className="menu__hamburgerOption" onClick={() => changeHeaderType()}>
      <img src={hamburger} alt="" />
    </div>
  </nav>
  );
};
export default Header;
