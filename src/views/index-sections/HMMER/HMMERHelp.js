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
    createData("Sequence E-value threshold", "Numeric", "0<X<=10"),
    createData("Hit E-value threshold", "Numeric", "0<X<=10"),
];

export default function HelpWindow(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const showHMMERWindow = props.showHMMERWindow;

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
            <TableContainer component={Paper}>
                <Table
                    className={classes.table}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: "250px" }} align="left">
                                Parameters
                            </TableCell>
                            <TableCell style={{ width: "200px" }} align="center">
                                Type of value
                            </TableCell>
                            <TableCell style={{ maxWidth: "150px" }} align="center">
                                Range
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell style={{ width: "250px" }} align="left">
                                    {row.tag}
                                </TableCell>
                                <TableCell style={{ width: "200px" }} align="center">
                                    {row.typeValue}
                                </TableCell>
                                <TableCell style={{ maxWidth: "150px" }} align="center">
                                    {row.range}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid className={classes.textStyle}>
                {`Once the parameters are written and the function is executed, the detected homology taxonomy and domain are presented.`}
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