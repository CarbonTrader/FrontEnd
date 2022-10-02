import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import UserContext from "../context/UserContext";
import "../styles/pages/register/Register.scss";
import "../styles/global.scss";
import InvestorRegisterOptions from "../components/InvestorRegisterOptions";
import CreditProviderRegisterOptions from "../components/CreditProviderRegisterOptions";
import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../services/userService";

const Register = () => {
  const { state, changeRegisterOption } = useContext(AppContext);
  const {
    user,
    changeName,
    changeEmail,
    changePassword,
    changeToken,
    changeUid,
  } = useContext(UserContext);
  let navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const role =
      state.registerOption === "CP"
        ? "PROVIDER"
        : state.registerOption === "IV"
        ? "INVESTOR"
        : "AUDITOR";
    registerWithEmailAndPassword(
      user.name,
      user.email,
      user.password,
      role
    ).then((res) => {
      logInWithEmailAndPassword(user.email, user.password).then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        if (response.data.role !== "INVESTOR") {
          localStorage.setItem("uuid", response.data.uuid);
          changeUid(response.data.uuid)
        }
        changeToken();
        navigate("/Home");
      });
    });
  };

  useEffect(() => {
    const isAuth = !!localStorage.getItem("token");
    if (isAuth) navigate("/Home");
  }, []);

  return (
    <main className="globalContainer">
      <div className="mainLoginContainer">
        <form>
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
                <CreditProviderRegisterOptions
                  setEmail={changeEmail}
                  setPassword={changePassword}
                  setName={changeName}
                />
              ) : (
                <InvestorRegisterOptions
                  setEmail={changeEmail}
                  setPassword={changePassword}
                />
              )}
            </div>
            <div className="buttonLoginContainer">
              <button className="loginButton" onClick={handleSignUp}>
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
