import React, { useState } from "react";
import { delete_user } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/home/userProfile/userInfo.scss";
const UserInfo = (props) => {
  const [toogle, setTogle] = useState(false);
  let navigate = useNavigate();

  const delete_account = () => {
    var resultado = window.confirm("¿Está seguro que eliminará su cuenta?");
    if (resultado === true) {
      delete_user(localStorage.getItem("email")).then((res) => {
        localStorage.clear();
        navigate("/");
      });
    } else {
      window.alert("Pareces indeciso");
    }
  };

  return (
    <section className="userProfileContainer">
      <div class="userProfile-box ">
        <div className="userProfile-info">
          <span>
            <p className="userProfile-info-properties">Nombre:</p>
            {toogle == false ? (
              <p>{props.name}</p>
            ) : (
              <input id="userInput" type="text" placeholder="Nombre" />
            )}
          </span>
          <span>
            <p className="userProfile-info-properties">Corero Electrónico:</p>
            {toogle == false ? (
              <p>{props.email}</p>
            ) : (
              <input id="userInput" type="text" placeholder="Correo" />
            )}
          </span>
          <span
            className="userProfile-options"
            onClick={() => delete_account()}
          >
            <p>Eliminar Cuenta</p>
          </span>
          <span className="userProfile-options"></span>
        </div>
      </div>
    </section>
  );
};
export default UserInfo;
