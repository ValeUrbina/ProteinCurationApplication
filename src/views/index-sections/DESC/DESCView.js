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
    const [DESC, setDESC] = React.useState("");

    const changeValue = (e, setter) => {
        setter(e.target.value);
    }

    function CloseWindow() {
        setDESC("");
        handleClose();
    }

    return (
        <Form className={classes.formStyle}>
            <div className={classes.labelStyle}>
                <TextField className={classes.inputStyle}
                    multiline
                    rows={17}
                    placeholder=""
                    required={true}
                    variant="outlined"
                    value={DESC}
                    type="text"
                    onChange={(e) => {
                        changeValue(e, setDESC);
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
            </Grid>
        </Form>
    );
}