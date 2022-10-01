import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import "../styles/pages/home/MobileHeader.scss";

const MobileHeader = () => {
  const { state, changeHeaderType, changeCurrentHomeTab } =
    useContext(AppContext);
  //const [toggle, setToggle] = useState(false);
  return (
    <section className="headerMobileContainer">
      <ul>
        <li onClick={() => changeCurrentHomeTab("project")}>
          Listado de proyectos
        </li>
        <li onClick={() =>  changeCurrentHomeTab("transactions")}>
          Transacciones globales
        </li>
        <li onClick={() =>  changeCurrentHomeTab("market")}>
          Comercio
        </li>
        <li onClick={() =>  changeCurrentHomeTab("profile")}>Mi perfil</li>
      </ul>
    </section>
  );
};
export default MobileHeader;
