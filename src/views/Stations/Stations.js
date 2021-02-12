import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Assignment from "@material-ui/icons/Assignment";
import Person from "@material-ui/icons/Person";
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
import { useState, useEffect } from 'react';
import axios from 'axios';
import EvStationIcon from '@material-ui/icons/EvStation';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";

const useStyles = makeStyles(styles);

function StationsTab(inputData) {

    const classes = useStyles();
    // console.log("PROP data - " + inputData.inputDataSt);
    const data = inputData.inputDataSl;
    const station = inputData.inputDataSt;

    const outData = [];
    const [checked, setChecked] = React.useState([]);
    const [data1, set1Data] = useState({ hits: [] });

    const [checkedA, setCheckedA] = React.useState(true);
    const [checkedB, setCheckedB] = React.useState(false);
    const [selectCountry, setSelectCountry] = React.useState("");
    const [selectCity, setSelectCity] = React.useState("");
    const [tags, setTags] = React.useState(["pizza", "pasta", "parmesan"]);
    const [selectedFilter, setFilter] = React.useState(1);

    const handleCountry = event => {
        setSelectCountry(event.target.value);
    };

    const handleCity = event => {
        setSelectCity(event.target.value);
    };

    const handleFilter = event => {
        console.log("XXX =" + event);
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

    data.forEach(slot => {
        let arrInner = [];
        arrInner = slot.slice();
        arrInner.push(fillButtons);
        outData.push(arrInner);
    })

    const filter = () => {
        let filteredArr = [];
        if(true) {
            filteredArr = this.state.f_rows.filter(item => {
                if(item.location.split(',')[0] === this.state.filterCountry) {
                    if (this.state.isAll !== true && item.arr_slots.length > 0) {
                        item.arr_slots = item.arr_slots.filter(sl => {
                            if (sl.slot_status === "Occupied" && document.getElementById("radio-2").checked) {
                                return sl;
                            }
                            if (sl.slot_status === "Available" && document.getElementById("radio-3").checked) {
                                return sl;
                            }
                            if (sl.slot_info === "Online" && document.getElementById("radio-5").checked) {
                                return sl;
                            }
                        });
                    }
                    return item;
                }

            })
            this.setState({rows: filteredArr});
        }
        else {
            this.setState({rows: this.state.f_rows});
        }
    }

    return (
        <GridContainer>
            <GridItem xs={12}>
                <Card>
                    <CardBody>
                        <GridItem xs={12} sm={12} md={6}>
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
                                        <InputLabel
                                            htmlFor="simple-select"
                                            className={classes.selectLabel}
                                        >
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
                                            <MenuItem
                                                disabled
                                                classes={{
                                                    root: classes.selectMenuItem
                                                }}
                                            >
                                                Choose City
                                            </MenuItem>
                                            <MenuItem
                                                classes={{
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
                                <GridItem xs={12} sm={4} md={4} lg={4}>
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

                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12}>
                <Card>
                    <CardHeader color="rose" icon>
                        <CardIcon color="rose">
                            <EvStationIcon />
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
                            tableData={outData}
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
        // this.setStationData = this.setStationData.bind(this);
        // this.filterStation = this.filterStation.bind(this);
        // this.handleFilter = this.handleFilter.bind(this);
    }

    GetStationData() {
        fetch('http://localhost:5000/api/station/all')
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
        // this.filterStation();
    }

    componentDidMount() {
        this.GetStationData();
    }

    render() {
        return (
            <div>
                <StationsTab inputDataSl={this.state.outData} inputDataSt={this.state.rows}/>
            </div>
        )
    }
}
