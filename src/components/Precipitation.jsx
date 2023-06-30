import "../css/card.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'
import { Line } from "rc-progress";
import Blob from './Blob'
const Precipitation = () => {
  return (
    <div className="container">
      <div className="heading">
        <p>Precipitation</p>
        <ThunderstormIcon className="thunder-icon"/>
      </div>
      <div className="precipitation-cm">
        <span className="per">1.4 cm</span>
      </div>
      <div className="precipitation-items-container">
        <div className="precipitation-items">
        <div className="zero">
         0
        <Line
        percent={100}
        strokeWidth={60}
        className='blob-icon'
        strokeColor='#5c61ff'
      />
        </div>
        <div className="ten">
        10
        <Line
            percent={40}
            strokeWidth={40}
            strokeColor="#5c61ff"
            className='blob-icon'
          />
          </div>
          <Blob number="20" />
          <Blob number="30" />
          <Blob number="40" />
          <Blob number="50" />
          <Blob number="60" />
          <Blob number="70" />
          {/* <Blob number="80" />
          <Blob number="90" /> */}
          
        </div>
      </div>
    </div>
  );
};

export default Precipitation;
