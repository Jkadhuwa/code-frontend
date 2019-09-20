import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Auth.scss';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    console.log('Sucess');
  };
  return (
    <Fragment>
      <div className="text-header">
        <h1>Sign Up</h1>
        <p>
          Already have an account? <Link to={'/signup'}>Sign Up</Link>
        </p>
      </div>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="formGroup">
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="formGroup">
          <input
            type="passowrd"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
        <div className="vlogin"></div>
      </form>
    </Fragment>
  );
};

export default Login;
