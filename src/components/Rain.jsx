import "../css/card.css";
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';

import { Line } from "rc-progress";
const Rain = () => {
  return ( 
    <div className="container">
    <div className="heading">
    <p>Chance of rain</p>
    <BeachAccessOutlinedIcon className="feel-icon"/>
    </div>
    <div className="degree">
    <span className="per">42%</span>
    </div>
    <div className="feel-items-container">
    <div className="feel-items">
  
    <span className="feel-span">0%</span>
    <span className="feel-span">25%</span>
    <span className="feel-span">50%</span>
    <span className="feel-span">75%</span>
    <span className="feel-span">100%</span>

    <Line
          percent={38}
          strokeWidth={4}
          className='feel-blob'
          strokeColor='#5c61ff'
        />
    </div>
    </div>
  
  
    </div>
    )
  };

export default Rain;
