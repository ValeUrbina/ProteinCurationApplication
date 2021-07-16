import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//materialui components
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor:
            theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: "#1a90ff",
    },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
    formStyle: {
        padding: "0px 100px 0px 100px",
    },
    root: {
        flexGrow: 1,
    },
    loadingStyle: {
        color: "dodgerblue",
        fontWeight: "bold",
        fontSize: "large",
        textAlign: "center",
    },
}));

function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <BorderLinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

export default function LoadingWindow(props) {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);
    const handleClose = props.handleClose;

    React.useEffect(() => {
        //esto debe ser reemplazado por el verdadero progreso
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? handleClose() : prevProgress + 25
            );
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Grid className={classes.formStyle}>
            <div className={classes.root}>
                <LinearProgressWithLabel value={progress} />
            </div>
            <div
                className={classes.loadingStyle}
                style={{ padding: "30px 0px 10px 0px" }}
            >
                Loading the project, this may take a few seconds
            </div>
        </Grid>
    );
}