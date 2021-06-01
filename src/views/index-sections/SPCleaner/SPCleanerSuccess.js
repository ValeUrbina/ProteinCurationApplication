import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//materialui components
import CheckIcon from "@material-ui/icons/Check";

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

export default function SuccessWindow(props) {
    const classes = useStyles();

    return (
        <Grid className={classes.formStyle}>
            <div style={{ textAlign: "center" }}>
                <CheckIcon style={{ color: "yellowgreen", fontSize: "xxx-large" }} />
            </div>
            <div
                className={classes.loadingStyle}
                style={{ padding: "50px 0px 80px 0px", color: "yellowgreen" }}
            >
                SPCleaner executed successfully
        </div>
        </Grid>
    );
}