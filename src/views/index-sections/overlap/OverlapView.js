import React from "react";
// reactstrap components
import { Button, Form } from "reactstrap";
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

const test = `Ignoring PF08144
Ignoring PF17826
Ignoring PF02071
Ignoring PF12741
Ignoring PF12717
Ignoring PF13428
Ignoring PF07571
Ignoring PF10508
Ignoring PF02020
Ignoring PF19189
Ignoring PF16918
Ignoring PF13424
Ignoring PF12753
Ignoring PF11865
Ignoring PF19440
Ignoring PF16811
Ignoring PF19427
Ignoring PF07720
Ignoring PF12569
Ignoring PF09088
Ignoring PF04184
Ignoring PF14938
Ignoring PF12031
Ignoring PF01843
Ignoring PF09268
Ignoring PF11817
Ignoring PF08569
Ignoring PF08623
Ignoring PF14561
Ignoring PF09613
Ignoring PF20023
Ignoring PF01816
Ignoring PF18028
Ignoring PF18797
Ignoring PF12765
Ignoring PF06371
Ignoring PF10345
Ignoring PF18773
Ignoring PF13512
Ignoring PF12348
Ignoring PF08321
Ignoring PF17004
Ignoring PF01535
Ignoring PF12771
Ignoring PF08631
Ignoring PF18770
Ignoring PF11846
Ignoring PF13432
Ignoring PF18829
Ignoring PF03378
Ignoring PF01347
Ignoring PF10579
Ignoring PF05484
Ignoring PF06920
Ignoring PF08167
Ignoring PF06367
Ignoring PF11701
Ignoring PF10255
Ignoring PF10602
Ignoring PF10274
Ignoring PF14322
Ignoring PF08506
Ignoring PF09986
Ignoring PF02854
Ignoring PF00806
Ignoring PF12243
Ignoring PF03130
Ignoring PF10374
Ignoring PF17432
Ignoring PF14852
Ignoring PF04733
Ignoring PF08713
Ignoring PF01851
Ignoring PF12719
Ignoring PF12755
Ignoring PF18787
Ignoring PF12895
Ignoring PF07719
Ignoring PF13812
Ignoring PF16416
Ignoring PF12854
Ignoring PF13371
Ignoring PF00637
Ignoring PF05918
Ignoring PF02259
Ignoring PF01749
Ignoring PF13431
Ignoring PF18710
Ignoring PF18817
Ignoring PF13174
Ignoring PF14853
Ignoring PF08852
Ignoring PF08579
Ignoring PF02985
Ignoring PF13176
Ignoring PF00515
Ignoring PF01603
Ignoring PF02847
Ignoring PF13525
Ignoring PF10300
Ignoring PF10366
Ignoring PF01239
Ignoring PF09127
Ignoring PF18944
Ignoring PF12688
Ignoring PF12862
Ignoring PF17177
Ignoring PF17874
Ignoring PF18794
Ignoring PF13041
Ignoring PF05804
Ignoring PF10373
Ignoring PF11698
Ignoring PF03377
Ignoring PF12968
Ignoring PF04049
Ignoring PF18816
Ignoring PF04818
Ignoring PF10037
Ignoring PF13251
Ignoring PF05004
Ignoring PF06041
Ignoring PF18806
Ignoring PF19867
Ignoring PF04826
Ignoring PF07980
Ignoring PF13646
Ignoring PF04050
Ignoring PF08389
Ignoring PF13429
Ignoring PF06957
Ignoring PF14559
Ignoring PF01602
Ignoring PF18391
Ignoring PF06552
Ignoring PF13374
Ignoring PF03810
Ignoring PF13414
Ignoring PF13838
Ignoring PF00613
Ignoring PF12460
Ignoring PF13181
Ignoring PF03704
Ignoring PF09976
Ignoring PF19904
Ignoring PF18808
Ignoring PF18381
Ignoring PF09759
Ignoring PF01394
Ignoring PF05536
Ignoring PF02184
Ignoring PF16186
Ignoring PF19964
Ignoring PF12830
Ignoring PF09246
Ignoring PF13513
Ignoring PF08238
Ignoring PF18786
Ignoring PF08767
Ignoring PF00514
Ignoring PF18833
Ignoring PF07721
Ignoring PF09450
Ignoring PF10516
Ignoring PF18795
Ignoring PF04118
Ignoring PF09295
Ignoring PF05843
Ignoring PF14863
Ignoring PF07219
Ignoring PF04910
Ignoring PF18768
Ignoring PF18581
Ignoring PF03224
Ignoring PF18777
Ignoring PF09090
Overlaps will not be filtered
Sequence [A0A453R5B1] overlap TAL_effector PF03377/119-133 (PF03377/113-135, 11.1 bits) FULL with mTERF PF02536/82-227 (PF02536/81-229, 28.60 bits) FULL
Sequence [A0A453R5B1] overlap TAL_effector PF03377/254-268 (PF03377/250-269, 11.1 bits) FULL with mTERF PF02536/162-335 (PF02536/158-349, 58.50 bits) FULL
Sequence [A0A1H8NV41] overlap TAL_effector PF03377/656-668 (PF03377/644-668, 4.9 bits) FULL with ALTTAQ_rpt PF20080/641-676 (PF20080/639-676, 29.30 bits) FULL
Sequence [A0A1H8NV41] overlap TAL_effector PF03377/873-885 (PF03377/861-885, 4.9 bits) FULL with ALTTAQ_rpt PF20080/858-893 (PF20080/855-893, 29.60 bits) FULL
Sequence [A0A1H8NV41] overlap TAL_effector PF03377/1091-1102 (PF03377/1089-1102, 4.5 bits) FULL with ALTTAQ_rpt PF20080/1075-1110 (PF20080/1072-1110, 30.10 bits) FULL
Sequence [A0A1H8NV41] overlap TAL_effector PF03377/1091-1102 (PF03377/1089-1102, 4.5 bits) FULL with ALTTAQ_rpt PF20080/1081-1118 (PF20080/1080-1118, 27.80 bits) FULL
Sequence [A0A1H8NV41] overlap TAL_effector PF03377/1525-1536 (PF03377/1523-1536, 4.5 bits) FULL with ALTTAQ_rpt PF20080/1508-1544 (PF20080/1506-1544, 29.50 bits) FULL
Sequence [A0A1H8NV41] overlap TAL_effector PF03377/1525-1536 (PF03377/1523-1536, 4.5 bits) FULL with ALTTAQ_rpt PF20080/1515-1552 (PF20080/1514-1552, 26.60 bits) FULL
Sequence [A0A1H8NV41] overlap TAL_effector PF03377/1742-1753 (PF03377/1740-1753, 4.5 bits) FULL with ALTTAQ_rpt PF20080/1742-1769 (PF20080/1741-1769, 28.20 bits) FULL
Sequence [A0A1H8NV41] overlap TAL_effector PF03377/1959-1970 (PF03377/1957-1970, 4.5 bits) FULL with ALTTAQ_rpt PF20080/1942-1978 (PF20080/1940-1978, 29.20 bits) FULL
Sequence [A0A1H8NV41] overlap TAL_effector PF03377/2176-2187 (PF03377/2173-2187, 4.5 bits) FULL with ALTTAQ_rpt PF20080/2176-2203 (PF20080/2175-2203, 28.40 bits) FULL
Sequence [A0A453R5I3] overlap TAL_effector PF03377/113-127 (PF03377/107-129, 11.2 bits) FULL with mTERF PF02536/76-221 (PF02536/75-223, 28.70 bits) FULL
Sequence [A0A453R5I3] overlap TAL_effector PF03377/248-262 (PF03377/244-263, 11.1 bits) FULL with mTERF PF02536/156-329 (PF02536/152-343, 58.50 bits) FULL
Sequence [C3VPR6] overlap TAL_effector PF03377/1592-1616 (PF03377/1592-1616, 9.3 bits) FULL with LRR_6 PF13516/1606-1625 (PF13516/1602-1625, 14.60 bits) FULL
Sequence [C3VPR6] overlap TAL_effector PF03377/1592-1616 (PF03377/1592-1616, 9.3 bits) FULL with LRR_6 PF13516/1578-1597 (PF13516/1575-1597, 10.10 bits) FULL
Sequence [C3VPR6] overlap TAL_effector PF03377/1620-1644 (PF03377/1620-1644, 7.8 bits) FULL with LRR_6 PF13516/1606-1625 (PF13516/1602-1625, 14.60 bits) FULL
Sequence [C3VPR6] overlap TAL_effector PF03377/1648-1672 (PF03377/1648-1672, 12.7 bits) FULL with LRR_6 PF13516/1662-1681 (PF13516/1658-1681, 12.30 bits) FULL
Sequence [C3VPR6] overlap TAL_effector PF03377/1676-1696 (PF03377/1676-1700, 5.3 bits) FULL with LRR_6 PF13516/1662-1681 (PF13516/1658-1681, 12.30 bits) FULL
Sequence [A0A453R5H8] overlap TAL_effector PF03377/114-128 (PF03377/108-130, 11.1 bits) FULL with mTERF PF02536/77-222 (PF02536/76-224, 28.70 bits) FULL
Sequence [A0A453R5H8] overlap TAL_effector PF03377/249-263 (PF03377/245-264, 11.1 bits) FULL with mTERF PF02536/157-330 (PF02536/153-344, 58.50 bits) FULL
Sequence [A0A453R5P2] overlap TAL_effector PF03377/117-131 (PF03377/111-133, 11.1 bits) FULL with mTERF PF02536/80-225 (PF02536/79-227, 28.70 bits) FULL
Sequence [A0A453R5P2] overlap TAL_effector PF03377/252-266 (PF03377/248-267, 11.1 bits) FULL with mTERF PF02536/160-333 (PF02536/156-347, 58.50 bits) FULL
Sequence [A0A1H8R289] overlap TAL_effector PF03377/145-156 (PF03377/142-156, 5.2 bits) FULL with ALTTAQ_rpt PF20080/145-172 (PF20080/144-172, 27.80 bits) FULL
Sequence [A0A1H8R289] overlap TAL_effector PF03377/362-373 (PF03377/360-373, 5.2 bits) FULL with ALTTAQ_rpt PF20080/345-381 (PF20080/343-381, 30.70 bits) FULL
Sequence [A0A1H8R289] overlap TAL_effector PF03377/579-590 (PF03377/576-590, 5.2 bits) FULL with ALTTAQ_rpt PF20080/562-598 (PF20080/560-598, 31.10 bits) FULL
Sequence [A0A1H8R289] overlap TAL_effector PF03377/796-807 (PF03377/790-807, 5.3 bits) FULL with ALTTAQ_rpt PF20080/779-815 (PF20080/777-815, 29.60 bits) FULL
PF03377: found 26 overlaps
PF03377: found 0 signal peptide overlaps
`

export default function View(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const [overlap, setOverlap] = React.useState(test);

    function CloseWindow() {
        setOverlap("");
        handleClose();
    }

    return (
        <Form className={classes.formStyle}>
            <div className={classes.labelStyle}>
                <TextField className={classes.inputStyle}
                    disabled
                    multiline
                    rows={20}
                    placeholder=""
                    required={true}
                    variant="outlined"
                    value={overlap}
                    type="text"
                />
            </div>

            <Grid
                container
                justify="center"
                spacing={8}
                style={{ padding: "25px" }}
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