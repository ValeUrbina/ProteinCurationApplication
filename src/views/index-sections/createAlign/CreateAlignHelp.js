import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// reactstrap components
import { Button } from "reactstrap";
//materialui components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 859,
        height: 850,
        backgroundColor: theme.palette.background.paper,
        borderRadius: "20px",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(0, 4, 3),
    },
    title: {
        fontSize: "40px",
        fontWeight: "bold",
        marginBottom: "50px",
    },
    formStyle: {
        padding: "0px 100px 0px 100px",
    },
    labelStyle: {
        padding: "10px 0px 20px 0px",
    },
    textStyle: {
        padding: "20px 0px 20px 0px",
    },
    table: {
        minWidth: 300,
    },
}));

function createData(tag, typeValue, range) {
    return { tag, typeValue, range };
}

const rows = [
    createData(
        "Percentage of important amino acids in the sequence",
        "Decimal",
        "0<X<1"
    ),
    createData("Percentage of maximum void allowed", "Decimal", "0<X<1"),
    createData("Blosum level", "Decimal", "0<X<1"),
];

export default function HelpWindow(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const showCreateAlignWindow = props.showCreateAlignWindow;

    function CloseWindow() {
        showCreateAlignWindow();
        handleClose();
    }

    return (
        <Grid className={classes.formStyle}>
            <Grid className={classes.labelStyle}>
                {`create_alignment is a function developed by The European Bioinformatics Institute, 
                part of the European Molecular Biology Laboratory (EMBL-EBI). 
                Its execution returns all de sequences aligned. `}
            </Grid>
            <Grid className={classes.textStyle}>
                {`First choose and alignment method. Once the function is executed, the new alignment is presented.`}
            </Grid>
            <Grid
                container
                justify="center"
                spacing={8}
                style={{ padding: "40px" }}
            >
                <Grid item>
                    <Button
                        className="btn-round mr-1"
                        color="primary"
                        outline
                        type="button"
                        onClick={(e) => showCreateAlignWindow()}
                    >
                        Return
            </Button>
                    {/* <Button className="btn-round mr-1" color="info" outline type="button">Return</Button> */}
                </Grid>
                <Grid item>
                    <Button
                        className="btn-round mr-1"
                        color="default"
                        outline
                        type="button"
                        style={{ width: "90px" }}
                        onClick={(e) => CloseWindow()}
                    >
                        Close
            </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}