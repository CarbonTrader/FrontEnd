import React from "react";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../firebase";
import axios from "axios";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";

/* * * 
MyWallet corresponde al módulo de la página de perfil de usuario Inversionista que muestra información de cada uno de los créditos de los que el Inversionista es poseedor.
 * * */
// const MyWallet = ({ projectsOfWalletSet }) => {
const MyWallet = () => {
    function formatOurData(columnName, semOneMarks, semTwoMarks) {
        return { columnName, semOneMarks, semTwoMarks };
    }
    const SampleData = [
        formatOurData("Maths", 55, 66),
        formatOurData("English", 44, 94),
        formatOurData("Hindi", 67, 85),
        formatOurData("Computer", 68, 95),
        formatOurData("Science", 56, 85),
    ];
    return (
        <section className="ProfileInfo">
            {/* Aquí va el componente del círculo que contiene el total de 
                créditos de los que es poseedor el Inversionista y la llave pública de la billetera. */}

            {/* Aquí va el componente de tabla, con sus respectivos controles de los filtros sobre la tabla. */}

            <TableContainer component={Paper}>
                <Table
                    style={{
                        width: 600,
                    }}
                    size="small"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Subject Name</TableCell>
                            <TableCell align="right">Sem-I Marks</TableCell>
                            <TableCell align="right">Sem-II Marks</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/*projectsOfWalletSet.map((row) => (*/}
                        {SampleData.map((row) => (
                            <TableRow key={row.columnName}>
                                <TableCell component="th" scope="row">
                                    {row.columnName}
                                </TableCell>
                                <TableCell align="right">{row.semOneMarks}</TableCell>
                                <TableCell align="right">{row.semTwoMarks}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    );
};

export default MyWallet;
