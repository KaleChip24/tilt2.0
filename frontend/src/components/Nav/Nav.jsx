import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
  return (
    <nav>
      <div className='nav-container'>
        <Link className="logo" to='/'><h1>Tilt</h1></Link>
        <div className='nav-links'>
          <Link className="signIn" to='/signIn'>SignIn</Link>
          <Link className="signUp" to='/signUp'>SignUp</Link>
          <Link className="add-machine-link" to={`/machines/add-machine/`}>Add Machine</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
