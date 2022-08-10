import React from "react";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../firebase";
import axios from "axios";
import useTable from "../../../components/useTable"
import { TableBody, TableRow,  Paper, TableCell, makeStyles, Toolbar, InputAdornment } from "@material-ui/core";
import Controls from "../../../components/controls/Controls"
import { Search } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    }
}))

/* * * 
MyWallet corresponde al módulo de la página de perfil de usuario Inversionista que muestra información de cada uno de los créditos de los que el Inversionista es poseedor.
* * */
const MyWallet = ({credit_records}) => {

    const headCells = [
        { id: 'project_name', label: 'Nombre del Proyecto' },
        { id: 'carbontrader_serial', label: 'Serial' },
    ]
    const classes = useStyles();
    // TODO: La siguiente línea corresponde a una mejor práctica. Por ahora se queman los datos.
    //const records = useState(employeeService.getAllEmployees())
    const records = [
        {
            "project_name": "Proyecto Alpha",
            "carbontrader_serial": "1"
        },
        {
            "project_name": "Proyecto Beta",
            "carbontrader_serial": "2"
        },
        {
            "project_name": "Proyecto Delta",
            "carbontrader_serial": "3"
        },
        {
            "project_name": "Proyecto Epsilon",
            "carbontrader_serial": "4"
        },
        {
            "project_name": "Proyecto Theta",
            "carbontrader_serial": "5"
        },
        {
            "project_name": "Proyecto Alpha",
            "carbontrader_serial": "1"
        },
        {
            "project_name": "Proyecto Beta",
            "carbontrader_serial": "2"
        },
        {
            "project_name": "Proyecto Delta",
            "carbontrader_serial": "3"
        },
        {
            "project_name": "Proyecto Epsilon",
            "carbontrader_serial": "4"
        },
        {
            "project_name": "Proyecto Theta",
            "carbontrader_serial": "5"
        }
    ]
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);
    
    // TODO: La siguiente función debe ser modificada de acuerdo al modelo de los créditos del Inversionista.
    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.project_name.toLowerCase().includes(target.value))
            }
        })
    }

    return (
        <section className="ProfileInfo">
            {/* Aquí va el componente del círculo que contiene el total de 
                créditos de los que es poseedor el Inversionista y la llave pública de la billetera. */}

            {/* Aquí va el componente de tabla, con sus respectivos controles de los filtros sobre la tabla. */}
            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Controls.Input
                        label="Busca un proyecto"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                </Toolbar>
                <TblContainer component={Paper}>
                    <TblHead />
                    <TableBody>
                        {
                            records.map(item => 
                                (<TableRow key={item.carbontrader_serial}>
                                    {/* TODO: Definir qué campo debe ser la key para cada fila */}
                                    <TableCell>{item.project_name}</TableCell>
                                    <TableCell>{item.carbontrader_serial}</TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination/>
            </Paper>
        </section>
    );
}

export default MyWallet;
