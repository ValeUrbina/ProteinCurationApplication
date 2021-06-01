import React from "react";
// reactstrap components
import { Button, Form, TabContent, TabPane, NavItem, NavLink, Nav, } from "reactstrap";
//materialui components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
//import SaveService from "../../../services/save.service";

const useStyles = makeStyles((theme) => ({
    formStyle: {
        padding: "0px 100px 0px 100px",
    },
    labelStyle: {
        padding: "10px 0px 20px 0px",
        fontSize: 15,
    },
    inputStyle: {
        padding: "10px 0px 20px 0px",
        width: 550,
    },
}));


export default function View(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const [curatorID, setCuratorID] = React.useState("");
    const [fileName, setFileName] = React.useState("");
    const [pfamCode, setPfamCode] = React.useState("");
    const [operationID, setOperationID] = React.useState("Project1-12345-4u4bA");
    const [activeTab, setActiveTab] = React.useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const changeValue = (e, setter) => {
        setter(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        handleClose();
    };

    function CloseWindow() {
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
                                onClick={() => {
                                    toggle("1");
                                }}
                            >
                                New Project
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={activeTab === "2" ? "active" : ""}
                                onClick={() => {
                                    toggle("2");
                                }}
                            >
                                Saved Project
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
            <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                    <div className={classes.labelStyle}>
                        <Grid container justify="center" alignItems="center" >
                            <br />
                            <TextField className={classes.inputStyle}
                                placeholder="Curator ID"
                                label="Curator ID"
                                variant="outlined"
                                value={curatorID}
                                type="text"
                                onChange={(e) => {
                                    changeValue(e, setCuratorID);
                                }}
                            />
                            <br />
                            <TextField className={classes.inputStyle}
                                placeholder="File name"
                                label="File name"
                                variant="outlined"
                                value={fileName}
                                type="text"
                                onChange={(e) => {
                                    changeValue(e, setFileName);
                                }}
                            />
                            <br />
                            <TextField className={classes.inputStyle}
                                placeholder="Pfam Code"
                                label="Pfam Code"
                                variant="outlined"
                                value={pfamCode}
                                type="text"
                                onChange={(e) => {
                                    changeValue(e, setPfamCode);
                                }}
                            />
                        </Grid>
                        <Grid container justify="center" alignItems="center" spacing={8} style={{ padding: "40px 0px 10px 0px" }} >
                            <Grid item>
                                <Button
                                    className="btn-round mr-1"
                                    color="default"
                                    type="button"
                                    style={{ width: "100px" }}
                                    onClick={e => onSubmit(e)}
                                >
                                    Go
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </TabPane>
                <TabPane tabId="2">
                    <div className={classes.labelStyle}>
                        <Grid container justify="center" alignItems="center" spacing={8} style={{ padding: "40px 0px 10px 0px" }}>
                            <Grid item className={classes.labelStyle} style={{ width: "100%" }}>
                                {"Enter the temporary operation ID to resume work"}
                            </Grid>
                            <Grid item>
                                <TextField className={classes.inputStyle}
                                    placeholder="Operation ID"
                                    label="Operation ID"
                                    variant="outlined"
                                    value={operationID}
                                    type="text"
                                    onChange={(e) => {
                                        changeValue(e, setOperationID);
                                    }}
                                />
                            </Grid>
                            <Grid container justify="center" spacing={8} style={{ padding: "40px" }} >
                                <Grid item>
                                    <Button
                                        className="btn-round mr-1"
                                        color="default"
                                        type="button"
                                        style={{ width: "100px" }}
                                        onClick={(e) => CloseWindow()}
                                    >
                                        Go
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </TabPane>
            </TabContent>
        </Form>
    );
}