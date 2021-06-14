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
    table: {
        minWidth: 300,
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
    const showDESCWindow = props.showDESCWindow;

    function CloseWindow() {
        showDESCWindow();
        handleClose();
    }

    return (
        <Grid className={classes.formStyle}>
            <Grid className={classes.labelStyle}>
                {`This information has been obtained from The European Bioinformatics Institute, 
                part of the European Molecular Biology Laboratory (EMBL-EBI).`}
            </Grid>
            <Grid className={classes.textStyle}>
                {`The DESC file información appears on the screen and can be edited.`}
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
                        onClick={(e) => showDESCWindow()}
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