import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
  return (
    <nav>
      <div className='nav-container'>
        <Link className="logo" to='/'><h1>Tilt</h1></Link>
        <ul className="nav-links">
          <li><Link className="signIn" to='/signIn'>SignIn</Link></li>
          {/* <Link className="signUp" to='/signUp'>SignUp</Link> */}
          <li><Link className="add-machine-link" to={`/machines/add-machine/`}>Add Machine</Link></li>
          <li><Link className="add-venue-link" to={`/venues/add-venue/`}>Add Venue</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
