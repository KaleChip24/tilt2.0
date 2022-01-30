import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { createMachine } from "../../services/machineApi"
import './MachineCreate.css'

const MachineCreate = (props) => {
  let navigate = useNavigate();

  const [machines, setMachines] = useState({
    name: '',
    price: '',
    comments: '',
    venue: '',
  });



  const handleChange = (event) => {
    const { name, value } = event.target
    setMachines({
      ...machines,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMachine(setMachines);
    navigate('/');
  }


  return (
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
            row={5}
            onChange={handleChange}
          />
          <select
            name='venue'
            value={props.venue}

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

export default MachineCreate;