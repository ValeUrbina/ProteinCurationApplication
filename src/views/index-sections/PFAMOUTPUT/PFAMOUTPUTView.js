import React from "react";
// reactstrap components
import { Button, Form, TabContent, TabPane, NavItem, NavLink, Nav, } from "reactstrap";
//materialui components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    formStyle: {
        padding: "0px 80px 0px 80px",
    },
    labelStyle: {
        padding: "10px 0px 20px 0px",
        fontSize: 15,
    },
    inputStyle: {
        width: 640,
        fontSize: 12,
    },
}));

const test1 = `# name           description                                   bits      evalue   n   exp  bias
A0A3B6RFM8.1     A0A3B6RFM8_WHEAT UNCHARACTERIZED PROTEIN {     27.9     0.0067   2   4.0   0.4
A0A446X7D4.1     A0A446X7D4_TRITD UNCHARACTERIZED PROTEIN {     27.9     0.0067   2   4.0   0.4
A0A0Q3LK16.2     A0A0Q3LK16_BRADI UNCHARACTERIZED PROTEIN {     27.3      0.011   2   4.4   0.6
M7ZPG3.1         M7ZPG3_TRIUA UNCHARACTERIZED PROTEIN {ECO:     27.3       0.01   2   3.9   0.4`

const test2 = `# name           description                                   bits      evalue   n   exp  bias  
Q5GYF3.1         Q5GYF3_XANOR AVIRULENCE PROTEIN {ECO:00003   1598.8          0  36  38.4 140.8
E5AW45.1         BAT2_PARRH BURKHOLDERIA TALE-LIKE PROTEIN    1538.9          0  29  29.0  93.6
Q5H0J2.1         Q5H0J2_XANOR AVIRULENCE PROTEIN {ECO:00003   1288.4          0  29  30.7 110.5
E5AV36.1         BAT1_PARRH BURKHOLDERIA TALE-LIKE PROTEIN    1193.7          0  22  22.0  82.5
Q5H0Y6.1         Q5H0Y6_XANOR AVIRULENCE PROTEIN {ECO:00003   1168.7          0  26  27.6 109.3
Q5H0I8.1         Q5H0I8_XANOR AVIRULENCE PROTEIN {ECO:00003   1099.8          0  25  26.9 102.4
Q5H0Y9.1         Q5H0Y9_XANOR HYPOTHETICAL 125K PROTEIN {EC    981.7          0  22  23.5  78.7
Q5GYF4.1         Q5GYF4_XANOR AVIRULENCE PROTEIN {ECO:00003    960.5     2e-294  22  23.6  71.5
Q5H0J1.1         Q5H0J1_XANOR HYPOTHETICAL 125K PROTEIN {EC    956.3   4.4e-293  22  24.0  85.7
Q5GYF2.1         Q5GYF2_XANOR AVIRULENCE PROTEIN {ECO:00003    925.7   1.6e-283  21  23.9  77.4
Q5H0Z0.1         Q5H0Z0_XANOR HYPOTHETICAL 125K PROTEIN {EC    882.6   4.6e-270  20  21.8  74.5
Q5H0K3.1         Q5H0K3_XANOR HYPOTHETICAL 125K PROTEIN {EC    847.1   5.9e-259  19  21.1  76.1
Q5GUW4.1         Q5GUW4_XANOR AVIRULENCE/VIRULENCE PROTEIN     788.9   9.2e-241  18  19.7  72.6
Q5H3H9.1         Q5H3H9_XANOR AVIRULENCE PROTEIN {ECO:00003    720.4   2.3e-219  16  16.8  51.1
Q8XYE3.1         BRG11_RALSO TAL EFFECTOR PROTEIN BRG11 {EC    674.8   4.1e-205  19  21.9  98.1
Q5H3I0.1         Q5H3I0_XANOR AVIRULENCE PROTEIN {ECO:00003    634.3   1.9e-192  16  17.2  59.7
E5AW43.1         BAT3_PARRH BURKHOLDERIA TALE-LIKE PROTEIN     419.8   2.2e-125   8   8.1  15.6
Q5GUW3.1         Q5GUW3_XANOR AVIRULENCE PROTEIN {ECO:00003    276.1    1.8e-80   7   8.2  17.8
E5AW46.1         E5AW46_PARRH UNCHARACTERIZED PROTEIN {ECO:    106.1    2.5e-27   2   2.2   0.0
Q5H3H8.1         Q5H3H8_XANOR AVIRULENCE PROTEIN {ECO:00003     83.9    2.1e-20   3   5.2  20.4
A0A1H8NV41.1     A0A1H8NV41_9BURK UNCHARACTERIZED PROTEIN {     78.0    1.5e-18   1  41.5  80.3
E5AT83.1         E5AT83_PARRH TRANSPOSASE {ECO:0000313|EMBL     61.6      2e-13   1   1.3   0.1
A0A0W1AL96.1     A0A0W1AL96_9GAMM AVIRULENCE PROTEIN AVRBS3     49.3    1.4e-09   2   4.4   0.0
A0A401SEB8.1     A0A401SEB8_CHIPU UNCHARACTERIZED PROTEIN {     47.8      4e-09   5  19.7  45.4
C3VPR6.2         NLRC5_MOUSE PROTEIN NLRC5                      47.2    6.5e-09   5   6.3   0.0
A0A0W1A6L6.1     A0A0W1A6L6_9GAMM AVIRULENCE PROTEIN AVRBS3     46.0    1.5e-08   3   6.2   0.0
A0A1H8R289.1     A0A1H8R289_9BURK UNCHARACTERIZED PROTEIN {     39.7    1.4e-06   5  21.9  39.9
A0A433K480.1     A0A433K480_9GAMM UNCHARACTERIZED PROTEIN {     39.3    1.9e-06   3   4.7   8.7
E5AW47.1         E5AW47_PARRH UNCHARACTERIZED PROTEIN {ECO:     39.1    2.2e-06   1   2.2   0.7
E5AW35.1         E5AW35_PARRH UNCHARACTERIZED PROTEIN {ECO:     33.4    0.00013   2   2.7   2.2
A0A0Q9YGE0.1     A0A0Q9YGE0_9COXI UNCHARACTERIZED PROTEIN {     33.3    0.00014   3   7.4   1.4
A0A5A7NW78.1     A0A5A7NW78_STRAF MITOCHONDRIAL TRANSCRIPTI     32.3    0.00029   4   4.6   0.0
C7RSG7.1         C7RSG7_ACCPU LARGE EXOPROTEIN INVOLVED IN      30.7    0.00091   0  38.8  95.9
A0A318AV99.1     A0A318AV99_9NOSO UNCHARACTERIZED PROTEIN {     30.6    0.00095   3  11.1  21.3
A0A3Q7JY58.1     A0A3Q7JY58_SOLLC PEROXIDASE {ECO:0000256|A     30.1     0.0014   2   4.4   0.8
A0A1Q9EBF4.1     A0A1Q9EBF4_SYMMI UNCHARACTERIZED PROTEIN {     29.4     0.0024   0   6.5   2.1
A0A453R5H8.1     A0A453R5H8_AEGTS UNCHARACTERIZED PROTEIN {     28.4     0.0048   2   3.5   0.1
A0A453R5B1.1     A0A453R5B1_AEGTS UNCHARACTERIZED PROTEIN {     28.4     0.0049   2   3.5   0.1
A0A453R5P2.1     A0A453R5P2_AEGTS UNCHARACTERIZED PROTEIN {     28.4     0.0048   2   3.5   0.1
A0A453R5I3.1     A0A453R5I3_AEGTS UNCHARACTERIZED PROTEIN {     28.4     0.0047   2   3.5   0.1
A0A401SE75.1     A0A401SE75_CHIPU UNCHARACTERIZED PROTEIN {     27.9     0.0066   4   7.6  13.1
A0A3B6RFM8.1     A0A3B6RFM8_WHEAT UNCHARACTERIZED PROTEIN {     27.9     0.0067   2   4.0   0.4
A0A446X7D4.1     A0A446X7D4_TRITD UNCHARACTERIZED PROTEIN {     27.9     0.0067   2   4.0   0.4
A0A0Q3LK16.2     A0A0Q3LK16_BRADI UNCHARACTERIZED PROTEIN {     27.3      0.011   2   4.4   0.6
M7ZPG3.1         M7ZPG3_TRIUA UNCHARACTERIZED PROTEIN {ECO:     27.3       0.01   2   3.9   0.4
A0A446Y747.1     A0A446Y747_TRITD UNCHARACTERIZED PROTEIN {     27.0      0.013   2   3.9   0.1
A0A3B6SDS8.1     A0A3B6SDS8_WHEAT UNCHARACTERIZED PROTEIN {     27.0      0.013   2   3.9   0.1
A0A561QNN6.1     A0A561QNN6_9RHIZ UNCHARACTERIZED PROTEIN {     26.7      0.017   0  26.5  61.1
A0A078KRA1.1     A0A078KRA1_9GAMM SERINE/THREONINE-PROTEIN      25.1       0.05   1   8.6   0.8
A0A453MRL0.1     A0A453MRL0_AEGTS UNCHARACTERIZED PROTEIN {     25.0      0.055   2   3.3   0.3
L9PII2.1         L9PII2_9BURK LARGE EXOPROTEIN INVOLVED IN      24.8      0.063   3  23.0  59.7
`

