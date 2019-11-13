import {
  CREATE_BLOG_SUCCESS,
  CREATE_BLOG_FAIL,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL
} from "../actions/constants";

const initialState = {};
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_BLOG_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case GET_BLOG_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case CREATE_BLOG_FAIL:
      return {
        ...state,
        ...payload
      };
    case GET_BLOG_FAIL:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
