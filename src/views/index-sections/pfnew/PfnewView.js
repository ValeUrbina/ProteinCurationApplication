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
    tagStyle: {
        fontSize: 20,
        padding: "5px 0px 5px 0px",
        fontWeight: "bold",
    },
    checkbStyle: {
        fontSize: 18,
        padding: "10px 0px 10px 0px",
    },
}));


export default function View(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const [accNumber, setaccNumber] = React.useState("");
    const [accNumberErr, setaccNumberErr] = React.useState("");

    const changeValue = (e, setter, setErr) => {
        setter(e.target.value);
        setErr("");
    }

    function CloseWindow() {
        setaccNumber("");
        setaccNumberErr("");
        handleClose();
    }

    return (
        <Form className={classes.formStyle}>

            <div className={classes.labelStyle}>
                <label>Accession number: </label>
                <br />
                <TextField className={classes.inputStyle}
                    placeholder=""
                    error={accNumberErr !== ""}
                    required={true}
                    helperText={accNumberErr}
                    variant="outlined"
                    value={accNumber}
                    type="text"
                    onChange={(e) => {
                        changeValue(e, setaccNumber, setaccNumberErr);
                    }}
                />
            </div>
            <div className={classes.tagStyle}>
                <label>Options:</label>
            </div>
            <div className={classes.checkbStyle}>
                <FormGroup check>
                    <Label check >
                        <Input id="exampleCheck1" defaultValue="-i" value="-i" name="exampleCheck" type="checkbox" />
                        {"Ignore some of the QC steps to speed up check-in (-i)"}
                        <span className="form-check-sign">
                            <span className="check"></span>
                        </span>
                    </Label>
                </FormGroup>
                {/* <FormGroup check>
                    <Label check>
                        <Input id="exampleCheck1" defaultValue="-m" value="-m" name="exampleCheck" type="checkbox" defaultChecked />
                        {"Specify the message that describes the changes you have made to this family (-m)"}
                        <span className="form-check-sign">
                            <span className="check"></span>
                        </span>
                    </Label>
                </FormGroup> */}
                <FormGroup check>
                    <Label check>
                        <Input id="exampleCheck1" defaultValue="-add_to_clan" value="-add_to_clan" name="exampleCheck" type="checkbox" />
                        {"Add the family to the clan specified on the CL line of the DESC file (-add_to_clan)"}
                        <span className="form-check-sign">
                            <span className="check"></span>
                        </span>
                    </Label>
                </FormGroup>
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