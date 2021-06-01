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
}));


export default function View(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const [cutoffcutoff, setCutoff] = React.useState("");
    const [sequenceScore, setSequenceScore] = React.useState("");
    const [domainScore, setDomainScore] = React.useState("");
    const [activeTab, setActiveTab] = React.useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    function CloseWindow() {
        setCutoff("");
        setSequenceScore("");
        setDomainScore("");
        handleClose();
    }

    return (
        <Form className={classes.formStyle}>
            <div className={classes.labelStyle}>
                <label>For the e-value 0.01 the cut-off point is:</label>
                <br />
                <TextField className={classes.inputStyle}
                    disabled
                    multiline
                    rows={4}
                    placeholder=""
                    required={true}
                    variant="outlined"
                    value={cutoffcutoff}
                    type="text"
                />
            </div>
            <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                    <Nav id="tabs" role="tablist" tabs>
                        <NavItem>
                            <NavLink
                                className={activeTab === "1" ? "active" : ""}
                                onClick={() => {
                                    toggle("1");
                                }}
                            >
                                Sequence scores
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={activeTab === "2" ? "active" : ""}
                                onClick={() => {
                                    toggle("2");
                                }}
                            >
                                Domain scores
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
                            rows={10}
                            placeholder=""
                            required={true}
                            variant="outlined"
                            value={sequenceScore}
                            type="text"
                        />
                    </div>
                </TabPane>
                <TabPane tabId="2">
                    <div className={classes.labelStyle}>
                        <TextField className={classes.inputStyle}
                            disabled
                            multiline
                            rows={10}
                            placeholder=""
                            required={true}
                            variant="outlined"
                            value={domainScore}
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