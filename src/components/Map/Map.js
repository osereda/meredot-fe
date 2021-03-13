import React, { useState, useEffect } from "react";
import MapComponent from "./MapComponent";
import './dashboard.css';
import GridContainer from "../Grid/GridContainer";
import Table from "components/Table/Table.js";
//import Table from "@material-ui/core/Table";
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";
import CardBody from "../Card/CardBody";
const useStyles = makeStyles(styles);

export default function MapCenterMark(inputGeoData) {
    const classes = useStyles();
    const tableHeadData = ["ID", "Address", "Total"]
    let lat=32.8;
    let lon=35.1;
    let geoposition = [];
    //let geodataArr = Object.keys(geodata).map((key) => [geodata[key]]);

    const [coords, setCoords] = useState([lat, lon]);
    const [coordsCheckLat, setCoordsCheckLat] = useState(0);
    const [coordsCheckLon, setCoordsCheckLon] = useState(0);

    if(inputGeoData.geodata.geodata) {
        if(coordsCheckLat !== inputGeoData.geodata.geodata.split(",")[0] &&
            coordsCheckLon !== inputGeoData.geodata.geodata.split(",")[1]) {
            lat = inputGeoData.geodata.geodata.split(",")[0];
            setCoordsCheckLat(lat);
            lon = inputGeoData.geodata.geodata.split(",")[1];
            setCoordsCheckLon(lon);
            setCoords([lat, lon]);
        }
    }

    const handleChangeList = (e) => {
        const target = e.target.outerText;
        const newCoords = target.split(",");
        lat = parseFloat(newCoords[0]);
        lon = parseFloat(newCoords[1]);
        setCoords([lat, lon]);
    };

    useEffect(() => {
    }, [coords]);

    return (
        <div className="db_container">
            <div className="db_box">
                <div className="db_item">
                    <Table
                        // tableHead={tableHeadData}
                        tableData={[
                            ["#"+inputGeoData.geodata.st_id, inputGeoData.geodata.address, inputGeoData.geodata.countAvaSlot+"/"+ inputGeoData.geodata.countSlot]
                        ]}
                        customCellClasses={[classes.left, classes.centerDashboard, classes.rightDashboard]}
                        customClassesForCells={[0, 1, 2]}
                        customHeadCellClasses={[
                            classes.left,
                            classes.centerDashboard,
                            classes.rightDashboard
                        ]}
                        customHeadClassesForCells={[0, 1, 2]}
                    />
                </div>
                <div className="db_item_map">
                    <MapComponent coords={coords}/>
                </div>
            </div>
        </div>
    );
}
