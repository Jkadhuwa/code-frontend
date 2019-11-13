import "@babel/polyfill";
import { config } from "dotenv";
import { toast } from "react-toastify";
import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from "./constants";
config();

export const register = ({
  firstName,
  lastName,
  userName,
  email,
  password,
  confirmPassword
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = {
    firstName,
    lastName,
    userName,
    email,
    password,
    confirmPassword
  };

  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/users/signup",
      body,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    toast.error(error.response.data.error, {
      position: toast.POSITION.TOP_CENTER
    });
    dispatch({ type: REGISTER_FAIL, payload: error.response.data.error });
  }
};

//Login action

export const login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = {
    email,
    password
  };

  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/users/login",
      body,
      config
    );
    
    localStorage.setItem("token", res.data.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    toast.error(error.response.data.error, {
      position: toast.POSITION.TOP_CENTER
    });
    dispatch({ type: LOGIN_FAIL, payload: err.response.data.error });
  }
};
