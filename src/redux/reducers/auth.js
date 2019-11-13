import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from "../actions/constants";

const initialState = {
  isAuthenticated: false,
  username: "",
  email: "",
  registered: false
};
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        payload,
        registered: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case REGISTER_FAIL:
      return {
        payload
      };
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        payload
      };
    default:
      return state;
  }
};
