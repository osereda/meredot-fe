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

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import Place from "@material-ui/icons/Place";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";
// import Dashboard from "@material-ui/icons/Dashboard";
import Unarchive from "@material-ui/icons/Unarchive";
// import TwoWheelerIcon from '@material-ui/icons/TwoWheeler';
import EvStationIcon from '@material-ui/icons/EvStation';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HistoryIcon from '@material-ui/icons/History';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import MessageIcon from '@material-ui/icons/Message';
import EuroIcon from '@material-ui/icons/Euro';

import Stations from 'views/Stations/Stations';

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
    name: "Station",
    icon: EvStationIcon,
    component: Stations,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Pages",
    rtlName: "صفحات",
    icon: Image,
    state: "pageCollapse",
    views: [
      {
        path: "/pricing-page",
        name: "Pricing Page",
        rtlName: "عالتسعير",
        mini: "PP",
        rtlMini: "ع",
        component: PricingPage,
        layout: "/auth"
      },
      {
        path: "/rtl-support-page",
        name: "RTL Support",
        rtlName: "صودعم رتل",
        mini: "RS",
        rtlMini: "صو",
        component: RTLSupport,
        layout: "/rtl"
      },
      {
        path: "/timeline-page",
        name: "Timeline Page",
        rtlName: "تيالجدول الزمني",
        mini: "T",
        rtlMini: "تي",
        component: TimelinePage,
        layout: "/admin"
      },
      {
        path: "/login-page",
        name: "Login Page",
        rtlName: "هعذاتسجيل الدخول",
        mini: "L",
        rtlMini: "هعذا",
        component: LoginPage,
        layout: "/auth"
      },
      {
        path: "/register-page",
        name: "Register Page",
        rtlName: "تسجيل",
        mini: "R",
        rtlMini: "صع",
        component: RegisterPage,
        layout: "/auth"
      },
      {
        path: "/lock-screen-page",
        name: "Lock Screen Page",
        rtlName: "اقفل الشاشة",
        mini: "LS",
        rtlMini: "هذاع",
        component: LockScreenPage,
        layout: "/auth"
      },
      {
        path: "/user-page",
        name: "User Profile",
        rtlName: "ملف تعريفي للمستخدم",
        mini: "UP",
        rtlMini: "شع",
        component: UserProfile,
        layout: "/admin"
      },
      {
        path: "/error-page",
        name: "Error Page",
        rtlName: "صفحة الخطأ",
        mini: "E",
        rtlMini: "البريد",
        component: ErrorPage,
        layout: "/auth"
      }
    ]
  },
  {
    collapse: true,
    name: "Components",
    rtlName: "المكونات",
    icon: Apps,
    state: "componentsCollapse",
    views: [
      {
        collapse: true,
        name: "Multi Level Collapse",
        rtlName: "انهيار متعدد المستويات",
        mini: "MC",
        rtlMini: "ر",
        state: "multiCollapse",
        views: [
          {
            path: "/buttons",
            name: "Buttons",
            rtlName: "وصفت",
            mini: "B",
            rtlMini: "ب",
            component: Buttons,
            layout: "/admin"
          }
        ]
      },
      {
        path: "/buttons",
        name: "Buttons",
        rtlName: "وصفت",
        mini: "B",
        rtlMini: "ب",
        component: Buttons,
        layout: "/admin"
      },
      {
        path: "/grid-system",
        name: "Grid System",
        rtlName: "نظام الشبكة",
        mini: "GS",
        rtlMini: "زو",
        component: GridSystem,
        layout: "/admin"
      },
      {
        path: "/panels",
        name: "Panels",
        rtlName: "لوحات",
        mini: "P",
        rtlMini: "ع",
        component: Panels,
        layout: "/admin"
      },
      {
        path: "/sweet-alert",
        name: "Sweet Alert",
        rtlName: "الحلو تنبيه",
        mini: "SA",
        rtlMini: "ومن",
        component: SweetAlert,
        layout: "/admin"
      },
      {
        path: "/notifications",
        name: "Notifications",
        rtlName: "إخطارات",
        mini: "N",
        rtlMini: "ن",
        component: Notifications,
        layout: "/admin"
      },
      {
        path: "/icons",
        name: "Icons",
        rtlName: "الرموز",
        mini: "I",
        rtlMini: "و",
        component: Icons,
        layout: "/admin"
      },
      {
        path: "/typography",
        name: "Typography",
        rtlName: "طباعة",
        mini: "T",
        rtlMini: "ر",
        component: Typography,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Forms",
    rtlName: "إستمارات",
    icon: "content_paste",
    state: "formsCollapse",
    views: [
      {
        path: "/regular-forms",
        name: "Regular Forms",
        rtlName: "أشكال عادية",
        mini: "RF",
        rtlMini: "صو",
        component: RegularForms,
        layout: "/admin"
      },
      {
        path: "/extended-forms",
        name: "Extended Forms",
        rtlName: "نماذج موسعة",
        mini: "EF",
        rtlMini: "هوو",
        component: ExtendedForms,
        layout: "/admin"
      },
      {
        path: "/validation-forms",
        name: "Validation Forms",
        rtlName: "نماذج التحقق من الصحة",
        mini: "VF",
        rtlMini: "تو",
        component: ValidationForms,
        layout: "/admin"
      },
      {
        path: "/wizard",
        name: "Wizard",
        rtlName: "ساحر",
        mini: "W",
        rtlMini: "ث",
        component: Wizard,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Tables",
    rtlName: "الجداول",
    icon: GridOn,
    state: "tablesCollapse",
    views: [
      {
        path: "/regular-tables",
        name: "Regular Tables",
        rtlName: "طاولات عادية",
        mini: "RT",
        rtlMini: "صر",
        component: RegularTables,
        layout: "/admin"
      },
      {
        path: "/extended-tables",
        name: "Extended Tables",
        rtlName: "جداول ممتدة",
        mini: "ET",
        rtlMini: "هور",
        component: ExtendedTables,
        layout: "/admin"
      },
      {
        path: "/react-tables",
        name: "React Tables",
        mini: "RT",
        component: ReactTables,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Maps",
    icon: Place,
    state: "mapsCollapse",
    views: [
      {
        path: "/google-maps",
        name: "Google Maps",
        rtlName: "خرائط جوجل",
        mini: "GM",
        rtlMini: "زم",
        component: GoogleMaps,
        layout: "/admin"
      },
      {
        path: "/full-screen-maps",
        name: "Full Screen Map",
        rtlName: "خريطة كاملة الشاشة",
        mini: "FSM",
        rtlMini: "ووم",
        component: FullScreenMap,
        layout: "/admin"
      },
      {
        path: "/vector-maps",
        name: "Vector Map",
        mini: "VM",
        component: VectorMap,
        layout: "/admin"
      }
    ]
  },
  {
    path: "/widgets",
    name: "Widgets",
    rtlName: "الحاجيات",
    icon: WidgetsIcon,
    component: Widgets,
    layout: "/admin"
  },
  {
    path: "/charts",
    name: "Charts",
    rtlName: "الرسوم البيانية",
    icon: Timeline,
    component: Charts,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendar",
    rtlName: "التقويم",
    icon: DateRange,
    component: Calendar,
    layout: "/admin"
  }
  // {
  //   path: "/db1",
  //   name: "Dashboard1",
  //   mini: "DB",
  //   icon: Panels,
  //   component: Panels,
  //   layout: "/admin"
  // },
  // {
  //   path: "/st",
  //   name: "Station",
  //   mini: "St",
  //   icon: EvStationIcon,
  //   component: Panels,
  //   layout: "/admin"
  // },
  // {
  //   path: "/sc",
  //   name: "Scooter",
  //   mini: "Sc",
  //   icon: EvStationIcon,
  //   component: Panels,
  //   layout: "/admin"
  // },
  // {
  //   path: "/pac",
  //   name: "Power and Cost",
  //   mini: "PAC",
  //   icon: EuroIcon,
  //   component: Panels,
  //   layout: "/admin"
  // },
  // {
  //   path: "/sr",
  //   name: "Station Rating",
  //   mini: "SR",
  //   icon: TrendingUpIcon,
  //   component: Panels,
  //   layout: "/admin"
  // },
  // {
  //   path: "/bah",
  //   name: "Billing & History",
  //   mini: "BH",
  //   icon: HistoryIcon,
  //   component: Panels,
  //   layout: "/admin"
  // },
  // {
  //   path: "/nm",
  //   name: "New Massage",
  //   mini: "NM",
  //   icon: MarkunreadIcon,
  //   component: Panels,
  //   layout: "/admin"
  // },
  // {
  //   path: "/im",
  //   name: "Incoming Message",
  //   mini: "IM",
  //   icon: MessageIcon,
  //   component: Panels,
  //   layout: "/admin"
  // },
  // {
  //   path: "/om",
  //   name: "Outgoing Message",
  //   mini: "OM",
  //   icon: MessageIcon,
  //   component: Panels,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   mini: "UP",
  //
  //   icon: Unarchive,
  //   component: UserProfile,
  //   layout: "/admin"
  // }
];
export default dashRoutes;
