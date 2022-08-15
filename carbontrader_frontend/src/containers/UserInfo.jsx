import React, { useState } from "react";
import "../styles/userInfo.scss";
import Img from "../assets/img/perfil.jpg";
const UserInfo = (props) => {
  return (
    <section className="userProfileContainer">
      <div class="userProfile-box ">
        <img class="userProfile-img" src={Img} alt="" />
        <div class="userProfile-background">
          <div className="userProfile-rolContainer">
            <h1>Comprador</h1>
          </div>
        </div>
        <article>
          <h3 class="userProfile-name">{props.name}</h3>
          <p>{props.email}</p>
        </article>
      </div>
    </section>
  );
};
export default UserInfo;