import React from "react";
//Componentes de Material UI
import Toolbar from "@material-ui/core/Toolbar";
import SequenceViewer from "components/Viewers/SequenceViewer.js";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { Button } from "reactstrap";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
//Iconos de Material UI
import IconButton from "@material-ui/core/IconButton";
import BookIcon from "@material-ui/icons/Book";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";
import SaveIcon from "@material-ui/icons/Save";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import BackspaceIcon from "@material-ui/icons/Backspace";
import DeleteIcon from '@material-ui/icons/Delete';
//Botones de la barra superior
import { ReactComponent as ReUPred } from "../assets/img/buttonsVale/ReUPred.svg";
// import { ReactComponent as WebLogo } from "../assets/img/buttonsVale/WebLogo.svg";
import { ReactComponent as HMMER } from "../assets/img/buttonsVale/HMMER.svg";
import { ReactComponent as RepeatsDB } from "../assets/img/buttonsVale/RepeatsDB.svg";
import SvgIcon from "@material-ui/core/SvgIcon";
//Modales de la barra lateral
import SPCleanerModal from "views/index-sections/SPCleanerModal.js";
import EfetchModal from "views/index-sections/EfetchModal.js";
import DESCModal from "views/index-sections/DESCModal.js";
import CreateAlignModal from "views/index-sections/CreateAlignModal.js";
import ExtendTerminal from "views/index-sections/ExtendTerminalModal.js";
import PfnewModal from "views/index-sections/PfnewModal.js";
import PfmakeModal from "views/index-sections/PfmakeModal.js";
import NextDUFModal from "views/index-sections/NextDUFModal.js";
import PfciModal from "views/index-sections/PfciModal.js";
import OverlapModal from "views/index-sections/OverlapModal.js";
import MissingModal from "views/index-sections/MissingModal.js";
import PFAMOUTPUTModal from "views/index-sections/PFAMOUTPUTModal.js";
import HMMERModal from "views/index-sections/HMMERModal.js";
import RepeatsDBModal from "views/index-sections/RepeatsDBModal.js";
import ReUPredModal from "views/index-sections/ReUPredModal.js";
import SaveModal from "views/index-sections/SaveModal.js";
import OpenModal from "views/index-sections/OpenModal.js";
//Componente terminal
import { ReactTerminal } from "react-terminal";

const url = "http://ec2-3-218-86-203.compute-1.amazonaws.com:8000/";

const drawerWidth = 190;

const funcLbls = ["SPCleaner", "Whole sequence", "Delete fragments", "efetch", "DESC",
  "Create Align", "Extend N/C Terminal", "pfnew", "pfbuild", "pfmake",
  "Next DUF", "pfci", "Missing", "Overlap", "PFAMOUTPUT"];

const useStyles = makeStyles((theme) => ({
  root: {
    width: `calc(100% - ${drawerWidth}px)`,
    maxWidth: `calc(100% - ${drawerWidth}px) !important`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#464646",
  },
  boton: {
    width: "150px",
    height: "40px",
    textTransform: "none",
    fontSize: "13px",
    padding: "2px",
    lineHeight: "1.2",
  },
  toolbarTitle: {
    backgroundColor: "#000000",
    minHeight: "49px",
    color: "#FFFFFF",
  },
  icon: {
    margin: "10px",
    cursor: "pointer",
    color: "#FFFFFF",
  },
  icon2: {
    margin: "2px 15px 2px 15px",
    cursor: "pointer",
    color: "#FFFFFF",
    fontSize: "40px",
  },
  TitleText: {
    fontSize: "28px",
    font: "Roboto",
  },
  toolbarOptions: {
    backgroundColor: "#252525",
    minHeight: "100px",
  },
  verticalBox: {
    padding: "2px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flexStart",
  },
  buttonText: {
    alignSelf: "center",
    color: "#FFFFFF",
  },
}));

