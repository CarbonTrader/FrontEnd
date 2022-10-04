import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/pages/register/Register.scss";
import "../styles/global.scss";
import InvestorRegisterOptions from "../components/InvestorRegisterOptions";

const Register = () => {
  const { state } = useContext(AppContext);
  return (
    <main className="globalContainer">
      <div className="mainLoginContainer">
        <form>
          <div className="form-mainContainer">
            <h1>Registro</h1>
            <div className="form-mainContainer-registerSection">
              <InvestorRegisterOptions />
            </div>
            <div className="buttonLoginContainer">
              <button className="loginButton">
                <a href="/Home">Registrarme</a>
              </button>
            </div>
            <div className="LoginOptionContainer">
              <span>
                <p>¿Ya estás registrado?</p>
                <a href="/">Ingresa aquí</a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
