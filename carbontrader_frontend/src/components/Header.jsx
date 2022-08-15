import React, { useState, useContext } from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <nav className="menu">
      <div className="menu__firstSection">
        <h1 className="logo-firstSection">Carbon</h1>
        <h1 className="logo-secondSection">Trader</h1>
      </div>
      <div className="menu__secondSection">
        <ul className="menu__items">
          <li className="menu__item">
            <a href="/">Listado de Proyectos</a>
          </li>
          <li className="menu__item">
            <a href="/">Transacciones globales</a>
          </li>
          <li className="menu__item">
            <a href="/">Mi perfil</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
