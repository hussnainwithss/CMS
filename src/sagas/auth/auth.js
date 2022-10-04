import { call, put } from "redux-saga/effects";
import storage from "redux-persist/lib/storage";

import { actions } from "../../actions/auth";
import { loginAPI } from "../../api/auth";
import { ROUTES } from "../../routes/constants";

export function* attemptLogin({
  payload: { values, navigate, setSubmitting },
}) {
  try {
    const resp = yield call(loginAPI, values);
    if (resp.data.isSuccessful) {
      const actionPayload = {
        token: {
          ...resp.data.data,
        },
        user: resp.data.data.user,
      };
      delete actionPayload.token.user;
      yield put(actions.loginSuccess(actionPayload));
      navigate(ROUTES.DASHBOARD);
    } else {
      throw Error();
    }
  } catch (error) {
    yield put(actions.loginFailure({ message: "Login Failed" }));
  }
  setSubmitting(false);
}

export function* attemptLogout({ payload: { navigate } }) {
  try {
    yield put(actions.logoutSuccess());
    storage.removeItem("persist:auth");
    navigate(ROUTES.LOGIN);
  } catch (error) {
    yield put(actions.logoutFailure({ message: "Logout Failed" }));
  }
}
