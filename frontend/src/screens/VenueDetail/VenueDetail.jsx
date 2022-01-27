import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getVenues } from "../../services/venueApi";
import { useParams } from "react-router-dom";


const VenueDetail = (props) => {
  const [venue, setVenue] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchVenues = async () => {
      const venue = await getVenues(id);
      console.log(venue)
      setVenue(venue);
      setLoaded(true);
    };
    fetchVenues()
  }, [id]);

  if (!isLoaded) {
    return <h1>You Tilted....Waiting for ball to drop</h1>
  }


  return (
    <Layout>
      <div className="venue-detail">
        <h4>{props.name}</h4>
        <p>{props.address}</p>
        <p>{props.city}{props.state}</p>
      </div>
    </Layout>
  );
};

export default VenueDetail;