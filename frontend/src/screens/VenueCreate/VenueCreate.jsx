import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
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

  const handleSubmint = async (e) => {
    e.preventDefault();
    await createVenue(createdVenue);
    navigate('/');
  }


  return (
    <div className="venue-form">
      <h2 className="add-venue-deader">Add Venue</h2>
      <form className="create-form" onSubmit={handleSubmint}>
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
  );
};

export default VenueCreate;