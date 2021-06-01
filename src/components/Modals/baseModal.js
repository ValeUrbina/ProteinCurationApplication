import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import IconButton from "@material-ui/core/IconButton";
import { NavItem, NavLink, Nav } from "reactstrap";

function getModalStyle() {
  const width = 859;
  const top = 40;
  //   const left = calc((100% - ${width}px)/2);

  return {
    top: `${top}px`,
    left: `calc((100% - ${width}px)/2)`,
    // transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 859,
    height: 850,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const open = props.open;
  const handleClose = props.handleClose;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <Toolbar style={{ padding: "0px" }}>
            <Grid container justify="flex-end">
              <Grid item>
                <IconButton>
                  <HelpOutlineIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
          <h2 id="simple-modal-title">Welcome</h2>
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper"></div>
            <Nav id="tabs" role="tablist" tabs justify="center">
              <NavItem>
                <NavLink
                  className={activeTab === "1" ? "active" : ""}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === "2" ? "active" : ""}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === "3" ? "active" : ""}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  Messages
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
      </Modal>
    </div>
  );
}
