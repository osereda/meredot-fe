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


const useStyles = makeStyles(styles);

function BalanceTable(inputData) {

    const balanceTotal = [];
    const classes = useStyles();
    const balance = inputData.inputDataBalance;
    const total = {
        totalBalance: true,
            colspan: "0",
        amount: balanceTotal
    };
    let balanceRest = 0
    const tableHeadData=["#", "Date", "Charging counter", "Power, kW/h",  "Time, h", "Price, $"]
    const [selectCity, setSelectCity] = React.useState("");
    const [selectedFilter, setFilter] = React.useState(1);
    const [selectedFilterStat, setFilterSat] = React.useState('Last month');
    let  FilteredData = [];

    const [selectedDateFrom, setSelectedDateFrom] = React.useState(new Date('2021-02-02'));
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

    let filteredDates = [];
    let outData = [];
    let countN = 0;
    let countDateFrom = 0;
    let countDateTo = 0;
    let countChargingCount = 0;
    let countPower = 0;
    let countTime = 0;
    let countPrice = 0;
    if(balance && balance.length > 0)
        // console.log("balance"+balance);
        filteredDates = balance.slice()
        filteredDates.forEach((item, i) => {
        if(new Date(item.bl_date) - new Date((selectedDateFrom.valueOf()-864e5)) > 0 &&
            new Date((selectedDateTo.valueOf()+864e5)) - new Date(item.bl_date) >= 0
        ) {
            if(i===0) {
                countDateFrom = item.bl_date;
            }
            countDateTo = item.bl_date;
            item._id = ++i;
            countN = i;
            countChargingCount+=item.bl_scooter_event;
            countPower+=item.bl_pow;
            countTime=countTime+item.bl_time;
            countPrice+=item.bl_price;
            balanceRest = item.bl_balance;
            item.bl_date = new Date(item.bl_date).toLocaleDateString("en-US");
            item.bl_price = item.bl_price ? item.bl_price.toFixed(2) * (-1) : 0;
            if (item.bl_time) {
                if (item.bl_time / 3600 > 1) {
                    let hour = Math.trunc(item.bl_time / 3600);
                    let min = Math.trunc((item.bl_time - (3600 * (hour-0)))/60);
                    let sec = Math.trunc((((item.bl_time - (3600 * (hour-0)))/60) % 1)*60);
                    if(!isNaN(min-0))item.bl_time = min >= 10 ? hour + " : " + min + " : " + sec : hour + " : 0" + min + " : " + sec;
                } else {
                    let min = Math.trunc(item.bl_time / 60);
                    let sec = Math.trunc(((item.bl_time / 60) % 1)*60);
                    if(!isNaN(min-0))item.bl_time = min >= 10 ? "0 : " + min + " : " + sec : "0 : 0" + min + " : " + sec;
                }
            }
            balanceRest = item.bl_balance + countPrice.toFixed(2)*(-1);
            delete item.bl_location;
            delete item.bl_balance;
            outData.push(Object.values(item));
            FilteredData = outData;
            balanceTotal[0]=countN;
            balanceTotal[1]=new Date(countDateFrom).toLocaleDateString("en-US") + " - "
                + new Date(countDateTo).toLocaleDateString("en-US");
            balanceTotal[2]=countChargingCount;
            balanceTotal[3]=countPower.toFixed(3);
            balanceTotal[5]=countPrice.toFixed(2)*(-1);

            // if (countTime / 3600 > 1) {
            //     let hour = (countTime / 3600).toFixed(0);
            //     let min = ((countTime% 3600) / 60).toFixed(0);
            //     if(!isNaN(min-0)) balanceTotal[4] = min >= 10 ? hour + " : " + min : hour + " : 0" + min;
            // } else {
            //     let min = (countTime / 60).toFixed(0);
            //     if(!isNaN(min-0)) balanceTotal[4] = min >= 10 ? "0 : " + min : "0 : 0" + min;
            // }
        }
    })
    if (countTime / 3600 > 1) {
        let hour = Math.trunc((countTime / 3600));
        let min = Math.trunc((countTime - (3600 * (hour-0)))/60);
        let min1 = Math.trunc((countTime - (3600 * (hour-0)))/60);
        let sec = Math.trunc((((countTime - (3600 * (hour-0)))/60) % 1)*60);
        if(!isNaN(min-0)) balanceTotal[4] = min >= 10 ? hour + " : " + min + " : " + sec : hour + " : 0" + min + " : " + sec;
    } else {
        let min = Math.trunc(countTime / 60);
        let sec = Math.trunc(((countTime / 60) % 1)*60);
        if(!isNaN(min-0)) balanceTotal[4] = min >= 10 ? "0 : " + min + " : " + sec : "0 : 0" + min + " : " + sec;
    }
    FilteredData.push(total);

    return (
        <GridContainer>
            <GridItem xs={12}>
                <Card>
                    <CardBody>

                        {/*<GridContainer justify="space-between">*/}
                        {/*    <GridItem xs={12} sm={12} md={7}*/}
                        {/*              container*/}
                        {/*              direction="row"*/}
                        {/*              justify="flex-start"*/}
                        {/*              alignItems="flex-start"  >*/}
                        {/*        <GridItem xs={10} sm={6} md={6} lg={5} >*/}
                        {/*            <FormControl fullWidth className={classes.selectFormControl}>*/}
                        {/*                <InputLabel htmlFor="uncontrolled-native">Choose City</InputLabel>*/}
                        {/*                <NativeSelect*/}
                        {/*                    defaultValue={11}*/}
                        {/*                    inputProps={{*/}
                        {/*                        name: 'name',*/}
                        {/*                        id: 'uncontrolled-native',*/}
                        {/*                    }}*/}
                        {/*                    onChange={handleCity}*/}
                        {/*                >*/}
                        {/*                    <option value={11}>All</option>*/}
                        {/*                    <option value={12}>Tel Aviv</option>*/}
                        {/*                </NativeSelect>*/}
                        {/*            </FormControl>*/}
                        {/*        </GridItem>*/}
                        {/*    </GridItem>*/}
                        {/*    <GridItem xs={12} sm={10} md={4} lg={3}>*/}
                        {/*        <Grid xs={12} sm={8} md={12} lg={12} >*/}
                        {/*            <FormControl  fullWidth   className={classes.selectFormControl}>*/}
                        {/*                <CustomDropdown*/}
                        {/*                    hoverColor="info"*/}
                        {/*                    buttonText={selectedFilterStat}*/}
                        {/*                    buttonProps={{*/}
                        {/*                        round: true,*/}
                        {/*                        fullWidth: true,*/}
                        {/*                        style: { marginBottom: "0" },*/}
                        {/*                        color: "info"*/}
                        {/*                    }}*/}
                        {/*                    dropdownHeader="Select period"*/}
                        {/*                    onClick={handleFilter}*/}
                        {/*                    dropdownList={[*/}
                        {/*                        "Last month",*/}
                        {/*                        "This month",*/}
                        {/*                        "Last week",*/}
                        {/*                        "This week"*/}
                        {/*                    ]}*/}
                        {/*                />*/}
                        {/*            </FormControl>*/}
                        {/*        </Grid>*/}
                        {/*    </GridItem>*/}
                        {/*</GridContainer>*/}
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
                        <h4 className={classes.cardIconTitle}>On balance - {balanceRest} $</h4>
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
                                classes.center
                            ]}
                            customClassesForCells={[0,1,2,3,4,5]}
                            customHeadCellClasses={[
                                classes.left,
                                classes.center,
                                classes.centerBalance,
                                classes.center,
                                classes.center,
                                classes.center
                            ]}
                            customHeadClassesForCells={[0,1,2,3,4,5]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}

export default class Balance extends React.Component {
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
        fetch(configData.SERVER_URL+'balance/all')
            .then(response => {
                if (!response.ok) {
                    console.log('error');
                }
                return response.json();
            })
            .then((data) => {
                this.setState({ data: data});
                this.setBalanceData(data);
            })
            .then( setTimeout(this.getBalanceData, 700))
    }

    setBalanceData(data) {

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
