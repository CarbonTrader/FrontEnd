import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../styles/pages/login/Login.scss";
import "../styles/global.scss";
import { logInWithEmailAndPassword } from "../services/userService";

const Login = () => {
  const { user, changeEmail, changePassword, changeToken } =
    useContext(UserContext);
  let navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(user.email, user.password).then((res) => {
      const token = res._tokenResponse.idToken;
      localStorage.setItem("token", token);
      changeToken();
      navigate("/Home");
    });
  };

  useEffect(() => {
    changeToken();
    const isAuth = !!localStorage.getItem("token");
    if (isAuth) navigate("/Home");
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
