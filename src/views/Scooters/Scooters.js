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
import EvStationIcon from '@material-ui/icons/EvStation';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import ScooterImg from "@material-ui/icons/TwoWheeler";
import configData from "../../config.json";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(styles);

function ScootersTable(inputData) {

    const classes = useStyles();
    const scooters = inputData.inputDataScooter;
    const scootersQty = inputData.inputDataScooterQty;
    const tableHeadData=["#", "ID","Type", "Charge level, W", "Status",  "Permission", "Station location", "Actions"]
    const [selectCountry, setSelectCountry] = React.useState("");
    const [selectCity, setSelectCity] = React.useState("");
    const [selectedFilter, setFilter] = React.useState(1);
    const [selectedFilterStat, setFilterSat] = React.useState('All');
    let  FilteredData = [];

    const handleCountry = event => {
        setSelectCountry(event.target.value);
    };

    const handleCity = event => {
        setSelectCity(event.target.value);
    };

    const handleFilter = event => {
        switch (event) {
            case 'All': setFilter(1);setFilterSat('All');break;
            case 'Charging': setFilter(2); setFilterSat('Charging');break;
            case 'Charged': setFilter(3); setFilterSat('Charged');break;
            case 'Not charging': setFilter(4);setFilterSat('Not charging');break;
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

    scooters.forEach(scooter => {
        let arrInner = [];
        arrInner = scooter.slice();
        arrInner.push(fillButtons);
        switch(selectedFilter) {
            case 1: FilteredData.push(arrInner); break;
            case 2: {scooter.forEach(item => {
                        if(item === "Charging") FilteredData.push(arrInner)
                    })
            } break;
            case 3: {scooter.forEach(item => {
                        if(item === "Charged") FilteredData.push(arrInner)
                    })
            } break;
            case 4: {scooter.forEach(item => {
                        if(item === "Not charging") FilteredData.push(arrInner)
                    })
            } break;
        }
    })
    FilteredData = FilteredData.slice();

    return (
        <GridContainer>
            <GridItem xs={12}>
                <Card>
                    <CardBody>

                        <GridContainer justify="space-between">
                            <GridItem xs={12} sm={12} md={6}
                                      container
                                      direction="row"
                                      justify="flex-start"
                                      alignItems="flex-start"  >
                                <GridItem xs={12} sm={7} md={6} lg={4}>
                                    <FormControl fullWidth className={classes.selectFormControl}>
                                        <InputLabel
                                            htmlFor="simple-select"
                                            className={classes.selectLabel}
                                        >
                                            Choose Country
                                        </InputLabel>
                                        <Select
                                            MenuProps={{className: classes.selectMenu }}
                                            classes={{ select: classes.select }}
                                            value={selectCountry}
                                            onChange={handleCountry}
                                            inputProps={{
                                                name: "simpleSelect",
                                                id: "simple-select"
                                            }}
                                        >
                                            <MenuItem
                                                disabled
                                                classes={{root: classes.selectMenuItem }}
                                            >
                                                Choose Country
                                            </MenuItem>
                                            <MenuItem
                                                classes={{
                                                    root: classes.selectMenuItem,
                                                    selected: classes.selectMenuItemSelected
                                                }}
                                                value="2"
                                            >
                                                All
                                            </MenuItem>
                                            <MenuItem
                                                classes={{
                                                    root: classes.selectMenuItem,
                                                    selected: classes.selectMenuItemSelected
                                                }}
                                                value="3"
                                            >
                                                Israel
                                            </MenuItem>


                                        </Select>
                                    </FormControl>
                                </GridItem>
                                <GridItem xs={12} sm={7} md={6} lg={4} >
                                    <FormControl  fullWidth   className={classes.selectFormControl}>
                                        <InputLabel  htmlFor="simple-select" className={classes.selectLabel}>
                                            Choose City
                                        </InputLabel>
                                        <Select
                                            MenuProps={{ className: classes.selectMenu }}
                                            classes={{ select: classes.select }}
                                            value={selectCity}
                                            onChange={handleCity}
                                            inputProps={{
                                                name: "simpleSelect",
                                                id: "simple-select"
                                            }}
                                        >
                                            <MenuItem disabled  classes={{root: classes.selectMenuItem }}>
                                                Choose City
                                            </MenuItem>
                                            <MenuItem classes={{
                                                root: classes.selectMenuItem,
                                                selected: classes.selectMenuItemSelected
                                            }}
                                                      value="12"
                                            >
                                                All
                                            </MenuItem>
                                            <MenuItem
                                                classes={{
                                                    root: classes.selectMenuItem,
                                                    selected: classes.selectMenuItemSelected
                                                }}
                                                value="13"
                                            >
                                                Tel Aviv
                                            </MenuItem>
                                        </Select>

                                    </FormControl>

                                </GridItem>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} lg={2}>
                                <Grid xs={12} sm={12} md={12} lg={12} >
                                    <FormControl  fullWidth   className={classes.selectFormControl}>
                                        <CustomDropdown
                                            hoverColor="info"
                                            buttonText={selectedFilterStat}
                                            buttonProps={{
                                                round: true,
                                                fullWidth: true,
                                                style: { marginBottom: "0" },
                                                color: "info"
                                            }}
                                            dropdownHeader="Select"
                                            onClick={handleFilter}
                                            dropdownList={[
                                                "All",
                                                { divider: true },
                                                "Charging",
                                                "Charged",
                                                "Not charging"
                                            ]}
                                        />
                                    </FormControl>
                                </Grid>
                            </GridItem>
                        </GridContainer>

                        <div style={{ marginLeft: "15px", marginTop: "40px"}}>
                            <h7 className={classes.selectInfoPanel}>
                            Scooters qty: {scootersQty[0]}&nbsp;
                            Granted: {scootersQty[2]}&nbsp;
                            Denied:  {scootersQty[0] -scootersQty[2]}&nbsp;
                            Charging: {scootersQty[1]}&nbsp;
                            Not charging: {scootersQty[0] - scootersQty[1]}&nbsp;
                            </h7>
                        </div>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12}>
                <Card>
                    <CardHeader color="rose" icon>
                        <CardIcon color="rose">
                            <ScooterImg/>
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

export default class Scooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows:[],
            rowsQty:[],
        };

        this.getScooterData = this.getScooterData.bind(this);

    }

    getScooterData() {
        fetch(configData.SERVER_URL+'scooter/all')
            .then(response => {
                if (!response.ok) {
                    console.log('error');
                }
                return response.json();
            })
            .then((data) => {
                this.setScooterData(data);
                // this.setState({ rows: data})
            })
            .then( setTimeout(this.getScooterData, 700))
    }

    setScooterData(data) {
        let chargingQty = 0;
        let notChargingQty = 0;
        let grantedQty = 0;
        let deniedQty = 0;
        let scootersQty = 0;
        let outData = [];
        let outDataQty = [];
        data.forEach((item, i) => {
            item._id = ++i;
            scootersQty++;
            if(item.sc_status === 1) {
                chargingQty++;
                item.sc_status = 'Charging';
            }
            if(item.sc_status === 0 || item.sc_status === 3){
                notChargingQty++;
                item.sc_status = 'Not charging';
            }
            if(item.sc_perm === 1) {
                grantedQty++;
                item.sc_perm = 'Granted';
            }
            if(item.sc_perm === 0) {
                deniedQty++;
                item.sc_perm = 'Denied';
            }
            delete item.sc_operator;
            outData.push(Object.values(item));
        })
        outDataQty.push(scootersQty, chargingQty, grantedQty);
        this.setState({ rows: outData})
        this.setState({ rowsQty: outDataQty})
    }

    componentDidMount() {
        this.getScooterData();
    }

    render() {
        return (
            <div>
                <ScootersTable
                    inputDataScooter={this.state.rows}
                    inputDataScooterQty ={this.state.rowsQty}/>
            </div>
        )
    }
}
