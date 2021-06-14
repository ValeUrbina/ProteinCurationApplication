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
import EfetchWindow from "./efetch/EfetchView"
import HelpWindow from "./efetch/EfetchHelp"
import ReferenceWindow from "./efetch/EfetchReference"
import ResaultWindow from "./efetch/EfetchResaultView"
import ErrorWindow from "./efetch/EfetchError"
import LoadingWindow from "./efetch/EfetchLoading"

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
        marginBottom: "30px",
    },
}));

export default function EfetchModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const open = props.open;
    const handleClose = props.handleClose;
    const [window, setWindow] = React.useState("view");

    //para la evaluación de qué pantalla usar
    function ChangeWindow({ theWindow }) {
        if (theWindow == "reference") {
            return <ReferenceWindow handleClose={handleClose} showEfetchWindow={showEfetchWindow} />;
        } else if (theWindow == "help") {
            return <HelpWindow handleClose={handleClose} showEfetchWindow={showEfetchWindow} />;
        } else if (theWindow == "resault") {
            return <ResaultWindow handleClose={handleClose} showEfetchWindow={showEfetchWindow} />;
        }
        else {
            return <EfetchWindow handleClose={handleClose} showEfetchResaultWindow={showEfetchResaultWindow} />;
        }
    }

    const showReferenceWindow = () => {
        setWindow("reference");
    };

    const showHelpWindow = () => {
        setWindow("help");
    };

    const showEfetchResaultWindow = () => {
        setWindow("resault");
    };

    const showEfetchWindow = () => {
        setWindow("view");
    };

    return (
        <div>
            <Modal
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
                            efetch
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