import { Redirect } from "react-router-dom";
import "../styles/pages/login/Login.scss";
import "../styles/global.scss";
import AppContext from "../context/AppContext";
import { useContext } from "react";

const Login = () => {
  const goToHome = () => {
    window.location.assign("/SignUp");
  };
  return (
    <main className="globalContainer">
      <div className="mainRegisterContainer">
        <form>
          <div className="form-mainContainer">
            <h1>CarbonTrader</h1>
            {/* <p>Bienvenido a CarbonTrader</p> */}
            <div className="inputsContainer">
              <input
                id="userInput"
                type="text"
                placeholder="Correo"
              />
              <input
                id="passwordInput"
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <div className="buttonLoginContainer">
              <button className="loginButton" onClick={() => goToHome()}>
                <a href="/Home">Ingresar</a>
              </button>

              <div className="RegisterOptionContainer">
                <span>
                  <p>¿No estas registrado?</p>
                  <a href="/SignUp">Registrate aquí</a>
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
