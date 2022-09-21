import React, { useCallback, useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/pages/register/Register.scss";
import "../styles/global.scss";
import InvestorRegisterOptions from "../components/InvestorRegisterOptions";
import CreditProviderRegisterOptions from "../components/CreditProviderRegisterOptions";
import firebase from "firebase"

const Register = () => {
  const { state, changeRegisterOption } = useContext(AppContext);

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <main className="globalContainer">
      <div className="mainLoginContainer">
        <form onSubmit={handleSignUp}>
          <div className="form-mainContainer">
            <h1>Registro</h1>
            <div className="form-mainContainer-roleContainer">
              <p>Seleccione su rol</p>
              <div className="form-mainContainer-roleContainer-containerOptions">
                <div
                  onClick={() => changeRegisterOption("CP")}
                  className="form-mainContainer-roleContainer-containerOptions-options"
                >
                  CreditProvider
                  <div
                    className={state.registerOption === "CP" ? "underline" : ""}
                  ></div>
                </div>
                <div
                  onClick={() => changeRegisterOption("IV")}
                  className="form-mainContainer-roleContainer-containerOptions-options"
                >
                  Investor
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
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
