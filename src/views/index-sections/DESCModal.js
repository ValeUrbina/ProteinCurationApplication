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
import DESCWindow from "./DESC/DESCView"
import HelpWindow from "./DESC/DESCHelp"
import ReferenceWindow from "./DESC/DESCReference"

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
        marginBottom: "50px",
    },
}));

export default function SPCleanerModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const open = props.open;
    const handleClose = props.handleClose;
    const [references, showReferences] = React.useState(false);
    const [help, showHelp] = React.useState(false);

    //para la evaluación de qué pantalla usar
    function ChangeWindow({ isReference, isHelp }) {
        if (isReference) {
            return <ReferenceWindow handleClose={handleClose} showDESCWindow={showDESCWindow} />;
        } else if (isHelp) {
            return <HelpWindow handleClose={handleClose} showDESCWindow={showDESCWindow} />;
        } else {
            return <DESCWindow handleClose={handleClose} />;
        }
    }

    const showReferenceWindow = () => {
        showReferences(true);
        showHelp(false);
    };

    const showHelpWindow = () => {
        showHelp(true);
        showReferences(false);
    };

    const showDESCWindow = () => {
        showReferences(false);
        showHelp(false);
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
                            DESC
                        </Grid>
                    </Grid>
                    <div>
                        <ChangeWindow isReference={references} isHelp={help} />
                    </div>
                </div>
            </Modal>
        </div>
    );
}