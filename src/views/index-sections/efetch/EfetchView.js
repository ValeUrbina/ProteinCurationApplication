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
            <Grid className={classes.labelStyle}>
                {`Enter an accession number to continue. Accession number example: A0A0F7PB78 `}
            </Grid>
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