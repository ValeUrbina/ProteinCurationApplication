import React from "react";
//materialui components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
//Para las vistas
import OpenWindow from "./Open/OpenView"
import LoadingNewWindow from "./Open/OpenNewLoading";
import LoadingOldWindow from "./Open/OpenOldLoading";

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
        margin: "50px 0px 40px 0px",
    },
}));

export default function SPCleanerModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [window, setWindow] = React.useState("view");
    const open = props.open;
    const handleClose = props.handleClose;

    //para la evaluación de qué pantalla usar
    function ChangeWindow({ theWindow }) {
        if (theWindow === "loadnew") {
            return <LoadingNewWindow handleClose={handleClose} />;
        } else if (theWindow === "loadold") {
            return <LoadingOldWindow handleClose={handleClose} />;
        } else {
            return <OpenWindow handleClose={handleClose} showNewLoading={showNewLoading} showOldLoading={showOldLoading} />;
        }
    }

    const showOldLoading = () => {
        setWindow("loadnew");
    };

    const showNewLoading = () => {
        setWindow("loadold");
    };

    return (
        <div>
            <Modal
                open={open}
                //onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <Grid container justify="center">
                        <Grid item className={classes.title}>
                            Welcome
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