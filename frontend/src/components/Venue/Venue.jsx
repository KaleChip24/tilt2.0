import { Link } from "react-router-dom"
import './Venue.css'

const Venue = (props) => {
  return (
    <Link className="card" to={`/venues/${props.id}`}>
      <div className="veune-cards">
        <h2 className="venue-card-name">{props.name}</h2>
        <span className="venue-card-location">
          <h4 className="venue-card-city">{props.city}</h4>
          <h4 className="venue-card-state">{props.state}</h4>
        </span>
      </div>
    </Link>
  );
};

export default Venue;