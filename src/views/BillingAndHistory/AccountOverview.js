import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";
import configData from "../../config.json";
import Grid from "@material-ui/core/Grid";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import EuroIcon from '@material-ui/icons/Euro';
import DoneIcon from '@material-ui/icons/Done';
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";


const useStyles = makeStyles(styles);

function BalanceTable(inputData) {

    const closingBalanceArr = [null, null, null, null, null,"Closing balance"];
    const classes = useStyles();
    const balance = inputData.inputDataBalance;
    const closingBalance = {
        accountOverview: true,
        colspan: "0",
        amount: closingBalanceArr,
        text1: "Closing balance"
    };
    let balanceRest = 0
    const tableHeadData=["#", "Date", "Receipt" ,"Text","Status" ,"Amount", "Account Balance"]
    const [selectCity, setSelectCity] = React.useState("");
    const [selectedFilter, setFilter] = React.useState(1);
    const [selectedFilterStat, setFilterSat] = React.useState('Last month');
    let  FilteredData = [];

    const [selectedDateFrom, setSelectedDateFrom] = React.useState(new Date('2021-03-01'));
    const [selectedDateTo, setSelectedDateTo] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDateTo(date);
    };
    const handleDateChangeFrom = (date) => {
        setSelectedDateFrom(date);
    };
    const handleDateChangeTo = (date) => {
        setSelectedDateTo(date);
    };
    const handleCity = event => {
        setSelectCity(event.target.value);
    };
    const handleFilter = event => {
        switch (event) {
            case 'Last month': setFilter(1);setFilterSat('Last month');break;
            case 'This month': setFilter(2); setFilterSat('This month');break;
            case 'Last week': setFilter(3); setFilterSat('Last week');break;
            case 'This week': setFilter(4);setFilterSat('This week');break;
        }
    };

    const status = (
        <Button color="success" className={classes.actionButton}>
            <DoneIcon />
        </Button>
    );

    let filteredDates = [];
    let outData = [];
    let tmpClosingBalance = 0;
    if(balance && balance.length > 0)
        filteredDates = balance.slice();
        filteredDates.forEach((item, i) => {
            if(new Date(item.ao_date) - new Date((selectedDateFrom.valueOf()-864e5)) > 0 &&
                new Date((selectedDateTo.valueOf()+864e5)) - new Date(item.ao_date) >= 0
            ) {
                item._id = ++i;
                item.ao_date = new Date(item.ao_date).toLocaleDateString("en-US");
                item.ao_status = status;
                outData.push(Object.values(item));
                FilteredData = outData;
                tmpClosingBalance = item.ao_balance;
            }
        })
    closingBalanceArr.push(tmpClosingBalance);

    FilteredData.push(closingBalanceArr);



    return (
        <GridContainer>
            <GridItem xs={12}>
                <Card>
                    <CardBody>
                        <GridContainer justify="space-between">
                            <GridItem xs={10} sm={8} md={7}
                                      container
                                      direction="row"
                                      justify="flex-start"
                                      alignItems="flex-start"  >
                                <GridItem xs={12} sm={8} md={6} lg={5}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            disableToolbar
                                            maxDate={new Date()}
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Date From"
                                            value={selectedDateFrom}
                                            onChange={handleDateChangeFrom}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </GridItem>
                                <GridItem xs={12} sm={8} md={6} lg={5} >
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            disableToolbar
                                            // shouldDisableDate={isWeekend}
                                            maxDate={new Date()}
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Date To"
                                            value={selectedDateTo}
                                            onChange={handleDateChangeTo}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </GridItem>
                            </GridItem>
                            <GridItem xs={10} sm={10} md={4} lg={3}>
                                <Grid xs={10} sm={8} md={12} lg={12} >
                                    <Button color="info" disabled round className={classes.marginRight}>
                                        Download
                                    </Button>
                                </Grid>
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12}>
                <Card>
                    <CardHeader color="rose" icon>
                        <CardIcon color="rose">
                            <EuroIcon/>
                        </CardIcon>
                        {/*<h4 className={classes.cardIconTitle}>On balance - {balanceRest} $</h4>*/}
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHead = {tableHeadData}
                            tableData={FilteredData}
                            customCellClasses={[
                                classes.left,
                                classes.center,
                                classes.centerBalance,
                                classes.center,
                                classes.center,
                                classes.center,
                                classes.center
                            ]}
                            customClassesForCells={[0,1,2,3,4,5,6]}
                            customHeadCellClasses={[
                                classes.left,
                                classes.center,
                                classes.centerBalance,
                                classes.center,
                                classes.center,
                                classes.center,
                                classes.center
                            ]}
                            customHeadClassesForCells={[0,1,2,3,4,5,6]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}

export default class AccountOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            rows:[],
            rowsTotal:[],
            balance: 0
        };

        this.getBalanceData = this.getBalanceData.bind(this);

    }

    getBalanceData() {
        fetch(configData.SERVER_URL+'ao/all')
            .then(response => {
                if (!response.ok) {
                    console.log('error');
                }
                return response.json();
            })
            .then((data) => {
                console.log("ZZZZ");
                this.setState({ data: data});
                this.setBalanceData(data);
                // this.setState({ rows: data})
            })
            .then( setTimeout(this.getBalanceData, 700))
    }

    setBalanceData(data) {

        // let outData = [];
        // data.forEach((item, i) => {
        //     item._id = ++i;
        //     item.bl_date = new Date(item.bl_date).toLocaleDateString("en-US") ;
        //     item.bl_pow = item.bl_pow ? item.bl_pow.toFixed(3) : 0;
        //     item.bl_price = item.bl_price ? item.bl_price.toFixed(2)*(-1) : 0;
        //     if(item.bl_time) {
        //         if(item.bl_time/3600 > 1){
        //             let hour = (item.bl_time/3600).toFixed(0);
        //             let min = ((item.bl_time%3600)/60).toFixed(0);
        //             item.bl_time = min >= 10 ? hour + " : " + min : hour + " : 0" + min;
        //         } else {
        //             let min = (item.bl_time/60).toFixed(0);
        //             item.bl_time = min >= 10  ? "0 : " + min : "0 : 0" + min;
        //         }
        //     }
        //     this.setState({balance : item.bl_balance})
        //     delete item.bl_location;
        //     delete item.bl_balance;
        //     outData.push(Object.values(item));
        // })
        // this.setState({ rows: outData});
        // this.setState({ rowsTotal: outData});

    }

    componentDidMount() {
        this.getBalanceData();
    }

    render() {
        return (
            <div>
                <BalanceTable
                    inputDataBalance={this.state.data}/>
            </div>
        )
    }
}
