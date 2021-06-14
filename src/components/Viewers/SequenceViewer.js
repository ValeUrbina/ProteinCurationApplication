import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
//import sequenceviewerlabel from "../../assets/css/sequenceviewerlabel.css";

const useStyles = makeStyles((theme) => ({
  biojs_msa_labels: {
    width: "190 !important",
  }
}));

function SequenceViewer() {
  const waitTime = 2;
  const [wait, setWait] = React.useState(false);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(function () {
      setWait(true);
    }, waitTime * 1000);
  }, []);

  //backgroundColor: "#4D4D4D"

  return (
    <>
      <div id="yourDiv" className={classes.biojs_msa_labels} style={{ height: "39vh", backgroundColor: "#FFFFFF", margin: "10px" }} >
        {wait ? (<Helmet>
          <script>{
            `try{ var opts = {
            el: document.getElementById("yourDiv"),
            vis: {
              conserv: false,
              overviewbox: false,
              seqlogo: true,
            },
            zoomer: {      
              labelNameLength: 200,
              labelIdLength: 30,
              labelFontsize: 14,
              alignmentWidth: 1300,
              alignmentHeight: 205,
              residueFont: "Arial",        
            },
            // smaller menu for JSBin
            menu: "large",
            bootstrapMenu: true
            };
            var m = new msa.msa(opts);
            m.u.file.importURL("http://rostlab.org/~goldberg/jalv_example.clustal", function(){m.render(); }); }catch(e){console.log(e)}`
          }</script>
        </Helmet>) : (<div></div>)}
      </div>
    </>
  );
}

export default SequenceViewer;
