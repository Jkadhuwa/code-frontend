import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import '../../css/Auth.scss';

export default class MainRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit(event) {
    event.preventDefault();
    
  };

  render() {
    return (
      <div className="main-container">
        <h3> Authors Haven</h3>
        <RegisterForm data={this.state}
          onChange={this.onChange.bind(this)}
        onSubmit={this.onSubmit.bind(this)} 
        />

        <h6>
          * By signing up, you have agreed to our: <span>terms of use</span>
        </h6>
      </div>
    );
  }
}
