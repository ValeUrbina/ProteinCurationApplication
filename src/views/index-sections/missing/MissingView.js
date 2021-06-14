import React from "react";
// reactstrap components
import { Button, Form, TabContent, TabPane, NavItem, NavLink, Nav, } from "reactstrap";
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
    highlighted: {
        fontWeight: "bold",
    }
}));

const output = `0 Missing, 19 Found. No missing sequences compared to svn copy.`

const found = `A0A127ASD8.1 found
A0A1C3TJE2.1 found
A0A1C3TJG8.1 found
A0A1C3TJH2.1 found
A0A1C3TJI9.1 found
A0A1C3TJJ8.1 found
A0A1C3TMZ5.1 found
A0A1C3TRD8.1 found
A0A1C3TRE4.1 found
A0A1H8NV41.1 found
A0A1H8R289.1 found
A0A1S2LE79.1 found
A0A401SEB8.1 found
A0A453R5B1.1 found
A0A453R5H8.1 found
A0A453R5I3.1 found
A0A453R5P2.1 found
C3VPR6.2 found
F7GIT5.1 found
`
const missings = `No missings sequences`

export default function View(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const [missing, setMissing] = React.useState(output);
    const [missingAcc, setMissingAcc] = React.useState(missings);
    const [foundAcc, setFoundAcc] = React.useState(found);
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
            <div className={classes.labelStyle}>
                <TextField className={classes.inputStyle}
                    disabled
                    placeholder=""
                    required={true}
                    variant="outlined"
                    value={missing}
                    type="text"
                />
            </div>
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
                                Missing accession numbers
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
                                Found accession numbers
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
                            rows={12}
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
                            disabled
                            multiline
                            rows={12}
                            placeholder=""
                            required={true}
                            variant="outlined"
                            value={foundAcc}
                            type="text"
                        />
                    </div>
                </TabPane>
            </TabContent>
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
                        Close
                    </Button>
                </Grid>
            </Grid>
        </Form>
    );
}