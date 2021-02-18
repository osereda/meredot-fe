import Buttons from "views/Components/Buttons.js";
import Calendar from "views/Calendar/Calendar.js";
import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import ErrorPage from "views/Pages/ErrorPage.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import FullScreenMap from "views/Maps/FullScreenMap.js";
import GoogleMaps from "views/Maps/GoogleMaps.js";
import GridSystem from "views/Components/GridSystem.js";
import Icons from "views/Components/Icons.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import Notifications from "views/Components/Notifications.js";
import Panels from "views/Components/Panels.js";
import PricingPage from "views/Pages/PricingPage.js";
import RTLSupport from "views/Pages/RTLSupport.js";
import ReactTables from "views/Tables/ReactTables.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import RegularForms from "views/Forms/RegularForms.js";
import RegularTables from "views/Tables/RegularTables.js";
import SweetAlert from "views/Components/SweetAlert.js";
import TimelinePage from "views/Pages/Timeline.js";
import Typography from "views/Components/Typography.js";
import UserProfile from "views/Pages/UserProfile.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import VectorMap from "views/Maps/VectorMap.js";
import Widgets from "views/Widgets/Widgets.js";
import Wizard from "views/Forms/Wizard.js";
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import Place from "@material-ui/icons/Place";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";
import Unarchive from "@material-ui/icons/Unarchive";
import TwoWheelerIcon from '@material-ui/icons/TwoWheeler';
import EvStationIcon from '@material-ui/icons/EvStation';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HistoryIcon from '@material-ui/icons/History';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import MessageIcon from '@material-ui/icons/Message';
import EuroIcon from '@material-ui/icons/Euro';

