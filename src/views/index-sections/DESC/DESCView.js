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

const test = `ID   TAL_effector
AC   PF03377
PI   Avirulence;
DE   TAL effector repeat
AU   Hirsh L;0000-0002-8215-6716
AU   Tosatto S
AU   Finn RD;0000-0001-8626-2148
AU   Mifsud W;0000-0002-9805-6461
AU   Bateman A;0000-0002-6982-4660
SE   RepeatsDB
GA   28.00 12.90;
TC   28.40 14.40;
NC   27.90 12.80;
BM   hmmbuild  -o /dev/null HMM SEED
SM   hmmsearch -Z 57096847 -E 1000 --cpu 4 HMM pfamseq
TP   Repeat
WK   Transcription activator-like effector
WK   TALE-likes
WK   TAL_effector
CL   CL0020
RN   [1]
RM   11106024
RT   Xanthomonas oryzae pv. oryzae avirulence genes contribute differently
RT   and specifically to pathogen aggressiveness.
RA   Bai J, Choi SH, Ponciano G, Leung H, Leach JE;
RL   Mol Plant Microbe Interact 2000;13:1322-1329.
RN   [2]
RM   22223736
RT   The crystal structure of TAL effector PthXo1 bound to its DNA target.
RA   Mak AN, Bradley P, Cernadas RA, Bogdanove AJ, Stoddard BL;
RL   Science. 2012;335:716-719.
CC   The proteins in this family bind to DNA.  Each repeat binds to a base
CC   pair in a predictable way [2]. The structure shows that each repeat
CC   is composed of two alpha helices [2].`

export default function View(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const [DESC, setDESC] = React.useState(test);

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
                        Save
                    </Button>
                </Grid>
            </Grid>
        </Form>
    );
}