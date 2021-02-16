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
import configData from "../../config.json";

const useStyles = makeStyles(styles);

function StationsTab(inputData) {

    const classes = useStyles();
    const stations = inputData.inputDataSt;

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
            case 'Occupied': setFilter(2);break;
            case 'Available': setFilter(3);break;
            case 'Unavailable': setFilter(4);break;
            case 'Online': setFilter(5);break;
            case 'Offline': setFilter(6);break;
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

    stations.forEach(station => {
        station.FilteredData = [];
        station.outData.forEach(slot => {
            let arrInner = [];
            arrInner = slot.slice();
            arrInner.push(fillButtons);
            switch(selectedFilter) {
                case 1: station.FilteredData.push(arrInner); break;
                case 2: {slot.forEach(item => {
                            if(item === "Occupied") station.FilteredData.push(arrInner)
                        })
                } break;
                case 3: {slot.forEach(item => {
                            if(item === "Available") station.FilteredData.push(arrInner)
                        })
                } break;
                case 4: {slot.forEach(item => {
                            if(item === "Unavailable") station.FilteredData.push(arrInner)
                        })
                } break;
                case 5: {slot.forEach(item => {
                            if(item === "Online") station.FilteredData.push(arrInner)
                        })
                } break;
                case 6: {slot.forEach(item => {
                            if(item === "Offline") station.FilteredData.push(arrInner)
                        })
                } break;
                }
            })
    })

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
                                <GridItem xs={12} sm={4} md={4} lg={4}>
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
                                            buttonText="Select filter Pad"
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
                                                "Occupied",
                                                "Available",
                                                "Unavailable",
                                                { divider: true },
                                                "Online",
                                                "Offline"
                                            ]}
                                        />
                                    </FormControl>
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        <div style={{ marginLeft: "15px", marginTop: "20px"}}>
                            <hr/>
                            <h7 className={classes.selectInfoPanel}>
                            Station qty: {countStation}&nbsp;
                            Pad qty: {countSlots}&nbsp;
                            Available pads: {availableSlot}&nbsp;
                            Occupied pads: {occupiedSlot}&nbsp;
                            Out of work: {unavailableSlot}&nbsp;
                            </h7>
                        </div>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12}>
                {stations.map(item => {
                    return(
                    <Card>
                        <CardHeader color="rose" icon>
                            <CardIcon color="rose">
                                <EvStationIcon/>
                            </CardIcon>
                            <h4 className={classes.cardIconTitle}>Location: Israel, Tel Aviv</h4>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHead={[
                                    "#",
                                    "Pad ID",
                                    "Status",
                                    "Info",
                                    "Charge level, W",
                                    "Actions"
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

export default class Station extends React.Component {
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

        this.GetStationData = this.GetStationData.bind(this);

    }

    GetStationData() {
        fetch(configData.SERVER_URL+'station/all')
            .then(response => {
                if (!response.ok) {
                    console.log('error');
                }
                return response.json();
            })
            .then((data) => {
                if(data.length > 0) {
                    this.setStationData(data)
                    console.log('GetStationData');
                }
            })
            .then( setTimeout(this.GetStationData, 1000))
    }

    setStationData(data) {
        let countSlots = 0;
        let availableSlot = 0;
        let occupiedSlot = 0;
        data.forEach((item, i) => {
            item.outData = [];
            item.n = ++i;
            item.st_counts_slot = item.id_slots.length;
            item.st_status = "online";
            countSlots = countSlots + item.id_slots.length;
            this.setState({ stationQty: i});
            item.arr_slots.forEach((sl, i) => {
                sl._id= i;
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
                delete sl.scooter_id;
                delete sl.scooter_event;
                item.outData.push(Object.values(sl));
            });

        })

        this.setState({ outData: data[0].outData});
        this.setState({ rows: data});
        this.setState({ f_rows: data});
        this.setState({ slotQty: countSlots});
        this.setState({ availableQty: availableSlot});
        this.setState({ occupiedQty: occupiedSlot});
    }

    componentDidMount() {
        this.GetStationData();
    }

    render() {
        return (
            <div>
                <StationsTab inputDataSt={this.state.rows}/>
            </div>
        )
    }
}
