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
    const [missing, setMissing] = React.useState("");
    const [missingAcc, setMissingAcc] = React.useState("");
    const [foundAcc, setFoundAcc] = React.useState("");
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
                            rows={10}
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
                            rows={10}
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
                        Close
                    </Button>
                </Grid>
            </Grid>
        </Form>
    );
}