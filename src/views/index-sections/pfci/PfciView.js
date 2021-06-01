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
        padding: "10px 0px 10px 0px",
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
        fontSize: 14,
        padding: "10px 0px 10px 0px",
    },
}));


export default function View(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const [pfcode, setPfcode] = React.useState("");
    const [comment, setComment] = React.useState("");

    const changeValue = (e, setter) => {
        setter(e.target.value);
    }

    function CloseWindow() {
        setPfcode("");
        setComment("");
        handleClose();
    }

    return (
        <Form className={classes.formStyle}>

            <div className={classes.labelStyle}>
                <label>Family name: </label>
                <br />
                <TextField className={classes.inputStyle}
                    required={true}
                    variant="outlined"
                    value={pfcode}
                    type="text"
                    onChange={(e) => {
                        changeValue(e, setPfcode);
                    }}
                />
            </div>
            <div className={classes.labelStyle}>
                <label>Message that describe the changes: </label>
                <br />
                <TextField className={classes.inputStyle}
                    multiline
                    rows={3}
                    required={false}
                    variant="outlined"
                    value={comment}
                    type="text"
                    onChange={(e) => {
                        changeValue(e, setComment);
                    }}
                />
            </div>
            <div className={classes.tagStyle}>
                <label>Options:</label>
            </div>
            <div className={classes.checkbStyle}>
                <FormGroup check>
                    <Label check >
                        <Input id="exampleCheck1" defaultValue="-add_to_clan" value="-add_to_clan" name="exampleCheck" type="checkbox" defaultChecked />
                        {"Add the family to the clan specified on the CL line of the DESC file (-add_to_clan)"}
                        <span className="form-check-sign">
                            <span className="check"></span>
                        </span>
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input id="exampleCheck1" defaultValue="-onlydesc" value="-onlydesc" name="exampleCheck" type="checkbox" />
                        {"Speeds up check-ins a bit by avoiding the QC and onyl updating the contents (-onlydesc)"}
                        <span className="form-check-sign">
                            <span className="check"></span>
                        </span>
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input id="exampleCheck1" defaultValue="-remove_from_clan" value="-remove_from_clan" name="exampleCheck" type="checkbox" />
                        {"Remove the clan family from the clan. The CL line should have already been deleted from the DESC file (-remove_from_clan)"}
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
                style={{ padding: "20px" }}
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