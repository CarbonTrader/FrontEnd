import React from "react";
import '../styles/userWallet.scss';
import CreditItem from "../components/creditItem";

const UserWallet =(props) =>{
    return(
        <section className="userWallet-mainContainer">
            <div className="userWallet-totalContainer">
                <div className="userWallet-totalContainer-circle">
                    <h1>Total</h1>
                    <p>{props.total}</p>
                </div>
                <p className="publicKeyTitle">Llave Pública</p>
                <p className="publicKeyContent">A5373D44C6D8...</p>
            </div>
            <div className="userWallet-creditsContainer">
                <div className="userWallet-creditsContainer-creditsList">
                    {props.credits.map((proyect) => (
                        <div className="CreditItemsContainer">
                        <CreditItem name ={proyect.proyect_name} amount = {proyect.credits} />
                    </div>
                    ))}
                    
                </div>
            </div>

        </section>
        
    )
}

export default UserWallet