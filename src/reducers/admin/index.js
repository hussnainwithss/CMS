import { types } from "../../actions/admin";

const INITIAL_STATE = {
  users: [],
};

export const admin = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADMIN_GET_USERS_ATTEMPT:
      return {
        ...state,
      };
    case types.ADMIN_GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case types.ADMIN_GET_USERS_FAILED:
      return {
        ...state,
        users: [],
      };
    case types.ADMIN_ADD_USER_ATTEMPT:
      return {
        ...state,
      };
    case types.ADMIN_ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case types.ADMIN_ADD_USER_FAILED:
      return {
        ...state,
      };
    case types.ADMIN_EDIT_USER_ATTEMPT:
      return {
        ...state,
      };
    case types.ADMIN_EDIT_USER_SUCCESS:
      let userData = action.payload;
      let newUsers = state.users.map((user) => {
        if (user.id === userData.id) {
          return { ...userData };
        } else {
          return user;
        }
      });
      return {
        ...state,
        users: newUsers,
      };
    case types.ADMIN_EDIT_USER_FAILED:
      return {
        ...state,
      };
    case types.ADMIN_DELETE_USER_ATTEMPT:
      return {
        ...state,
      };
    case types.ADMIN_DELETE_USER_SUCCESS: {
      const userData = action.payload;
      const newUsers = state.users.filter((user) => user.id !== userData.id);
      return {
        ...state,
        users: newUsers,
      };
    }
    case types.ADMIN_DELETE_USER_FAILED:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};
