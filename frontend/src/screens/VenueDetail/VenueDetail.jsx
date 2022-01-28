import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getVenue } from "../../services/venueApi";
import { useParams } from "react-router-dom";
import Machines from "../../components/Machines/Machines"



const VenueDetail = (props) => {
  const [venue, setVenue] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchVenue = async () => {
      const venue = await getVenue(id);
      setVenue(venue);
      console.log(venue)
      setLoaded(true);
    };
    fetchVenue()
  }, [id]);

  if (!isLoaded) {
    return <h1>You Tilted....Waiting for ball to drop</h1>
  }

  return (
    <Layout>
      <div className="venue-detail">
        <h4>{venue.name}</h4>
        <p>{venue.address}</p>
        <p>{venue.city} {venue.state}</p>
        <div>{venue.machine}</div>
      </div>
      {/* <Machines /> */}
    </Layout>
  );
};

export default VenueDetail;