function Index() {
  const classes = useStyles();
  document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

  const [open, setOpen] = React.useState("Open");

  const handleClose = () => {
    setOpen("");
  };

  function MyTerminal(props) {
    // Define commands here
    const commands = {
      whoami: "jackharper",
      cd: (directory) => `changed path to ${directory}`
    };

    return (
      <ReactTerminal
        commands={commands}
        themes={{
          myCustomTheme: {
            themeBGColor: "#272B36",
            themeToolbarColor: "#DBDBDB",
            themeColor: "#FFFEFC",
            themePromptColor: "#a917a8"
          }
        }}
        theme="myCustomTheme"
      //welcomeMessage="Welcome"
      />
    );
  }

  return (
    <>
      <div className={classes.root}>
        <Toolbar className={classes.toolbarTitle}>
          {/* <IconButton style={{ padding: "2px" }}>
            <SettingsIcon className={classes.icon} />
          </IconButton>
          <IconButton style={{ padding: "2px" }}>
            <BookIcon className={classes.icon} />
          </IconButton>
          <IconButton style={{ padding: "2px" }}>
            <HelpIcon className={classes.icon} />
          </IconButton> */}

          <Grid container justify="center">
            <Grid item className={classes.TitleText}>
              Title
            </Grid>
          </Grid>
        </Toolbar>

        <Toolbar className={classes.toolbarOptions}>
          <div className={classes.verticalBox}>
            <IconButton style={{ padding: "2px" }}>
              <SaveIcon className={classes.icon2} onClick={(e) => setOpen("Save")} />
            </IconButton>
            <div className={classes.buttonText}>Save</div>
          </div>
          <div className={classes.verticalBox}>
            <IconButton style={{ padding: "2px" }}>
              <UndoIcon className={classes.icon2} />
            </IconButton>
            <div className={classes.buttonText}>Undo</div>
          </div>
          <div className={classes.verticalBox}>
            <IconButton style={{ padding: "2px" }}>
              <RedoIcon className={classes.icon2} />
            </IconButton>
            <div className={classes.buttonText}>Redo</div>
          </div>
          <div className={classes.verticalBox}>
            <IconButton style={{ padding: "2px" }}>
              <DeleteIcon className={classes.icon2} />
            </IconButton>
            <div className={classes.buttonText}>Delete sequences</div>
          </div>
          <div className={classes.verticalBox}>
            <IconButton style={{ padding: "2px" }}>
              <BackspaceIcon className={classes.icon2} />
            </IconButton>
            <div className={classes.buttonText}>Del left</div>
          </div>
          <div className={classes.verticalBox}>
            <IconButton style={{ padding: "2px", transform: "scaleX(-1)" }}>
              <BackspaceIcon className={classes.icon2} />
            </IconButton>
            <div className={classes.buttonText}>Del right</div>
          </div>
          <div className={classes.verticalBox}>
            <IconButton style={{ padding: "5px 0px 0px 0px" }}>
              <SvgIcon viewBox="0 0 117 50" style={{ width: "117px", height: "42px" }}
                component={ReUPred} onClick={(e) => setOpen("ReUPred")}
              ></SvgIcon>
            </IconButton>

            <div className={classes.buttonText} style={{ padding: "2px 0px 0px 0px" }}>
              ReUPred
            </div>
          </div>
          {/*           <div className={classes.verticalBox} style={{ width: "105px" }}>
            <IconButton style={{ padding: "5px 0px 0px 0px" }}>
              <SvgIcon viewBox="0 0 93 47" style={{ width: "93px", height: "40px" }} >
                <WebLogo />
              </SvgIcon>
            </IconButton>
            <div className={classes.buttonText} style={{ padding: "2px 0px 0px 0px" }}>
              WebLogo
            </div>
          </div> */}
          <div className={classes.verticalBox} style={{ width: "100px" }}>
            <IconButton style={{ padding: "5px 0px 0px 0px" }}>
              <SvgIcon viewBox="0 0 50 50" style={{ width: "50px", height: "45px" }} >
                <HMMER onClick={(e) => setOpen("HMMER")} />
              </SvgIcon>
            </IconButton>
            <div className={classes.buttonText} style={{ padding: "2px 0px 0px 0px" }} >
              HMMER
            </div>
          </div>
          <div className={classes.verticalBox} style={{ width: "100px" }}>
            <IconButton style={{ padding: "5px 0px 0px 0px" }}>
              <SvgIcon viewBox="0 0 50 50" style={{ width: "50px", height: "45px" }} >
                <RepeatsDB onClick={(e) => setOpen("RepeatsDB")} />
              </SvgIcon>
            </IconButton>
            <div className={classes.buttonText} style={{ padding: "2px 0px 0px 0px" }} >
              RepeatsDB
            </div>
          </div>
        </Toolbar>

        <SequenceViewer className={classes.root} />

        <SPCleanerModal open={open === "SPCleaner"} handleClose={handleClose} />
        <EfetchModal open={open === "efetch"} handleClose={handleClose} />
        <DESCModal open={open === "DESC"} handleClose={handleClose} />
        <CreateAlignModal open={open === "Create Align"} handleClose={handleClose} />
        <ExtendTerminal open={open === "Extend N/C Terminal"} handleClose={handleClose} />
        <PfnewModal open={open === "pfnew"} handleClose={handleClose} />
        <PfmakeModal open={open === "pfmake"} handleClose={handleClose} />
        <NextDUFModal open={open === "Next DUF"} handleClose={handleClose} />
        <PfciModal open={open === "pfci"} handleClose={handleClose} />
        <OverlapModal open={open === "Overlap"} handleClose={handleClose} />
        <MissingModal open={open === "Missing"} handleClose={handleClose} />
        <PFAMOUTPUTModal open={open === "PFAMOUTPUT"} handleClose={handleClose} />
        <HMMERModal open={open === "HMMER"} handleClose={handleClose} />
        <RepeatsDBModal open={open === "RepeatsDB"} handleClose={handleClose} />
        <ReUPredModal open={open === "ReUPred"} handleClose={handleClose} />
        <SaveModal open={open === "Save"} handleClose={handleClose} />
        <OpenModal open={open === "Open"} handleClose={handleClose} />

        <div style={{ height: "40vh" }}>
          <MyTerminal />
        </div>

      </div>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <List>
          {funcLbls.map((text, index) => (
            <ListItem key={text}>
              <Button id={text} className={classes.boton} onClick={(e) => setOpen(e.target.id)}>{text}</Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Index;