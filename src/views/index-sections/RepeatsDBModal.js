import React from "react";
//materialui components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import BookIcon from "@material-ui/icons/Book";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from '@material-ui/core/Tooltip';
//Para las vistas
import RepeatsDBWindow from "./RepeatsDB/RepeatsDBView"
import RepeatsDBResault from "./RepeatsDB/RepeatsDBResaultView"
import HelpWindow from "./RepeatsDB/RepeatsDBHelp"
import ReferenceWindow from "./RepeatsDB/RepeatsDBReference"
import SuccessWindow from "./RepeatsDB/RepeatsDBSuccess"
import ErrorWindow from "./RepeatsDB/RepeatsDBError"
import LoadingWindow from "./RepeatsDB/RepeatsDBLoading"

function getModalStyle() {
    const width = 859;
    const top = 40;
    return {
        top: `${top}px`,
        left: `calc((100% - ${width}px)/2)`,
        height: "fit-content",
        //minHeight: "400px"
    };
}

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))(Tooltip);

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
        marginBottom: "5px",
    },
}));

export default function RepeatsDBModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const open = props.open;
    const handleClose = props.handleClose;
    const [window, setWindow] = React.useState("view");
    const [accNumber, setAccNumber] = React.useState("Q5GYF3");
    const [PDBID, setPDBID] = React.useState("4u4bA");

    //para la evaluación de qué pantalla usar
    function ChangeWindow({ theWindow }) {
        if (theWindow === "reference") {
            return <ReferenceWindow handleClose={handleClose} showRepeatsDBWindow={showRepeatsDBWindow} />;
        } else if (theWindow === "help") {
            return <HelpWindow handleClose={handleClose} showRepeatsDBWindow={showRepeatsDBWindow} />;
        } else if (theWindow === "resault") {
            return <RepeatsDBResault handleClose={handleClose} showRepeatsDBWindow={showRepeatsDBWindow}
                accNumber={accNumber} setAccNumber={setAccNumber} PDBID={PDBID} setPDBID={setPDBID} />;
        }
        else {
            return <RepeatsDBWindow handleClose={handleClose} showRepeatsDBResaultWindow={showRepeatsDBResaultWindow}
                accNumber={accNumber} setAccNumber={setAccNumber} PDBID={PDBID} setPDBID={setPDBID} />;
        }
    }

    const showReferenceWindow = () => {
        setWindow("reference");
    };

    const showHelpWindow = () => {
        setWindow("help");
    };

    const showRepeatsDBResaultWindow = () => {
        setWindow("resault");
    };

    const showRepeatsDBWindow = () => {
        setWindow("view");
    };

    return (
        <div>
            <Modal
                modalClassName="bd-example-modal-lg"
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <Toolbar style={{ padding: "1px", minHeight: "48px" }}>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <LightTooltip title="Help">
                                    <IconButton>
                                        <HelpOutlineIcon onClick={(e) => showHelpWindow()} />
                                    </IconButton>
                                </LightTooltip>
                                <LightTooltip title="Reference">
                                    <IconButton>
                                        <BookIcon onClick={(e) => showReferenceWindow()} />
                                    </IconButton>
                                </LightTooltip>
                            </Grid>
                        </Grid>
                    </Toolbar>
                    <Grid container justify="center">
                        <Grid item className={classes.title}>
                            RepeatsDB
                        </Grid>
                    </Grid>
                    <div>
                        <ChangeWindow theWindow={window} />
                    </div>
                </div>
            </Modal>
        </div>
    );
}