import React from "react";
import '../styles/Login.scss';
import Title from '../components/Name'

const Login =() =>{
    return(     
        <>
            <Title/>
           <div className="container">
            <form className="formContainer">
                <div className="formContainer_box">
                    <label> Nombre</label>
                    <input placeholder="Ingresa tu contraseña"/>      
                </div>   
                <div className="formContainer_box" >
                    <label> Contraseña</label>
                    <input placeholder="Ingresa tu contraseña"/>      
                </div>  
                <div className="formContainer_buttonContainer">
                    <button className="formContainer_button"> Ingresar</button> 
                </div>                
            </form>
        </div>
        </>  
     
        
    )
}

export default Login