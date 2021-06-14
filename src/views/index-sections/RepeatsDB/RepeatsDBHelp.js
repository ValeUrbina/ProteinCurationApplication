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
        marginBottom: "30px",
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
    const showNextDUFWindow = props.showNextDUFWindow;

    function CloseWindow() {
        showNextDUFWindow();
        handleClose();
    }

    return (
        <Grid className={classes.formStyle}>
            <Grid className={classes.labelStyle}>
                {`The RepeatsDB database provides annotations and classification for protein tandem repeat structures 
                from the Protein Data Bank. Protein tandem repeats are ubiquitous in all branches of the tree of life.  `}
            </Grid>
            <Grid className={classes.textStyle}>
                {`Choose the accession number and the PDB ID required to see the structure, chain and corresponding units`}
            </Grid>
            <Grid
                container
                justify="center"
                spacing={8}
                style={{ padding: "25px" }}
            >
                <Grid item>
                    <Button
                        className="btn-round mr-1"
                        color="primary"
                        outline
                        type="button"
                        onClick={(e) => showNextDUFWindow()}
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