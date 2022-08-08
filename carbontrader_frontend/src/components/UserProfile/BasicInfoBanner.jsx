import React, { useState } from 'react';
import profile_pic_icon from '../../assets/icons/world_icon.png'

const BasicInfoBanner = ({name, userType}) => {
    // TODO: Si esta pantalla es únicamente para usuarios Traders (en nuestro modelo de dominio), se puede quemar el título de "Comercializador" como userType.
    // Si no se quema, tenemos que cambiar el Modelo de Dominio para que Trader sea un tipo de Usuario (superclase).
    return (
        <section className ="BasicInfoBanner">
            <div className="gradientContainer">
                <div style={{float : 'left'}}>
                    <img src={profile_pic_icon} alt = "" height = {100} width = {100}/>
                </div>
                <div>
                    <h2 className='traderName'>{name}</h2>
                    <p className='userType'>{userType}</p>
                </div>
            </div>
        </section>
    );
}

export default BasicInfoBanner;