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

const useStyles = makeStyles(styles);

function ScootersTable(inputData) {

    const classes = useStyles();
    const data = inputData.inputDataSl;
    const scooter = inputData.inputDataScooter;

    const [selectCountry, setSelectCountry] = React.useState("");
    const [selectCity, setSelectCity] = React.useState("");
    const [selectedFilter, setFilter] = React.useState(1);
    const [countStation, setCountStation] = React.useState(1);
    const [countSlots, setCountSlots] = React.useState(1);
    const [availableSlot, setAvailableSlot] = React.useState(1);
    const [occupiedSlot, setOccupiedSlot] = React.useState(1);
    const [unavailableSlot, setUnavailableSlot] = React.useState(1);
    const [onlineSlot, setOnlineSlot] = React.useState(1);
    const [offlineSlot, setOfflineSlot] = React.useState(1);
    const handleCountry = event => {
        setSelectCountry(event.target.value);
    };

    const handleCity = event => {
        setSelectCity(event.target.value);
    };

    const handleFilter = event => {
        switch (event) {
            case 'All': setFilter(1);break;
            case 'Charging': setFilter(2);break;
            case 'Charged': setFilter(3);break;
            case 'Not charging': setFilter(4);break;
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

    scooter.forEach(scooter => {
        scooter.FilteredData = [];
        scooter.outData.forEach(slot => {
            let arrInner = [];
            arrInner = slot.slice();
            arrInner.push(fillButtons);
            switch(selectedFilter) {
                case 1: scooter.FilteredData.push(arrInner); break;
                case 2: {slot.forEach(item => {
                            if(item === "Charging") scooter.FilteredData.push(arrInner)
                        })
                } break;
                case 3: {slot.forEach(item => {
                            if(item === "Charged") scooter.FilteredData.push(arrInner)
                        })
                } break;
                case 4: {slot.forEach(item => {
                            if(item === "Not Charging") scooter.FilteredData.push(arrInner)
                        })
                } break;
            }
        })
    })

    const setStationData = () => {
        let countSlots = 0;
        let availableSlot = 0;
        let occupiedSlot = 0;
        scooter.forEach((item, i) => {
            item.n = ++i;
            item.st_counts_slot = item.id_slots.length;
            item.st_status = "online";
            countSlots = countSlots + item.id_slots.length;
            this.setState({ stationQty: i});
            item.arr_slots.forEach((sl, i) => {
                sl.id = i;
                if(sl.slot_status === 0) {
                    availableSlot++;
                    sl.slot_status = 'Available';
                }
                if(sl.slot_status === 1) {
                    occupiedSlot++;
                    sl.slot_status = 'Occupied';
                }
                if(sl.slot_info === 0) {
                    sl.slot_info = 'Offline';
                }
                if(sl.slot_info === 1) {
                    sl.slot_info = 'Online';
                }
            });
        })

        this.setState({ slotQty: countSlots});
        this.setState({ availableQty: availableSlot});
        this.setState({ occupiedQty: occupiedSlot});

    }



    return (
        <GridContainer>
            <GridItem xs={12}>
                <Card>
                    <CardBody>
                        <GridItem xs={12} sm={10} md={8}>
                            {/*<legend>Customisable Select</legend>*/}
                            <GridContainer>
                                <GridItem xs={12} sm={4} md={4} lg={4}>
                                    <FormControl
                                        fullWidth
                                        className={classes.selectFormControl}
                                    >
                                        <InputLabel
                                            htmlFor="simple-select"
                                            className={classes.selectLabel}
                                        >
                                            Choose Country
                                        </InputLabel>
                                        <Select
                                            MenuProps={{
                                                className: classes.selectMenu
                                            }}
                                            classes={{
                                                select: classes.select
                                            }}
                                            value={selectCountry}
                                            onChange={handleCountry}
                                            inputProps={{
                                                name: "simpleSelect",
                                                id: "simple-select"
                                            }}
                                        >
                                            <MenuItem
                                                disabled
                                                classes={{
                                                    root: classes.selectMenuItem
                                                }}
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
                                <GridItem xs={12} sm={6} md={4} lg={4}>
                                    <FormControl  fullWidth   className={classes.selectFormControl}>
                                        <InputLabel  htmlFor="simple-select" className={classes.selectLabel}>
                                            Choose City
                                        </InputLabel>
                                        <Select
                                            MenuProps={{
                                                className: classes.selectMenu
                                            }}
                                            classes={{
                                                select: classes.select
                                            }}
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
                                <GridItem xs={12} sm={4} md={4} lg={4} alignItems="flex-end">
                                    <FormControl  fullWidth   className={classes.selectFormControl}>
                                        <CustomDropdown
                                            hoverColor="info"
                                            buttonText="Filter"
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
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        <div style={{ marginLeft: "15px", marginTop: "20px"}}>
                            <hr/>
                            <h7 className={classes.selectInfoPanel}>
                            Scooters qty: {countStation}&nbsp;
                            Granted: {countSlots}&nbsp;
                            Denied:  {availableSlot}&nbsp;
                            Charging: {occupiedSlot}&nbsp;
                            Not charging: {unavailableSlot}&nbsp;
                            </h7>
                        </div>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12}>
                {scooter.map(item => {
                    return(
                    <Card>
                        <CardHeader color="rose" icon>
                            <CardIcon color="rose">
                                <ScooterImg/>
                            </CardIcon>
                            {/*<h4 className={classes.cardIconTitle}>Scooters</h4>*/}
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHead={[
                                    "#",
                                    "ID",
                                    "Type",
                                    "Charge level, W",
                                    "Status",
                                    "Permission",
                                    "Station location"
                                ]}
                                tableData={item.FilteredData}
                                customCellClasses={[classes.center, classes.center, classes.right]}
                                customClassesForCells={[0, 4, 5]}
                                customHeadCellClasses={[
                                    classes.center,
                                    classes.center,
                                    classes.right
                                ]}
                                customHeadClassesForCells={[0, 4, 5]}
                            />
                        </CardBody>
                    </Card>
                    )}
                    )}
            </GridItem>
        </GridContainer>
    );
}

export default class Scooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            rows:[],
            f_rows:[],
            stationQty: 0,
            slotQty : 0,
            availableQty : 0,
            occupiedQty : 0,
            outOfWork : 0,

            isAll: true,
            isAvailable: false,
            isOccupied: false,
            isUnavailable: false,
            isOnline: false,
            isOffline: false,

            outData: []

        };

        this.isActive = true;
        this.tmpArr = [];

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
            })
            .then( setTimeout(this.getScooterData, 1000))
    }

    setScooterData(data) {
        let chargingQty = 0;
        let notChargingQty = 0;
        let grantedQty = 0;
        let deniedQty = 0;
        let scootersQty = 0;
        data.forEach((item, i) => {
            item.id = i;
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
        })
        this.setState({ rows: data})
        // this.setState({ f_rows: data});
        // this.setState({ scootersQty: scootersQty});
        // this.setState({ chargingQty: chargingQty});
        // this.setState({ notChargingQty: notChargingQty});
        // this.setState({ grantedQty: grantedQty});
        // this.setState({ deniedQty: deniedQty});
        // this.filterScooter();
    }

    componentDidMount() {
        this.getScooterData();
    }

    render() {
        return (
            <div>
                <ScootersTable inputDataScooter={this.state.outData} inputDataSt={this.state.rows}/>
            </div>
        )
    }
}
