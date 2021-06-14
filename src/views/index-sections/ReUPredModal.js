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
import ReUPredWindow from "./ReUPred/ReUPredView"
import ReUPredResault from "./ReUPred/ReUPredResaultView"
import HelpWindow from "./ReUPred/ReUPredHelp"
import ReferenceWindow from "./ReUPred/ReUPredReference"
import SuccessWindow from "./ReUPred/ReUPredSuccess"
import ErrorWindow from "./ReUPred/ReUPredError"
import LoadingWindow from "./ReUPred/ReUPredLoading"

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

export default function ReUPredModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const open = props.open;
    const handleClose = props.handleClose;
    const [window, setWindow] = React.useState("view");
    const [accNumber, setAccNumber] = React.useState("");
    const [PDBID, setPDBID] = React.useState("");

    //para la evaluación de qué pantalla usar
    function ChangeWindow({ theWindow }) {
        if (theWindow === "reference") {
            return <ReferenceWindow handleClose={handleClose} showReUPredWindow={showReUPredWindow} />;
        } else if (theWindow === "help") {
            return <HelpWindow handleClose={handleClose} showReUPredWindow={showReUPredWindow} />;
        } else if (theWindow === "resault") {
            return <ReUPredResault handleClose={handleClose} showReUPredWindow={showReUPredWindow}
                accNumber={accNumber} setAccNumber={setAccNumber} PDBID={PDBID} setPDBID={setPDBID} />;
        }
        else {
            return <ReUPredWindow handleClose={handleClose} showReUPredResaultWindow={showReUPredResaultWindow}
                accNumber={accNumber} setAccNumber={setAccNumber} PDBID={PDBID} setPDBID={setPDBID} />;
        }
    }

    const showReferenceWindow = () => {
        setWindow("reference");
    };

    const showHelpWindow = () => {
        setWindow("help");
    };

    const showReUPredResaultWindow = () => {
        setWindow("resault");
    };

    const showReUPredWindow = () => {
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
                    <Toolbar style={{ padding: "0px", minHeight: "48px" }}>
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
                            ReUPred
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