const test3 = `# name           env-st  env-en  ali-st  ali-en  hmm-st  hmm-en   bits     evalue    hit   bias
E5AW45.1            160     192     160     192       1      33   67.9    2.1e-15      5    0.2
E5AV36.1            590     622     590     622       1      33   64.8    2.1e-14     18    0.3
E5AV36.1            359     391     359     391       1      33   64.7    2.1e-14     11    0.4
E5AW45.1            257     289     257     289       1      33   63.8      4e-14      8    0.0
E5AW45.1            717     749     717     749       1      33   63.4    5.4e-14     22    0.1
E5AV36.1            524     556     525     556       2      33   63.3    6.1e-14     16    0.1
E5AW45.1            290     322     290     322       1      33   63.1    6.9e-14      9    0.0
E5AV36.1            425     457     425     457       1      33   63.1    6.7e-14     13    0.1
E5AV36.1            491     523     492     523       2      33   62.8    8.7e-14     15    0.1
E5AW43.1            129     161     129     161       1      33   62.1    1.4e-13      4    0.1
E5AW46.1             27      59      27      59       1      33   62.0    1.5e-13      2    0.0
E5AV36.1            227     259     227     259       1      33   61.8    1.7e-13      7    0.2
E5AW45.1            552     584     553     584       2      33   61.2    2.7e-13     17    0.2
E5AW45.1            684     716     684     716       1      33   61.2    2.6e-13     21    0.0
E5AT83.1              5      37       6      37       2      33   61.1      3e-13      1    0.1
E5AV36.1            128     160     128     160       1      33   61.0    3.1e-13      4    0.1
E5AW45.1            323     355     324     355       2      33   60.8    3.5e-13     10    0.1
E5AW45.1            455     487     455     487       1      33   60.8    3.5e-13     14    0.1
E5AW45.1            356     388     356     388       1      33   60.5    4.6e-13     11    0.3
E5AV36.1            293     325     293     325       1      33   59.8    7.2e-13      9    0.1
E5AV36.1            326     358     326     358       1      33   59.5    9.2e-13     10    0.1
E5AV36.1            624     655     624     655       2      33   59.5    8.8e-13     19    0.2
E5AV36.1            392     424     392     424       1      33   59.4    9.5e-13     12    0.0
E5AW45.1            618     650     618     650       1      33   59.0    1.3e-12     19    0.0
E5AV36.1            689     721     690     721       2      33   58.8    1.5e-12     21    0.1
E5AW45.1            750     782     750     782       1      33   58.1    2.4e-12     23    0.1
E5AV36.1            161     193     161     193       1      33   58.0    2.7e-12      5    0.0
E5AW43.1            229     260     229     260       2      33   58.0    2.6e-12      7    0.0
E5AW43.1             97     128      97     128       2      33   56.8    6.4e-12      3    0.1
E5AW45.1            651     683     652     683       2      33   56.7    6.8e-12     20    0.0
E5AV36.1            194     226     195     226       2      33   56.7    6.7e-12      6    0.1
E5AW45.1            883     914     883     914       2      33   56.6    7.2e-12     27    0.0
E5AW45.1             63      95      63      95       1      33   56.5    7.6e-12      2    0.0
E5AW45.1            816     848     817     848       2      33   55.9    1.2e-11     25    0.1
E5AV36.1             95     127      95     127       1      33   55.4    1.7e-11      3    0.0
E5AW43.1            196     227     196     227       2      33   55.3    1.9e-11      6    0.0
E5AW45.1            915     947     916     947       2      33   55.1    2.1e-11     28    0.0
E5AW45.1            783     815     783     815       1      33   54.9    2.5e-11     24    0.1
E5AW45.1            128     159     128     159       2      33   54.5    3.3e-11      4    0.1
E5AV36.1             62      94      62      94       1      33   54.4    3.6e-11      2    0.0
E5AW43.1            163     194     163     194       2      33   54.4    3.7e-11      5    0.0
E5AV36.1            557     589     557     589       1      33   54.3    3.8e-11     17    0.1
Q5GUW3.1             69     102      69     102       1      33   54.3    3.9e-11      3    0.1
E5AV36.1            458     490     459     490       2      33   54.2    4.2e-11     14    0.1
E5AV36.1            657     688     657     688       2      33   54.1    4.5e-11     20    0.1
Q5GUW4.1            448     481     448     481       1      33   53.7    5.7e-11      6    0.1
Q5H0K3.1            358     391     358     391       1      33   53.6    6.3e-11      4    0.1
Q5H3H9.1            262     295     262     295       1      33   53.5    6.9e-11      9    0.1
E5AW45.1            585     617     586     617       2      33   53.2    8.1e-11     18    0.0
Q5H0Y6.1            872     905     872     905       1      33   53.2    8.4e-11     19    0.2
Q5H0Y9.1            839     872     839     872       1      33   53.2    8.5e-11     18    0.0
Q5H0J1.1            541     574     541     574       1      33   53.2    8.4e-11      8    0.1
Q5GUW3.1            137     170     137     170       1      33   53.2    8.5e-11      5    0.0
Q5H0J2.1            532     565     532     565       1      33   53.1      9e-11      9    0.2
Q5H0Y6.1           1076    1109    1076    1109       1      33   53.1      9e-11     25    0.1
Q5H0I8.1            563     596     563     596       1      33   53.1      9e-11      6    0.2
Q5H0J2.1           1175    1208    1175    1208       1      33   53.0    9.7e-11     28    0.1
Q5H0Y6.1            804     837     804     837       1      33   53.0    9.7e-11     17    0.2
Q5GUW4.1            584     617     584     617       1      33   53.0    9.9e-11     10    0.1
E5AW43.1            261     293     261     292       1      32   53.0    9.4e-11      8    0.2
Q5H0K3.1            630     663     630     663       1      33   52.9    1.1e-10     12    0.1
Q5H0Y6.1           1042    1075    1042    1075       1      33   52.8    1.1e-10     24    0.2
Q5H0Z0.1            499     532     499     532       1      33   52.8    1.2e-10      8    0.1
Q5GYF3.1           1295    1328    1295    1328       1      33   52.7    1.2e-10     30    0.1
Q5GYF2.1            473     506     473     506       1      33   52.7    1.2e-10      6    0.1
Q5GYF2.1            643     676     643     676       1      33   52.7    1.2e-10     11    0.1
Q5GUW3.1            103     136     103     136       1      33   52.7    1.2e-10      4    0.1
Q5H0Y6.1            329     362     329     362       1      33   52.6    1.3e-10      3    0.3
Q5H0Y9.1            737     770     737     770       1      33   52.6    1.3e-10     15    0.1
Q5H3H9.1             93     126      93     126       1      33   52.6    1.3e-10      4    0.0
Q5H0I8.1            903     936     903     936       1      33   52.5    1.4e-10     16    0.1`


