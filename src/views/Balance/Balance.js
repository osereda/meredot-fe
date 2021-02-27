import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import configData from "../../config.json";
import Grid from "@material-ui/core/Grid";
import {NativeSelect} from "@material-ui/core";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import EuroIcon from '@material-ui/icons/Euro';
import isWeekend from 'date-fns/isWeekend';

const useStyles = makeStyles(styles);

function BalanceTable(inputData) {

    const classes = useStyles();
    const balance = inputData.inputDataBalance;
    const tableHeadData=["#", "Date", "Power, kW",  "Time, h", "Price, $", "Actions"]
    const [selectCountry, setSelectCountry] = React.useState("");
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

    const fillButtons = [
        { color: "info", icon: BatteryChargingFullIcon },
        { color: "success", icon: Edit },
        { color: "danger", icon: Close }
    ].map((prop, key) => {
        return (
            <Button color={prop.color} className={classes.actionButton} key={key} disabled>
                <prop.icon className={classes.icon} />
            </Button>
        );
    });

    let filteredDates = [];
    balance.forEach(balance => {
        let arrInner = [];
        arrInner = balance.slice();
        arrInner.push(fillButtons);
        FilteredData.push(arrInner);
        filteredDates = FilteredData.filter(date => {
            if(new Date(date[1]) - new Date(selectedDateFrom.toString()) >= 0 &&
                new Date(selectedDateTo.toString())  - new Date(date[1]) >= 0 ){
                    return date
                }
        });
    })
    FilteredData = filteredDates.slice();

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
                        {/*<h4 className={classes.cardIconTitle}>Scooters</h4>*/}
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHead = {tableHeadData}
                            tableData={FilteredData}
                            customCellClasses={[
                                classes.left,
                                classes.center,
                                classes.center,
                                classes.center,
                                classes.center,
                                classes.center,
                                classes.center,
                                classes.right]}
                            customClassesForCells={[0,1,2,3,4,5,6,7]}
                            customHeadCellClasses={[
                                classes.left,
                                classes.center,
                                classes.center,
                                classes.center,
                                classes.center,
                                classes.center,
                                classes.center,
                                classes.right]}
                            customHeadClassesForCells={[0,1,2,3,4,5,6,7]}
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
            rows:[],
            rowsQty:[],
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
                this.setBalanceData(data);
                // this.setState({ rows: data})
            })
            .then( setTimeout(this.getBalanceData, 700))
    }

    setBalanceData(data) {
        let outData = [];
        data.forEach((item, i) => {
            item._id = ++i;
            item.bl_date = new Date(item.bl_date).toLocaleDateString("en-US") ;
            item.bl_pow = item.bl_pow ? item.bl_pow.toFixed(2) : 0;
            item.bl_price = item.bl_price ? item.bl_price.toFixed(2) : 0;
            item.bl_time = item.bl_time ? item.bl_time.toFixed(2) : 0;
            delete item.bl_location;
            delete item.bl_scooter_event;
            outData.push(Object.values(item));
        })
        this.setState({ rows: outData})
    }

    componentDidMount() {
        this.getBalanceData();
    }

    render() {
        return (
            <div>
                <BalanceTable
                    inputDataBalance={this.state.rows}/>
            </div>
        )
    }
}
