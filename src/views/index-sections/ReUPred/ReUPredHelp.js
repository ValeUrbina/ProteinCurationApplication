import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// reactstrap components
import { Button } from "reactstrap";

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
}));

function createData(tag, typeValue, range) {
    return { tag, typeValue, range };
}

const rows = [
    createData("Accession number", "Alphanumeric", "-"),
];

export default function HelpWindow(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const showReUPredWindow = props.showReUPredWindow;

    function CloseWindow() {
        showReUPredWindow();
        handleClose();
    }

    return (
        <Grid className={classes.formStyle}>
            <Grid className={classes.labelStyle}>
                {`ReUPred 2.0 allows the classification of repeated proteins and identification of repeat units 
                (Hirsh Martinez, 2019; Pedraza Salinas & Hirsh Martinez, 2019). 
                This is a service developed by Dr. Layla Hirsh Martinez and optimized by Bachiller Karla Pedraza. 
                The tool seeks to extend the annotation for the thousands of repeated proteins with structures present
                in the RCSB Protein Data Bank, by optimizing the structural alignment stage with the SRUL of ReUPred 1.0 
                (Hirsh Martinez, 2019; Pedraza Salinas & Hirsh Martinez , 2019).`}
            </Grid>
            <Grid className={classes.textStyle}>
                {`Choose the accession number and the PDB ID required to see the corresponding units and the structure.`}
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
                        onClick={(e) => showReUPredWindow()}
                    >
                        Return
            </Button>
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