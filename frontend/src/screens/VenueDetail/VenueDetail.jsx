import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getVenue, getVenues } from "../../services/venueApi";
import { useParmas, Link, Navigate, useParams } from "react-router-dom";

const VenueDetail = () => {
  const [veune, setVenue] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { index } = useParams();

  useEffect(() => {
    const fetchVenues = async () => {
      const veune = await getVenues(index);
      setVenue(veune);
      setLoaded(true);
    };
    fetchVenues()
  }, [index]);

  if (!isLoaded) {
    return <h1>You Tilted....Waiting for ball to drop</h1>
  }


  return (
    <Layout>
      <div className="venue-detail">

      </div>
    </Layout>
  );
};

export default VenueDetail;