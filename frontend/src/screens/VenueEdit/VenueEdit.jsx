import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getVenue, updateVenue } from '../../services/venueApi';

const VenueEdit = () => {
  let navigate = useNavigate();

  const [venue, setVenue] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    machine: [],
  });

  let { id } = useParams();

  useEffect(() => {
    const fetchVenue = async () => {
      const venue = await getVenue(id);
      setVenue(venue)
    };
    fetchVenue()
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target
    setVenue({
      ...venue,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateVenue(id, venue)
    navigate(`/venues/${id}/`)
  }

  return (
    <Layout>

      <div className="venue-form">
        <h2 className="edit-venue-header">Edit Venue</h2>
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="edit-form-inputs">
            <input
              className='input-name'
              placeholder='Name'
              value={venue.name}
              name='name'
              onChange={handleChange}
            />
            <input
              className='input-address'
              placeholder='address'
              value={venue.address}
              name='address'
              onChange={handleChange}
            />
            <input
              className='input-city'
              placeholder='city'
              value={venue.city}
              name='city'
              onChange={handleChange}
            />
            <input
              className='input-state'
              placeholder='state'
              value={venue.state}
              name='state'
              onChange={handleChange}
            />
          </div>
          <button
            className="edit-venue-btn"
            type='submit'>Submit</button>
          <Link to={`/`}>
            <button id='back-redirect-button'>Back</button>
          </Link>
        </form>

      </div>
    </Layout>
  );
};

export default VenueEdit;