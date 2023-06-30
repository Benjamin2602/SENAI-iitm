import { Line } from 'rc-progress';
import PropTypes from 'prop-types';
import "../css/card.css";

const Blob = (props) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p>{props.number}</p>
      <Line
        percent={100}
        strokeWidth={40}
        className='blob-icon'
        strokeColor="#DCDCDC"
      />
    </div>
  );
};

// Add prop types validation
Blob.propTypes = {
    number: PropTypes.string.isRequired,
  };

export default Blob;