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
    const showHMMERWindow = props.showHMMERWindow;
    const preventDefault = (event) => event.preventDefault();

    function CloseWindow() {
        showHMMERWindow();
        handleClose();
    }

    return (
        <Grid className={classes.formStyle}>
            <Grid className={classes.labelStyle}>
                {`HMMER is a free software package written by Sean Eddy for sequence analysis.
                Its general use is to identify homologous nucleotide or protein sequences and perform 
                sequence alignments. Detect homology by comparing a Hidden Markov Model 
                 with the pfamseq database (S. R. Eddy & Wheeler, 2011).`}
            </Grid>
            <Grid className={classes.textStyle}>
                {`Reference: \n Robert D. Finn, Jody Clements, Sean R. Eddy, HMMER web server: interactive sequence similarity searching, Nucleic Acids Research, Volume 39, Issue suppl_2, 1 July 2011.`}
            </Grid>
            <Link href="https://doi.org/10.1093/nar/gkr367" onClick={preventDefault}>
                https://doi.org/10.1093/nar/gkr367
            </Link>
            <Grid container justify="center" spacing={8} style={{ padding: "40px" }}>
                <Grid item>
                    <Button
                        className="btn-round mr-1"
                        color="primary"
                        outline
                        type="button"
                        onClick={(e) => showHMMERWindow()}
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