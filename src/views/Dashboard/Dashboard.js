import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Language from "@material-ui/icons/Language";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";
import {useEffect, useState} from "react";
import Station from "@material-ui/icons/EvStation";
import Slot from '@material-ui/icons/BatteryChargingFull';
import Scooter from "@material-ui/icons/TwoWheeler";
import Euro from '@material-ui/icons/Euro';

import Map from "components/Map/Map";
import configData from "../../config.json";

const useStyles = makeStyles(styles);

function DashboardInfo(data) {
  const classes = useStyles();

  const dataStation = data.dataCount;
  const dataMaps = data.dataForMap;


  const [geodata, setGeodata] = useState([]);
  const stationQty=dataStation[0];
  const slotQty=dataStation[1];
  const availableQty=dataStation[2];
  const scooterQty=dataStation[3];
  const chargeScooterQty=dataStation[4];


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Station/>
              </CardIcon>
              <p className={classes.cardCategory}>Stations</p>
              <h3 className={classes.cardTitle}>
                {dataStation[0]}/1<small></small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  {stationQty} ONLINE
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Slot />
              </CardIcon>
              <p className={classes.cardCategory}>Slots</p>
              <h3 className={classes.cardTitle}>{availableQty}/{slotQty}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                {availableQty} AVAILABLE
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Scooter/>
              </CardIcon>
              <p className={classes.cardCategory}>Scooters</p>
              <h3 className={classes.cardTitle}>{chargeScooterQty}/{scooterQty}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Scooter />
                {chargeScooterQty} ON CHARGE
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Euro />
              </CardIcon>
              <p className={classes.cardCategory}>Balance</p>
              <h3 className={classes.cardTitle}>100 $</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                END 24/06/20
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="success" icon>
              <CardIcon color="success">
                <Language />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Popular station</h4>
            </CardHeader>
            <CardBody>
              <GridContainer justify="space-between">
                <GridItem xs={12} sm={12} md={12}>
                  <Map geodata={dataMaps}/>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="info" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                // listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Energy consumption data for the period</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="warning" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                // listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Energy consumption data for the period</h4>
              <p className={classes.cardCategory}>Energy consumption data for the period</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="danger" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                // listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Energy consumption during the period</h4>
              <p className={classes.cardCategory}>Energy consumption data for the period</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows:[],
      dataQty: [],
      dataForMap: [],
      scooterCount: 0,
      chargingScooterCount: 0
    };
    this.GetStationData = this.GetStationData.bind(this);
    this.getScooterData = this.getScooterData.bind(this);
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
              }
          })
          .then( setTimeout(this.GetStationData, 800))
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
      let chargingScooterCount = 0;
      data.forEach(scooter => {
         if(scooter.sc_status === 1) {
           chargingScooterCount++;
          }
      })
      this.setState({scooterCount: data.length});
      this.setState({chargingScooterCount: chargingScooterCount});
  }

  setStationData(data) {
      let dataInfoForMap = {};
      // dataInfoForMap.address = ""
      let tmpDataInfoForMap = [];
      let dataCount = [];
      let countStation = 0;
      let countSlots = 0;
      let availableSlot = 0;
      let tmpCountSlot;
      let tmpCountAva;
      data.forEach((item) => {
          countStation++;
          tmpCountSlot = 0;
          tmpCountAva = 0;
          dataInfoForMap.address = item.location;
          dataInfoForMap.geodata = item.geodata;
          item.arr_slots.forEach((sl) => {
              countSlots++;
              tmpCountSlot++;
              if(sl.slot_status === 0) {
                  availableSlot++;
                  tmpCountAva++;
              }
          });
          dataInfoForMap.countSlot = tmpCountSlot;
          dataInfoForMap.countAvaSlot = tmpCountAva;
          dataInfoForMap.st_id = item.st_id;
          // dataInfoForMap.push(tmpDataInfoForMap);
      })
    dataCount.push(countStation, countSlots, availableSlot, this.state.scooterCount, this.state.chargingScooterCount);
    this.setState({dataQty: dataCount});
    this.setState({dataForMap: dataInfoForMap});
  }

  componentDidMount() {
    this.GetStationData();
    this.getScooterData();
  }

  render() {
    return (
        <div>
          <DashboardInfo dataCount = {this.state.dataQty} dataForMap = {this.state.dataForMap}/>
        </div>
    )
  }
}
