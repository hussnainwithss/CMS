import { types } from "../../actions/auth";

const INITIAL_STATE = {
  user: {},
  token: {},
  isAuthenticated: false,
  error: "",
};

export const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN_ATTEMPT:
      return {
        ...state,
      };
    case types.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        error: "",
      };
    case types.AUTH_LOGIN_FAIL:
      return {
        ...state,
        user: {},
        token: {},
        isAuthenticated: false,
        error: action.payload.message,
      };
    case types.AUTH_LOGOUT_SUCCESS: {
      return {
        ...state,
        user: {},
        error: "",
        token: {},
        isGuestUser: true,
      };
    }
    case types.AUTH_LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload.message,
      };
    default:
      return {
        ...state,
      };
  }
};
