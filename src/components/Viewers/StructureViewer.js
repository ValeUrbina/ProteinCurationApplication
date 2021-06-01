import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
    myViewer: {
        float: "left",
        width: "350px",
        height: "200px",
        position: "relative",
    }
}));

function StructureViewer() {
    const waitTime = 0;
    const [wait, setWait] = React.useState(false);
    const classes = useStyles();

    useEffect(() => {
        setTimeout(function () {
            setWait(true);
        }, waitTime * 1000);
    }, []);

    return (
        <>
            <div id="myViewer" className={classes.myViewer}>
                <pdbe-molstar id="pdbeMolstarComponent" molecule-id="2nnu" hide-controls="true"
                    bg-color-r="255" bg-color-g="255" bg-color-b="255" start-residue="40"
                    end-residue="80" highlight-color-r="255" highlight-color-g="102" highlight-color-b="153"
                ></pdbe-molstar>
            </div>
        </>
    );
}

export default StructureViewer;
