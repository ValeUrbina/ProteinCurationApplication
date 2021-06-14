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
    const [nextDUF, setNextDUF] = React.useState("DUF6536");

    const changeValue = (e, setter) => {
        setter(e.target.value);
    }

    function CloseWindow() {
        setNextDUF("");
        handleClose();
    }

    return (
        <Form className={classes.formStyle}>
            <div className={classes.labelStyle}>
                <TextField className={classes.inputStyle}
                    disabled
                    placeholder=""
                    required={true}
                    variant="outlined"
                    value={"New DUF generated: " + nextDUF}
                    type="text"
                    onChange={(e) => {
                        changeValue(e, setNextDUF);
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
                        Close
                    </Button>
                </Grid>
            </Grid>
        </Form>
    );
}