import Stations from 'views/Stations/Stations';
import Scooters from 'views/Scooters/Scooters';
import PowerAndCost from 'views/PowerAndCost/PowerAndCost';
import StationRating from 'views/StationRating/StationRating';
import BillingAndHistory from 'views/BillingAndHistory/BillingAndHistory';
import NewMassage from 'views/NewMassage/NewMassage';
import IncomingMessage from 'views/IncomingMessage/IncomingMessage';
import OutgoingMessage from 'views/OutgoingMessage/OutgoingMessage';

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/st",
    name: "Stations",
    icon: EvStationIcon,
    component: Stations,
    layout: "/admin"
  },
  {
    path: "/sc",
    name: "Scooters",
    mini: "Sc",
    icon: TwoWheelerIcon,
    component: Scooters,
    layout: "/admin"
  },
  {
    path: "/pac",
    name: "Power and Cost",
    mini: "PAC",
    icon: EuroIcon,
    component: PowerAndCost,
    layout: "/admin"
  },
  {
    path: "/sr",
    name: "Station Rating",
    mini: "SR",
    icon: TrendingUpIcon,
    component: StationRating,
    layout: "/admin"
  },
  {
    path: "/bah",
    name: "Billing & History",
    mini: "BH",
    icon: HistoryIcon,
    component: BillingAndHistory,
    layout: "/admin"
  },
  {
    disabled: "true",
    path: "/nm",
    name: "New Massage",
    mini: "NM",
    icon: MarkunreadIcon,
    component: NewMassage,
    layout: "/admin"
  },
  {
    path: "/im",
    name: "Incoming Message",
    mini: "IM",
    icon: MessageIcon,
    component: IncomingMessage,
    layout: "/admin"
  },
  {
    path: "/om",
    name: "Outgoing Message",
    mini: "OM",
    icon: MessageIcon,
    component: OutgoingMessage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    mini: "UP",
    icon: Unarchive,
    component: UserProfile,
    layout: "/admin"
  },
  // {
  //   path: "/login-page",
  //   name: "Login Page",
  //   mini: "L",
  //   component: LoginPage,
  //   layout: "/auth"
  // },
  // {
  //   collapse: true,
  //   name: "Pages",
  //   icon: Image,
  //   state: "pageCollapse",
  //   views: [
  //     {
  //       path: "/pricing-page",
  //       name: "Pricing Page",
  //       mini: "PP",
  //       component: PricingPage,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/rtl-support-page",
  //       name: "RTL Support",
  //       mini: "RS",
  //       component: RTLSupport,
  //       layout: "/rtl"
  //     },
  //     {
  //       path: "/timeline-page",
  //       name: "Timeline Page",
  //       mini: "T",
  //       component: TimelinePage,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/login-page",
  //       name: "Login Page",
  //       mini: "L",
  //       component: LoginPage,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/register-page",
  //       name: "Register Page",
  //       mini: "R",
  //       rtlMini: "صع",
  //       component: RegisterPage,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/lock-screen-page",
  //       name: "Lock Screen Page",
  //       mini: "LS",
  //       component: LockScreenPage,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/user-page",
  //       name: "User Profile",
  //       mini: "UP",
  //       component: UserProfile,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/error-page",
  //       name: "Error Page",
  //       mini: "E",
  //       component: ErrorPage,
  //       layout: "/auth"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Components",
  //   icon: Apps,
  //   state: "componentsCollapse",
  //   views: [
  //     {
  //       collapse: true,
  //       name: "Multi Level Collapse",
  //       mini: "MC",
  //       state: "multiCollapse",
  //       views: [
  //         {
  //           path: "/buttons",
  //           name: "Buttons",
  //           mini: "B",
  //           component: Buttons,
  //           layout: "/admin"
  //         }
  //       ]
  //     },
  //     {
  //       path: "/buttons",
  //       name: "Buttons",
  //       mini: "B",
  //       component: Buttons,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/grid-system",
  //       name: "Grid System",
  //       mini: "GS",
  //       component: GridSystem,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/panels",
  //       name: "Panels",
  //       mini: "P",
  //       component: Panels,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/sweet-alert",
  //       name: "Sweet Alert",
  //       mini: "SA",
  //       component: SweetAlert,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/notifications",
  //       name: "Notifications",
  //       mini: "N",
  //       component: Notifications,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/icons",
  //       name: "Icons",
  //       mini: "I",
  //       component: Icons,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/typography",
  //       name: "Typography",
  //       mini: "T",
  //       component: Typography,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Forms",
  //   icon: "content_paste",
  //   state: "formsCollapse",
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       name: "Regular Forms",
  //       mini: "RF",
  //       component: RegularForms,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/extended-forms",
  //       name: "Extended Forms",
  //       mini: "EF",
  //       component: ExtendedForms,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/validation-forms",
  //       name: "Validation Forms",
  //       mini: "VF",
  //       component: ValidationForms,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/wizard",
  //       name: "Wizard",
  //       mini: "W",
  //       component: Wizard,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Tables",
  //   icon: GridOn,
  //   state: "tablesCollapse",
  //   views: [
  //     {
  //       path: "/regular-tables",
  //       name: "Regular Tables",
  //       mini: "RT",
  //       component: RegularTables,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/extended-tables",
  //       name: "Extended Tables",
  //       mini: "ET",
  //       component: ExtendedTables,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/react-tables",
  //       name: "React Tables",
  //       mini: "RT",
  //       component: ReactTables,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Maps",
  //   icon: Place,
  //   state: "mapsCollapse",
  //   views: [
  //     {
  //       path: "/google-maps",
  //       name: "Google Maps",
  //       mini: "GM",
  //       component: GoogleMaps,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/full-screen-maps",
  //       name: "Full Screen Map",
  //       mini: "FSM",
  //       component: FullScreenMap,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/vector-maps",
  //       name: "Vector Map",
  //       mini: "VM",
  //       component: VectorMap,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   path: "/widgets",
  //   name: "Widgets",
  //   icon: WidgetsIcon,
  //   component: Widgets,
  //   layout: "/admin"
  // },
  // {
  //   path: "/charts",
  //   name: "Charts",
  //   icon: Timeline,
  //   component: Charts,
  //   layout: "/admin"
  // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   icon: DateRange,
  //   component: Calendar,
  //   layout: "/admin"
  // }

];
export default dashRoutes;