export default function View(props) {
    const classes = useStyles();
    const handleClose = props.handleClose;
    const [cutoffcutoff, setCutoff] = React.useState(test1);
    const [sequenceScore, setSequenceScore] = React.useState(test2);
    const [domainScore, setDomainScore] = React.useState(test3);
    const [activeTab, setActiveTab] = React.useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    function CloseWindow() {
        setCutoff("");
        setSequenceScore("");
        setDomainScore("");
        handleClose();
    }

    return (
        <Form className={classes.formStyle}>
            <div className={classes.labelStyle}>
                <label>For the e-value 0.01 the cut-off point is:</label>
                <br />
                <TextField className={classes.inputStyle}
                    inputProps={{ style: { fontSize: 12 } }}
                    disabled
                    multiline
                    rows={4}
                    placeholder=""
                    required={true}
                    variant="outlined"
                    value={cutoffcutoff}
                    type="text"
                />
            </div>
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
                                Sequence scores
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
                                Domain scores
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
            <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                    <div className={classes.labelStyle}>
                        <TextField className={classes.inputStyle}
                            inputProps={{ style: { fontSize: 12 } }}
                            disabled
                            multiline
                            rows={10}
                            placeholder=""
                            required={true}
                            variant="outlined"
                            value={sequenceScore}
                            type="text"
                        />
                    </div>
                </TabPane>
                <TabPane tabId="2">
                    <div className={classes.labelStyle}>
                        <TextField className={classes.inputStyle}
                            inputProps={{ style: { fontSize: 12 } }}
                            disabled
                            multiline
                            rows={10}
                            placeholder=""
                            required={true}
                            variant="outlined"
                            value={domainScore}
                            type="text"
                        />
                    </div>
                </TabPane>
            </TabContent>
            <Grid
                container
                justify="center"
                spacing={8}
                style={{ padding: "20px" }}
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