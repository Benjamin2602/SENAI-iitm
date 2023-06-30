

// import { SiLastpass } from 'react-icons/si'
RiMoreFill;
import { RiMoreFill } from "react-icons/ri";
import Avatar from "@material-ui/core/Avatar";
import placeholderImage from "../images/ben-portfolio.jpg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-items">
        <div className="navbar-content-1">
          <h1>Welcome back Benjamin!</h1>
          <p className="navbar-p">Check out today weather information</p>
        </div>
        <div className="navbar-content-2">
          <Avatar alt="ben" src={placeholderImage} variant="square" />
          <RiMoreFill color="black" size="1.9rem" className="dot" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
