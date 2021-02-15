import React, { useState, useEffect } from "react";
import MapComponent from "./MapComponent";
import './dashboard.css';
import GridContainer from "../Grid/GridContainer";
import Table from "../ReactTable/ReactTable";

export default function MapCenterMark(geodata) {
    let lat=32.8;
    let lon=35.1;
    let A = geodata.geodata;
    // console.log('A -'+ A);
    let geopositionArr = Object.keys(geodata).map((key) => [geodata[key]]);
    let geoposition = geopositionArr[0][0];
    if(geoposition && geoposition.length > 0) {
        const newCoords = geoposition[0].split(",");
        lat = parseFloat(newCoords[0]);
        lon = parseFloat(newCoords[1]);
    }

    let showArr = [];
    console.log("geopositionArr-> "+geopositionArr);
    geopositionArr.forEach(item => {
        if(item){
            //showArr =  item.split(";")[0];
            console.log("showArr-> "+showArr);
        };
    })

    const setMapInfoArray = () => {

    }

    // $.get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=47.217954&lon=-1.552918', function(data){
    //     console.log(data.address.road);
    // });

    const [coords, setCoords] = useState([lat, lon]);

    const handleChangeList = (e) => {
        const target = e.target.outerText;
        const newCoords = target.split(",");
        lat = parseFloat(newCoords[0]);
        lon = parseFloat(newCoords[1]);
        setCoords([lat, lon]);
    };

    useEffect(() => {
        console.log(coords);
    }, [coords]);

    return (
        <div className="db_container">
            <div className="db_box">
                <div className="db_item">
                    {geoposition.map((item) => {
                        return (
                            <>
                                <hr/>
                                <ul onClick={handleChangeList}
                                    style={{ marginLeft: "0", paddingLeft: "0" }}
                                >{item}</ul>
                            </>
                        )
                    })}
                </div>
                <div className="db_item_map">
                    <MapComponent coords={coords}/>
                </div>
            </div>
        </div>
    );
}
