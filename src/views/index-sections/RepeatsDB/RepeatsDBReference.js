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
    const showRepeatsDBWindow = props.showRepeatsDBWindow;
    const preventDefault = (event) => event.preventDefault();

    function CloseWindow() {
        showRepeatsDBWindow();
        handleClose();
    }

    return (
        <Grid className={classes.formStyle}>
            <Grid className={classes.labelStyle}>
                {`The RepeatsDB database provides annotations and classification for protein tandem repeat structures 
                from the Protein Data Bank. Protein tandem repeats are ubiquitous in all branches of the tree of life. 
                The accumulation of solved repeat structures provides new possibilities for classification and detection, 
                but also increasing the need for annotation. Data growth has been addressed with improved mechanisms for 
                browsing the classification hierarchy. A new UniProt-centric view unifies the increasingly frequent annotation 
                of structures from identical or similar sequences.`}
            </Grid>
            <Link href="https://repeatsdb.org/" onClick={preventDefault}>
                https://repeatsdb.org/
            </Link>
            <Grid className={classes.textStyle}>
                {`Reference: \nLisanna Paladin, Martina Bevilacqua, Sara Errigo, Damiano Piovesan, Ivan Mičetić, 
                Marco Necci, Alexander Miguel Monzon, Maria Laura Fabre, Jose Luis Lopez, Juliet F Nilsson, 
                Javier Rios, Pablo Lorenzano Menna, Maia Cabrera, Martin Gonzalez Buitron, Mariane Gonçalves Kulik, 
                Sebastian Fernandez-Alberti, Maria Silvina Fornasari, Gustavo Parisi, Antonio Lagares, Layla Hirsh, 
                Miguel A Andrade-Navarro, Andrey V Kajava, Silvio C E Tosatto, RepeatsDB in 2021: improved data and 
                extended classification for protein tandem repeat structures, Nucleic Acids Research, Volume 49, 
                Issue D1, 8 January 2021, Pages D452–D457`}
            </Grid>
            <Link href="https://doi.org/10.1093/nar/gkaa1097" onClick={preventDefault}>
                https://doi.org/10.1093/nar/gkaa1097
            </Link>
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
                        onClick={(e) => showRepeatsDBWindow()}
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