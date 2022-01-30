import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { getMachine, updateMachine } from "../../services/machineApi"
import { getVenues } from "../../services/venueApi"
import './MachineEdit.css'

const MachineEdit = () => {
  let navigate = useNavigate();

  const [venues, setVenues] = useState([])

  const [machine, setMachine] = useState({
    name: '',
    price: '',
    comments: '',
    venue: '',
  });

  let { id } = useParams();

  useEffect(() => {
    const fetchMachine = async () => {
      const machine = await getMachine(id);
      setMachine(machine)
    };
    fetchMachine();
  }, [id]);

  useEffect(() => {
    const fetchVenues = async () => {
      const venues = await getVenues();
      setVenues(venues)
      // console.log(venues)
    };
    fetchVenues()
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target
    setMachine({
      ...machine,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateMachine(id, machine);
    navigate('/');
  }


  return (
    <div className="machine-form">
      <h2 className="add-machine-header">Edit Machine</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <input
            className='input-name'
            placeholder='Name'
            value={machine.name}
            name='name'
            onChange={handleChange}
          />
          <input
            className='input-price'
            placeholder='price'
            value={machine.price}
            name='price'
            onChange={handleChange}
          />
          <input
            className='input-comments'
            placeholder='comments'
            value={machine.comments}
            name='comments'
            rows={10}
            onChange={handleChange}
          />
          <select
            name='venue'
            value={venues.name}
            onChange={handleChange}
          // options={console.log([venues.name])}
          >
            <option>Venue</option>
            {venues.map((venue, index) => {
              return (
                <option key={index} value={venue.id}>{venue.name}</option>
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
  );
};

export default MachineEdit;