import { useState, useEffect } from "react";
import { getVenues } from "../../services/venueApi"
import Venue from "../Venue/Venue";
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
        {venues.map((venue, index) => {
          return (
            <Venue
              name={venue.name}
              city={venue.city}
              state={venue.state}
              key={index}
            />
          )
        })}

      </div>

    </div>
    // </Layout>
  );
};

export default Venues;