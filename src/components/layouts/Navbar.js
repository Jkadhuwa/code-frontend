import React from 'react';
import { Link } from 'react-router-dom';

const GuestUser = () => {
  return (
    <nav>
      <h3>
        <Link to={'/'}>Authors Haven</Link>
      </h3>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/create'}>Create</Link>
        </li>
        <li>
          <Link to={'/signin'}>Sign In</Link>
        </li>
        <li>
          <Link to={'/signup'}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

const LoggedIn = () => {
  return (
    <nav>
      <h3>
        <Link to={'/'}>Authors Haven</Link>
      </h3>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/create'}>Create</Link>
        </li>
        <li>
          <Link to={'/'}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

const Navbar = ({ loggedIn }) => {
  if (loggedIn) {
    return <LoggedIn />;
  }
  return <GuestUser />;
};

export default Navbar;
