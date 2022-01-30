import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getVenue } from "../../services/venueApi";
import { Link, useParams } from "react-router-dom";
import "./VenueDetail.css"



const VenueDetail = (props) => {
  const [venue, setVenue] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchVenue = async () => {
      const venue = await getVenue(id);
      setVenue(venue);
      setLoaded(true);
    };
    fetchVenue()
  }, [id]);


  if (!isLoaded) {
    return <h1>You Tilted....Waiting for ball to drop</h1>
  }


  return (
    <Layout>
      <div className="venue-details-wrap">
        <div className="venue-detail">
          <div className="venue-location">
            <h1 className="venue-title">{venue.name}</h1>
            <p className="venue-address">{venue.address}</p>
            <p className="venue-city-state">{venue.city} {venue.state}</p>
          </div>
          <div className="venue-btn-container">
            <Link className="venue-edit-link" to={`/venues/${id}/edit`}>edit</Link>
            <button className="venue-delete-btn">delete</button>
          </div>
        </div>
        <h1 className="machines-block">machines</h1>
        <div className="machines">
          {venue.machines.map((machine, index) => {
            return (
              <div className="machine-cards" key={index}>
                <h3 className="machine-name">{machine.name}</h3>
                <h4 className="machine-price">{`cost per play: $${machine.price}`}</h4>
                <p className="machine-comments">{machine.comments}</p>
                <div className="machine-btn-container">
                  <Link className="machine-edit-link" to={`/machines/${machine.id}/edit`}>edit</Link>
                  <button className="machine-delete-btn">delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default VenueDetail;