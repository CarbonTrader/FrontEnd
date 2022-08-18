import React from "react";
import '../styles/Register.scss'
import '../styles/global.scss'



const Home = () => {
    return (
        <main className="globalContainer">
            <div className="mainLoginContainer">
                <form>
                    <div className="form-mainContainer">
                        <h1>Registro</h1>
                        <p>Bienvenido a carbontrader</p>
                        <div className="inputsContainer">
                            <input class="form-input" id="txt-input" type="text" placeholder="Ingrese su correo" />
                            <input class="form-input" id="txt-input" type="password" placeholder="Ingrese su contraseña" />
                        </div>
                        <div className="buttonLoginContainer">
                            <button className="close"> Registrarse</button>
                        </div>
                    </div>

                </form>

            </div>
        </main>



    )
}

export default Home;