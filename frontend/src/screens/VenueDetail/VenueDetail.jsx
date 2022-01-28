import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getVenue } from "../../services/venueApi";
import { getMachines } from "../../services/machineApi";
import { useParams } from "react-router-dom";
// import Machines from "../../components/Machines/Machines"



const VenueDetail = (props) => {
  const [venue, setVenue] = useState([]);
  const [machines, setMachines] = useState([]);
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

  useEffect(() => {
    const fetchMachines = async () => {
      const allMachines = await getMachines();
      console.log(allMachines)
      setMachines(allMachines);
    }
    fetchMachines()
  }, [])

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
        {/* <div>
          {machines.map((venue.name == machine.venue) => {
          return(
          <div>{machine.name}</div>
          )
          })}
        </div> */}
      </div>
    </Layout>
  );
};

export default VenueDetail;