import React from 'react';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from "firebase/firestore";
import {db} from '../../../firebase'
import axios from 'axios';
import { Paper, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
}))

// TODO: Separar las "columnas" de la tabla con un espacio más grande.
// TODO: Separar las "filas" de la tabla con más espacio.
const ProfileInfo = ({investorName, investorEmail}) => {

    const classes = useStyles();

    return (
        <section className = 'ProfileInfo'>
            <Paper className = {classes.pageContent}>
                <div style = {{float : "left"}}>
                    <table className = "UserInfoTableFields">
                        <tr>
                            <th align="left">Nombre</th>
                        </tr>
                        <tr>
                            <th align="left">Correo electrónico</th>
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
            </Paper>
        </section>
    );
}

export default ProfileInfo;