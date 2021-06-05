import React from "react";
// reactstrap components
import { Button } from "reactstrap";
//materialui components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//search
import SearchBox from "../../../components/SearchBar/SearchBox"

const useStyles = makeStyles((theme) => ({
    labelStyle: {
        padding: "10px 0px 20px 0px",
        fontSize: 14,
    },
    inputStyle: {
        width: 350,
        height: 170,
    },
    root: {
        width: '100%',
        maxWidth: 500,
        maxHeight: 370,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
    },
}));

const list = [
    { name: '4u4bA' },
    { name: '1BI7B' },
    { name: '1BK5A' },
    { name: '4u4bA' },
    { name: '1BI7B' },
    { name: '2BNHA' },
    { name: '1BK5A' },
];

const list2 = [
    { name: 'Q5GYF3.1/31-62', seq: 'GGKPALETVQRLLPVLCQPPYGLTEQVVAIASHD' },
    { name: 'E5AW45.1/63-95', seq: 'GGKPALETVQRLLPVLCQPPYGLTEQVVAIASHD' },
    { name: 'Q5H0J2.1/96-128', seq: 'GGKPALETVQRLLPVLCQPPYGLTEQVVAIASHD' },
    { name: 'Q5H0Y6.1/129-150', seq: 'GGKPALETVQRLLPVLCQPPYGLTEQVVAIASHD' },
    { name: 'Q5H0I8.1/151-182', seq: 'GGKPALETVQRLLPVLCQPPYGLTEQVVAIASHD' },
    { name: 'E5AV36.1/183-215', seq: 'GGKPALETVQRLLPVLCQPPYGLTEQVVAIASHD' },
    { name: 'Q5H0Y9.1/216-248', seq: 'GGKPALETVQRLLPVLCQPPYGLTEQVVAIASHD' },
];

export default function View(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const showReUPredResaultWindow = props.showReUPredResaultWindow;
    const accNumber = props.accNumber;
    const [accNumbers, setAccNumbers] = React.useState(list2);
    const PDBID = props.PDBID;
    const [PDBIDs, setPDBIDs] = React.useState(list);
    const [selectedIndexAccNum, setSelectedIndexAccNum] = React.useState();
    const [selectedIndexPDB, setSelectedIndexPDB] = React.useState();

    function CloseWindow() {
        props.setAccNumber("");
        props.setPDBID("");
        setAccNumbers("");
        setPDBIDs("");
        handleClose();
    }

    const handleListItemClick = (event, setter, index, itemName) => {
        setter(index);
        //props.setAccNumber(itemName)
    };

    return (
        <Grid>
            <Grid container direction="row" justify="flex-start" alignItems="center" style={{ padding: "0px 0px 15px 0px" }}>
                <Grid item xs={6}>
                    <SearchBox list={accNumbers} set={props.setAccNumber} tag={"Search Acc. Number..."} />
                </Grid>
                <Grid item xs={6}>
                    <SearchBox list={accNumbers} set={props.setAccNumber} tag={"Search PDB ID..."} />
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={2}>
                <Grid container direction="column" justify="flex-start" xs={6} >
                    <Grid item style={{ padding: "0px 15px 0px 30px" }}>
                        <List className={classes.root} dense={true}>
                            {accNumbers.map((item, index) => (
                                <ListItem
                                    button
                                    selected={selectedIndexAccNum === index}
                                    onClick={(event) => handleListItemClick(event, setSelectedIndexAccNum, index, item.name)}
                                >
                                    <ListItemText
                                        primary={item.name + " " + item.seq}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
                <Grid container direction="column" justify="flex-start" xs={6} >
                    <Grid item style={{ padding: "0px 15px 0px 30px" }}>
                        <List className={classes.root} dense={true}>
                            {PDBIDs.map((item, index) => (
                                <ListItem
                                    button
                                    selected={selectedIndexPDB === index}
                                    onClick={(event) => handleListItemClick(event, setSelectedIndexPDB, index, item.name)}
                                >
                                    <ListItemText
                                        primary={item.name}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center" style={{ padding: "30px 0px 0px 10px" }} >
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
                <Grid item>
                    <Button
                        className="btn-round mr-1"
                        color="default"
                        type="button"
                        style={{ width: "90px" }}
                        onClick={(e) => showReUPredResaultWindow()}
                    >
                        Run
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}
