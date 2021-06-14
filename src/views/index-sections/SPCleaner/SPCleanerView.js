import React from "react";
// reactstrap components
import { Button, Form } from "reactstrap";
//materialui components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    formStyle: {
        padding: "0px 100px 0px 100px",
    },
    labelStyle: {
        padding: "10px 0px 20px 0px",
        fontSize: 14,
    },
    inputStyle: {
        width: 590,
    },
}));


export default function View(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const [importance, setImportance] = React.useState(0.65);
    const [emptiness, setEmptiness] = React.useState(0.9);
    const [blossum, setBlossum] = React.useState(0.5);
    const [importanceErr, setImportanceErr] = React.useState("");
    const [emptinessErr, setEmptinessErr] = React.useState("");
    const [blossumErr, setBlossumErr] = React.useState("");

    const changeValue = (e, setter, setErr) => {
        if (isNaN(e.target.value)) {
            setErr("The value must be numeric");
        } else if (e.target.value > 1) {
            setErr("The value must be less than 1");
        } else if (e.target.value < 0) {
            setErr("The value must be greater than 0");
        } else {
            setter(e.target.value);
            setErr("");
        }
    }

    function CloseWindow() {
        setImportance("");
        setEmptiness("");
        setBlossum("");
        setImportanceErr("");
        setEmptinessErr("");
        setBlossumErr("");
        handleClose();
    }

    return (
        <Form className={classes.formStyle}>
            <div className={classes.labelStyle}>
                <label>Percentage of important aminoacids in the sequence:</label>
                <br />
                <TextField className={classes.inputStyle}
                    placeholder="0.65"
                    error={importanceErr !== ""}
                    required={true}
                    helperText={importanceErr}
                    variant="outlined"
                    value={importance}
                    type="text"
                    onChange={(e) => {
                        changeValue(e, setImportance, setImportanceErr);
                    }}
                />
            </div>
            <div className={classes.labelStyle}>
                <label>Maximum emptiness percentage allowed:</label>
                <br />
                <TextField className={classes.inputStyle}
                    placeholder="0.65"
                    error={emptinessErr !== ""}
                    required={true}
                    helperText={emptinessErr}
                    variant="outlined"
                    value={emptiness}
                    type="text"
                    onChange={(e) => {
                        changeValue(e, setEmptiness, setEmptinessErr);
                    }}
                />
            </div>
            <div className={classes.labelStyle}>
                <label>Blossum level:</label>
                <br />
                <TextField className={classes.inputStyle}
                    placeholder="0.65"
                    error={blossumErr !== ""}
                    required={true}
                    helperText={blossumErr}
                    variant="outlined"
                    value={blossum}
                    type="text"
                    onChange={(e) => {
                        changeValue(e, setBlossum, setBlossumErr);
                    }}
                />
            </div>
            <Grid
                container
                justify="center"
                spacing={8}
                style={{ padding: "25px" }}
            >
                <Grid item>
                    <Button
                        className="btn-round mr-1"
                        color="default"
                        outline
                        type="button"
                        style={{ width: "90px" }}
                        onClick={(e) => CloseWindow()}
                    >
                        Cancel
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        className="btn-round mr-1"
                        color="default"
                        type="button"
                        style={{ width: "90px" }}
                    >
                        Run
                    </Button>
                </Grid>
            </Grid>
        </Form>
    );
}