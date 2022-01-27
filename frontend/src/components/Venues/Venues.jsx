import { useState, useEffect } from "react";
import { getVenues } from "../../services/venueApi"
// import Layout from "../Layout/Layout";



const Venues = (props) => {

  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const fetchVenues = async () => {
      const allVenues = await getVenues();
      setVenues(allVenues);
    };
    fetchVenues();
  }, []);


  return (
    // <Layout >
    <div className="venues-container">
      <div className="venues">
        {venues.map((venue) => {
          return (
            <>
              {venue.name}
              {venue.city}
              {venue.state}
            </>
          )
        })}

      </div>

    </div>
    // </Layout>
  );
};

export default Venues;