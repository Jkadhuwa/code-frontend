import "@babel/polyfill";
import { config } from "dotenv";
import { toast } from "react-toastify";
import axios from "axios";
import {
  CREATE_BLOG_SUCCESS,
  CREATE_BLOG_FAIL,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL
} from "./constants";
config();

// Create Articles
export const createBlog = ({
  title,
  description,
  body,
  history
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    }
  };
  const formData = {
    title,
    description,
    body
  };

  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/articles/",
      formData,
      config
    );

    dispatch({
      type: CREATE_BLOG_SUCCESS,
      payload: res.data
    });
    window.location.assign("/");
  } catch (error) {
    toast.error(error.response.data.error, {
      position: toast.POSITION.TOP_CENTER
    });
    dispatch({ type: CREATE_BLOG_FAIL, payload: error.response.data.error });
  }
};

// Get all articles

export const getBlogs = () => async dispatch => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/v1/articles");

    dispatch({
      type: GET_BLOG_SUCCESS,
      payload: data
    });
  } catch (error) {
    toast.error(error.response.data.error, {
      position: toast.POSITION.TOP_CENTER
    });
    dispatch({ type: GET_BLOG_FAIL, payload: error.response.data.error });
  }
};
