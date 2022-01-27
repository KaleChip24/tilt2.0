import { Link } from "react-router-dom"

const Venue = (props) => {
  return (
    <div className="veune">
      <Link className="card" to={`/venues/${props.id}`}>
        <div className="venue-card-link">
          <h2>{props.name}</h2>
        </div>
      </Link>
      <h4>{props.city}</h4>
      <h4>{props.state}</h4>

    </div>
  );
};

export default Venue;