import "../css/mainContent.css";
import Feel from "./Feel";
import Humidity from "./Humidity";
import Precipitation from "./Precipitation";
import Rain from "./Rain";
import Uv from "./Uv";
import Wind from "./Wind";

const Card = () => {
  return (
    <div className="card-container">
      <h1 className="card-heading">More details of today weather</h1>
      <div className="card-grid-items">
      <Humidity/>
      <Wind/>
      <Precipitation/>
      <Uv/>
      <Feel />
      <Rain/>
      </div>
    </div>
  );
};

export default Card;
