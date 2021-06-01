import React from "react";
// reactstrap components
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
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
    const [sequence, setSequence] = React.useState(0.0);
    const [domain, setDomain] = React.useState(0.0);
    const [evalue, setEvalue] = React.useState(0.01);
    const [sequenceErr, setSequenceErr] = React.useState("");
    const [domainErr, setDomainErr] = React.useState("");
    const [evalueErr, setEvalueErr] = React.useState("");

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
        setSequence("");
        setDomain("");
        setEvalue("");
        setSequenceErr("");
        setDomainErr("");
        setEvalueErr("");
        handleClose();
    }

    return (
        <Form className={classes.formStyle}>
            <FormGroup check>
                <Label check >
                    <Input id="exampleCheck1" defaultValue="-i" value="-i" name="exampleCheck" type="checkbox" />
                    {"Remove ED lines that do not correspond to a valid HMM unit, or that have out of range co-ordinates"}
                    <span className="form-check-sign">
                        <span className="check"></span>
                    </span>
                </Label>
            </FormGroup>
            <div className={classes.labelStyle}>
                <label>{"Sequence threshold (-T):"}</label>
                <br />
                <TextField className={classes.inputStyle}
                    placeholder="0.65"
                    error={sequenceErr !== ""}
                    required={true}
                    helperText={sequenceErr}
                    variant="outlined"
                    value={sequence}
                    type="text"
                    onChange={(e) => {
                        changeValue(e, setSequence, setSequenceErr);
                    }}
                />
            </div>
            <div className={classes.labelStyle}>
                <label>{"Domain threshold (-t): "}</label>
                <br />
                <TextField className={classes.inputStyle}
                    placeholder="0.65"
                    error={domainErr !== ""}
                    required={true}
                    helperText={domainErr}
                    variant="outlined"
                    value={domain}
                    type="text"
                    onChange={(e) => {
                        changeValue(e, setDomain, setDomainErr);
                    }}
                />
            </div>
            <div className={classes.labelStyle}>
                <label>{"Evalue based Domain threshold (-e): "}</label>
                <br />
                <TextField className={classes.inputStyle}
                    placeholder="0.65"
                    error={evalueErr !== ""}
                    required={true}
                    helperText={evalueErr}
                    variant="outlined"
                    value={evalue}
                    type="text"
                    onChange={(e) => {
                        changeValue(e, setEvalue, setEvalueErr);
                    }}
                />
            </div>
            <Grid
                container
                justify="center"
                spacing={8}
                style={{ padding: "40px" }}
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