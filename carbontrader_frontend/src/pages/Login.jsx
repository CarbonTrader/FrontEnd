import React, { useCallback, useContext } from "react";
import { Redirect } from "react-router-dom";
import "../styles/pages/login/Login.scss";
import "../styles/global.scss";
import firebase from "firebase"

const Login = () => {
  const goToHome = () => {
    window.location.assign("/Register");
  };

  const handleSignIn = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .signInWithUserCredential(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <main className="globalContainer">
      <div className="mainRegisterContainer">
        <form onSubmit={handleSignIn}>
          <div className="form-mainContainer">
            <h1>Ingreso</h1>
            <p>Bienvenido a CarbonTrader</p>
            <div className="inputsContainer">
              <input
                id="userInput"
                type="text"
                placeholder="Ingrese su correo"
              />
              <input
                id="passwordInput"
                type="password"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <div className="buttonLoginContainer">
              <button className="loginButton" onClick={() => goToHome()}>
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
