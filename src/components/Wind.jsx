
import WindPowerIcon from "@mui/icons-material/WindPower";
// import { Circle } from 'rc-progress';
import { CircularProgress } from '@material-ui/core';
const Wind = () => {
  return (
    <div className="wind-container">
      <div className="heading">
      <p>Wind</p>
      <WindPowerIcon className="wind-power-icon" />
      </div>
      <div className="wind-circle-icon">
      {/* <Circle percent={50} strokeWidth={4} strokeColor="#ec6188" /> */}
      <CircularProgress variant="determinate" value={350} className="gauge" /> 
      <span className="wind-kmh">8 Km/h</span>
      </div>
    </div>
  );
};

export default Wind;
