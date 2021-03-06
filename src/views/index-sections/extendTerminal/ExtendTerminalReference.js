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
    const showExtendTerminalWindow = props.showExtendTerminalWindow;

    const preventDefault = (event) => event.preventDefault();

    function CloseWindow() {
        showExtendTerminalWindow();
        handleClose();
    }

    return (
        <Grid className={classes.formStyle}>
            <Grid className={classes.labelStyle}>
                {`This is a function developed by The European Bioinformatics Institute, 
                part of the European Molecular Biology Laboratory (EMBL-EBI). 
                Its execution returns all de sequences aligned. `}
            </Grid>
            <Grid className={classes.textStyle}>
                {`Reference: \n EMBL-EBI. (2021). Pfam curation tools — Pfam curation tools 1.0 documentation. `}
            </Grid>
            <Link href="https://pfam-curation-docs.readthedocs.io/en/latest/index.html" onClick={preventDefault}>
                https://pfam-curation-docs.readthedocs.io/en/latest/index.html
            </Link>
            <Grid className={classes.textStyle}>
                {`Reference: \n EMBL-EBI. (2021b). The European Bioinformatics Institute. `}
            </Grid>
            <Link href="https://www.ebi.ac.uk/" onClick={preventDefault}>
                https://www.ebi.ac.uk/
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
                        onClick={(e) => showExtendTerminalWindow()}
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