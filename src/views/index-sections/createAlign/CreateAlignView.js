import React from "react";
// reactstrap components
import { Button, Form, Label, Input } from "reactstrap";
//materialui components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    formStyle: {
        padding: "0px 100px 0px 100px",
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

    const changeValue = (e, setter, value) => {
        setter(e.target.value);
    }

    function CloseWindow() {
        setMethod("");
        handleClose();
    }

    return (
        <Form className={classes.formStyle}>

            <div className={classes.tagStyle}>
                <label>Alignment method:</label>
            </div>
            <div className={classes.radiobStyle}>
                <div className="form-check-radio">
                    <Label check>
                        <Input defaultValue="option1" id="exampleRadios1" name="exampleRadios" type="radio" />
                        {"MAFFT (-m)"}
                        <span className="form-check-sign" />
                    </Label>
                </div>
                <div className="form-check-radio">
                    <Label check>
                        <Input defaultValue="option2" id="exampleRadios2" name="exampleRadios" type="radio" />
                        {"Muscle alignment (-mu) "}
                        <span className="form-check-sign" />
                    </Label>
                </div>
                <div className="form-check-radio">
                    <Label check>
                        <Input defaultChecked defaultValue="option3" id="exampleRadios3" name="exampleRadios" type="radio" />
                        {"Muscle progressive-alignment (-mup)"}
                        <span className="form-check-sign" />
                    </Label>
                </div>
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