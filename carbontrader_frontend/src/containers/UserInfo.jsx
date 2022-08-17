import React, { useState } from "react";
import "../styles/userInfo.scss";
import Img from "../assets/img/perfil.jpg";
const UserInfo = (props) => {
  return (
    <section className="userProfileContainer">
      <div class="userProfile-box ">
      <div className="userProfile-info">
        <span><p className="userProfile-info-properties">Nombre:</p><p>Enrique Gutiérrez</p> </span>
        <span><p className="userProfile-info-properties">Corero Electrónico:</p><p>example@jgmail.com</p> </span>
        <span className="userProfile-options"><a>Modificar contraseña</a></span>
        <span className="userProfile-options"><a>Eliminar Cuenta</a></span>
      </div>
      </div>
    </section>
  );
};
export default UserInfo;
