import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Layout from "../../components/Layout/Layout";
import { createVenue } from "../../services/venueApi"
import './VenueCreate.css'

const VenueCreate = (props) => {
  let navigate = useNavigate();

  const [createdVenue, setCreatedVenue] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    machines: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target
    setCreatedVenue({
      ...createdVenue,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createVenue(createdVenue);
    navigate('/');
  }


  return (
    <Layout>
      <div className="venue-form">
        <h2 className="add-venue-header">Add Venue</h2>
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <input
              className='input-name'
              placeholder='Name'
              value={props.name}
              name='name'
              onChange={handleChange}
            />
            <input
              className='input-address'
              placeholder='address'
              value={props.address}
              name='address'
              onChange={handleChange}
            />
            <input
              className='input-city'
              placeholder='city'
              value={props.city}
              name='city'
              onChange={handleChange}
            />
            <input
              className='input-state'
              placeholder='state'
              value={props.state}
              name='state'
              onChange={handleChange}
            />
          </div>
          <button
            className="add-venue-btn"
            type='submit'>Submit</button>
          <Link to={`/`}>
            <button id='back-redirect-button'>Back</button>
          </Link>
        </form>

      </div>
    </Layout>
  );
};

export default VenueCreate;