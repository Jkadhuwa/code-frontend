import React from "react";
import { Link } from "react-router-dom";
import jwt from "jwt-decode";
const GuestUser = () => {
  return (
    <nav class="navbar navbar-default navbar-fixed-top" id="mNavbar">
      <h3>
        <Link to={"/"}>UniNet Blogs</Link>
      </h3>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/signin"}>Sign In</Link>
        </li>
        <li>
          <Link to={"/signup"}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

const LoggedIn = () => {
  return (
    <nav class="navbar navbar-default navbar-fixed-top" id="mNavbar">
      <h3>
        <Link to={"/"}>UniNet Blogs</Link>
      </h3>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/create"}>Create</Link>
        </li>
        <li>
          <Link to={"/logout"}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
};
const token = localStorage.getItem("token");
let isAuthenticated;
if (token) {
  isAuthenticated = true;
}
const Navbar = () => {
  if (isAuthenticated) {
    return <LoggedIn />;
  }
  return <GuestUser />;
};

export default Navbar;
