import React, { useState } from "react";
import { deleteUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/home/userProfile/userInfo.scss";

const UserInfo = (props) => {
  const [toggle, setToggle] = useState(false);
  let navigate = useNavigate();

  const deleteAccount = () => {
    const resultado = window.confirm("¿Está seguro que eliminará su cuenta?");
    if (resultado === true) {
      deleteUser(localStorage.getItem("email")).then((res) => {
        localStorage.clear();
        navigate("/");
      });
    } else {
      window.alert("Pareces indeciso");
    }
  };

  return (
    <section className="userProfileContainer">
      <div className="userProfile-box ">
        <div className="userProfile-info">
          <span>
            <p className="userProfile-info-properties">Nombre:</p>
            {!toggle ? (
              <p>{props.name}</p>
            ) : (
              <input id="userInput" type="text" placeholder="Nombre" />
            )}
          </span>
          <span>
            <p className="userProfile-info-properties">Corero Electrónico:</p>
            {!toggle ? (
              <p>{props.email}</p>
            ) : (
              <input id="userInput" type="text" placeholder="Correo" />
            )}
          </span>
          <span className="userProfile-options" onClick={() => deleteAccount()}>
            <p>Eliminar Cuenta</p>
          </span>
          <span className="userProfile-options"></span>
        </div>
      </div>
    </section>
  );
};
export default UserInfo;
