import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className='nav-container'>
        <div className='nav-links'>
          <Link className="signIn" to='/signIn'>SignIn</Link>
          <Link className="signUp" to='/signUp'>SignUp</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
