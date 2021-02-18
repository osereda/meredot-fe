import React, { useState, useEffect } from "react";
import MapComponent from "./MapComponent";
import './dashboard.css';
import GridContainer from "../Grid/GridContainer";
import Table from "../ReactTable/ReactTable";

export default function MapCenterMark(geodata) {
    let lat=32.8;
    let lon=35.1;
    let geoposition = [];
    //let geodataArr = Object.keys(geodata).map((key) => [geodata[key]]);

    const [coords, setCoords] = useState([lat, lon]);
    const [coordsCheckLat, setCoordsCheckLat] = useState(0);
    const [coordsCheckLon, setCoordsCheckLon] = useState(0);

    if(geodata.geodata.geodata) {
        if(coordsCheckLat !== geodata.geodata.geodata.split(",")[0] &&
            coordsCheckLon !== geodata.geodata.geodata.split(",")[1]) {
            lat = geodata.geodata.geodata.split(",")[0];
            setCoordsCheckLat(lat);
            lon = geodata.geodata.geodata.split(",")[1];
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
                    {/*{geoposition.map((item) => {*/}
                    {/*    return (*/}
                    <>
                        <table style={{ width: "100%", marginTop: "20px"}}>
                            <tr style={{borderBottom: "1px solid black"}}>
                                <td style={{ textAlign: "left" , borderBottom: "1px solid #eee"}}>Address</td>
                                <td style={{ paddingLeft: "5px" , borderBottom: "1px solid #eee"}}>Available slots</td>
                                <td style={{ paddingLeft: "5px" , borderBottom: "1px solid #eee"}}>Number of slots</td>
                            </tr >
                            <tr>
                                <td>{geodata.geodata.address}</td>
                                <td style={{ textAlign: "center" }}>{geodata.geodata.countAvaSlot}</td>
                                <td style={{ textAlign: "center" }}>{geodata.geodata.countSlot}</td><
                            /tr>
                        </table>
                        {/*<ul onClick={handleChangeList}*/}
                        {/*    style={{ marginLeft: "0", paddingLeft: "0" }}*/}
                        {/*><p>{geodata.geodata.address}&nbsp;</p>{geodata.geodata.countAvaSlot}&nbsp;{geodata.geodata.countSlot}*/}
                        {/*</ul>*/}
                    </>
                        {/*)*/}
                    {/*})}*/}
                </div>
                <div className="db_item_map">
                    <MapComponent coords={coords}/>
                </div>
            </div>
        </div>
    );
}
