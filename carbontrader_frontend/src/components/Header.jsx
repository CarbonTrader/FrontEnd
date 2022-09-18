import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/pages/home/Header.scss";
import logo from "../assets/icons/CARBONTRADER-logo.svg";
import hamburger from "../assets/icons/header/hamburger-menu.svg"

const Header = () => {
  const { state, changeCurrentHomeTab } = useContext(AppContext);

  return (
    <nav className="menu">
      <div className="menu__firstSection">
        <a href="/"><img src={logo} alt=""/></a>
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
        </ul>
      </div>
      <div className="menu__hamburgerOption">
        <img src={hamburger} alt="" />
      </div>
    </nav>
  );
};
export default Header;
