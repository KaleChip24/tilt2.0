import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getVenue } from "../../services/venueApi";
import { useParams } from "react-router-dom";
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

  // const [name, address, city, state, machine]


  return (
    <Layout>
      <div className="venue-detail">
        <h1 className="venue-title">{venue.name}</h1>
        <p className="venue-address">{venue.address}</p>
        <p className="venue-city-state">{venue.city} {venue.state}</p>
      </div>
      <h1 className="machines-block">machines</h1>
      <div className="machines">
        {venue.machine.map((machine, index) => {
          return (
            <div className="machine-cards">
              <h3>{machine.name}</h3>
              <p>{machine.price}</p>
              <p>{machine.comments}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default VenueDetail;