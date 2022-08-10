import React from 'react';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from "firebase/firestore";
import {db} from '../../../firebase'
import axios from 'axios';

// TODO: Separar las "columnas" de la tabla con un espacio más grande.
// TODO: Separar las "filas" de la tabla con más espacio.
const ProfileInfo = ({investorName, investorEmail}) => {
    return (
        <section className = 'ProfileInfo'>
            <div style = {{float : "left"}}>
                <table className = "UserInfoTableFields">
                    <tr>
                        <th>Nombre</th>
                    </tr>
                    <tr>
                        <th>Correo electrónico</th>
                    </tr>
                </table>
            </div>
            <div>
                <table className = "UserInfoAndSettings">
                    <tr>
                        <td>{investorName}</td>
                    </tr>
                    <tr>
                        <td>{investorEmail}</td>
                    </tr>
                    <tr>
                        <a href='/'> Modificar contraseña </a>
                    </tr>
                    <tr>
                        <a href='/'> Eliminar cuenta </a> 
                    </tr>
                </table>
            </div>
        </section>
    );
}

export default ProfileInfo;