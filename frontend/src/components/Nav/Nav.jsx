import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <navbar>
      <div className='nav-container'>
        <div className='nav-links'>
          <Link className="signIn" to='/signIn'>SignIn</Link>
          <Link className="signUp" to='/signUp'>SignUp</Link>
        </div>
      </div>
    </navbar>
  );
};

export default Nav;
