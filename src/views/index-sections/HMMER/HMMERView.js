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
        width: 265,
    },
}));

export default function View(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const showHMMERResaultWindow = props.showHMMERResaultWindow;
    const [significanceSeq, setSignificanceSeq] = React.useState(0.01);
    const [significanceHit, setSignificanceHit] = React.useState(0.03);
    const [significanceSeqErr, setSignificanceSeqErr] = React.useState("");
    const [significanceHitErr, setSignificanceHitErr] = React.useState("");
    const [reportSeq, setReportSeq] = React.useState(1);
    const [reportHit, setReportHit] = React.useState(1);
    const [reportSeqErr, setReportSeqErr] = React.useState("");
    const [reportHitErr, setReportHitErr] = React.useState("");

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
        setSignificanceSeq("");
        setSignificanceHit("");
        setReportSeq("");
        setReportHit("");
        setSignificanceSeqErr("");
        setSignificanceHitErr("");
        setReportSeqErr("");
        setReportHitErr("");
        handleClose();
    }

    return (
        <Form className={classes.formStyle}>
            <div className={classes.labelStyle}>
                <label style={{ marginBottom: "15px" }}>Significance e-values:</label>
                <br />
                <Grid container direction="row" justify="flex-start" alignItems="center" spacing={5}>
                    <Grid item>
                        <TextField className={classes.inputStyle}
                            label="Sequence"
                            placeholder="0.01"
                            error={significanceSeqErr !== ""}
                            required={true}
                            helperText={significanceSeqErr}
                            variant="outlined"
                            value={significanceSeq}
                            type="text"
                            onChange={(e) => {
                                changeValue(e, setSignificanceSeq, setSignificanceSeqErr);
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField className={classes.inputStyle}
                            label="Hit"
                            placeholder="0.03"
                            error={significanceHitErr !== ""}
                            required={true}
                            helperText={significanceHitErr}
                            variant="outlined"
                            value={significanceHit}
                            type="text"
                            onChange={(e) => {
                                changeValue(e, setSignificanceHit, setSignificanceHitErr);
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
            <div className={classes.labelStyle}>
                <label style={{ marginBottom: "15px" }}>Report e-values:</label>
                <br />
                <Grid container direction="row" justify="flex-start" alignItems="center" spacing={5}>
                    <Grid item>
                        <TextField className={classes.inputStyle}
                            label="Sequence"
                            placeholder="1"
                            error={reportSeqErr !== ""}
                            required={true}
                            helperText={reportSeqErr}
                            variant="outlined"
                            value={reportSeq}
                            type="text"
                            onChange={(e) => {
                                changeValue(e, setReportSeq, setReportSeqErr);
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField className={classes.inputStyle}
                            label="Hit"
                            placeholder="1"
                            error={reportHitErr !== ""}
                            required={true}
                            helperText={reportHitErr}
                            variant="outlined"
                            value={reportHit}
                            type="text"
                            onChange={(e) => {
                                changeValue(e, setReportHit, setReportHitErr);
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
            <div className={classes.labelStyle}>
                <label style={{ marginBottom: "15px" }}>Sequence Database:</label>
                <br />
                <TextField style={{ width: "570px" }}
                    disabled
                    variant="outlined"
                    value={"pfamseq"}
                    type="text"
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
                        onClick={(e) => showHMMERResaultWindow()}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
        </Form>
    );
}