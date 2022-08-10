import React from 'react';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from "firebase/firestore";
import {db} from '../../../firebase'
import axios from 'axios';

/* * * 
MyWallet corresponde al módulo de la página de perfil de usuario Inversionista que muestra información de cada uno de los créditos de los que el Inversionista es poseedor.
 * * */
const MyWallet = ({projectsOfWalletSet}) => {
    return (
        <section className = 'ProfileInfo'>
            {/* Aquí va el componente del círculo que contiene el total de 
            créditos de los que es poseedor el Inversionista y la llave pública de la billetera. */}

            {/* Aquí va el componente de tabla, con sus respectivos controles de los filtros sobre la tabla. */}
        </section>
    );
}

export default MyWallet;