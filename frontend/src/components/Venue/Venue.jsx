import { Link } from "react-router-dom"
import './Venue.css'

const Venue = (props) => {
  return (
    <div className="veune-cards">
      <Link className="card" to={`/venues/${props.id}`}>
        <h2 className="venue-card-name">{props.name}</h2>
      </Link>
      <span>
        <h4 className="venue-card-city">{props.city}</h4>
        <h4 className="venue-card-state">{props.state}</h4>
      </span>
    </div>
  );
};

export default Venue;