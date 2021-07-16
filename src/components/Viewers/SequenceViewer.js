import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
//import sequenceviewerlabel from "../../assets/css/sequenceviewerlabel.css";

const useStyles = makeStyles((theme) => ({
  biojs_msa_labels: {
    width: "190 !important",
  }
}));

function SequenceViewer(props) {
  const waitTime = 2;
  const [wait, setWait] = React.useState(false);
  const [first, setFirst] = React.useState(0);
  const classes = useStyles();
  const [fastaAlign, setFastaAlign] = React.useState("");

  const updateAlign = () => {
    setFirst(first + 1);
    return axios
      .get(props.alignURL)
  }

  useEffect(() => {
    setTimeout(function () {
      setWait(true);
    }, waitTime * 1000);
    updateAlign().then((e) => {
      setFastaAlign(e.data);
    });
  }, []);

  React.useEffect(() => {
    updateAlign().then((e) => {
      setFastaAlign(e.data);
      console.log("first", first);
    });
  }, [props.alignURL]);

  // backgroundColor: "#4D4D4D"
  // m.u.file.importURL("`+ props.alignURL + `", function(){m.render(); }); }catch(e){console.log(e)}
  // <pre style={{ display: "none" }} id="fasta-file">{fasta}</pre>
  // document.getElementById("fasta-file").innerText

  return (
    <>
      <div id="yourDiv" className={classes.biojs_msa_labels} style={{ height: "39vh", backgroundColor: "#FFFFFF", margin: "10px" }} >
        {wait ? (<Helmet>
          <script>{
            `try{
            //var fasta = document.getElementById("fasta-file").innerText;
            var fasta = \`` + fastaAlign + `\`;
            var seqs =  msa.io.fasta.parse(fasta);
            var isFirst = ` + (first <= 1) + `;
            console.log("isFirst", isFirst);
            //var element = document.getElementById("yourDiv");
            //element.innerHTML = "";
            var opts = {
              el: document.getElementById("yourDiv"),
              //importURL: "` + props.alignURL + `",
              seqs: seqs,
              vis: {
                conserv: false,
                overviewbox: false,
                seqlogo: true,
              },
              zoomer: {      
                labelNameLength: 200,
                labelIdLength: 30,
                labelFontsize: 14,
                alignmentWidth: 1200,
                alignmentHeight: 205,
                residueFont: "Arial",        
              },
              menu: "large",
              bootstrapMenu: isFirst,
            };
            var m = new msa.msa(opts);
            //m.u.file.importURL("`+ props.alignURL + `", function(){m.render(); });
            m.render();
            }catch(e){console.log(e)} `
          }</script>
        </Helmet>) : (<div></div>)}
      </div>
    </>
  );
}

export default SequenceViewer;
