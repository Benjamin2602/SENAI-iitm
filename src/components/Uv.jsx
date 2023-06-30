import "../css/card.css";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import { Line } from "rc-progress";
import Blob from './Blob'
const Uv = () => {
  return (
  <div className="container">
  <div className="heading">
  <p>UV Index</p>
  <WbSunnyOutlinedIcon className="sun-icon"/>
  </div>
  <div className="uv-med">
    <span className="per">4</span>
    medium
  </div>
  <div className="uv-items-container">
  <div className="uv-items">
  <div className="zero-two">
        0-2
        <Line
        percent={100}
        strokeWidth={40}
        className='blob-icon'
        strokeColor='#5c61ff'
      />
        </div>
        <div className="three-five">
        3-5
        <Line
        percent={40}
        strokeWidth={40}
        className='blob-icon'
        strokeColor='#5c61ff'
      />
        </div>

        <Blob number="6-7" />
        <Blob number="8-10" />
        <Blob number="11++" />

  </div>
  </div>

  </div>
  )
};

export default Uv;
