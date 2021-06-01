import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//materialui components
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const useStyles = makeStyles((theme) => ({
    formStyle: {
        padding: "0px 100px 0px 100px",
    },
    loadingStyle: {
        color: "dodgerblue",
        fontWeight: "bold",
        fontSize: "large",
        textAlign: "center",
    },
}));


export default function ErrorWindow(props) {
    const classes = useStyles();

    return (
        <Grid className={classes.formStyle}>
            <div style={{ textAlign: "center" }}>
                <ErrorOutlineIcon
                    style={{ color: "orangered", fontSize: "xxx-large" }}
                />
            </div>
            <div
                className={classes.loadingStyle}
                style={{ padding: "50px 0px 10px 0px", color: "orangered" }}
            >
                An unexpected error has occurred in the create_alignment service
        </div>
            <div
                className={classes.loadingStyle}
                style={{ padding: "10px 0px 80px 0px", color: "orangered" }}
            >
                Please contact technical service
        </div>
        </Grid>
    );
}