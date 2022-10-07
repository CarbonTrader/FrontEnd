import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../styles/pages/login/Login.scss";
import "../styles/global.scss";
import { logInWithEmailAndPassword } from "../services/userService";
import AppContext from "../context/AppContext";

const Login = () => {
  const { user, changeEmail, changePassword, changeToken } =
    useContext(UserContext);
  let navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(user.email, user.password).then((response) => {
      if (response.data.status_code === undefined){
        console.log("entra");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        if (response.data.role !== "INVESTOR")
          localStorage.setItem("uuid", response.data.uuid);
        changeToken();
        navigate("/Home");
      }else{
        alert("Error al ingresar")
      }
    });
  };

  useEffect(() => {
    changeToken();
    if (window.localStorage.getItem("token") !== null) navigate("/Home");
  }, []);

  return (
    <main className="globalContainer">
      <div className="mainRegisterContainer">
        <form>
          <div className="form-mainContainer">
            <h1>Ingreso</h1>
            <p>Bienvenido a CarbonTrader</p>
            <div className="inputsContainer">
              <input
                id="userInput"
                type="text"
                onChange={(e) => changeEmail(e.target.value)}
                placeholder="Ingrese su correo"
              />
              <input
                id="passwordInput"
                type="password"
                onChange={(e) => changePassword(e.target.value)}
                placeholder="Ingrese su contraseña"
              />
            </div>
            <div className="buttonLoginContainer">
              <button
                type="submit"
                className="loginButton"
                onClick={handleSignIn}
              >
                <a href="/Home">Ingresar</a>
              </button>

              <div className="RegisterOptionContainer">
                <span>
                  <p>¿No estas registrado?</p>
                  <a href="/Register">Registrate aquí</a>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
