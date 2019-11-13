import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../../redux/actions/Auth";
import PropTypes from "prop-types";

import "../../css/Auth.scss";

class MainRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword
    } = this.state;
    if (
      !firstName ||
      !lastName ||
      !userName ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return toast.error("Please fill in all fields", {
        position: toast.POSITION.TOP_CENTER
      });
    } else if (password !== confirmPassword) {
      return toast.error("Password and Confirm Password must match", {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      this.props.register({
        firstName,
        lastName,
        userName,
        email,
        password,
        confirmPassword
      });
    }
  }

  render() {
    if (this.props.registered) {
      return <Redirect to={{ pathname: "/signin" }} />;
    }
    return (
      <div className="mt-5">
        <h3 className="text-center mt-5">UniNet Blogs</h3>
        <RegisterForm
          data={this.state}
          onChange={this.onChange.bind(this)}
          onSubmit={this.onSubmit.bind(this)}
        />

        <h6 className="row justify-content-center mt-5">
          * By signing up, you have agreed to our: <span>terms of use</span>
        </h6>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registered: state.auth.registered
});
const mapDispatchToProps = {
  register
};
MainRegister.propTypes = {
  register: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(MainRegister);
