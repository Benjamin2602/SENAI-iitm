import "../css/card.css";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import { Line } from "rc-progress";
const Humidity = () => {
  return (
    <div className="container">
      <div className="heading">
        <p>Humidity</p>
        <WaterDropOutlinedIcon className="droplet-icon" />
      </div>
      <div className="humidity-percentage">
        <span className="per">82%</span>
        bad
      </div>
      <div className="progress-bar">
        <div className="good">
          good
          <Line
            percent={100}
            strokeWidth="15"
            strokeColor="#5c61ff"
            className="humidity-line"
          />
        </div>
        <div className="normal">
          normal
          <Line
            percent={100}
            strokeWidth="15"
            strokeColor="#5c61ff"
            className="humidity-line"
          />
        </div>
          <div className="bad">
            bad
            <Line
              percent={40}
              strokeWidth="19"
              strokeColor="#5c61ff"
              className="humidity-line"
            />
          </div>
      </div>
    </div>
  );
};

export default Humidity;
