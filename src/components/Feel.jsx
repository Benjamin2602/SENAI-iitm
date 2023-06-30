import "../css/card.css";
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import { Line } from "rc-progress";

const Feel = () => {
  return ( 
  <div className="container">
  <div className="heading">
  <p>Feels like</p>
  <DeviceThermostatOutlinedIcon className="feel-icon"/>
  </div>
  <div className="degree">
  <span className="per">30°</span>
  </div>
  <div className="feel-items-container">
  <div className="feel-items">

  <span className="feel-span">0°</span>
  <span className="feel-span">25°</span>
  <span className="feel-span">50°</span>
  <Line
        percent={50}
        strokeWidth={7}
        className='feel-blob'
        strokeColor='#5c61ff'
      />
  </div>
  </div>


  </div>
  )
};

export default Feel;
