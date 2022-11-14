import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import "../../styles/pages/login/Login.scss";
import "../../styles/global.scss";
import { logInWithEmailAndPassword } from "../../services/userService";

const Login = () => {
  const { user, changeEmail, changePassword, changeToken } = useUserContext();

  let navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(user.email, user.password).then((response) => {
      console.log(response.data);
      if (response.data.status_code === undefined) {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        if (response.data.role !== "INVESTOR")
          localStorage.setItem("uuid", response.data.uuid);
        changeToken();
        navigate("/Home");
      } else {
        alert("Error al ingresar");
      }
    });
  };

  useEffect(() => {
    changeToken();
    if (window.localStorage.getItem("token") !== null) navigate("/Home");
  }, []);

  return (
    <main className="globalContainer">
      <div className="mainLoginContainer">
        <form>
          <h1 className="title">CarbonTrader</h1>
          <div className="form-mainContainer">
            <div className="inputsContainer">
              <input
                id="userInput"
                type="text"
                placeholder="Correo"
                onChange={(e) => changeEmail(e.target.value)}
              />
              <input
                id="passwordInput"
                type="password"
                placeholder="Contraseña"
                onChange={(e) => changePassword(e.target.value)}
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

              <div className="LoginOptionContainer">
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
