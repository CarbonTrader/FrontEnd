import React from 'react';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from '../../../firebase'
import axios from 'axios';
import { Paper, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
}))

const ProfileInfo = ({ investorName, investorEmail }) => {

    const classes = useStyles();

    return (
        <section className='ProfileInfo'>
            <Paper className={classes.pageContent}>
                <div style={{ float: "left" }}>
                    <table className="UserInfoTableFields">
                        <thead>
                            <tr>
                                <th align="left">Nombre</th>
                            </tr>
                            <tr>
                                <th align="left">Correo electrónico</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div>
                    <table className="UserInfoAndSettings">
                        <tbody>
                            <tr>
                                <td>{investorName}</td>
                            </tr>
                            <tr>
                                <td>{investorEmail}</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href='/'> Modificar contraseña </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href='/'> Eliminar cuenta </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Paper>
        </section>
    );
}

export default ProfileInfo;