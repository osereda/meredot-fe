import buttonGroupStyle from "assets/jss/material-dashboard-pro-react/buttonGroupStyle.js";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";
import {
  cardTitle,
  grayColor
} from "assets/jss/material-dashboard-pro-react.js";

const extendedTablesStyle = {
  ...customCheckboxRadioSwitch,
  ...buttonGroupStyle,
  right: {
    textAlign: "right",
    minWidth: "80px",
    // width: "200px"
  },
  rightEnd: {
    textAlign: "right",
    width: "180px",
    maxWidth: "180px !important"
  },
  left: {
    textAlign: "center",
    minWidth: "30px",
    maxWidth: "60px"
  },
  center: {
    textAlign: "center",
    minWidth: "125px"
    // width: "200px"
  },
  centerBalance: {
    textAlign: "center",
    minWidth: "125px",
    maxWidth: "300px !important"
    // width: "200px"
  },
  width: {
    minWidth: "125px",
    // width: "200px"
  },
  description: {
    maxWidth: "150px"
  },
  actionButton: {
    margin: "0 0 0 5px",
    padding: "5px",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      marginRight: "0px"
    }
  },
  icon: {
    verticalAlign: "middle",
    width: "17px",
    height: "17px",
    top: "-1px",
    position: "relative"
  },
  imgContainer: {
    width: "120px",
    maxHeight: "160px",
    overflow: "hidden",
    display: "block"
  },
  img: {
    width: "100%",
    height: "auto",
    verticalAlign: "middle",
    border: "0"
  },
  tdName: {
    minWidth: "200px",
    fontWeight: "400",
    fontSize: "1.5em"
  },
  tdNameAnchor: {
    color: grayColor[2]
  },
  tdNameSmall: {
    color: grayColor[0],
    fontSize: "0.75em",
    fontWeight: "300"
  },
  tdNumber: {
    textAlign: "right",
    minWidth: "145px",
    fontWeight: "300",
    fontSize: "1.3em !important"
  },
  tdNumberSmall: {
    marginRight: "3px"
  },
  tdNumberAndButtonGroup: {
    lineHeight: "1 !important"
  },
  positionAbsolute: {
    position: "absolute",
    right: "0",
    top: "0"
  },
  customFont: {
    fontSize: "16px !important"
  },
  actionButtonRound: {
    width: "auto",
    height: "auto",
    minWidth: "auto"
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  cardIconTitleStation: {
    ...cardTitle,
    marginTop: "2px",
    marginBottom: "2px"
  },
  centerDashboard: {
    textAlign: "center",
    minWidth: "100px"
  },
  rightDashboard: {
    textAlign: "center",
    minWidth: "30px"
  },
  marginRight: {
    marginRight: "0",
    width: "100%",
    marginTop: "15px"
  },
};

export default extendedTablesStyle;
