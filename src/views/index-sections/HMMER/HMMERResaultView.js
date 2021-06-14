import React from "react";
// reactstrap components
import { Button, Form, TabContent, TabPane, NavItem, NavLink, Nav, } from "reactstrap";
//materialui components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    formStyle: {
        padding: "0px 80px 0px 80px",
    },
    labelStyle: {
        padding: "10px 0px 20px 0px",
        fontSize: 14,
    },
    inputStyle: {
        width: 700,
    },
}));

const test = `#                                                                            --- full sequence --- -------------- this domain -------------   hmm coord   ali coord   env coord
# target name        accession   tlen query name           accession   qlen   E-value  score  bias   #  of  c-Evalue  i-Evalue  score  bias  from    to  from    to  from    to  acc description of target
#------------------- ---------- ----- -------------------- ---------- ----- --------- ------ ----- --- --- --------- --------- ------ ----- ----- ----- ----- ----- ----- ----- ---- ---------------------
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8   1  37   4.3e-09    0.0017   30.2   1.2     4    33   240   269   239   269 0.95 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8   2  37       5.8   2.3e+06    1.0   0.2     3    31   304   334   303   336 0.86 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8   3  37   1.7e-10   6.8e-05   34.7   0.0     2    33   337   370   336   370 0.98 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8   4  37   1.3e-22   5.3e-17   73.4   0.6     1    33   371   404   371   404 0.99 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8   5  37   3.5e-22   1.4e-16   72.1   0.4     2    33   406   438   405   438 0.99 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8   6  37   1.7e-22   6.8e-17   73.1   0.7     1    33   439   472   439   472 0.98 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8   7  37   3.9e-22   1.5e-16   71.9   0.7     1    33   473   506   473   506 0.98 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8   8  37   1.9e-22   7.6e-17   72.9   0.5     2    33   508   540   507   540 0.98 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8   9  37   2.2e-20   8.8e-15   66.3   0.3     1    33   541   574   541   574 0.98 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8  10  37   1.9e-21   7.5e-16   69.7   0.5     1    33   575   608   575   608 0.99 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8  11  37   1.3e-22     5e-17   73.5   0.5     1    33   609   642   609   642 0.99 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8  12  37   3.5e-22   1.4e-16   72.1   0.4     2    33   644   676   643   676 0.99 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8  13  37   1.3e-22   5.3e-17   73.4   0.3     1    33   677   710   677   710 0.98 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8  14  37   1.3e-22   5.3e-17   73.4   0.6     1    33   711   744   711   744 0.99 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8  15  37   8.1e-21   3.2e-15   67.7   1.6     2    33   746   778   745   778 0.98 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8  16  37   9.6e-22   3.8e-16   70.7   0.6     1    33   779   812   779   812 0.98 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8  17  37   9.5e-23   3.8e-17   73.9   1.0     1    33   813   846   813   846 0.99 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8  18  37   1.8e-22     7e-17   73.0   0.9     1    33   847   880   847   880 0.99 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8  19  37   1.3e-22     5e-17   73.5   0.5     1    33   881   914   881   914 0.99 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8  20  37   1.3e-22   5.3e-17   73.4   0.3     1    33   915   948   915   948 0.98 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8  21  37   1.3e-22   5.3e-17   73.4   0.3     1    33   949   982   949   982 0.98 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8  22  37   7.8e-22   3.1e-16   70.9   0.4     1    33   983  1016   983  1016 0.98 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8  23  37   1.1e-19   4.4e-14   64.1   4.0     1    33  1017  1056  1017  1056 0.97 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}
Q5GYF3.1             -           1790 ALIGN                -             33         0 2257.2 257.8  24  37   7.8e-21   3.1e-15   67.8   1.0     1    33  1057  1090  1057  1090 0.99 Q5GYF3_XANOR Avirulence protein {ECO:0000313|EMBL:AAW76268.1}`

export default function View(props) {
    const classes = useStyles();
    const showHMMERWindow = props.showHMMERWindow;
    const handleClose = props.handleClose;
    const [missing, setMissing] = React.useState("");
    const [missingAcc, setMissingAcc] = React.useState("");
    const [foundAcc, setFoundAcc] = React.useState(test);
    const [activeTab, setActiveTab] = React.useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    function CloseWindow() {
        setMissing("");
        setMissingAcc("");
        setFoundAcc("");
        handleClose();
    }

    return (
        <Form className={classes.formStyle}>
            <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                    <Nav id="tabs" role="tablist" tabs>
                        <NavItem>
                            <NavLink
                                className={activeTab === "1" ? "active" : ""}
                                style={activeTab === "1" ? { fontWeight: "bold" } : {}}
                                onClick={() => {
                                    toggle("1");
                                }}
                            >
                                Taxonomy
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={activeTab === "2" ? "active" : ""}
                                style={activeTab === "2" ? { fontWeight: "bold" } : {}}
                                onClick={() => {
                                    toggle("2");
                                }}
                            >
                                Domain
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
            <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                    <div className={classes.labelStyle}>
                        <TextField className={classes.inputStyle}
                            disabled
                            multiline
                            rows={17}
                            placeholder=""
                            required={true}
                            variant="outlined"
                            value={missingAcc}
                            type="text"
                        />
                    </div>
                </TabPane>
                <TabPane tabId="2">
                    <div className={classes.labelStyle}>
                        <TextField className={classes.inputStyle}
                            inputProps={{ style: { fontSize: 12 } }}
                            disabled
                            multiline
                            rows={17}
                            placeholder=""
                            required={true}
                            variant="outlined"
                            value={foundAcc}
                            type="text"
                        />
                    </div>
                </TabPane>
            </TabContent>
            <Grid container justify="center" spacing={8} style={{ padding: "25px" }}>
                <Grid item>
                    <Button
                        className="btn-round mr-1"
                        color="primary"
                        outline
                        type="button"
                        onClick={(e) => showHMMERWindow()}
                    >
                        Return
                    </Button>
                </Grid>
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