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
    const showSPCleanerWindow = props.showSPCleanerWindow;

    const preventDefault = (event) => event.preventDefault();

    function CloseWindow() {
        showSPCleanerWindow();
        handleClose();
    }

    return (
        <Grid className={classes.formStyle}>
            <Grid className={classes.labelStyle}>
                {`SPCleaner is a service developed by bachelor Karla Pedraza and Dr. Layla Hirsh 
                            in 2019 that allows the automatic cleaning of the sequential alignment. `}
            </Grid>
            <Grid className={classes.textStyle}>
                {`Reference: \n Pedraza Salinas, K. I., & Hirsh Martinez, L. (2019). 
                            Optimización de método   para la clasificación de proteínas repetidas 
                            e identificación de unidades de repetición mediante el uso de perfiles 
                            de Modelos Ocultos de Markov. Pontificia Universidad Católica del Perú.`}
            </Grid>
            <Link href="https://doi.org/10.1007/978-3-540-89378-3_27" onClick={preventDefault}>
                https://doi.org/10.1007/978-3-540-89378-3_27
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
                        onClick={(e) => showSPCleanerWindow()}
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