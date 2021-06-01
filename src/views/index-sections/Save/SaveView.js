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
    const [email, setEmail] = React.useState("");
    const [emailErr, setEmailErr] = React.useState("");
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

    const validate = () => {
        let isError = false;

        if (email.length > 200) {
            isError = true;
            setEmailErr("Please enter a valid email");
        }

        if (email.length < 2) {
            isError = true;
            setEmailErr("Please enter a valid email");
        }

        if (email.indexOf("@") === -1) {
            isError = true;
            setEmailErr("Please enter a valid email");
        }

        return isError;
    };

    const onSubmit = e => {
        e.preventDefault();
        const err = validate();

        if (!err) {
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
        }
    };

    function CloseWindow() {
        setEmail("");
        setEmailErr("");
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
                                Save Temp seed
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={activeTab === "2" ? "active" : ""}
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
                                Enter the email where you want to receive the Operation ID. 
                                To continue working later, use the operation code below.`}
                            </Grid>
                            <Grid item className={classes.labelStyle} style={{ fontWeight: "bold" }}>
                                {"Operation ID: " + opID}
                            </Grid>
                        </Grid>
                        <TextField className={classes.inputStyle}
                            placeholder="email"
                            label="email"
                            error={emailErr !== ""}
                            helperText={emailErr}
                            variant="outlined"
                            value={email}
                            type="text"
                            onChange={(e) => {
                                changeValue(e, setEmail, setEmailErr);
                            }}
                        />
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
                            <Grid container justify="center" spacing={8} style={{ padding: "40px" }} >
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