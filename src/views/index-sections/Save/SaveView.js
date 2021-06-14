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
        width: 590,
    },
}));


export default function View(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const [opID, setOpID] = React.useState("Project1-12345-4u4bA");
    const [activeTab, setActiveTab] = React.useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const changeValue = (e, setter, setErr) => {
        setter(e.target.value);
        setErr("");
    }


    const onSubmit = e => {
        e.preventDefault();
        //Aqui va el servicio
        /* UsuariosService.modificarUsuarios(user).then(response => {
            props.onActualizar();
            setUsuarioErr("");
            setNombreErr("");
            setApellidoErr("");
            setCorreoErr("");
            handleClose();
            console.log(response.data);
        })
            .catch(() => {
                console.log('Error al editar el usuario')
            }); */
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
                                style={activeTab === "1" ? { fontWeight: "bold" } : {}}
                                onClick={() => {
                                    toggle("1");
                                }}
                            >
                                Save Temp seed
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
                                Download seed
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
            <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                    <div className={classes.labelStyle}>
                        <Grid container justify="center">
                            <Grid item className={classes.labelStyle}>
                                {`Temporarily save your project for up to 6 days. 
                                By selecting Save, the operation ID and the SEED file 
                                will be sent to the email provided during project creation. 
                                To continue working later, use the operation ID below.`}
                            </Grid>
                            <Grid item className={classes.labelStyle} style={{ fontWeight: "bold" }}>
                                {"Operation ID: " + opID}
                            </Grid>
                        </Grid>
                        <Grid container justify="center" alignItems="center" spacing={8} style={{ padding: "40px 0px 10px 0px" }} >
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
                                    onClick={e => onSubmit(e)}
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </TabPane>
                <TabPane tabId="2">
                    <div className={classes.labelStyle}>
                        <Grid container justify="center" alignItems="center" spacing={8} style={{ padding: "40px 0px 10px 0px" }}>
                            <Grid item className={classes.labelStyle} style={{ width: "100%" }}>
                                {"Download the seed file to your personal computer"}
                            </Grid>
                            <Grid container justify="center" spacing={8} style={{ padding: "25px" }} >
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
                                        style={{ width: "120px" }}
                                    >
                                        Download
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