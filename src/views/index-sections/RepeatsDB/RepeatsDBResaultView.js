import React from "react";
// reactstrap components
import { Button, Form, TabContent, TabPane, NavItem, NavLink, Nav, } from "reactstrap";
//materialui components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    formStyle: {
        padding: "0px 100px 0px 100px",
    },
    labelStyle: {
        fontSize: 14,
        fontWeight: "bold",
    },
    inputStyle: {
        width: 590,
    },
    root: {
        width: '95%',
        maxHeight: 350,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
    },
}));

const list = [
    { unit: 'UNIT 30 60', name: 'Q5GYF3.1/31-62', seq: 'GGKPALETVQRLLPVLCQPPYGLTEQVVAIASHD' },
    { unit: 'UNIT 61 93', name: 'E5AW45.1/63-95', seq: 'GGKPALETVQRLLPVLCQPPYGLTEQVVAIASHD' },
    { unit: 'UNIT 94 126', name: 'Q5H0J2.1/96-128', seq: 'GGKPALETVQRLLPVLCQPPYGLTEQVVAIASHD' },
    { unit: 'UNIT 127 159', name: 'Q5H0Y6.1/129-150', seq: 'GGKPALETVQRLLPVLCQPPYGLTEQVVAIASHD' },
    { unit: 'UNIT 160 192', name: 'Q5H0I8.1/151-182', seq: 'GGKPALETVQRLLPVLCQPPYGLTEQVVAIASHD' },
    { unit: 'UNIT 193 225', name: 'E5AV36.1/183-215', seq: 'GGKPALETVQRLLPVLCQPPYGLTEQVVAIASHD' },
    { unit: 'UNIT 226 258', name: 'Q5H0Y9.1/216-248', seq: 'GGKPALETVQRLLPVLCQPPYGLTEQVVAIASHD' },
];

export default function View(props) {
    const classes = useStyles();
    const RepeatsDBWindow = props.showRepeatsDBWindow;
    const handleClose = props.handleClose;
    const accNumber = props.accNumber;
    const PDBID = props.PDBID;
    const [match, setMatch] = React.useState(list);

    function CloseWindow() {
        setMatch("");
        handleClose();
    }

    return (
        <Grid className={classes.formStyle}>
            <Grid container justify="center" spacing={4} style={{ padding: "20px" }} >
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item className={classes.labelStyle}>
                        {"PDB: " + PDBID}
                    </Grid>
                    <Grid item className={classes.labelStyle}>
                        {"Acc. Number: " + accNumber}
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center" style={{ padding: "20px 0px 0px 0px" }}>
                    <Grid item>
                        <List className={classes.root} dense={true}>
                            {match.map((item) => (
                                <ListItem >
                                    <ListItemText className={classes.inputStyle}
                                        primary={item.unit}
                                        secondary={item.name + " " + item.seq}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
                <Grid container
                    justify="center"
                    spacing={8}
                    style={{ padding: "25px" }}>
                    <Grid item>
                        <Button
                            className="btn-round mr-1"
                            color="primary"
                            outline
                            type="button"
                            onClick={(e) => RepeatsDBWindow()}
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
        </Grid>
    );
}