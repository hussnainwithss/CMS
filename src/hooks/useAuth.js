import { actions } from "../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAuthenticatedFromState,
  selectLoggedInUserFromState,
  selectAccessTokenFromState,
} from "../selectors/auth";

export const useAuth = () => {
  const dispatch = useDispatch();

  const login = (values) => {
    console.log(values);
    dispatch(actions.loginAttempt(values));
    // console.log(useSelector((state) => selectAccessTokenFromState(state)));
  };

  return {
    login,
    isAuthenticated: useSelector((state) =>
      selectIsAuthenticatedFromState(state)
    ),
    user: useSelector((state) => selectLoggedInUserFromState(state)),
    token: useSelector((state) => selectAccessTokenFromState(state)),
  };
};
