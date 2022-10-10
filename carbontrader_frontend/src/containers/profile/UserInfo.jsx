import React, { useState } from "react";
import "../../styles/pages/home/userProfile/userInfo.scss";
const UserInfo = (props) => {
  return (
    <section className="userProfileContainer">
      <div class="userProfile-box ">
      <div className="userProfile-info">
        <span><p className="userProfile-info-properties">Nombre:</p><p>{props.name}</p> </span>
        <span><p className="userProfile-info-properties">Corero Electrónico:</p><p>{props.email}</p> </span>
        <span className="userProfile-options"><a>Modificar contraseña</a></span>
        <span className="userProfile-options"><a>Eliminar Cuenta</a></span>
      </div>
      </div>
    </section>
  );
};
export default UserInfo;
