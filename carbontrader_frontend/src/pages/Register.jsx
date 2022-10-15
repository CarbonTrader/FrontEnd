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
    const role = "INVESTOR";
    registerWithEmailAndPassword(
      user.name,
      user.email,
      user.password,
      role
    ).then((res) => {
      if (res.data.status_code === undefined) {
        console.log(res);
        logInWithEmailAndPassword(user.email, user.password).then(
          (response) => {
            console.log(response);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("name", res.data.name);
            localStorage.setItem("email", res.data.email);
            if (res.data.role !== "INVESTOR") {
              localStorage.setItem("uuid", response.data.uuid);
              changeUid(res.data.uuid);
            }
            changeToken();
            navigate("/Home");
          }
        );
      } else {
        console.log(res.data.status_code);
        alert("Error al registrarse");
      }
    });
  };

  useEffect(() => {
    if (window.localStorage.getItem("token") !== null) navigate("/Home");
  }, []);

  return (
    <main className="globalContainer">
      <div className="mainRegisterContainer">
        <form>
          <h1 className="title">Registro</h1>
          <div className="form-mainContainer">
            <div className="form-mainContainer-registerSection">
              <InvestorRegisterOptions
                setEmail={changeEmail}
                setPassword={changePassword}
                setName={changeName}
              />
            </div>
            <div className="buttonRegisterContainer">
              <button className="registerButton" onClick={handleSignUp}>
                <a href="/Home">Registrarme</a>
              </button>
            </div>
            <div className="registerOptionContainer">
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
