import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// reactstrap components
import { Button } from "reactstrap";
import Link from '@material-ui/core/Link';

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

export default function ReferenceWindow(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const showReUPredWindow = props.showReUPredWindow;
    const preventDefault = (event) => event.preventDefault();

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
                {`Reference: \n Hirsh Martinez, L. (2017). SOLVING THE STRUCTURAL MODELING PROBLEMS FOR TANDEM REPEAT PROTEINS 
                [Università degli Studi di Padova].`}
            </Grid>
            <Grid className={classes.textStyle}>
                {`Reference: \n Hirsh Martinez, L. (2019). Solving the Structural Modeling Problems for tandem repeat proteins. Università degli 
                Studi di Padova.`}
            </Grid>
            <Link href="http://paduaresearch.cab.unipd.it/10441/1/tesi_definitiva_LAYLA_HIRSHMARTINEZ.pdf" onClick={preventDefault}>
                http://paduaresearch.cab.unipd.it/10441/1/tesi_definitiva_LAYLA_HIRSHMARTINEZ.pdf
            </Link>
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
                        onClick={(e) => showReUPredWindow()}
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