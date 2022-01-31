import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { createMachine } from "../../services/machineApi"
import { getVenues } from "../../services/venueApi"
import './MachineCreate.css'
import Layout from "../../components/Layout/Layout"

const MachineCreate = (props) => {
  let navigate = useNavigate();

  const [venues, setVenues] = useState([])

  const [machines, setMachines] = useState({
    name: '',
    price: '',
    comments: '',
    venue: '',
  });

  useEffect(() => {
    const fetchVenues = async () => {
      const venues = await getVenues();
      setVenues(venues)
    };
    fetchVenues()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setMachines({
      ...machines,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMachine(machines);
    navigate('/');
  }


  return (
    <Layout>
      <div className="machine-form">
        <h2 className="add-machine-header">Add Machine</h2>
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
              className='input-price'
              placeholder='price'
              value={props.price}
              name='price'
              onChange={handleChange}
            />
            <input
              className='input-comments'
              placeholder='comments'
              value={props.comments}
              name='comments'
              rows={10}
              onChange={handleChange}
            />
            <select
              name='venue'
              value={venues.id}
              onChange={handleChange}
              options={[venues.name]}
            >
              <option>Venue</option>
              {venues.map((venue) => {
                return (
                  <option key={venue.id} value={venue.id}>{venue.name}</option>
                )
              })}
            </select>
          </div>
          <button
            className="add-machine-btn"
            type='submit'>Submit</button>
          <Link to={`/`}>
            <button id='back-redirect-button'>Back</button>
          </Link>
        </form>

      </div>
    </Layout>
  );
};

export default MachineCreate;