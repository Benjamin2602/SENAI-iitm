import "../css/sidebar.css";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import CircleIcon from "@mui/icons-material/Circle";
import ToggleOnRoundedIcon from "@mui/icons-material/ToggleOnRounded";
// import { LuSend } from "react-icons/lu";
// import {TbTemperatureCelsius} from 'react-icons/tb'
// import {TbTemperatureFahrenheit} from 'react-icons/tb'
// BsToggle2Off
// import {BsToggle2Off} from 'react-icons/bs'
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
FaCloudSunRain;
import { FaCloudSunRain } from "react-icons/fa";
TiWeatherSunny;
import { TiWeatherSunny } from "react-icons/ti";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header-container">
        <div className="sidebar-header-items">
          <AddBoxRoundedIcon color="" />
          <CircleIcon color="" />
          <ToggleOnRoundedIcon color="" />
          {/* <TbTemperatureCelsius/> <BsToggle2Off color="white" /> */}
        </div>
      </div>

      <div className="sidebar-content-container">
        <div className="sidebar-content-items">
          <div className="sidebar-content-1">
            {/* <LuSend color="white" size="1rem" className="LuSend" /> */}
            <p>Chennai, India</p>
            <p className="june">Today 28 June</p>
          </div>
          <div className="sidebar-content-2">
            <FaCloudSunRain color="white" size="1rem" />
            <span> 7:30</span>
            <br></br>
            <TiWeatherSunny color="white" size="1rem" />
            <span> 13:30</span>
          </div>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-items">
          <div className="before">
            <NavigateBeforeIcon />
          </div>
          <div className="temperature">27°</div>
          <div className="after">
            <NavigateNextIcon />
          </div>
        </div>
      </div>
      <div className="hero-title-container">
        <TiWeatherSunny color="white" size="1.3rem" />
        <div className="weather"> Sunny</div>
      </div>
    </div>
  );
};

export default Sidebar;
