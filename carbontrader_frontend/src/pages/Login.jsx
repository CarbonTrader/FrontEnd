import React from "react";
import '../styles/Login.scss'
import '../styles/global.scss'



const Login = () => {

    return (
        <main className="globalContainer">
            <div className="mainRegisterContainer">
                <form>
                    <div className="form-mainContainer">
                        <h1>Login</h1>
                        <p>Bienvenido a carbontrader</p>
                        <div className="inputsContainer">
                            <input id="userInput" type="text" placeholder="Ingrese su usuario" />
                            <input id="passwordInput" type="password" placeholder="Ingrese su contraseña" />
                        </div>
                        <div className="buttonLoginContainer">
                            <button className="loginButton"> Registrarse</button>
                        </div>
                    </div>

                </form>

            </div>
        </main>



    )
}

export default Login