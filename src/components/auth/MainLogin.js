import React, { Component } from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import PropTypes from "prop-types";
import { Container, Alert, Col } from "reactstrap";
import { login } from "../../redux/actions/Auth";
import "../../css/Auth.scss";

class MainLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();

    const { email, password } = this.state;
    const { login, auth } = this.props;
    if (!password || !email) {
      return toast.error("Please fill in all fields", {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      login({
        email,
        password
      });
    }
  }

  render() {
    if (this.props.isAuthenticated) {
      return (
        <Redirect to={{ pathname: "/", props: { isAuthenticated: true } }} />
      );
    }
    return (
      <Container>
        <div className="mt-5">
          <h3 className="text-center mt-5">UniNet Blogs</h3>
          <LoginForm
            data={this.state}
            onChange={this.onChange.bind(this)}
            onSubmit={this.onSubmit.bind(this)}
          />
        </div>
      </Container>
    );
  }
}

MainLogin.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapDispatchToProps = {
  login
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth
});
export default connect(mapStateToProps, mapDispatchToProps)(MainLogin);
