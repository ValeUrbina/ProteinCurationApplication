import React from "react";
// reactstrap components
import { Button, Form, TabContent, TabPane, NavItem, NavLink, Nav, } from "reactstrap";
//materialui components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    formStyle: {
        padding: "0px 90px 0px 90px",
    },
    labelStyle: {
        padding: "10px 0px 20px 0px",
        fontSize: 14,
    },
    inputStyle: {
        width: 590,
    },
}));

const test = `ID   Q5H0Z0_XANOR            Unreviewed;      1199 AA.
AC   Q5H0Z0;
DT   01-MAR-2005, integrated into UniProtKB/TrEMBL.
DT   01-MAR-2005, sequence version 1.
DT   26-FEB-2020, entry version 59.
DE   SubName: Full=Hypothetical 125K protein {ECO:0000313|EMBL:AAW75381.1};
GN   OrderedLocusNames=XOO2127 {ECO:0000313|EMBL:AAW75381.1};
OS   Xanthomonas oryzae pv. oryzae (strain KACC10331 / KXO85).
OC   Bacteria; Proteobacteria; Gammaproteobacteria; Xanthomonadales;
OC   Xanthomonadaceae; Xanthomonas.
OX   NCBI_TaxID=291331 {ECO:0000313|EMBL:AAW75381.1, ECO:0000313|Proteomes:UP000006735};
RN   [1] {ECO:0000313|EMBL:AAW75381.1, ECO:0000313|Proteomes:UP000006735}
RP   NUCLEOTIDE SEQUENCE [LARGE SCALE GENOMIC DNA].
RC   STRAIN=KACC10331 / KXO85 {ECO:0000313|Proteomes:UP000006735};
RX   PubMed=15673718; DOI=10.1093/nar/gki206;
RA   Lee B.M., Park Y.J., Park D.S., Kang H.W., Kim J.G., Song E.S., Park I.C.,
RA   Yoon U.H., Hahn J.H., Koo B.S., Lee G.B., Kim H., Park H.S., Yoon K.O.,
RA   Kim J.H., Jung C.H., Koh N.H., Seo J.S., Go S.J.;
RT   "The genome sequence of Xanthomonas oryzae pathovar oryzae KACC10331, the
RT   bacterial blight pathogen of rice.";
RL   Nucleic Acids Res. 33:577-586(2005).
CC   ---------------------------------------------------------------------------
CC   Copyrighted by the UniProt Consortium, see https://www.uniprot.org/terms
CC   Distributed under the Creative Commons Attribution (CC BY 4.0) License
CC   ---------------------------------------------------------------------------
DR   EMBL; AE013598; AAW75381.1; -; Genomic_DNA.
DR   EnsemblBacteria; AAW75381; AAW75381; XOO2127.
DR   KEGG; xoo:XOO2127; -.
DR   HOGENOM; CLU_003229_1_0_6; -.
DR   OMA; QAVHAWR; -.
DR   Proteomes; UP000006735; Chromosome.
DR   InterPro; IPR005042; TAL_effector_rpt.
DR   Pfam; PF03377; TAL_effector; 18.
PE   4: Predicted;
KW   Reference proteome {ECO:0000313|Proteomes:UP000006735}.
FT   REGION          34..94
FT                   /note="Disordered"
FT                   /evidence="ECO:0000256|SAM:MobiDB-lite"
FT   REGION          155..180
FT                   /note="Disordered"
FT                   /evidence="ECO:0000256|SAM:MobiDB-lite"
FT   REGION          1075..1116
FT                   /note="Disordered"
FT                   /evidence="ECO:0000256|SAM:MobiDB-lite"
FT   COMPBIAS        1075..1100
FT                   /note="Polyampholyte"
FT                   /evidence="ECO:0000256|SAM:MobiDB-lite"
SQ   SEQUENCE   1199 AA;  127393 MW;  ED717E82B171A2FA CRC64;
     MCTAMRPRKL CRDHRPLVWR RPCKEVCLMD PIRSRTPSPA RELLPGPQPD RVQPTADRGG
     APPAGGPLDG LPARRTMSRT RLPSPPAPSP AFSAGSFSDL LRQFDPSLLD TSLLDSMPAV
     GTPHTAAAPA ECDEVQSGLR AADDPPPTVR VAVTAARPPR AKPAPRRRAA QPSDASPAAQ
     VDLRTLGYSQ QQQEKIKPKV RSTVAQHHEA LVGHGFTHAH IVALSQHPAA LGTVAVTYQD
     IIRALPEATH EDIVGVGKQW SGARALEALL TEAGELRGPP LQLDTGQLLK IAKRGGVTAV
     QAVHAWRNAL TGAPLNLTPD QVVAIASNIG GKQALETVQR LLPVLCQAHG LNPDQVVAIA
     SNSGGKQALE TVQRLLPVLC QDHGLTLDQV VAIASHDGGK QALETVQRLL PVLCQDHGLT
     PDQVVAIASN GGGKQALETV QRLLPVLCQD HGLTPDQVVA IASNSGGKQA LETVQRLLPV
     LCQDHGLSPD QVVAIANNNG GKQALETVQR LLPVLCQDHG LSPDQVVAIA SHDGGKQALE
     TVQRLLPVLC QDHGLTPDQV VAIASNGGKQ ALETVQRLLP VLCQDHGLTP DQVVAIANNN
     GGKQALETVQ RLLPVLCQDH GLTPDQVVAI ANNNGGKQAL ETVQRLLPVL CQAHGLPPDQ
     VVAIASNIGG KQALETVQRL LPVLCQDHGL TPDQVVAIAN NNGGKQALET VQRLLPVLCQ
     DHGLTPDQVV AIASHDGGKQ ALETVQRLLP VLCQDHGLTP DQVVAIASNG GGKQALETVQ
     RLLPVLCQDH GLSPDQVVAI ASHDGGKQAL ETVQRLLPVL CQDHGLTLDQ VVAIASHDGG
     KQALETVQRL LPVLCQAHGL TPDQVVAIAS HDGGKQALET VQRLLPVLCQ DHGLTPDQVV
     AIASNGGGKQ ALESIVAQLY RPDPALAALT NDHLVALACL GGRPALDAVK KGLPHAPELI
     RRINRRIPER TSHRVADLAH VVRVLGFFQS HSHPAQAFDD AMTQFGMSRH GLVQLFRRVG
     VTEFEARYGT LPPASQRWDR ILQASGMKRA KPSPTSAQTP DQASLHAFAD SLERDLDAPS
     PMHEGDQTRA SSRKRSRSDR AVTGPSTQQS FEVRVPEQRD ALHLPLSWRV KRPRTRIGGG
     LPDPGTPIAA DLAASSTVMW EQDADPFAGA ADDFPAFNEE ELAWLMELLP QSGSVGGTI
//`;


export default function View(props) {
    const classes = useStyles();
    const showEfetchWindow = props.showEfetchWindow;
    const handleClose = props.handleClose;
    const [resault, setResault] = React.useState(test);

    function CloseWindow() {
        setResault("");
        handleClose();
    }

    return (
        <Form className={classes.formStyle}>
            <div className={classes.labelStyle}>
                <TextField className={classes.inputStyle}
                    disabled
                    multiline
                    rows={15}
                    variant="outlined"
                    value={resault}
                    type="text"
                />
            </div>
            <Grid container justify="center" spacing={8} style={{ padding: "25px" }}>
                <Grid item>
                    <Button
                        className="btn-round mr-1"
                        color="primary"
                        outline
                        type="button"
                        onClick={(e) => showEfetchWindow()}
                    >
                        Return
                    </Button>
                </Grid>
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