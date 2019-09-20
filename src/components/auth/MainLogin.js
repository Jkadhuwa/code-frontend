import React, { Component } from 'react';
import LoginForm from './LoginForm';
import SocialForm from './SocialForm';
import '../../css/Auth.scss';

export default class MainLogin extends Component {
  render() {
    return (
    <div className="main-container">
    <h3> Authors Haven</h3>
    <LoginForm />;
    </div>
    )
  }
}
