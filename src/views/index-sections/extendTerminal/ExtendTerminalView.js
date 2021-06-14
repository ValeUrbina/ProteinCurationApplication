import React from "react";
// reactstrap components
import { Button, Form, Label, Input } from "reactstrap";
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
    tagStyle: {
        fontSize: 20,
        padding: "5px 0px 5px 0px",
        fontWeight: "bold",
    },
    radiobStyle: {
        fontSize: 18,
        padding: "5px 0px 10px 0px",
    },
}));


export default function View(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const [method, setMethod] = React.useState("");
    const [nterminal, setNTerminal] = React.useState();
    const [cterminal, setCTerminal] = React.useState();
    const [nterminalErr, setNTerminalErr] = React.useState("");
    const [cterminalErr, setCTerminalErr] = React.useState("");

    const changeValue = (e, setter, setErr) => {
        if (isNaN(e.target.value)) {
            setErr("The value must be numeric");
        } else {
            setter(e.target.value);
            setErr("");
        }
    }

    function CloseWindow() {
        setMethod("");
        setNTerminal("");
        setCTerminal("");
        setNTerminalErr("");
        setCTerminalErr("");
        handleClose();
    }

    return (
        <Form className={classes.formStyle}>

            <div className={classes.tagStyle}>
                <label>Alignment method:</label>
            </div>
            <div className={classes.radiobStyle}>
                <div className="form-check-radio form-check-inline">
                    <Label check>
                        <Input id="exampleRadios1" defaultValue="-m" value="-m" name="exampleRadios" type="radio" />
                        {"MAFFT (-m)"}
                        <span className="form-check-sign" />
                    </Label>
                </div>
                <div className="form-check-radio form-check-inline">
                    <Label check>
                        <Input defaultChecked id="exampleRadios2" defaultValue="-mu" value="-mu" name="exampleRadios" type="radio" />
                        {"Muscle alignment (-mu) "}
                        <span className="form-check-sign" />
                    </Label>
                </div>
                <div className="form-check-radio form-check-inline">
                    <Label check>
                        <Input id="exampleRadios3" defaultValue="-mup" value="-mup" name="exampleRadios" type="radio" />
                        {"Muscle progressive-alignment (-mup)"}
                        <span className="form-check-sign" />
                    </Label>
                </div>
            </div>
            <div className={classes.labelStyle}>
                <label>N-terminal aminoacids:</label>
                <br />
                <TextField className={classes.inputStyle}
                    placeholder=""
                    error={nterminalErr !== ""}
                    required={true}
                    helperText={nterminalErr}
                    variant="outlined"
                    value={nterminal}
                    type="text"
                    onChange={(e) => {
                        changeValue(e, setNTerminal, setNTerminalErr);
                    }}
                />
            </div>
            <div className={classes.labelStyle}>
                <label>C-terminal aminoacids:</label>
                <br />
                <TextField className={classes.inputStyle}
                    placeholder=""
                    error={cterminalErr !== ""}
                    required={true}
                    helperText={cterminalErr}
                    variant="outlined"
                    value={cterminal}
                    type="text"
                    onChange={(e) => {
                        changeValue(e, setCTerminal, setCTerminalErr);
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