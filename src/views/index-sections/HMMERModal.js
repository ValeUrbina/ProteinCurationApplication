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
import HMMERWindow from "./HMMER/HMMERView"
import HMMERResault from "./HMMER/HMMERResaultView"
import HelpWindow from "./HMMER/HMMERHelp"
import ReferenceWindow from "./HMMER/HMMERReference"
import SuccessWindow from "./HMMER/HMMERSuccess"
import ErrorWindow from "./HMMER/HMMERError"
import LoadingWindow from "./HMMER/HMMERLoading"

function getModalStyle() {
    const width = 930;
    const top = 40;
    return {
        top: `${top}px`,
        left: `calc((100% - ${width}px)/2)`,
        height: "fit-content",
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
        width: 930,
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
}));

export default function HMMERModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const open = props.open;
    const handleClose = props.handleClose;
    const [window, setWindow] = React.useState("view");

    //para la evaluación de qué pantalla usar
    function ChangeWindow({ theWindow }) {
        if (theWindow === "reference") {
            return <ReferenceWindow handleClose={handleClose} showHMMERWindow={showHMMERWindow} />;
        } else if (theWindow === "help") {
            return <HelpWindow handleClose={handleClose} showHMMERWindow={showHMMERWindow} />;
        } else if (theWindow === "resault") {
            return <HMMERResault handleClose={handleClose} showHMMERWindow={showHMMERWindow} />;
        }
        else {
            return <HMMERWindow handleClose={handleClose} showHMMERResaultWindow={showHMMERResaultWindow} />;
        }
    }

    const showReferenceWindow = () => {
        setWindow("reference");
    };

    const showHelpWindow = () => {
        setWindow("help");
    };

    const showHMMERResaultWindow = () => {
        setWindow("resault");
    };

    const showHMMERWindow = () => {
        setWindow("view");
    };

    return (
        <div>
            <Modal
                //className="modal-lg"
                modalClassName="bd-example-modal-lg"
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <Toolbar style={{ padding: "0px" }}>
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
                            HMMER
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