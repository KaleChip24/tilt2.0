import { useState, useEffect } from "react";
import { getVenues } from "../../services/venueApi"
import Venue from "../Venue/Venue";
import './Venues.css'



const Venues = (props) => {

  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const fetchVenues = async () => {
      const allVenues = await getVenues();
      console.log(allVenues)
      setVenues(allVenues);
    };
    fetchVenues();
  }, []);


  return (

    <div className="venues-container">
      <div className="venues">
        {venues.map((venue, index) => {
          return (
            <div className="venue-box">
              <Venue
                name={venue.name}
                city={venue.city}
                state={venue.state}
                id={venue.id}
                key={index}
              />
            </div>
          )
        })}

      </div>

    </div>
  );
};

export default Venues;