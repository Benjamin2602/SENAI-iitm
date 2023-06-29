import "../css/mainContent.css";
const Card = () => {
  return (
    <div>
      <h1 className="card-heading">More details of today weather</h1>
      <div className="card-container">
        <div className="card-items">
          <div className="card-box card-1"></div>
          <div className="card-box card-2"></div>
          <div className="card-box card-3"></div>
          <div className="card-box card-4"></div>
          <div className="card-box card-5"></div>
          <div className="card-box card-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
