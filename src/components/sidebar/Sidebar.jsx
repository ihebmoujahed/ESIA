import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SchoolIcon from '@mui/icons-material/School';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ESIA</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
           <a href="http://localhost:3000/Home">
            <h3 >Dashboard</h3></a>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <h2>كل التاميذ</h2>
            </li>
          </Link>
          
          <Link to="/orders" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <h2>Orders</h2>
          </li>
          </Link>

          <p className="title">الكلاسات</p>
          <Link to="/AJE" style={{ textDecoration: "none" }}>
          <li>
            <SchoolIcon className="icon" />
            <h2>AJE1 قسم</h2>
          </li>
          
          <Link to="/AJE2" style={{ textDecoration: "none" }}>
          <li>
            <SchoolIcon className="icon" />
            <h2>AJE2 قسم</h2>
          </li>
          </Link>
          </Link>
          <Link to="/EPPE" style={{ textDecoration: "none" }}>
          <li>
            <SchoolIcon className="icon" />
            <h2>EPPE قسم</h2>
          </li>
          </Link>
          <Link to="/EPPE2" style={{ textDecoration: "none" }}>
          <li>
            <SchoolIcon className="icon" />
            <h2>EPPE2 قسم</h2>
          </li>
          </Link>
          <Link to="/TSIG1" style={{ textDecoration: "none" }}>
          <li>
            <SchoolIcon className="icon" />
            <h2>TSIG1 قسم</h2>
          </li>
          </Link>
          <Link to="/TSIG2" style={{ textDecoration: "none" }}>
          <li>
            <SchoolIcon className="icon" />
            <h2>TSIG2 قسم</h2>
          </li>
          </Link>
        
          <p className="title">الاساتذ</p>
          <Link to="/Teachers" style={{ textDecoration: "none" }}>

          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <h2>كل الاساتذ</h2>
          </li>
          </Link>
          <Link to="/TeachersM" style={{ textDecoration: "none" }}>

          <li>
            <PsychologyOutlinedIcon className="icon" />
            <h2>الاساتذ بالشهر </h2>
          </li>
          </Link>

       
          <p className="title">USER</p>
         
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
