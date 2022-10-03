import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/pages/signup/SignUp.scss";
import "../styles/global.scss";
import InvestorRegisterOptions from "../components/InvestorSignUpOptions";
import CreditProviderRegisterOptions from "../components/CreditProviderSignUpOptions";

const SignUp = () => {
  const { state, changeRegisterOption } = useContext(AppContext);
  return (
    <main className="globalContainer">
      <div className="mainLoginContainer">
        <form>
          <div className="form-mainContainer">
            <h1>Registro</h1>
            <div className="form-mainContainer-roleContainer">
              <div className="form-mainContainer-roleContainer-containerOptions">
                <div
                  onClick={() => changeRegisterOption("CP")}
                  className="form-mainContainer-roleContainer-containerOptions-options"
                >
                  Proveedor
                  <div
                    className={state.registerOption === "CP" ? "underline" : ""}
                  ></div>
                </div>
                <div
                  onClick={() => changeRegisterOption("IV")}
                  className="form-mainContainer-roleContainer-containerOptions-options"
                >
                  Inversionista
                  <div
                    className={state.registerOption === "IV" ? "underline" : ""}
                  ></div>
                </div>
              </div>
            </div>
            <div className="form-mainContainer-registerSection">
              {state.registerOption === "CP" ? (
                <CreditProviderRegisterOptions />
              ) : (
                <InvestorRegisterOptions />
              )}
            </div>
            <div className="buttonLoginContainer">
              <button className="loginButton">
                <a href="/Home">Registrarme</a>
              </button>
            </div>
            <div className="LoginOptionContainer">
                <span>
                  <p>¿Ya estás registrado?</p>
                  <a href="/Login">Ingresa aquí</a>
                </span>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
