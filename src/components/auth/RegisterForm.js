import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = ({onChange, onSubmit, data}) => {

  return (
    <Fragment>
      <div className="text-header">
        <h1>Sign Up</h1>
        <p>
          Already have an account? <Link to={'/signin'}>Sign In</Link>
        </p>
      </div>
      <form className="form" onSubmit={onSubmit}>
        <div className="formGroup">
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            placeholder="First Name"
            onChange={onChange}
          />
        </div>
        <div className="formGroup">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={data.lastName}
            onChange={onChange}
          />
        </div>
        <div className="formGroup">
          <input
            name="text"
            type="username"
            placeholder="Username"
            value={data.username}
            onChange={ onChange}
          />
        </div>
        <div className="formGroup">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={onChange}
          />
        </div>
        <div className="formGroup">
          <input
            type="passoword"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={onChange}
          />
        </div>
        <div className="formGroup">
          <input
            type="passoword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={data.confirmPassword}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Sign Up" />
        <div className="vl"></div>
      </form>
    </Fragment>
  );
};

export default Register;
