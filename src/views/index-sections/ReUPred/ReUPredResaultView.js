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
import SearchBox from "../../../components/SearchBar/SearchBox"
//Viewer
import StructureViewer from "../../../components/Viewers/StructureViewer";

const useStyles = makeStyles((theme) => ({
    formStyle: {
        padding: "0px 50px 0px 50px",
    },
    labelStyle: {
        fontSize: 14,
        fontWeight: "bold",
    },
    inputStyle: {
        width: 590,
    },
    root: {
        width: '50%',
        maxHeight: 300,
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
    const ReUPredWindow = props.showReUPredWindow;
    const handleClose = props.handleClose;
    const accNumber = "Q5GYF3.1";
    //const accNumber = props.accNumber;
    const PDBID = "4u4bA";
    //const PDBID = props.PDBID;
    const [units, setUnits] = React.useState("");
    const [unitsRange, setUnitsRange] = React.useState("");
    const [match, setMatch] = React.useState(list);
    const [selectedIndex, setSelectedIndex] = React.useState();

    function CloseWindow() {
        setMatch("");
        handleClose();
    }
    const handleListItemClick = (event, index, itemName) => {
        setSelectedIndex(index);
        setUnits(index + 1);
        setUnitsRange(itemName);
        //props.setAccNumber(itemName)
    };

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
                    <Grid item className={classes.labelStyle}>
                        {"Unit: " + units + " (" + unitsRange + ")"}
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center" style={{ padding: "20px 0px 0px 0px" }}>
                    <Grid item>

                    </Grid>
                </Grid>
                <Grid container justify="center" spacing={2}>
                    <Grid container direction="column" justify="flex-start" xs={6} >
                        <Grid item >
                            <List className={classes.root} dense={true}>
                                {match.map((item, index) => (
                                    <ListItem
                                        className={classes.inputStyle}
                                        button
                                        selected={selectedIndex === index}
                                        primary={item.unit}
                                        secondary={item.name + " " + item.seq}
                                        onClick={(event) => handleListItemClick(event, index, item.unit)}
                                    >
                                        <ListItemText
                                            primary={item.name + " " + item.seq}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" justify="flex-start" xs={6} alignItems="flex-start" style={{ padding: "0px 30px 0px 0px" }}>
                        <Grid item>
                            <StructureViewer />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justify="center" spacing={8} style={{ padding: "25px" }}>
                    <Grid item>
                        <Button
                            className="btn-round mr-1"
                            color="primary"
                            outline
                            type="button"
                            onClick={(e) => ReUPredWindow()}
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